import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";

type CarouselProps = {
  slides: {
    image: string;
    title: string;
    caption: string;
  }[];
};

export const StyledCarousel = styled(Carousel)`
  .slick-slide {
    overflow: hidden;
  }
  .slick-dots {
    li {
      button {
        background: #c4c4c4;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      &.slick-active {
        width: 16px;
        button {
          background: #1e5285;
        }
      }
    }
  }
`;
export const StyledCarouselImage = styled.img`
  width: 100%;
`;
const StyledCarouselBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  height: 30vh;
  padding-bottom: 30px;
  background: #fff;
`;
const StyledCarouselTitle = styled.h1`
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  line-height: 25px;
  letter-spacing: 0.12em;
`;
const StyledCarouselCaption = styled.p`
  width: 80%;
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.12em;
  color: #000000;
  text-align: center;
`;

const WelcomeCarousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <StyledCarousel>
      {slides.map((slide, index) => (
        <div key={index}>
          <StyledCarouselImage src={slide.image} alt={slide.title} />
          <StyledCarouselBlock>
            <StyledCarouselTitle>{slide.title}</StyledCarouselTitle>
            <StyledCarouselCaption>{slide.caption}</StyledCarouselCaption>
          </StyledCarouselBlock>
        </div>
      ))}
    </StyledCarousel>
  );
};

export default WelcomeCarousel;
