import { render } from '@testing-library/react'
import Toggle from '.'

describe('Toggle', () => {
  it('should display true if button is clicked', () => {
    render(<Toggle />)
  })
})
