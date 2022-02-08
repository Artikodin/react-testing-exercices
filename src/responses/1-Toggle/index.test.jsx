import { render, screen, fireEvent } from '@testing-library/react'
import Toggle from '.'

describe('Toggle', () => {
  it('should display true if button is clicked', () => {
    render(<Toggle />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(button.textContent).toMatch(/true$/i)
  })
})
