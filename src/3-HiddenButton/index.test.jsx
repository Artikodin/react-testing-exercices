import { render, screen, fireEvent } from '@testing-library/react'
import HiddenButton from '.'

describe('HiddenButton', () => {
  it('should not display the second button', () => {
    render(<HiddenButton />)
    const secondButton = screen.queryByRole('button', { name: /second/i })

    expect(secondButton).not.toBeInTheDocument()
  })
  it('should display the hidden title', () => {
    render(<HiddenButton />)
    const firstButton = screen.getByRole('button', { name: /first/i })

    fireEvent.click(firstButton)
    const secondButton = screen.getByRole('button', { name: /second/i })

    expect(secondButton).toBeInTheDocument()

    fireEvent.click(secondButton)
    const hiddenTitle = screen.getByRole('heading', { name: /hidden/i })

    expect(hiddenTitle).toBeInTheDocument()
  })
})
