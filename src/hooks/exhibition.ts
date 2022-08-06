import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { useAuth } from '../contexts/AuthContext'
import types from '../types'
import { ArtworkProps } from './artwork'

export type ExhibitionProps = {
  id: number
  name: string
  featuredImage: string | null
  artworkCount: number
}

export type ExhibitionDetailProps = ExhibitionProps & {
  artworks: ArtworkProps[]
}

export const useExhibition = (exhibitionId?: string) => {
  const { currentMemberId } = useAuth()
  const { loading, error, data, refetch } = useQuery<types.GET_EXHIBITION, types.GET_EXHIBITIONVariables>(
    gql`
      query GET_EXHIBITION($condition: exhibition_bool_exp!, $memberId: bigint!) {
        exhibition(where: $condition, limit: 1) {
          id
          name
          featured_image
          exhibition_artworks(order_by: { artwork_id: asc }) {
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
        }
      }
    `,
    {
      variables: {
        condition: {
          id: exhibitionId ? { _eq: parseInt(exhibitionId) } : undefined,
        },
        memberId: currentMemberId || 0,
      },
    },
  )

  const exhibition: ExhibitionDetailProps | null =
    loading || error || !data || data.exhibition.length === 0
      ? null
      : {
          id: data.exhibition[0].id,
          name: data.exhibition[0].name,
          featuredImage: data.exhibition[0].featured_image,
          artworkCount: data.exhibition[0].exhibition_artworks.length,
          artworks: data.exhibition[0].exhibition_artworks.map(exhibition_artwork => ({
            id: exhibition_artwork.artwork.id,
            name: exhibition_artwork.artwork.name,
            title: exhibition_artwork.artwork.name,
            featureImageUrl: exhibition_artwork.artwork.featured_image,
            imageUrls: exhibition_artwork.artwork.images,
            audioUrl: exhibition_artwork.artwork.speech,
            description: exhibition_artwork.artwork.description,
            creator: exhibition_artwork.artwork.creator,
            material: exhibition_artwork.artwork.material,
            sizing: exhibition_artwork.artwork.size,
            years: exhibition_artwork.artwork.years,
            saved: (exhibition_artwork.artwork.member_artwork_collections_aggregate.aggregate?.count || 0) > 0,
            exhibitionIds: exhibition_artwork.artwork.exhibition_artworks.map(
              exhibition_artwork => exhibition_artwork.exhibition_id,
            ),
          })),
        }
  return {
    loadingExhibition: loading,
    errorExhibition: error,
    exhibition,
    refetchExhibition: refetch,
  }
}

export const useExhibitions = () => {
  const { loading, error, data, refetch } = useQuery<types.GET_EXHIBITIONS>(
    gql`
      query GET_EXHIBITIONS {
        exhibition(order_by: { created_at: desc }) {
          id
          name
          featured_image
          exhibition_artworks_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    `,
  )

  const exhibitions: ExhibitionProps[] =
    loading || error || !data
      ? []
      : data.exhibition.map(exhibition => ({
          id: exhibition.id,
          name: exhibition.name,
          featuredImage: exhibition.featured_image,
          artworkCount: exhibition.exhibition_artworks_aggregate.aggregate?.count || 0,
        }))
  return {
    loadingExhibitions: loading,
    errorExhibitions: error,
    exhibitions,
    refetchExhibitions: refetch,
  }
}
