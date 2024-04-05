'use client'

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ArtworkSection from '../../components/artwork/ArtworkSection'
import MainLayout from '../../components/layouts/MainLayout'
import { useAudioPlayer } from '../../contexts/AudioPlayerContext'
import { useArtwork } from '../../hooks/artwork'

export const StyledFixedBottomDiv = styled.div`
  max-width: 500px;
  position: fixed;
  bottom: 10px;
`

const CurationWorkPage: React.FC = () => {
  const router = useRouter()
  const curationId = router.query.curationId as string
  const { setIsPlayerShown, setAudio, currentAudio } = useAudioPlayer()
  const { artwork } = useArtwork(parseInt(curationId))

  useEffect(() => {
    setIsPlayerShown?.(true)
  }, [setIsPlayerShown])

  useEffect(() => {
    if (artwork?.audioUrl && artwork.audioUrl !== currentAudio?.audioUrl) {
      setAudio?.({
        id: artwork.id,
        title: artwork.title,
        audioUrl: artwork.audioUrl,
        audioCoverImageUrl: artwork.featureImageUrl || '',
      })
    }
  }, [artwork, currentAudio?.audioUrl, setAudio])

  return (
    <MainLayout title="我的策展" activeKey="home" expanded>
      {artwork && <ArtworkSection artwork={artwork} />}
    </MainLayout>
  )
}

export default CurationWorkPage
