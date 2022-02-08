import { render } from '@testing-library/react'
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
  })
  it('should display data', async () => {
    render(<DeferedComponent />)
  })
})
