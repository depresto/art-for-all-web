import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Col, Row, Skeleton } from 'antd'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import CompressIcon from '../../../../assets/images/compress.svg'
import ExpandIcon from '../../../../assets/images/expand.svg'
import { StyledLayout, StyledLayoutContent } from '../../../../components/layouts/DefaultLayout'
import { formatPlayerTime } from '../../../../contexts/AudioPlayerContext'
import { useAudioBook } from '../../../../hooks/audioBook'

type FontSizeType = 'small' | 'medium' | 'large'

const StyledMenuBtn = styled.div`
  width: 40px;
  height: 40px;

  background: #1e5285;
  border: 2px solid #1e5285;
  box-sizing: border-box;
  border-radius: 10px;

  color: #fff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
`
const StyledRow = styled(Row)`
  padding: 20px;
`
const StyledTitleCol = styled(Col)`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.16em;

  color: #1e5285;

  padding: 2px 0;
`

const Header: React.FC<{
  title: string
  onClose?: () => void
}> = ({ title, onClose }) => {
  return (
    <header style={{ width: '100%', background: '#fff' }}>
      <StyledRow>
        <Col span={4}>
          <StyledMenuBtn onClick={onClose}>
            <CloseOutlined />
          </StyledMenuBtn>
        </Col>
        <StyledTitleCol span={16}>{title}</StyledTitleCol>
      </StyledRow>
    </header>
  )
}

const StyledAudioBookRecorderDiv = styled.div<{ isFullSize?: boolean; isRecorded?: boolean; fontSize?: FontSizeType }>`
  background-color: ${props => (props.isFullSize ? '#1e5285' : 'white')};

  .audio-book-title-block {
    background: #153759;
    color: white;
    font-weight: bold;
  }
  .record-text-container {
    background: #1e5285;
  }
  .ant-btn {
    border: none;
  }
  .text-size-btn {
    color: white;
    font-weight: bold;
    line-height: 1;
    &.text-size-small {
      font-size: 0.6em;
    }
    &.text-size-medium {
      font-size: 1.1em;
      height: 36px;
    }
    &.text-size-large {
      font-size: 1.4em;
      height: 40px;
    }
  }
  .expand-btn {
    cursor: pointer;
  }
  .text-box {
    background-color: white;
    overflow-y: scroll;
    font-size: ${props => (props.fontSize === 'small' ? 16 : props.fontSize === 'medium' ? 18 : 22)}px;
    letter-spacing: 0.1em;
    height: ${props =>
      props.isRecorded
        ? props.isFullSize
          ? 'calc(100vh - 340px)'
          : 'calc(100vh - 420px)'
        : props.isFullSize
        ? 'calc(100vh - 310px)'
        : 'calc(100vh - 390px)'};
  }

  .recorder-container {
    color: ${props => (props.isFullSize ? 'white' : 'black')};
    .operation-btn {
      width: 60px;
      text-align: center;
      font-size: ${props => (props.fontSize === 'small' ? 16 : props.fontSize === 'medium' ? 18 : 22)}px;
      cursor: pointer;
    }
  }

  .progress-bar {
    height: 6px;
    width: 100%;
    background-color: #b1b1b1;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: ${props => (props.isFullSize ? 'white' : '#1e5285')};
      pointer-events: none;
    }
  }
  .progress-bar-time {
    color: #b1b1b1;
  }

  .current-second-tag {
    color: ${props => (props.isFullSize ? 'white' : '#1e5285')};
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 0.1em;
  }
`

const StyledRecordingButton = styled.button<{ isRecording?: boolean; fontSize?: FontSizeType }>`
  background-color: ${props => (props.isRecording ? '#f29ea6' : '#9cce86')};
  padding: 8px 24px;
  border-radius: ${props => (props.fontSize === 'small' ? 24 : props.fontSize === 'medium' ? 26 : 28)}px;
  color: white;
  border: 0;
  font-size: ${props => (props.fontSize === 'small' ? 18 : props.fontSize === 'medium' ? 22 : 26)}px;
  cursor: pointer;
`

type RecordAudioProps = {
  start: () => void
  stop: () => Promise<{
    audioBlob: Blob
    audioUrl: string
  }>
}
const recordAudio = () => {
  return new Promise<RecordAudioProps>(resolve => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream)
      const audioChunks: Blob[] = []

      mediaRecorder.addEventListener('dataavailable', event => {
        audioChunks.push(event.data)
      })

      const start = () => {
        mediaRecorder.start()
      }

      const stop = () => {
        return new Promise<{ audioBlob: Blob; audioUrl: string }>(resolve => {
          mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' })
            const audioUrl = URL.createObjectURL(audioBlob)

            resolve({ audioBlob, audioUrl })
          })

          mediaRecorder.stop()
          mediaRecorder.stream.getTracks().forEach(track => {
            track.stop()
          })
        })
      }

      resolve({ start, stop })
    })
  })
}

const AudioBookRecorderPage: React.FC = () => {
  const router = useRouter()
  const bookId = router.query.bookId as string
  const categoryId = router.query.categoryId as string
  const { loadingAudioBook, audioBook } = useAudioBook(parseInt(bookId))

  const [player, setPlayer] = useState<ReactPlayer | null>(null)
  const [recorder, setRecorder] = useState<RecordAudioProps | undefined>()
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const isRecorded = Boolean(audioUrl)

  const [isFullSize, setIsFullSize] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [fontSize, setFontSize] = useState<FontSizeType>('medium')
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const formattedRecordingSeconds = formatPlayerTime(recordingSeconds)

  const [currentSeconds, setCurrentSeconds] = useState(0)
  const formattedCurrentSeconds = formatPlayerTime(currentSeconds)

  const audioBookPath = `/audio-book/${categoryId}/${bookId}`

  useEffect(() => {
    let timeInterval: number | undefined
    if (isRecording) {
      timeInterval = window.setInterval(() => {
        setRecordingSeconds(recordingSeconds => recordingSeconds + 1)
      }, 1000)
    }

    return () => {
      if (timeInterval) {
        clearInterval(timeInterval)
        timeInterval = undefined
        setAudioUrl(null)
      }
    }
  }, [isRecording])

  const onClickRecordingButton = async () => {
    if (isRecorded) {
      setIsPlaying(isPlaying => !isPlaying)
    } else {
      if (isRecording) {
        if (recorder) {
          recorder.stop().then(({ audioUrl }) => {
            setAudioUrl(audioUrl)
          })
        }
        setIsRecording(false)
      } else {
        const recorder = await recordAudio()
        recorder.start()
        setRecorder(recorder)
        setIsRecording(true)
      }
    }
  }

  const onProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const width = (event.target as HTMLDivElement).clientWidth
    const rect = (event.target as HTMLDivElement).getBoundingClientRect()
    const x = event.clientX - rect.left

    player?.seekTo((recordingSeconds * x) / width)
  }

  const onCancel = () => {
    if (isRecorded) {
      setAudioUrl(null)
      setRecordingSeconds(0)
    } else {
      if (window.confirm('確定取消錄音？')) {
        router.push(audioBookPath)
      }
    }
  }

  return (
    <StyledLayout>
      <StyledLayoutContent className="d-flex flex-column">
        {!isFullSize && <Header title="故事內文" onClose={() => router.push(audioBookPath)} />}
        <Skeleton loading={loadingAudioBook}>
          {audioBook && (
            <StyledAudioBookRecorderDiv
              isFullSize={isFullSize}
              isRecorded={isRecorded}
              fontSize={fontSize}
              className="d-flex flex-column flex-grow-1"
            >
              <div className="d-flex flex-column justify-content-between flex-grow-1">
                <div>
                  <div className="audio-book-title-block py-2 px-4">{audioBook.title}</div>

                  <div className="record-text-container px-3 pb-3">
                    <div className="d-flex justify-content-between py-3">
                      <div className="d-flex align-items-center">
                        <Button icon={<SearchOutlined />} className="mr-2"></Button>
                        <Button
                          className="text-size-btn text-size-small"
                          type="text"
                          onClick={() => setFontSize('small')}
                        >
                          小
                        </Button>
                        <Button
                          className="text-size-btn text-size-medium"
                          type="text"
                          onClick={() => setFontSize('medium')}
                        >
                          中
                        </Button>
                        <Button
                          className="text-size-btn text-size-large"
                          type="text"
                          onClick={() => setFontSize('large')}
                        >
                          大
                        </Button>
                      </div>

                      <div className="d-flex align-items-center">
                        <div className="expand-btn" onClick={() => setIsFullSize(isFullSize => !isFullSize)}>
                          {isFullSize ? <CompressIcon /> : <ExpandIcon />}
                        </div>
                      </div>
                    </div>

                    <div className="text-box px-3 py-2">{audioBook.content}</div>
                  </div>
                </div>

                <div className="recorder-container px-4 pt-3 pb-4">
                  <div className="d-flex justify-content-center">
                    {isRecorded ? (
                      <div className="current-second-tag">
                        <span>{formattedCurrentSeconds.hour > 0 ? `${formattedCurrentSeconds.hour}:` : ''}</span>
                        <span>{formattedCurrentSeconds.minute}</span>
                        <span>:</span>
                        <span>{formattedCurrentSeconds.second.toString().padStart(2, '0')}</span>
                      </div>
                    ) : (
                      <div className="current-second-tag">
                        <span>{formattedRecordingSeconds.hour > 0 ? `${formattedRecordingSeconds.hour}:` : ''}</span>
                        <span>{formattedRecordingSeconds.minute}</span>
                        <span>:</span>
                        <span>{formattedRecordingSeconds.second.toString().padStart(2, '0')}</span>
                      </div>
                    )}
                  </div>

                  {isRecorded && (
                    <div>
                      <div className="progress-bar" onClick={onProgressBarClick}>
                        <div
                          className="progress"
                          style={{ width: `${(currentSeconds / recordingSeconds) * 100}%` }}
                        ></div>
                      </div>

                      <div className="d-flex justify-content-between mt-1 progress-bar-time">
                        <div>
                          <span>{formattedCurrentSeconds.hour > 0 ? `${formattedCurrentSeconds.hour}:` : ''}</span>
                          <span>{formattedCurrentSeconds.minute}</span>
                          <span>:</span>
                          <span>{formattedCurrentSeconds.second.toString().padStart(2, '0')}</span>
                        </div>

                        <div>
                          <span>{formattedRecordingSeconds.hour > 0 ? `${formattedRecordingSeconds.hour}:` : ''}</span>
                          <span>{formattedRecordingSeconds.minute}</span>
                          <span>:</span>
                          <span>{formattedRecordingSeconds.second.toString().padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div className="operation-btn" onClick={onCancel}>
                      取消
                    </div>

                    <StyledRecordingButton
                      onClick={onClickRecordingButton}
                      isRecording={isRecording}
                      fontSize={fontSize}
                    >
                      {isRecorded ? (
                        isPlaying ? (
                          <span>結束播放</span>
                        ) : (
                          <span>開始播放</span>
                        )
                      ) : isRecording ? (
                        <span>結束錄音</span>
                      ) : (
                        <span>開始錄音</span>
                      )}
                    </StyledRecordingButton>

                    {!isRecorded ? <div className="operation-btn">完成</div> : <div className="operation-btn"></div>}
                  </div>
                </div>

                {audioUrl && (
                  <ReactPlayer
                    ref={setPlayer}
                    url={audioUrl}
                    playing={isPlaying}
                    onEnded={() => {
                      setIsPlaying(false)
                    }}
                    onDuration={duration => {
                      if (duration !== Infinity) {
                        setRecordingSeconds(duration)
                      }
                      setCurrentSeconds(0)
                    }}
                    onProgress={({ playedSeconds }) => {
                      setCurrentSeconds(playedSeconds)
                    }}
                    onPause={() => {
                      setIsPlaying(false)
                    }}
                    onPlay={() => setIsPlaying(true)}
                    height={0}
                    width={0}
                    config={{
                      file: { forceAudio: true },
                    }}
                  />
                )}
              </div>
            </StyledAudioBookRecorderDiv>
          )}
        </Skeleton>
      </StyledLayoutContent>
    </StyledLayout>
  )
}

export default AudioBookRecorderPage
