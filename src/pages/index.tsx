'use client'

import { Skeleton } from 'antd'
import { NextPage } from 'next'
import Image from 'next/image'
import { StyledTextDiv, StyledTitle } from '../components/common'
import TitleBlock from '../components/common/TitleBlock'
import ExhibitionListItem from '../components/exhibition/ExhibitionListItem'
import MainLayout from '../components/layouts/MainLayout'
import { useExhibitions } from '../hooks/exhibition'

const HomePage: NextPage = () => {
  const { loadingExhibitions, exhibitions } = useExhibitions()

  return (
    <MainLayout title="首頁" activeKey="home" noBackButton>
      <div className="anchor" id="about"></div>
      <StyledTitle className="pl-3">關於我們</StyledTitle>
      <TitleBlock>Art For All平台介紹</TitleBlock>
      <StyledTextDiv className="px-3">
        Art For All是一個提供參觀、展覽、策展、分享的平台，主要概念為促進公民文化平權與提升藝術參與。
      </StyledTextDiv>
      <Image
        layout="responsive"
        width={676}
        height={508}
        className="mt-4"
        src="https://i.imgur.com/j4HZsCG.png"
        alt=""
      />

      <div className="anchor" id="recent"></div>
      <StyledTitle className="pl-3 mt-5">最近展覽</StyledTitle>

      <Skeleton paragraph={{ rows: 10 }} loading={loadingExhibitions}>
        {exhibitions.map(exhibition => (
          <ExhibitionListItem key={exhibition.id} {...exhibition} margin />
        ))}
      </Skeleton>
    </MainLayout>
  )
}

export default HomePage
