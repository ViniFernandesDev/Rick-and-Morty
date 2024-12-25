import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('should render with basic properties', () => {
    render(<Input placeholder="Enter your name" name="username" />)
    const inputElement = screen.getByPlaceholderText('Enter your name')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', 'username')
  })

  it('should handle onChange event', () => {
    const handleChange = jest.fn()
    const testValue = 'New Input'

    render(
      <Input placeholder="Type here" name="testInput" onChange={handleChange} />
    )

    const inputElement = screen.getByPlaceholderText('Type here')
    fireEvent.change(inputElement, { target: { value: testValue } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: testValue })
      })
    )
  })
})
