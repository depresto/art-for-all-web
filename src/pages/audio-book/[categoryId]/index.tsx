'use client'

import { Breadcrumb, Col, Row, Skeleton } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import AudioBookListItem from '../../../components/audio-book/AudioBookListItem'
import TitleBlock from '../../../components/common/TitleBlock'
import MainLayout from '../../../components/layouts/MainLayout'
import { useAudioBooksWithCategory } from '../../../hooks/audioBook'

const AudioBookCategoryPage: React.FC = () => {
  const router = useRouter()
  const categoryId = router.query.categoryId as string
  const { loadingAudioBookCategory, audioBookCategory } = useAudioBooksWithCategory(parseInt(categoryId))

  return (
    <MainLayout title="作品列表" activeKey="audioBookCategory">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item href="/audio-book">有聲書</Breadcrumb.Item>
        <Breadcrumb.Item>作品列表</Breadcrumb.Item>
      </Breadcrumb>

      <Skeleton loading={loadingAudioBookCategory}>
        <div>
          <TitleBlock>{audioBookCategory?.name}</TitleBlock>

          {audioBookCategory && (
            <div className="px-2">
              <Row>
                {audioBookCategory.audioBooks.map((audioBook, index) => (
                  <Col span={12} className="px-2" key={index}>
                    <AudioBookListItem categoryId={parseInt(categoryId)} audioBook={audioBook} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </Skeleton>
    </MainLayout>
  )
}

export default AudioBookCategoryPage
