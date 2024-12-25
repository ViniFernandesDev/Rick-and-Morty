import { create } from 'zustand'

interface FavoriteState {
  favorites: string[]
  addFavorite: (id: string) => void
  removeFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoriteState>(set => ({
  favorites: [],
  addFavorite: id =>
    set(state => ({
      favorites: [...state.favorites, id]
    })),
  removeFavorite: id =>
    set(state => ({
      favorites: state.favorites.filter(favorite => favorite !== id)
    }))
}))
