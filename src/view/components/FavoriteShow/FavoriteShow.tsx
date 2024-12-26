import portal from '../../../assets/portal.png'
import { useFavoritesStore } from '../../../store/useFavoritesStore'

interface FavoriteShowProps {
  openModal: () => void
  isDisabled: boolean
}

export function FavoriteShow({ openModal, isDisabled }: FavoriteShowProps) {
  const { favorites } = useFavoritesStore()

  return (
    <button
      onClick={openModal}
      disabled={isDisabled}
      className={`z-120 group fixed right-2 top-2 flex flex-col items-center gap-2 font-getSchwifty text-white ${isDisabled ? 'grayscale' : 'grayscale-0'}`}
    >
      <div className="relative flex justify-center items-center">
        <img
          src={portal}
          className={`max-w-[500px] inline-block ${isDisabled ? '' : 'animate-portal'}`}
        />
        <span className="absolute text-4xl text-spaceBlack pt-1">
          {favorites.length ?? ''}
        </span>
      </div>
      <span
        className={`text-1xl sm:text-2xl ${isDisabled ? '' : 'group-hover:animate-shake-text'}`}
      >
        Favoritos
      </span>
    </button>
  )
}
