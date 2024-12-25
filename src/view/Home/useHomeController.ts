import { useState } from 'react'
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

  const [search, setSearch] = useState<string>('')

  const filteredSearch = data?.characters.results?.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return {
    loading,
    error,
    search,
    setSearch,
    filteredSearch
  }
}
