import { render, screen } from '@testing-library/react'
import Drawer from '../components/Drawer'

const toggleDrawer = jest.fn()

describe('Drawer Component', () => {
  const setup = () =>
    render(
      <Drawer open={true} toggleDrawer={toggleDrawer}>
        test
      </Drawer>
    )

  it('should exist on document', () => {
    setup()
    const testComponent = screen.getByTestId('drawer')
    expect(testComponent).toBeInTheDocument()
  })

  it('should display text', () => {
    setup()
    const testElement = screen.getByText(/test/)
    expect(testElement).toBeInTheDocument()
  })
})
