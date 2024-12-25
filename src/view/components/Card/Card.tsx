import { ComponentProps } from 'react'
import { useFavoritesStore } from '../../../store/useFavoritesStore'

import { Star } from '../../../assets/Star'
import { Trash } from '../../../assets/Trash'

interface CardProps extends ComponentProps<'div'> {
  name: string
  image: string
  id: string
}

export function Card({ name, image, id }: CardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
  const isFavorite = favorites.includes(id)

  return (
    <div
      className="bg-white h-50 w-60 rounded-xl text-center flex items-center justify-center flex-col"
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
          onClick={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}
        >
          {isFavorite ? <Trash /> : <Star />}
        </button>
      </div>
    </div>
  )
}
