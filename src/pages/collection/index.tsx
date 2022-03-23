import { useRouter } from 'next/router'
import React from 'react'
import CollectionList from '../../components/collection/CollectionList'
import MainLayout from '../../components/layouts/MainLayout'

const CollectionPage: React.FC = () => {
  const router = useRouter()
  return (
    <MainLayout title="收藏" activeKey="collection">
      <CollectionList onSelectItem={id => router.push(`/collection/${id}`)} />
    </MainLayout>
  )
}

export default CollectionPage
