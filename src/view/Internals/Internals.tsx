import { Outlet } from 'react-router-dom'

import { FavoriteShow } from '../components/FavoriteShow/FavoriteShow'
import { Modal } from '../components/Modal/Modal'
import { Card } from '../components/Card/Card'

import { useInternalsController } from './useInternalsController'
import { useFavoritesStore } from '../../store/useFavoritesStore'

export function Internals() {
  const {
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal
  } = useInternalsController()

  const { favorites } = useFavoritesStore()

  return (
    <div className="flex w-full h-full">
      <FavoriteShow openModal={handleOpenFiltersModal} />

      <Modal
        open={isFiltersModalOpen}
        onClose={handleCloseFiltersModal}
        title="Seus Favoritos"
        subTitle="Explore seus favoritos no universo de Rick e Morty, reunidos aqui para você!"
      >
        <section className="flex items-center justify-center flex-wrap gap-5 mt-14">
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
