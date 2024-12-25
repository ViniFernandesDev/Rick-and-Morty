import { create } from 'zustand'

interface Character {
  id: string
  name: string
  image: string
}

interface FavoriteState {
  favorites: Character[]
  addFavorite: (character: Character) => void
  removeFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoriteState>(set => ({
  favorites: [],
  addFavorite: character =>
    set(state => ({
      favorites: [...state.favorites, character]
    })),
  removeFavorite: id =>
    set(state => ({
      favorites: state.favorites.filter(favorite => favorite.id !== id)
    }))
}))
