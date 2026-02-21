import useSWR from 'swr'

export type TagProps = {
  id: number
  name: string
}
export type TagType = 'audioBook'

export const useTags = (type?: TagType) => {
  const params = type ? `?type=${type}` : ''
  const { data, error, isLoading, mutate } = useSWR<TagProps[]>(`/api/v2/tags${params}`)

  return {
    loadingTags: isLoading,
    tags: data ?? [],
    errorTags: error,
    refetchTags: mutate,
  }
}
