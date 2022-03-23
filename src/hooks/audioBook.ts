import { gql, useQuery } from '@apollo/client'
import types from '../types'

export type AudioBookBriefProps = {
  id: number
  title: string
  featuredImageUrl: string | null
  description: string | null
  duration: number
  creatorName: string | null
  language: string | null
  createdAt: Date
  updatedAt: Date
}
export type AudioBookProps = AudioBookBriefProps & {
  audioUrl: string | null
  trackUrl: string | null
  content: string | null
}
export type AudioBookCategoryBriefProps = {
  id: number
  name: string
  description: string | null
  language: string | null
}
export type AudioBookCategoryProps = AudioBookCategoryBriefProps & {
  audioBooks: AudioBookBriefProps[]
}
export type AudioBookCategoryDetailProps = AudioBookCategoryBriefProps & {
  audioBooks: AudioBookProps[]
}

export const useAudioBooks = (options?: { tagName?: string; categoryId?: number }) => {
  const { loading, error, data, refetch } = useQuery<types.GET_AUDIO_BOOKS, types.GET_AUDIO_BOOKSVariables>(
    gql`
      query GET_AUDIO_BOOKS($condition: audio_book_bool_exp!) {
        audio_book(where: $condition) {
          id
          title
          featured_image_url
          description
          duration
          creator_name
          language
          created_at
          updated_at
        }
      }
    `,
    {
      variables: {
        condition: {
          audio_book_tags: options?.tagName
            ? {
                tag: { name: { _eq: options.tagName } },
              }
            : undefined,
          audio_book_categories: options?.categoryId
            ? {
                category: { id: { _eq: options.categoryId } },
              }
            : undefined,
        },
      },
    },
  )

  const audioBooks: AudioBookBriefProps[] =
    loading || error || !data
      ? []
      : data.audio_book.map(audio_book => ({
          id: audio_book.id,
          title: audio_book.title,
          featuredImageUrl: audio_book.featured_image_url,
          description: audio_book.description,
          duration: audio_book.duration,
          creatorName: audio_book.creator_name,
          language: audio_book.language,
          createdAt: new Date(audio_book.created_at),
          updatedAt: new Date(audio_book.updated_at),
        }))
  return {
    loadingAudioBooks: loading,
    audioBooks,
    errorAudioBooks: error,
    refetchAudioBooks: refetch,
  }
}

export const useAudioBook = (audioBookId: number) => {
  const { loading, error, data, refetch } = useQuery<types.GET_AUDIO_BOOK, types.GET_AUDIO_BOOKVariables>(
    gql`
      query GET_AUDIO_BOOK($audioBookId: bigint!) {
        audio_book_by_pk(id: $audioBookId) {
          id
          title
          featured_image_url
          description
          content
          duration
          audio_url
          track_url
          creator_name
          language
          created_at
          updated_at
        }
      }
    `,
    {
      variables: { audioBookId },
    },
  )

  const audioBook: AudioBookProps | null =
    loading || error || !data?.audio_book_by_pk
      ? null
      : {
          id: data.audio_book_by_pk.id,
          title: data.audio_book_by_pk.title,
          featuredImageUrl: data.audio_book_by_pk.featured_image_url,
          audioUrl: data.audio_book_by_pk.audio_url,
          trackUrl: data.audio_book_by_pk.track_url,
          content: data.audio_book_by_pk.content,
          description: data.audio_book_by_pk.description,
          duration: data.audio_book_by_pk.duration,
          creatorName: data.audio_book_by_pk.creator_name,
          language: data.audio_book_by_pk.language,
          createdAt: new Date(data.audio_book_by_pk.created_at),
          updatedAt: new Date(data.audio_book_by_pk.updated_at),
        }
  return {
    loadingAudioBook: loading,
    audioBook,
    errorAudioBook: error,
    refetchAudioBook: refetch,
  }
}

export const useAudioBooksWithCategories = (options?: { tagName?: string; categoryId?: number; limit?: number }) => {
  const audioBookCondition = {
    audio_book_tags: options?.tagName
      ? {
          tag: { name: { _eq: options.tagName } },
        }
      : undefined,
    audio_book_categories: options?.categoryId
      ? {
          category: { id: { _eq: options.categoryId } },
        }
      : undefined,
  }

  const { loading, error, data, refetch } = useQuery<
    types.GET_AUDIO_BOOKS_WITH_CATEGORIES,
    types.GET_AUDIO_BOOKS_WITH_CATEGORIESVariables
  >(
    gql`
      query GET_AUDIO_BOOKS_WITH_CATEGORIES(
        $categoryCondition: category_bool_exp
        $condition: audio_book_category_bool_exp!
        $limit: Int
      ) {
        category(where: $categoryCondition) {
          id
          name
          description
          language
          audio_book_categories(where: $condition, limit: $limit) {
            audio_book {
              id
              title
              featured_image_url
              description
              duration
              creator_name
              language
              created_at
              updated_at
            }
          }
        }
      }
    `,
    {
      variables: {
        categoryCondition: {
          type: { _eq: 'audioBook' },
          audio_book_categories: { audio_book: audioBookCondition },
        },
        condition: {
          audio_book: audioBookCondition,
        },
        limit: options?.limit,
      },
    },
  )

  const audioBookCategories: AudioBookCategoryProps[] =
    loading || error || !data
      ? []
      : data.category.map(category => ({
          id: category.id,
          name: category.name,
          description: category.description,
          language: category.language,
          audioBooks: category.audio_book_categories
            .map(audio_book_category => audio_book_category.audio_book)
            .map(audio_book => ({
              id: audio_book.id,
              title: audio_book.title,
              featuredImageUrl: audio_book.featured_image_url,
              description: audio_book.description,
              duration: audio_book.duration,
              creatorName: audio_book.creator_name,
              language: audio_book.language,
              createdAt: new Date(audio_book.created_at),
              updatedAt: new Date(audio_book.updated_at),
            })),
        }))
  return {
    loadingAudioBookCategories: loading,
    audioBookCategories,
    errorAudioBookCategories: error,
    refetchAudioBookCategories: refetch,
  }
}

export const useAudioBooksWithCategory = (categoryId: number) => {
  const { loading, error, data, refetch } = useQuery<
    types.GET_AUDIO_BOOKS_WITH_CATEGORY,
    types.GET_AUDIO_BOOKS_WITH_CATEGORYVariables
  >(
    gql`
      query GET_AUDIO_BOOKS_WITH_CATEGORY($categoryId: bigint!) {
        category_by_pk(id: $categoryId) {
          id
          name
          description
          language
          audio_book_categories {
            audio_book {
              id
              title
              featured_image_url
              description
              duration
              creator_name
              language
              created_at
              updated_at
            }
          }
        }
      }
    `,
    {
      variables: { categoryId },
    },
  )

  const audioBookCategory: AudioBookCategoryProps | null =
    loading || error || !data || !data.category_by_pk
      ? null
      : {
          id: data.category_by_pk.id,
          name: data.category_by_pk.name,
          description: data.category_by_pk.description,
          language: data.category_by_pk.language,
          audioBooks: data.category_by_pk.audio_book_categories
            .map(audio_book_category => audio_book_category.audio_book)
            .map(audio_book => ({
              id: audio_book.id,
              title: audio_book.title,
              featuredImageUrl: audio_book.featured_image_url,
              description: audio_book.description,
              duration: audio_book.duration,
              creatorName: audio_book.creator_name,
              language: audio_book.language,
              createdAt: new Date(audio_book.created_at),
              updatedAt: new Date(audio_book.updated_at),
            })),
        }
  return {
    loadingAudioBookCategory: loading,
    audioBookCategory,
    errorAudioBookCategory: error,
    refetchAudioBookCategory: refetch,
  }
}

export const useAudioBookDetailsWithCategory = (categoryId: number) => {
  const { loading, error, data, refetch } = useQuery<
    types.GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY,
    types.GET_AUDIO_BOOK_DETAILS_WITH_CATEGORYVariables
  >(
    gql`
      query GET_AUDIO_BOOK_DETAILS_WITH_CATEGORY($categoryId: bigint!) {
        category_by_pk(id: $categoryId) {
          id
          name
          description
          language
          audio_book_categories {
            audio_book {
              id
              title
              featured_image_url
              description
              content
              duration
              audio_url
              track_url
              creator_name
              language
              created_at
              updated_at
            }
          }
        }
      }
    `,
    {
      variables: { categoryId },
    },
  )

  const audioBookCategory: AudioBookCategoryDetailProps | null =
    loading || error || !data || !data.category_by_pk
      ? null
      : {
          id: data.category_by_pk.id,
          name: data.category_by_pk.name,
          description: data.category_by_pk.description,
          language: data.category_by_pk.language,
          audioBooks: data.category_by_pk.audio_book_categories
            .map(audio_book_category => audio_book_category.audio_book)
            .map(audio_book => ({
              id: audio_book.id,
              title: audio_book.title,
              featuredImageUrl: audio_book.featured_image_url,
              audioUrl: audio_book.audio_url,
              trackUrl: audio_book.track_url,
              content: audio_book.content,
              description: audio_book.description,
              duration: audio_book.duration,
              creatorName: audio_book.creator_name,
              language: audio_book.language,
              createdAt: new Date(audio_book.created_at),
              updatedAt: new Date(audio_book.updated_at),
            })),
        }
  return {
    loadingAudioBookCategory: loading,
    audioBookCategory,
    errorAudioBookCategory: error,
    refetchAudioBookCategory: refetch,
  }
}
