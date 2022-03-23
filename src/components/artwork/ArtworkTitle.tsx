import React from 'react'
import styled from 'styled-components'
import SavedOutlinedImg from '../../assets/images/SavedOutlined.svg'
import SavedSolidImg from '../../assets/images/SavedSolid.svg'
import VoiceImg from '../../assets/images/voice.png'
import { useAudioPlayer } from '../../contexts/AudioPlayerContext'
import { StyledTitleDiv, StyledTitleTextDiv } from '../common/TitleBlock'

export type ArtworkTitleProps = {
  title: string
  saved: boolean
  audioUrl?: string | null
  onCollect?: () => void
}

const StyledVoiceDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  img {
    width: 25px;
  }
`

const ArtworkTitle: React.FC<ArtworkTitleProps> = ({ title, saved, audioUrl, onCollect }) => {
  const { setIsPlaying } = useAudioPlayer()

  return (
    <>
      <StyledTitleDiv>
        {saved ? (
          <SavedSolidImg className="vertical-align-middle" onClick={onCollect} />
        ) : (
          <SavedOutlinedImg className="vertical-align-middle" onClick={onCollect} />
        )}
        <StyledTitleTextDiv>{title}</StyledTitleTextDiv>

        {audioUrl && (
          <StyledVoiceDiv onClick={() => setIsPlaying?.(true)}>
            <img src={VoiceImg.src} alt="唸給你聽" />
          </StyledVoiceDiv>
        )}
      </StyledTitleDiv>
    </>
  )
}

export default ArtworkTitle
