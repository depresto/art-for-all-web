import { NextPage } from 'next'
import React from 'react'
import ArtworkListItem from '../components/artwork/ArtworkListItem'
import FullLoadingBlock from '../components/common/FullLoadingBlock'
import SearchInput from '../components/common/SearchInput'
import MainLayout from '../components/layouts/MainLayout'
import { useExhibition } from '../hooks/exhibition'

const LatestExhibitionArtworkPage: NextPage = () => {
  const { loadingExhibition, exhibition } = useExhibition()

  return (
    <MainLayout title="最新展覽作品" activeKey="latest-exhibition">
      <SearchInput />

      {loadingExhibition ? (
        <FullLoadingBlock />
      ) : exhibition ? (
        <>
          {exhibition.artworks.map(artwork => (
            <ArtworkListItem key={artwork.id} artwork={artwork} margin />
          ))}
        </>
      ) : null}
    </MainLayout>
  )
}

export default LatestExhibitionArtworkPage
