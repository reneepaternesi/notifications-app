import { render, screen, cleanup } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Header from '../components/Header'

describe('Header Component', () => {
  const setup = () =>
    render(
      <Router>
        <Header />
      </Router>
    )

  afterEach(cleanup)

  it('should exist on document', () => {
    setup()
    const testComponent = screen.getByTestId('header')
    expect(testComponent).toBeInTheDocument()
  })

  it('should has a title', () => {
    setup()
    const titleElement = screen.getByText(/Notification App/)
    expect(titleElement).toBeInTheDocument()
  })

  it('should has a notification button', () => {
    setup()
    const testComponent = screen.getByTestId('notification-btn')
    expect(testComponent).toBeInTheDocument()
  })
})
