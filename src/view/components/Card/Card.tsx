import { ComponentProps } from 'react'
import { useFavoritesStore } from '../../../store/useFavoritesStore'

import { Star } from '../../../assets/Star'
import { Close } from '../../../assets/Close'

interface CardProps extends ComponentProps<'div'> {
  name: string
  image: string
  id: string
}

export function Card({ name, image, id }: CardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
  const isFavorite = favorites.some(favorite => favorite.id === id)

  return (
    <div
      className="bg-portalGreen h-50 w-60 rounded-xl text-center flex items-center justify-center flex-col"
      id={id}
      data-testid="card-container"
    >
      <img
        src={image}
        className="h-50 w-50 object-cover rounded-tr-xl rounded-t-xl"
        data-testid="card-image"
      />
      <div className="flex justify-between w-full px-3">
        <p className="text-sm font-bold my-2 text-spaceBlack">{name}</p>

        <button
          className={`drop-shadow-2xl hover:grayscale-0 transition-all ${isFavorite ? 'grayscale-0' : 'grayscale'} `}
          onClick={() =>
            isFavorite ? removeFavorite(id) : addFavorite({ id, name, image })
          }
        >
          {isFavorite ? <Close /> : <Star />}
        </button>
      </div>
    </div>
  )
}
