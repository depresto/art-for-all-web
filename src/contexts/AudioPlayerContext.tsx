import { CaretRightOutlined } from '@ant-design/icons'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Backward5Icon from '../assets/images/backward-5.svg'
import Forward5Icon from '../assets/images/forward-5.svg'
import PauseIcon from '../assets/images/pause.svg'
import PlayIcon from '../assets/images/play.svg'
import StopButton from '../assets/images/stop-button.svg'

export const StyledFixedBottomDiv = styled.div`
  width: 100%;
  max-width: 500px;
  position: fixed;
  bottom: 110px;
  z-index: 20;
  .player-wrapper {
    position: relative;
    background-color: #dadada;
    box-shadow: 0px -4px 6px rgb(0, 0, 0, 0.2);
  }
  .progress-bar {
    position: relative;
    height: 4px;
    background-color: white;
    cursor: pointer;

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background-color: #1f507f;
      pointer-events: none;
    }
  }
  .play-info {
    padding: 12px 12px 8px 12px;
  }
  .title-box {
    width: 100%;
    text-align: center;
    color: #000000;
    letter-spacing: 2px;
    font-size: 14px;
    padding-top: 20px;
  }
  .cover-image {
    height: 44px;
  }
  .title {
    color: #000000;
    letter-spacing: 2px;
    font-size: 13px;
    font-weight: bold;
  }
  .time-left {
    font-size: 12px;
  }
  .player-container {
    width: calc(100% - 50px);
  }
  .btn-cancel {
    width: 50px;
    font-size: 20px;
  }
  .player-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 20px;
    &.play-button {
      background-color: white;
      color: #1f507f;
      padding-left: 2px;
    }
    &.pause-button {
      background-color: #1f507f;
      color: white;
    }
  }
`
const StyledPlayerDiv = styled.div`
  width: 100%;
  height: 50px;
  background: #1f507f;
  border-radius: 15px;

  color: white;
  font-size: 36px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .btn {
    cursor: pointer;
  }

  .btn-stop {
    display: flex;
    svg {
      height: 24px;
      fill: white;
      path {
        fill: white !important;
      }
    }
  }

  .icon-custom {
    display: flex;
    svg {
      height: 32px;
      path {
        fill: white;
        stroke: none;
      }
    }
  }
`

export const formatPlayerTime = (totalSecond: number) => {
  const second = Math.floor(totalSecond % 60)
  const minute = Math.floor(totalSecond / 60)
  const hour = Math.floor(totalSecond / 3600)
  return {
    second,
    minute,
    hour,
  }
}

export type AudioPlaylistProps = {
  id: number
  title: string
  audioUrl: string
  audioCoverImageUrl: string
}

type AudioPlayerContextProps = {
  isPlaying: boolean
  isPlayerShown: boolean
  currentAudio: AudioPlaylistProps | null
  audioPlaylist: AudioPlaylistProps[]
  currentSeconds: number
  duration: number
  playerRef?: ReactPlayer | null
  setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>
  setIsPlayerShown?: React.Dispatch<React.SetStateAction<boolean>>
  setAudio?: (audio: AudioPlaylistProps | null) => void
  setAudioCoverImageUrl?: React.Dispatch<React.SetStateAction<string | null>>
  setAudioPlaylist?: React.Dispatch<React.SetStateAction<AudioPlaylistProps[]>>
  setDuration?: React.Dispatch<React.SetStateAction<number>>
  setCurrentSeconds?: React.Dispatch<React.SetStateAction<number>>
}

const defaultPlayerContext = {
  isPlaying: false,
  isPlayerShown: false,
  currentAudio: null,
  audioPlaylist: [],
  currentSeconds: 0,
  duration: 0,
}

const AudioPlayerContext = React.createContext<AudioPlayerContextProps>(defaultPlayerContext)

export const AudioPlayerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [playerRef, setPlayerRef] = useState<ReactPlayer | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isPlayerShown, setIsPlayerShown] = useState(false)
  const [currentAudio, setCurrentAudio] = useState<AudioPlaylistProps | null>(null)
  const [audioPlaylist, setAudioPlaylist] = useState<AudioPlaylistProps[]>([])

  const [duration, setDuration] = useState(0)
  const [currentSeconds, setCurrentSeconds] = useState(0)

  const setAudio = useCallback((audio: AudioPlaylistProps | null) => {
    setCurrentAudio(audio)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      setIsPlayerShown(true)
      setHasPlayed(true)
    }
  }, [isPlaying])

  useEffect(() => {
    if (!isPlayerShown) {
      setIsPlaying(false)
    }
  }, [isPlayerShown])

  const onProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const width = (event.target as HTMLDivElement).clientWidth
    const rect = (event.target as HTMLDivElement).getBoundingClientRect()
    const x = event.clientX - rect.left

    playerRef?.seekTo((duration * x) / width)
  }

  const formattedRemainingPlayTime = formatPlayerTime(duration - currentSeconds)

  return (
    <AudioPlayerContext.Provider
      value={{
        playerRef,
        isPlaying,
        isPlayerShown,
        currentAudio,
        audioPlaylist,
        currentSeconds,
        duration,
        setIsPlaying,
        setIsPlayerShown,
        setAudio,
        setAudioPlaylist,
        setCurrentSeconds,
        setDuration,
      }}
    >
      {children}
      {isPlayerShown ? (
        <StyledFixedBottomDiv>
          <div className="player-wrapper">
            {hasPlayed && (
              <div className="progress-bar" onClick={onProgressBarClick}>
                <div className="progress" style={{ width: `${(currentSeconds / duration) * 100}%` }}></div>
              </div>
            )}

            <div className="d-flex align-items-start play-info">
              <div>
                {currentAudio?.audioCoverImageUrl && (
                  <img className="cover-image" src={currentAudio.audioCoverImageUrl} alt="" />
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center flex-grow-1 ml-2">
                <div className="d-flex flex-column">
                  <div className="title">{currentAudio?.title}</div>

                  <div className="time-left">
                    <span className="mr-1">剩餘時間</span>
                    {formattedRemainingPlayTime.hour > 0 && (
                      <span className="mr-1">{formattedRemainingPlayTime.hour}時</span>
                    )}
                    {formattedRemainingPlayTime.minute > 0 && (
                      <span className="mr-1">{formattedRemainingPlayTime.minute}分</span>
                    )}
                    <span>{formattedRemainingPlayTime.second}秒</span>
                  </div>
                </div>

                <div className="d-flex">
                  {hasPlayed && (
                    <>
                      <div
                        className="player-button mx-1"
                        onClick={() => {
                          const previousSecond = currentSeconds - 5 <= 0 ? 0 : currentSeconds - 5
                          setCurrentSeconds?.(previousSecond)
                          playerRef?.seekTo(previousSecond)
                        }}
                      >
                        <Backward5Icon />
                      </div>

                      <div
                        className="player-button mx-1"
                        onClick={() => {
                          const previousSecond = currentSeconds + 5 >= duration ? duration : currentSeconds + 5
                          setCurrentSeconds?.(previousSecond)
                          playerRef?.seekTo(previousSecond)
                        }}
                      >
                        <Forward5Icon />
                      </div>
                    </>
                  )}

                  <div className="mx-1">
                    {isPlaying ? (
                      <div className="pause-button player-button" onClick={() => setIsPlaying(false)}>
                        <PauseIcon />
                      </div>
                    ) : (
                      <div className="play-button player-button" onClick={() => setIsPlaying(true)}>
                        <PlayIcon />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {currentAudio?.audioUrl && (
              <ReactPlayer
                ref={setPlayerRef}
                url={currentAudio.audioUrl}
                playing={isPlaying}
                onEnded={() => {
                  if (audioPlaylist.length > 0) {
                    const [audio, ...rest] = audioPlaylist
                    if (audio) {
                      setCurrentAudio(audio)
                    }
                    setAudioPlaylist(rest)
                  } else {
                    setIsPlaying(false)
                  }
                }}
                onDuration={duration => {
                  setDuration(duration)
                  setCurrentSeconds(0)
                }}
                onProgress={({ playedSeconds }) => {
                  setCurrentSeconds(playedSeconds)
                }}
                onPause={() => {
                  const currentTime = playerRef?.getCurrentTime()
                  if (currentTime !== duration) {
                    setIsPlaying(false)
                  }
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
        </StyledFixedBottomDiv>
      ) : null}
    </AudioPlayerContext.Provider>
  )
}

export const useAudioPlayer = () => useContext(AudioPlayerContext)

export const AudioPlayer: React.FC = () => {
  const { playerRef, isPlaying, currentSeconds, duration, setCurrentSeconds, setIsPlaying } = useAudioPlayer()
  return (
    <StyledPlayerDiv>
      <div
        className="btn player-btn icon-custom"
        onClick={() => {
          const previousSecond = currentSeconds - 5 <= 0 ? 0 : currentSeconds - 5
          setCurrentSeconds?.(previousSecond)
          playerRef?.seekTo(previousSecond)
        }}
      >
        <Backward5Icon />
      </div>
      {isPlaying ? (
        <div
          className="btn player-btn btn-stop"
          onClick={() => {
            setIsPlaying?.(false)
          }}
        >
          <StopButton />
        </div>
      ) : (
        <div className="btn player-btn btn-play" onClick={() => setIsPlaying?.(true)}>
          <CaretRightOutlined />
        </div>
      )}
      <div
        className="btn player-btn icon-custom"
        onClick={() => {
          const previousSecond = currentSeconds + 5 >= duration ? duration : currentSeconds + 5
          setCurrentSeconds?.(previousSecond)
          playerRef?.seekTo(previousSecond)
        }}
      >
        <Forward5Icon />
      </div>
    </StyledPlayerDiv>
  )
}
