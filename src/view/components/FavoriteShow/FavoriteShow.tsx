import portal from '../../../assets/portal.png'
import { useFavoritesStore } from '../../../store/useFavoritesStore'

interface FavoriteShowProps {
  openModal: () => void
}

export function FavoriteShow({ openModal }: FavoriteShowProps) {
  const { favorites } = useFavoritesStore()

  return (
    <button
      onClick={openModal}
      className="group absolute right-4 top-4 flex flex-col items-center gap-2 font-getSchwifty text-white "
    >
      <div className="relative flex justify-center items-center">
        <img
          src={portal}
          className="max-w-[500px] inline-block animate-portal"
        />
        <span className="absolute text-4xl text-spaceBlack pt-1">
          {favorites.length ?? ''}
        </span>
      </div>
      <span className="text-2xl group-hover:animate-shake-text">Favoritos</span>
    </button>
  )
}
