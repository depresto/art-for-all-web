import { Breadcrumb } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TextImg from '../../assets/images/text.svg'
import VoiceImg from '../../assets/images/voice.svg'
import { AudioPlayer } from '../../contexts/AudioPlayerContext'
import { ArtworkProps } from '../../hooks/artwork'
import { StyledSlider } from '../common'
import ArtworkCarousel from './ArtworkCarousel'

type FontSizeProps = { size?: 'default' | 'small' | 'large' }

const StyledTitle = styled.h3<FontSizeProps>`
  margin: 0;
  font-size: ${props => (props.size === 'small' ? 16 : props.size === 'large' ? 24 : 20)}px;
  letter-spacing: 1px;
`
const StyledExhibitionContent = styled.div<FontSizeProps>`
  margin: 20px auto;
  font-size: ${props => (props.size === 'small' ? 16 : props.size === 'large' ? 24 : 20)}px;
`
const StyledExhibitionContentPre = styled(StyledExhibitionContent)<FontSizeProps>`
  white-space: pre-wrap;
  font-size: ${props => (props.size === 'small' ? 16 : props.size === 'large' ? 24 : 20)}px;
`

const StyledSliderWrapper = styled.div`
  background-color: #1e5285;
  padding: 10px 20px;
  border-radius: 30px;
`
const StyledExhibitionSlider = styled(StyledSlider)`
  .ant-slider-rail,
  .ant-slider-track {
    background-color: white;
  }
`

const ArtworkSection: React.FC<{ artwork: ArtworkProps; onRefetch?: () => void }> = ({ artwork, onRefetch }) => {
  const [contentFontSize, setContentFontSize] = useState(2)
  const size = contentFontSize === 1 ? 'small' : contentFontSize === 3 ? 'large' : 'default'

  const sliderOnChange = (value: number) => {
    setContentFontSize(value)
  }

  return (
    <>
      <Breadcrumb className="px-4 py-4" separator=">">
        <Breadcrumb.Item>
          <Link to="/">首頁</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/exhibitions">展覽</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {artwork.exhibitionIds.length > 0 ? (
            <Link to={`/exhibition/${artwork.exhibitionIds[0]}`}>作品列表</Link>
          ) : (
            '作品列表'
          )}
        </Breadcrumb.Item>
        <Breadcrumb.Item>作品賞析</Breadcrumb.Item>
      </Breadcrumb>

      {artwork.imageUrls && <ArtworkCarousel imageUrls={artwork.imageUrls} />}

      <div className="px-4">
        <div className="d-flex align-items-center mb-3">
          <img src={VoiceImg} className="mr-2" alt="" />
          <StyledTitle size={size}>聽口述影像</StyledTitle>
        </div>
        <div className="mb-4">
          <AudioPlayer />
        </div>

        <div className="d-flex align-items-center mb-3">
          <img src={TextImg} className="mr-2" alt="" />
          <StyledTitle size={size}>文字放大</StyledTitle>
        </div>
        <div className="mb-4">
          <StyledSliderWrapper>
            <StyledExhibitionSlider
              min={1}
              max={3}
              onChange={sliderOnChange}
              dots
              tooltipVisible={false}
              defaultValue={contentFontSize}
            ></StyledExhibitionSlider>
          </StyledSliderWrapper>
        </div>

        <div>
          <StyledTitle size={size} className="mb-3">
            作品介紹：
          </StyledTitle>

          <StyledExhibitionContent size={size}>
            {artwork.creator && (
              <div>
                <strong>作者</strong>：{artwork.creator.name}
              </div>
            )}
            {artwork.name && (
              <div>
                <strong>作品名稱</strong>：{artwork.name}
              </div>
            )}
            {artwork.years && (
              <div>
                <strong>年代</strong>：{artwork.years}
              </div>
            )}
            {artwork.material && (
              <div>
                <strong>媒材</strong>：{artwork.material}
              </div>
            )}
            {artwork.sizing && (
              <div>
                <strong>尺寸</strong>：{artwork.sizing}
              </div>
            )}
          </StyledExhibitionContent>

          <StyledTitle size={size} className="mb-3">
            創作說明：
          </StyledTitle>
          <StyledExhibitionContentPre size={size}>{artwork.description}</StyledExhibitionContentPre>
        </div>
      </div>
    </>
  )
}

export default ArtworkSection
