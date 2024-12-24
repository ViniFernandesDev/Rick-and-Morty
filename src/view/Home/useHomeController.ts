import { gql, useQuery } from '@apollo/client'
import { CharactersData } from '../../app/utils/types'

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export function useHomeController() {
  const { data, loading, error } = useQuery<CharactersData>(GET_CHARACTERS)

  return {
    data: data?.characters.results ?? [],
    loading,
    error
  }
}
