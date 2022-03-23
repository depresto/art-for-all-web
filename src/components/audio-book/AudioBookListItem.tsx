import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import VoiceWhiteImg from '../../assets/images/voice-white.svg'
import { AudioBookBriefProps } from '../../hooks/audioBook'

const StyledImageWrapper = styled.div`
  position: relative;
  .icon {
    position: absolute;
    bottom: 8px;
    left: 8px;
    width: 34px;
    height: 34px;
    padding: 8px;
    background: rgba(63, 63, 63, 0.8);
    border-radius: 50%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
const StyledImageBg = styled.div<{ bgUrl: string; margin: boolean }>`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${props => props.bgUrl});
  transition: height 0.5s;

  ${props => props.margin && 'margin-bottom: 10px;'}
`
const StyledArtworkTitleWrapper = styled.div`
  display: flex;
  .grow {
    flex: 1;
  }
`
const StyledArtworkTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
`

const AudioBookListItem: React.FC<{
  categoryId: number
  audioBook: AudioBookBriefProps
}> = ({ categoryId, audioBook }) => {
  const audioBookName = audioBook.title
  const audioBookPath = `/audio-book/${categoryId}/${audioBook.id}`
  const audioBookImageUrl = audioBook.featuredImageUrl || ''

  return (
    <div className="mb-4">
      <StyledArtworkTitleWrapper className="py-2">
        <div className="grow">
          <Link href={audioBookPath} passHref>
            <a className="d-block">
              <StyledArtworkTitle>{audioBookName}</StyledArtworkTitle>
            </a>
          </Link>
        </div>
      </StyledArtworkTitleWrapper>

      <Link href={audioBookPath} passHref>
        <a className="d-block">
          <StyledImageWrapper>
            <StyledImageBg bgUrl={audioBookImageUrl} margin={false} title={`這是一張圖片，作品名稱 ${audioBookName}`} />
            <div className="icon">
              <VoiceWhiteImg />
            </div>
          </StyledImageWrapper>
        </a>
      </Link>
    </div>
  )
}

export default AudioBookListItem
