import { render, screen, fireEvent } from '@testing-library/react'
import MultiToggle from '.'

describe('MultiToggle', () => {
  it('[getAllByRole] - should display true if correct button is clicked', () => {
    render(<MultiToggle />)
    const [firstButton] = screen.getAllByRole('button')
    const result = screen.getByText(/result/i)

    fireEvent.click(firstButton)

    expect(result.textContent).toMatch(/true$/i)
  })

  it('[getByRole] - should display true if button correct is clicked', () => {
    render(<MultiToggle />)
    const button = screen.getByRole('button', {
      name: 'Click me'
    })
    const result = screen.getByText(/result/i)

    fireEvent.click(button)

    expect(result.textContent).toMatch(/true$/i)
  })
})
