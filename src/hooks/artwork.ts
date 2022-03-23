import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useMemo } from 'react'
import types from '../types'

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
  const { loading, error, data, refetch } = useQuery<types.GET_ARTWORK, types.GET_ARTWORKVariables>(
    gql`
      query GET_ARTWORK($artworkId: bigint!, $memberId: bigint!) {
        artwork_by_pk(id: $artworkId) {
          id
          featured_image
          images
          description
          creator {
            id
            name
          }
          material
          name
          size
          speech
          years

          exhibition_artworks {
            exhibition_id
          }

          member_artwork_collections_aggregate(where: { member_id: { _eq: $memberId } }) {
            aggregate {
              count
            }
          }

          comments {
            id
            content
            member {
              id
              name
              avatar_url
            }
          }
        }
      }
    `,
    { variables: { artworkId, memberId: memberId || 0 } },
  )

  let artwork: ArtworkProps | null = useMemo(() => {
    return loading || error || !data || !data.artwork_by_pk
      ? null
      : {
          id: data.artwork_by_pk.id,
          name: data.artwork_by_pk.name,
          title: data.artwork_by_pk.name,
          featureImageUrl: data.artwork_by_pk.featured_image,
          imageUrls: data.artwork_by_pk.images,
          audioUrl: data.artwork_by_pk.speech,
          description: data.artwork_by_pk.description,
          creator: data.artwork_by_pk.creator,
          material: data.artwork_by_pk.material,
          sizing: data.artwork_by_pk.size,
          years: data.artwork_by_pk.years,
          saved: (data.artwork_by_pk.member_artwork_collections_aggregate.aggregate?.count || 0) > 0,
          exhibitionIds: data.artwork_by_pk.exhibition_artworks.map(
            exhibition_artwork => exhibition_artwork.exhibition_id,
          ),
          comments: data.artwork_by_pk.comments.map(comment => ({
            id: comment.id,
            content: comment.content,
            member: {
              id: comment.member.id,
              name: comment.member.name,
              avatarUrl: comment.member.avatar_url,
            },
          })),
        }
  }, [data, error, loading])

  return {
    loadingArtwork: loading,
    errorArtwork: error,
    refetchArtwork: refetch,
    artwork,
  }
}

export const useArtworks = (memberId: number) => {
  const { loading, error, data, refetch } = useQuery<types.GET_ARTWORKS, types.GET_ARTWORKSVariables>(
    gql`
      query GET_ARTWORKS($memberId: bigint!) {
        artwork {
          id
          featured_image
          images
          description
          creator {
            id
            name
          }
          material
          name
          size
          speech
          years

          exhibition_artworks {
            exhibition_id
          }

          member_artwork_collections_aggregate(where: { member_id: { _eq: $memberId } }) {
            aggregate {
              count
            }
          }
        }
      }
    `,
    {
      variables: { memberId },
    },
  )

  const artworks: ArtworkProps[] =
    loading || error || !data
      ? []
      : data.artwork.map(artwork => ({
          id: artwork.id,
          name: artwork.name,
          title: artwork.name,
          featureImageUrl: artwork.featured_image,
          imageUrls: artwork.images,
          audioUrl: artwork.speech,
          description: artwork.description,
          creator: artwork.creator,
          material: artwork.material,
          sizing: artwork.size,
          years: artwork.years,
          saved: (artwork.member_artwork_collections_aggregate.aggregate?.count || 0) > 0,
          exhibitionIds: artwork.exhibition_artworks.map(exhibition_artwork => exhibition_artwork.exhibition_id),
        }))

  return {
    loadingArtwork: loading,
    errorArtwork: error,
    refetchArtwork: refetch,
    artworks: artworks,
  }
}
