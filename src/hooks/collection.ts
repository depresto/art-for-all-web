import useSWR from 'swr'
import { useAuth } from '../contexts/AuthContext'
import { mutationFetcher } from '../lib/fetcher'
import { ArtworkProps } from './artwork'

export const useMemberArtworkCollectionMutation = () => {
  const { authToken } = useAuth()

  const insertMemberArtworkCollection = async (artworkId: number) => {
    return mutationFetcher('/api/v2/collections', {
      arg: { artworkId },
      method: 'POST',
      authToken,
    })
  }

  const deleteMemberArtworkCollection = async (artworkId: number) => {
    return mutationFetcher('/api/v2/collections', {
      arg: { artworkId },
      method: 'DELETE',
      authToken,
    })
  }

  return {
    insertMemberArtworkCollection,
    deleteMemberArtworkCollection,
  }
}

export const useMemberArtworkCollection = (memberId: number) => {
  const { data, error, isLoading, mutate } = useSWR<ArtworkProps[]>(
    memberId ? `/api/v2/collections?memberId=${memberId}` : null,
  )

  return {
    loadingMemberArtworkCollections: isLoading,
    errorMemberArtworkCollections: error,
    memberArtworkCollections: data ?? [],
    refetchMemberArtworkCollections: mutate,
  }
}
