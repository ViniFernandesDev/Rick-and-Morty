// Assuming useFavoritesStore is defined in a file at ./store/useFavoritesStore
import { render, screen, fireEvent } from '@testing-library/react'
import * as store from './useFavoritesStore' // Import the module
import { Card } from '../view/components/Card/Card'

jest.mock('./useFavoritesStore') // Mock the entire module

describe('Card Component', () => {
  let favoritesMock: string[]

  beforeEach(() => {
    favoritesMock = []

    // Setup the mock implementation
    store.useFavoritesStore.mockReturnValue({
      favorites: favoritesMock,
      addFavorite: jest.fn(id => favoritesMock.push(id)),
      removeFavorite: jest.fn(id => {
        const index = favoritesMock.indexOf(id)
        if (index > -1) {
          favoritesMock.splice(index, 1)
        }
      })
    })
  })

  it('should call addFavorite and add id to favorites when button is clicked and it is not a favorite', () => {
    render(<Card id="1" name="Rick" image="/path/to/rick.png" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(store.useFavoritesStore().addFavorite).toHaveBeenCalledWith('1')
    expect(store.useFavoritesStore().favorites).toContain('1')
  })
})
