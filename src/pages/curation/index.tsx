'use client'

import { BellOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import MoreImg from '../../assets/images/more.png'
import VoiceImg from '../../assets/images/voice.png'
import MainLayout from '../../components/layouts/MainLayout'
import { AudioPlayer } from '../../contexts/AudioPlayerContext'

const StyledBtnsBarDiv = styled.div`
  min-width: 250px;
  width: 60%;
  margin: 10px auto;
  box-shadow: 0px 1px 4px rgba(31, 80, 127, 0.5);
  border-radius: 25.5px;

  color: #1e5285;
  font-size: 30px;
  text-align: center;

  span {
    margin: 0 20px;
  }
`
const StyledRow = styled(Row)`
  width: 80%;
  margin: 20px auto;
  cursor: pointer;
`
const StyedPlaceholderImg = styled.img`
  width: 120px;
  max-width: 100%;
  padding-right: 10px;
  // border: 1px solid #c4c4c4;
`
const StyledVoiceImg = styled.img`
  width: 34px;
  margin: 20px auto;
  text-align: center;
  display: block;
  padding-right: 10px;
`
const StyledItemTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.1em;
`
const StyledItemContent = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: justify;
  letter-spacing: 0.1em;

  color: #353535;
`
const MoreBtnImg = styled.img`
  width: 40px;
  margin-top: 0px;
  padding: 15px 5px;
  margin-left: 10px;
`
const MoreBtnGroupDiv = styled.div`
  position: absolute;
  top: 25px;
  right: 5px;

  width: 100px;

  > div {
    background: #ffb53c;
    padding: 5px 0;
    text-align: center;
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
`

const CurationItem: React.FC<{
  id: string
  title: string
  content: string
  audioUrl: string
  featureImageUrl: string
}> = ({ id, title, content, audioUrl, featureImageUrl }) => {
  const [moreBtnActive, setMoreBtnActive] = useState(false)
  const router = useRouter()

  return (
    <StyledRow className="mb-4" onClick={() => router.push(`/curation/${id}`)}>
      <Col span={8}>
        <StyedPlaceholderImg src={featureImageUrl} />
        <StyledVoiceImg {...VoiceImg} />
      </Col>
      <Col span={13}>
        <StyledItemTitle className="mb-3">{title}</StyledItemTitle>
        <StyledItemContent>{content}</StyledItemContent>
      </Col>
      <Col span={3} className="position-relative">
        <MoreBtnImg {...MoreImg} alt="查看更多" onClick={() => setMoreBtnActive(!moreBtnActive)} />

        {moreBtnActive && (
          <MoreBtnGroupDiv>
            <div onClick={() => {}}>編輯</div>
            <div>刪除</div>
          </MoreBtnGroupDiv>
        )}
      </Col>
    </StyledRow>
  )
}

type CurationListProps = {
  id: string
  title: string
  content: string
  audioUrl: string
  featureImageUrl: string
}

const curationList: CurationListProps[] = [
  {
    id: '004',
    title: '夏陽Hsia Yang人 Figure',
    content:
      '此幅1965年創作的《人》，是夏陽遊歷歐洲各國，定居於法國巴黎時，受到當時歐普藝術(Op art)與抽象表現主義(Abstract expressionism)的影響。',
    audioUrl: 'https://art-for-all.s3.amazonaws.com/voices/04.mp3',
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/04.PNG',
  },
  {
    id: '001',
    title: '1+塑X3－朝倉與蒲添生 三代雕塑展',
    content:
      '紀念前輩雕塑家蒲添生冥誕一百零五歲逝世二十周年，蒲添生家族經過長達一年的構思、策劃，舉行橫跨三代與兩個時空的「1+塑X3－朝倉與蒲添生三代雕塑展」。',
    audioUrl: 'https://art-for-all.s3.amazonaws.com/voices/02.mp3',
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/exhibition01.jpeg',
  },
  {
    id: '002',
    title: '陳澄波 淡水風景（淡水）',
    featureImageUrl: 'https://art-for-all.s3.amazonaws.com/images/02.jpg',
    content: `1935年的《淡水風景》，是陳澄波淡水系列作品中最具代表性件品。全圖以俯視遠望的視角，描繪淡水城繁華的景貌，深具表現性的構圖，以繁密紅磚建築與曲折巷道為主景，隱藏著一種有機的秩序和紛雜中的穩定。`,
    audioUrl: 'https://art-for-all.s3.amazonaws.com/voices/02.mp3',
  },
]

const CurationPage: React.FC = () => {
  return (
    <MainLayout title="策展" activeKey="curation">
      <StyledBtnsBarDiv>
        <SearchOutlined />
        <PlusOutlined />
        <BellOutlined />
      </StyledBtnsBarDiv>
      <AudioPlayer />

      {curationList.map(item => (
        <CurationItem key={item.id} {...item} />
      ))}
    </MainLayout>
  )
}

export default CurationPage
