/// <reference types="@testing-library/jest-dom" />

import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_CHARACTERS, useHomeController } from './useHomeController'

//1. Arranges

const mocks = [
  {
    request: {
      query: GET_CHARACTERS
    },
    result: {
      data: {
        characters: {
          results: []
        }
      }
    },
    delay: 1000
  }
]

const emptyData = {
  characters: {
    results: []
  }
}

const mocksNoResults = [
  {
    request: {
      query: GET_CHARACTERS
    },
    result: {
      data: emptyData
    }
  }
]

const characterData = {
  characters: {
    results: [
      { id: '1', name: 'Character One', image: 'url-to-image1.jpg' },
      { id: '2', name: 'Character Two', image: 'url-to-image2.jpg' }
    ]
  }
}

const mocksWithData = [
  {
    request: {
      query: GET_CHARACTERS
    },
    result: {
      data: characterData
    }
  }
]

function TestComponent() {
  const { data, loading, error } = useHomeController()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return data.length === 0 ? (
    <p>Nenhum item encontrado</p>
  ) : (
    <div>
      {data.map(char => (
        <p key={char.id}>{char.name}</p>
      ))}
    </div>
  )
}

describe('useHomeController', () => {
  it('should handle loading state correctly', async () => {
    // 2. Act
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestComponent />
      </MockedProvider>
    )

    // 3. Assert
    const loadingText = await screen.findByText(
      'Loading...',
      {},
      { timeout: 1100 }
    )
    expect(loadingText).toBeInTheDocument()

    await waitFor(
      () => {
        expect(screen.queryByText('Loading...')).toBeNull()
      },
      { timeout: 1100 }
    )
  })

  it('should handle received data correctly', async () => {
    // 2. Act
    render(
      <MockedProvider mocks={mocksWithData} addTypename={false}>
        <TestComponent />
      </MockedProvider>
    )

    // 3. Assert
    await waitFor(() => {
      const firstCharacter = screen.getByText('Character One')
      const secondCharacter = screen.getByText('Character Two')
      expect(firstCharacter).toBeInTheDocument()
      expect(secondCharacter).toBeInTheDocument()
    })
  })

  it('should display "Nenhum item encontrado" when no results are returned', async () => {
    // 2. Act
    render(
      <MockedProvider mocks={mocksNoResults} addTypename={false}>
        <TestComponent />
      </MockedProvider>
    )

    // 3. Assert
    await waitFor(() => {
      expect(screen.getByText('Nenhum item encontrado')).toBeInTheDocument()
    })
  })
})
