import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormValidation from '.'

describe('FormValidation', () => {
  it('should display title with correct fullname', () => {
    render(<FormValidation />)
    const header1 = screen.getByRole('heading')
    const firstName = screen.getByLabelText(/first/i)
    const lastName = screen.getByLabelText(/last/i)
    const submit = screen.getByRole('button')

    userEvent.click(firstName)
    userEvent.keyboard('John')
    userEvent.click(lastName)
    userEvent.keyboard('Doe')
    userEvent.click(submit)

    expect(header1.textContent).toMatch('John Doe')
  })
})
