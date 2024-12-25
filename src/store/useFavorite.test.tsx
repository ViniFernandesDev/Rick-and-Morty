import { render, screen, fireEvent } from '@testing-library/react'
import * as store from './useFavoritesStore'
import { Card } from '../view/components/Card/Card'
import { Character } from '../app/utils/types'

jest.mock('./useFavoritesStore')

describe('Card Component', () => {
  let favoritesMock: Character[]

  beforeEach(() => {
    favoritesMock = []

    // Setup the mock implementation
    store.useFavoritesStore.mockReturnValue({
      favorites: favoritesMock,
      addFavorite: jest.fn(character => favoritesMock.push(character)),
      removeFavorite: jest.fn(id => {
        const index = favoritesMock.findIndex(fav => fav.id === id)
        if (index > -1) {
          favoritesMock.splice(index, 1)
        }
      })
    })
  })

  it('should call addFavorite and add the character to favorites when the button is clicked and it is not a favorite', () => {
    const character = { id: '1', name: 'Rick', image: '/path/to/rick.png' }
    render(<Card {...character} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(store.useFavoritesStore().addFavorite).toHaveBeenCalledWith(
      character
    )
    expect(store.useFavoritesStore().favorites).toContainEqual(character)
  })
})
