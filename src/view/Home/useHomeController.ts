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
  const [currentPage, setCurrentPage] = useState<number>(0)

  const filteredSearch =
    data?.characters.results?.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    ) ?? []

  const totalPaginationPages = Math.ceil(filteredSearch?.length / 6)

  const itemsForCurrentPage = filteredSearch?.slice(
    currentPage * 6,
    (currentPage + 1) * 6
  )

  const listCharacters =
    filteredSearch?.length > 5 ? itemsForCurrentPage : filteredSearch

  const handleNext = () => {
    setCurrentPage(prev => (prev + 1) % totalPaginationPages)
  }

  const handlePrevious = () => {
    setCurrentPage(
      prev => (prev - 1 + totalPaginationPages) % totalPaginationPages
    )
  }

  return {
    loading,
    error,
    search,
    setSearch,
    currentPage,
    totalPaginationPages,
    filteredSearch,
    listCharacters,
    handleNext,
    handlePrevious
  }
}
