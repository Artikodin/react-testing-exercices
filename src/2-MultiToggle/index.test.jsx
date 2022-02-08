import { render } from '@testing-library/react'
import MultiToggle from '.'

describe('MultiToggle', () => {
  it('[getAllByRole] - should display true if correct button is clicked', () => {
    render(<MultiToggle />)
  })

  it('[getByRole] - should display true if button correct is clicked', () => {
    render(<MultiToggle />)
  })
})
