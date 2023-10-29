import { Col, Row } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import AudioBookImg from '../../assets/images/audio-book.png'
import CurationImg from '../../assets/images/curation.png'
import HomeImg from '../../assets/images/home.png'
import SavedSolidImg from '../../assets/images/SavedSolid.svg'
import { useAudioPlayer } from '../../contexts/AudioPlayerContext'
import { useAuth } from '../../contexts/AuthContext'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`

const StyleNavFooterHr = styled.hr`
  border: none;
  border-top: 3px solid #ffb53c;
`
const StyledNavFooterTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.8;
  color: #000;
  margin-bottom: 0;
`
const StyledNavFooterLink = styled.a<{ bold?: boolean }>`
  font-size: 14px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  line-height: 1.8;
  color: #000;
`

const StyledNavBottomImgWrapper = styled.div`
  display: block;
  height: 36px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  img,
  svg {
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }
`
const StyledBottomNavLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.16em;
  text-indent: 0.32em;
  display: block;

  background: #f3f3f3;
  color: #000;

  padding-bottom: 20px;
  padding-top: 20px;
`
const StyledFooterNavDiv = styled.div<{ isPlayerShown?: boolean }>`
  padding-bottom: ${props => (props.isPlayerShown ? 180 : 120)}px;
`
const FooterNav: React.FC = () => {
  const { isPlayerShown } = useAudioPlayer()

  return (
    <StyledFooterNavDiv isPlayerShown={isPlayerShown}>
      <div className="px-3 pb-2">
        <StyleNavFooterHr />
      </div>

      <Row className="py-4">
        <Col span={8}>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <StyledNavFooterTitle>首頁</StyledNavFooterTitle>
              <StyledNavFooterLink href="/about">關於我們</StyledNavFooterLink>
              <StyledNavFooterLink href="/#recent">最新策展</StyledNavFooterLink>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <StyledNavFooterTitle>展覽</StyledNavFooterTitle>
              <StyledNavFooterLink href="/exhibitions">展覽列表</StyledNavFooterLink>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <StyledNavFooterTitle>收藏</StyledNavFooterTitle>
              <StyledNavFooterLink href="/collection/mine">我的收藏</StyledNavFooterLink>
            </div>
          </div>
        </Col>
      </Row>
    </StyledFooterNavDiv>
  )
}

const ButtonNav: React.FC = () => {
  const { currentMemberId } = useAuth()

  return (
    <Row>
      <Col span={6}>
        <Link href="/exhibitions" passHref legacyBehavior>
          <StyledBottomNavLink>
            <StyledNavBottomImgWrapper>
              <Image {...HomeImg} alt="首頁" />
            </StyledNavBottomImgWrapper>
            <div>首頁</div>
          </StyledBottomNavLink>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/exhibitions" passHref legacyBehavior>
          <StyledBottomNavLink>
            <StyledNavBottomImgWrapper>
              <Image {...CurationImg} alt="展覽" />
            </StyledNavBottomImgWrapper>
            <div>展覽</div>
          </StyledBottomNavLink>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/audio-book" passHref legacyBehavior>
          <StyledBottomNavLink>
            <StyledNavBottomImgWrapper>
              <Image {...AudioBookImg} alt="有聲書" />
            </StyledNavBottomImgWrapper>
            <div>有聲書</div>
          </StyledBottomNavLink>
        </Link>
      </Col>
      <Col span={6}>
        <Link href={currentMemberId ? '/collection/mine' : '/auth'} passHref legacyBehavior>
          <StyledBottomNavLink>
            <StyledNavBottomImgWrapper>
              <SavedSolidImg />
            </StyledNavBottomImgWrapper>
            <div>收藏</div>
          </StyledBottomNavLink>
        </Link>
      </Col>
    </Row>
  )
}

const NavFooter: React.FC = () => {
  return (
    <div>
      <FooterNav />
      <StyledFooter>
        <ButtonNav />
      </StyledFooter>
    </div>
  )
}

export default NavFooter
