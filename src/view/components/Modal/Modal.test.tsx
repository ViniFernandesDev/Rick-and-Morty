import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'

type ModalProps = React.ComponentProps<typeof Modal>

describe('Modal', () => {
  let props: ModalProps

  beforeEach(() => {
    props = {
      open: false,
      title: 'Test Modal',
      subTitle: 'Test Subtitle',
      children: <div>Test Content</div>,
      onClose: jest.fn()
    }
  })

  it('should not render when open is false', () => {
    // Arrange
    props.open = false

    // Act
    render(<Modal {...props} />)

    // Assert
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument()
  })

  it('should render title, subtitle, and children when open is true', () => {
    // Arrange
    props.open = true

    // Act
    render(<Modal {...props} />)

    // Assert
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should call onClose when close button is clicked', () => {
    // Arrange
    props.open = true // Ensure modal is visible for the test

    // Act
    render(<Modal {...props} />)
    const closeButton = screen.getByText('X')
    fireEvent.click(closeButton)

    // Assert
    expect(props.onClose).toHaveBeenCalledTimes(1)
  })
})
