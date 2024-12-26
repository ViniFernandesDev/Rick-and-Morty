import { create } from 'zustand'
import { Character } from '../app/utils/types'

interface FavoriteState {
  favorites: Character[]
  addFavorite: (character: Character) => void
  removeFavorite: (id: string) => void
  removeAllFavorites: () => void
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
    })),
  removeAllFavorites: () => set(() => ({ favorites: [] }))
}))
