import { render, screen, waitFor } from '@testing-library/react'
import DeferedComponent from '.'

describe('DeferedComponent', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })
  it('should display error', async () => {
    render(<DeferedComponent hasError />)
    const loading = await screen.findByText(/loading/i)
    const error = await screen.findByText(/fail/i)

    expect(loading).toBeInTheDocument()
    expect(error).toBeInTheDocument()
  })
  it('should display data', async () => {
    render(<DeferedComponent />)
    const loading = await screen.findByText(/loading/i)
    const data = await screen.findByText(/data/i, {}, { timeout: 1101 })
    const get = screen.getByText(/data/i)

    expect(loading).toBeInTheDocument()
    expect(data).toBeInTheDocument()
    await waitFor(() => expect(get).toBeInTheDocument(), { timeout: 1101 })
  })
})
