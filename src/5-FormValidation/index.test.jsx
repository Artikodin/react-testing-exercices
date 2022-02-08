import { render } from '@testing-library/react'
import FormValidation from '.'

describe('FormValidation', () => {
  it('should display title with correct fullname', () => {
    render(<FormValidation />)
  })
})
