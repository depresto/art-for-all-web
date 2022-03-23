import { gql, useQuery } from '@apollo/client'
import types from '../types'

export type TagProps = {
  id: number
  name: string
}
export type TagType = 'audioBook'

export const useTags = (type?: TagType) => {
  const { loading, error, data, refetch } = useQuery<types.GET_TAGS, types.GET_TAGSVariables>(
    gql`
      query GET_TAGS($condition: tag_bool_exp!) {
        tag(where: $condition) {
          id
          name
        }
      }
    `,
    {
      variables: {
        condition: {
          type: type ? { _eq: type } : undefined,
        },
      },
    },
  )

  const tags: TagProps[] =
    loading || error || !data
      ? []
      : data.tag.map(tag => ({
          id: tag.id,
          name: tag.name,
        }))
  return {
    loadingTags: loading,
    tags,
    errorTags: error,
    refetchTags: refetch,
  }
}
