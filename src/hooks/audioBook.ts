import useSWR from 'swr'

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
  const params = new URLSearchParams()
  if (options?.tagName) params.set('tagName', options.tagName)
  if (options?.categoryId) params.set('categoryId', options.categoryId.toString())
  const qs = params.toString()

  const { data, error, isLoading, mutate } = useSWR<AudioBookBriefProps[]>(`/api/v2/audio-books${qs ? `?${qs}` : ''}`)

  return {
    loadingAudioBooks: isLoading,
    audioBooks: data ?? [],
    errorAudioBooks: error,
    refetchAudioBooks: mutate,
  }
}

export const useAudioBook = (audioBookId: number) => {
  const { data, error, isLoading, mutate } = useSWR<AudioBookProps>(
    audioBookId ? `/api/v2/audio-books/${audioBookId}` : null,
  )

  return {
    loadingAudioBook: isLoading,
    audioBook: data ?? null,
    errorAudioBook: error,
    refetchAudioBook: mutate,
  }
}

export const useAudioBooksWithCategories = (options?: { tagName?: string; categoryId?: number; limit?: number }) => {
  const params = new URLSearchParams()
  if (options?.tagName) params.set('tagName', options.tagName)
  if (options?.limit) params.set('limit', options.limit.toString())
  const qs = params.toString()

  const { data, error, isLoading, mutate } = useSWR<AudioBookCategoryProps[]>(
    `/api/v2/audio-books/categories${qs ? `?${qs}` : ''}`,
  )

  return {
    loadingAudioBookCategories: isLoading,
    audioBookCategories: data ?? [],
    errorAudioBookCategories: error,
    refetchAudioBookCategories: mutate,
  }
}

export const useAudioBooksWithCategory = (categoryId: number) => {
  const { data, error, isLoading, mutate } = useSWR<AudioBookCategoryProps>(
    categoryId ? `/api/v2/audio-books/categories/${categoryId}` : null,
  )

  return {
    loadingAudioBookCategory: isLoading,
    audioBookCategory: data ?? null,
    errorAudioBookCategory: error,
    refetchAudioBookCategory: mutate,
  }
}

export const useAudioBookDetailsWithCategory = (categoryId: number) => {
  const { data, error, isLoading, mutate } = useSWR<AudioBookCategoryDetailProps>(
    categoryId ? `/api/v2/audio-books/categories/${categoryId}?detailed=true` : null,
  )

  return {
    loadingAudioBookCategory: isLoading,
    audioBookCategory: data ?? null,
    errorAudioBookCategory: error,
    refetchAudioBookCategory: mutate,
  }
}
