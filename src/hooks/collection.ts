import { gql, useMutation, useQuery } from '@apollo/client'
import types from '../types'
import { ArtworkProps } from './artwork'

export const useMemberArtworkCollectionMutation = () => {
  const [insertMemberArtworkCollectionHandler] = useMutation<
    types.ADD_MEMBER_ARTWORK_COLLECTION,
    types.ADD_MEMBER_ARTWORK_COLLECTIONVariables
  >(gql`
    mutation ADD_MEMBER_ARTWORK_COLLECTION($artworkId: bigint!) {
      insert_member_artwork_collection_one(object: { artwork_id: $artworkId }) {
        id
      }
    }
  `)
  const insertMemberArtworkCollection = (artworkId: number) => {
    return insertMemberArtworkCollectionHandler({
      variables: { artworkId },
    })
  }

  const [deleteMemberArtworkCollectionHandler] = useMutation<
    types.DELETE_MEMBER_ARTWORK_COLLECTION,
    types.DELETE_MEMBER_ARTWORK_COLLECTIONVariables
  >(gql`
    mutation DELETE_MEMBER_ARTWORK_COLLECTION($artworkId: bigint!) {
      delete_member_artwork_collection(where: { artwork_id: { _eq: $artworkId } }) {
        affected_rows
      }
    }
  `)
  const deleteMemberArtworkCollection = (artworkId: number) => {
    return deleteMemberArtworkCollectionHandler({
      variables: { artworkId },
    })
  }

  return {
    insertMemberArtworkCollection,
    deleteMemberArtworkCollection,
  }
}

export const useMemberArtworkCollection = (memberId: number) => {
  const { loading, error, data, refetch } = useQuery<
    types.GET_COLLECTIONS_BY_MEMBER,
    types.GET_COLLECTIONS_BY_MEMBERVariables
  >(
    gql`
      query GET_COLLECTIONS_BY_MEMBER($memberId: bigint!) {
        member_artwork_collection(where: { member_id: { _eq: $memberId } }) {
          id
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
    `,
    {
      variables: { memberId },
    },
  )

  const memberArtworkCollections: ArtworkProps[] =
    loading || error || !data
      ? []
      : data.member_artwork_collection.map(member_artwork_collection => ({
          id: member_artwork_collection.artwork.id,
          name: member_artwork_collection.artwork.name,
          title: member_artwork_collection.artwork.name,
          featureImageUrl: member_artwork_collection.artwork.featured_image,
          imageUrls: member_artwork_collection.artwork.images,
          audioUrl: member_artwork_collection.artwork.speech,
          description: member_artwork_collection.artwork.description,
          creator: member_artwork_collection.artwork.creator,
          material: member_artwork_collection.artwork.material,
          sizing: member_artwork_collection.artwork.size,
          years: member_artwork_collection.artwork.years,
          saved: (member_artwork_collection.artwork.member_artwork_collections_aggregate.aggregate?.count || 0) > 0,
          exhibitionIds: member_artwork_collection.artwork.exhibition_artworks.map(
            exhibition_artwork => exhibition_artwork.exhibition_id,
          ),
        }))

  return {
    loadingMemberArtworkCollections: loading,
    errorMemberArtworkCollections: error,
    memberArtworkCollections,
    refetchMemberArtworkCollections: refetch,
  }
}
