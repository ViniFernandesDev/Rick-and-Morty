import { render, screen } from '@testing-library/react'
import { Card } from './Card'

const name = 'Test Card'
const image = 'test-image-url.jpg'
const id = 'test-card-id'

describe('Card', () => {
  it('props should be rendered correctly', () => {
    render(<Card name={name} image={image} id={id} />)

    const cardDiv = screen.getByTestId('card-container')
    expect(cardDiv).toHaveAttribute('id', id)

    const img = screen.getByTestId('card-image')
    expect(img).toHaveAttribute('src', image)

    const displayName = screen.getByText(name)
    expect(displayName).toBeInTheDocument()
  })
})
