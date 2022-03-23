import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import PlayerImg from '../../assets/images/player.png'

export type ArtworkTitleProps = {
  audioUrl: string | null
  isPlaying?: boolean
  isShow?: boolean
}

const StyledPlayerImg = styled.img`
  width: 80%;
  margin: 5px 10% 10px 10%;
  text-align: center;
`

const AudioPlayer: React.FC<ArtworkTitleProps> = ({ audioUrl, isPlaying = true, isShow = false }) => {
  if (audioUrl !== '' && audioUrl !== null) {
    return (
      <>
        {(audioUrl || isShow) && (
          <ReactPlayer url={audioUrl} playing={isPlaying} controls={true} height={'50px'} width={'100%'} />
        )}
      </>
    )
  } else {
    return <>{(audioUrl || isShow) && <StyledPlayerImg {...PlayerImg} />}</>
  }
}

export default AudioPlayer
