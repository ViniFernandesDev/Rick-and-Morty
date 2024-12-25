import { useState } from 'react'

export function useInternalsController() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false)

  function handleOpenFiltersModal() {
    setIsFiltersModalOpen(true)
  }

  function handleCloseFiltersModal() {
    setIsFiltersModalOpen(false)
  }

  return {
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen
  }
}
