'use client'

import { Breadcrumb, Skeleton } from 'antd'
import { useRouter } from 'next/router'
import React from 'react'
import AudioBookPlayer from '../../../../components/audio-book/AudioBookPlayer'
import MainLayout from '../../../../components/layouts/MainLayout'
import { useAudioBookDetailsWithCategory } from '../../../../hooks/audioBook'

const AudioBookPlayerPage: React.FC = () => {
  const router = useRouter()
  const bookId = router.query.bookId as string
  const categoryId = router.query.categoryId as string
  const { loadingAudioBookCategory, audioBookCategory } = useAudioBookDetailsWithCategory(parseInt(categoryId))

  const bookIdNum = parseInt(bookId)
  const categoryName = audioBookCategory?.name
  const sortedAudioBooks = audioBookCategory?.audioBooks.sort((a, b) =>
    a.id === bookIdNum ? -1 : b.id === bookIdNum ? 1 : 0,
  )

  return (
    <MainLayout title="作品列表" activeKey="audioBookCategory">
      <Breadcrumb className="px-4 py-4" separator=">">
        <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
        <Breadcrumb.Item href="/audio-book">有聲書</Breadcrumb.Item>
        <Breadcrumb.Item href={`/audio-book/${categoryId}`}>作品列表</Breadcrumb.Item>
        <Breadcrumb.Item>{categoryName}</Breadcrumb.Item>
      </Breadcrumb>

      <Skeleton loading={loadingAudioBookCategory}>
        {sortedAudioBooks && (
          <div className="px-2 mb-4">
            <AudioBookPlayer
              audioBooks={sortedAudioBooks}
              onChangeAudioId={audioId => {
                if (audioId !== bookIdNum) {
                  router.replace({ pathname: `/audio-book/${categoryId}/${audioId}` })
                }
              }}
            />
          </div>
        )}
      </Skeleton>
    </MainLayout>
  )
}

export default AudioBookPlayerPage
