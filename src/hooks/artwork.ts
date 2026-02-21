import useSWR from 'swr'

export type CreatorProps = {
  id: string
  name: string
}

export type MuseumProps = {
  id: string
  name: string
}

export type CommentProps = {
  id: number
  content: string
  member: {
    id: number
    name: string | null
    avatarUrl: string | null
  }
}

export type ArtworkProps = {
  id: number
  title: string
  name: string
  featureImageUrl: string | null
  audioUrl: string | null
  imageUrls: string[]
  description: string | null
  creator: CreatorProps | null
  sizing: string | null
  material: string | null
  years: number | null
  saved: boolean
  exhibitionIds: string[]
  comments?: CommentProps[]
}

export const useArtwork = (artworkId: number, memberId?: number) => {
  const params = memberId ? `?memberId=${memberId}` : ''
  const { data, error, isLoading, mutate } = useSWR<ArtworkProps>(
    artworkId ? `/api/v2/artworks/${artworkId}${params}` : null,
  )

  return {
    loadingArtwork: isLoading,
    errorArtwork: error,
    refetchArtwork: mutate,
    artwork: data ?? null,
  }
}

export const useArtworks = (memberId: number) => {
  const { data, error, isLoading, mutate } = useSWR<ArtworkProps[]>(`/api/v2/artworks?memberId=${memberId}`)

  return {
    loadingArtwork: isLoading,
    errorArtwork: error,
    refetchArtwork: mutate,
    artworks: data ?? [],
  }
}
