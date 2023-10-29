import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import SwiperCore from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AudioBookBriefProps } from '../../hooks/audioBook'

SwiperCore.use([Navigation])

const StyledAudioBookListSliderWrapperDiv = styled.div`
  .swiper-slide {
    border-radius: 12px;
    overflow: hidden;
    position: relative;

    .background-image {
      width: 100%;
      padding-bottom: 76%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .caption-title {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 18px 20px 20px 20px;
      background-color: rgba(63, 63, 63, 0.8);
      color: white;
      font-size: 14px;
      letter-spacing: 0.1em;

      .caption-text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    border-radius: 50%;
    width: calc(var(--swiper-navigation-size));
    background: rgba(196, 196, 196, 0.8);
    box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.7);
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: calc(var(--swiper-navigation-size) * 0.4);
    color: white;
    font-weight: bold;
  }
`
const AudioBookListSlider: React.FC<{
  audioBooks: AudioBookBriefProps[]
  categoryId: number
}> = ({ audioBooks, categoryId }) => {
  return (
    <StyledAudioBookListSliderWrapperDiv>
      <Swiper navigation={true} className="audio-book-list-slider" loop>
        {audioBooks.map(audioBook => (
          <SwiperSlide key={audioBook.id}>
            <Link href={`/audio-book/${categoryId}`} passHref>
              <a>
                <div>
                  <div
                    className="background-image"
                    style={{
                      backgroundImage: `url(${audioBook.featuredImageUrl})`,
                    }}
                  ></div>
                  <div className="caption-title">
                    <div className="caption-text">{audioBook.description}</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledAudioBookListSliderWrapperDiv>
  )
}

export default AudioBookListSlider
