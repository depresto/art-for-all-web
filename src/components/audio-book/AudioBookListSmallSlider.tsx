import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { AudioBookBriefProps } from "../../hooks/audioBook";

SwiperCore.use([Navigation]);

const StyledAudioBookListSmallSliderWrapperDiv = styled.div`
  --swiper-navigation-size: 36px;
  .swiper-slide {
    position: relative;
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

  .background-image {
    width: 100%;
    padding-bottom: 76%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 12px;
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
const StyledAudioBookSmallIntroDiv = styled.div`
  letter-spacing: 0.1em;
  .title {
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
  .description {
    font-size: 12px;
    color: #303030;
  }
`;

const AudioBookListSmallSlider: React.FC<{
  audioBooks: AudioBookBriefProps[];
  categoryId: number;
}> = ({ audioBooks, categoryId }) => {
  const [activeAudioBookIndex, setActiveAudioBookIndex] = useState(0);
  const activeAudioBook = audioBooks[activeAudioBookIndex];

  return (
    <StyledAudioBookListSmallSliderWrapperDiv>
      <Swiper
        navigation={true}
        className="audio-book-list-slider"
        onSlideChange={(swiper) => setActiveAudioBookIndex(swiper.activeIndex)}
      >
        {audioBooks.map((audioBook) => (
          <SwiperSlide key={audioBook.id}>
            <Link href={`/audio-book/${categoryId}`} passHref>
              <a>
                <div
                  className="background-image"
                  style={{
                    backgroundImage: `url(${audioBook.featuredImageUrl})`,
                  }}
                ></div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledAudioBookSmallIntroDiv className="px-2 py-1">
        <Link href={`/audio-book/${categoryId}`} passHref>
          <a>
            <div className="title">{activeAudioBook?.title}</div>
            <div className="description">{activeAudioBook?.description}</div>
          </a>
        </Link>
      </StyledAudioBookSmallIntroDiv>
    </StyledAudioBookListSmallSliderWrapperDiv>
  );
};

export default AudioBookListSmallSlider;
