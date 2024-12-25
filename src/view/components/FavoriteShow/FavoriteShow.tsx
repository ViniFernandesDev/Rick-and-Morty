import portal from '../../../assets/portal.png'
import { useFavoritesStore } from '../../../store/useFavoritesStore'

export function FavoriteShow() {
  const { favorites } = useFavoritesStore()

  return (
    <div className="absolute right-4 top-4 flex flex-col items-center gap-2 font-getSchwifty text-white ">
      <div className="relative flex justify-center items-center">
        <img
          src={portal}
          className="max-w-[500px] inline-block drop-shadow-portalGlow"
        />
        <span className="absolute text-4xl text-spaceBlack pt-1">
          {favorites.length ?? ''}
        </span>
      </div>
      <span className="text-2xl">Favoritos</span>
    </div>
  )
}
