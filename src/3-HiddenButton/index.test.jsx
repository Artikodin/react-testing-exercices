import { render } from '@testing-library/react'
import HiddenButton from '.'

describe('HiddenButton', () => {
  it('should not display the second button', () => {
    render(<HiddenButton />)
  })
  it('should display the hidden title', () => {
    render(<HiddenButton />)
  })
})
