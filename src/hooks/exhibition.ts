import useSWR from 'swr'
import { useAuth } from '../contexts/AuthContext'
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
  const url = exhibitionId ? `/api/v2/exhibitions/${exhibitionId}` : '/api/v2/exhibitions/latest'
  const params = currentMemberId ? `?memberId=${currentMemberId}` : ''

  const { data, error, isLoading, mutate } = useSWR<ExhibitionDetailProps>(`${url}${params}`)

  return {
    loadingExhibition: isLoading,
    errorExhibition: error,
    exhibition: data ?? null,
    refetchExhibition: mutate,
  }
}

export const useExhibitions = () => {
  const { data, error, isLoading, mutate } = useSWR<ExhibitionProps[]>('/api/v2/exhibitions')

  return {
    loadingExhibitions: isLoading,
    errorExhibitions: error,
    exhibitions: data ?? [],
    refetchExhibitions: mutate,
  }
}
