import { Outlet } from 'react-router-dom'

import { FavoriteShow } from '../components/FavoriteShow/FavoriteShow'
import { Modal } from '../components/Modal/Modal'
import { Card } from '../components/Card/Card'
import { Button } from '../components/Button/Button'

import { useInternalsController } from './useInternalsController'
import { useFavoritesStore } from '../../store/useFavoritesStore'

export function Internals() {
  const {
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  } = useInternalsController()

  const { favorites, removeAllFavorites } = useFavoritesStore()

  return (
    <div className="flex w-full h-full">
      <FavoriteShow
        openModal={handleOpenFiltersModal}
        isDisabled={favorites.length === 0}
      />

      <Modal
        open={isFiltersModalOpen}
        onClose={handleCloseFiltersModal}
        title="Seus Favoritos"
        subTitle="Explore seus favoritos no universo de Rick e Morty, reunidos aqui para você!"
      >
        <section className="flex items-center justify-center flex-wrap gap-5 mt-14">
          {favorites.length > 1 && (
            <div className="w-full text-center ">
              <Button
                onClick={() => {
                  removeAllFavorites()
                  handleCloseFiltersModal()
                }}
                className="bg-gray-200 hover:bg-gray-300 text-md h-auto py-1 rounded-lg hover:shadow"
              >
                Remover todos
              </Button>
            </div>
          )}
          {favorites?.map(character => (
            <Card
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </section>
      </Modal>

      <Outlet />
    </div>
  )
}
