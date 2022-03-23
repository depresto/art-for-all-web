import { Modal } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import ZoomInSvg from '../../assets/images/zoom-in.svg'
import { StyledCarousel, StyledCarouselImage } from '../welcome/WelcomeCarousel'

const StyledArtworkCarousel = styled(StyledCarousel)`
  .slick-dots {
    margin-top: 30px;
    position: relative;
  }
`

const StyledRelativeDiv = styled.div`
  position: relative;
`
const StyledZoomInIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const StyledModalImage = styled.img`
  width: 100%;
`
const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 20px 10px;
  }
  .ant-modal-footer {
    display: none;
  }
`

const ArtworkCarousel: React.FC<{ imageUrls?: string[] }> = ({ imageUrls }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const showModal = (imageUrl: string) => {
    setModalVisible(true)
    setModalImage(imageUrl)
  }

  return (
    <>
      <StyledArtworkCarousel>
        {imageUrls?.map((imageUrl, index) => (
          <StyledRelativeDiv key={index} onClick={() => showModal(imageUrl)}>
            <StyledCarouselImage src={imageUrl} />

            <StyledZoomInIconWrapper>
              <img src={ZoomInSvg} alt="放大圖片" />
            </StyledZoomInIconWrapper>
          </StyledRelativeDiv>
        ))}
      </StyledArtworkCarousel>

      <StyledModal
        closable={false}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <StyledModalImage src={modalImage} />
      </StyledModal>
    </>
  )
}

export default ArtworkCarousel
