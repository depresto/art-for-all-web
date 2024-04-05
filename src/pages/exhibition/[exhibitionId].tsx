'use client'

import { Breadcrumb, Col, Row, Skeleton } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import styled, { css } from 'styled-components'
import ArtworkListItem from '../../components/artwork/ArtworkListItem'
import MainLayout from '../../components/layouts/MainLayout'
import { useExhibition } from '../../hooks/exhibition'

export const StyledExhibitionTitleDiv = styled.div<{ margin?: boolean }>`
  ${props =>
    props.margin &&
    css`
      margin-top: 30px;
    `}
  position: relative;
  margin-bottom: 20px;
`
export const StyledExhibitionTitleSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
  vertical-align: middle;

  color: #1e5285;
  background: #f3f3f3;
  border-radius: 0 20px 20px 0;

  padding: 8px 10px;
  padding-left: 20px;
`

const ExhibitionPage: React.FC = () => {
  const router = useRouter()
  const exhibitionId = router.query.exhibitionId as string
  const { loadingExhibition, exhibition, refetchExhibition } = useExhibition(exhibitionId)

  return (
    <MainLayout title="展覽頁面" activeKey="home">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item href="/exhibitions">展覽</Breadcrumb.Item>
        <Breadcrumb.Item>作品列表</Breadcrumb.Item>
      </Breadcrumb>

      <Skeleton paragraph={{ rows: 10 }} loading={loadingExhibition}>
        {exhibition && (
          <>
            <StyledExhibitionTitleDiv margin={true}>
              <StyledExhibitionTitleSpan>{exhibition.name}</StyledExhibitionTitleSpan>
            </StyledExhibitionTitleDiv>

            <div className="px-2">
              <Row>
                {exhibition.artworks.map(artwork => (
                  <Col span={12} key={artwork.id} className="px-2">
                    <ArtworkListItem
                      artwork={artwork}
                      onRefetch={() => {
                        refetchExhibition()
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </>
        )}
      </Skeleton>
    </MainLayout>
  )
}

export default ExhibitionPage
