/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button component', () => {
  it('renders with the correct type attribute', () => {
    render(<Button type="submit">Submit</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Submit' })
    expect(buttonElement.getAttribute('type')).toBe('submit')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick}>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const buttonElement = screen.getByRole('button', {
      name: 'Disabled Button'
    })

    expect(buttonElement).toBeDisabled()
  })

  it('is not disabled when disabled prop is false', () => {
    render(<Button>Enabled Button</Button>)
    const buttonElement = screen.getByRole('button', { name: 'Enabled Button' })

    expect(buttonElement).not.toBeDisabled()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const buttonElement = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
