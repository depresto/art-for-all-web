'use client'

import React from 'react'
import styled from 'styled-components'
import ArtworkListItem from '../../components/artwork/ArtworkListItem'
import MainLayout from '../../components/layouts/MainLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useArtworks } from '../../hooks/artwork'

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;

  color: #1e5285;
`

const collectionItem = {
  id: '01',
  name: '淡水風景',
}

const CollectionDetailPage: React.FC = () => {
  const { currentMemberId } = useAuth()
  let { artworks } = useArtworks(currentMemberId || 0)
  artworks = artworks.filter(item => item.saved === true)

  return (
    <MainLayout title="收藏" activeKey="collection">
      <StyledTitle>{collectionItem.name}</StyledTitle>

      {artworks.map(artwork => (
        <ArtworkListItem key={artwork.id} artwork={artwork} />
      ))}
    </MainLayout>
  )
}

export default CollectionDetailPage
