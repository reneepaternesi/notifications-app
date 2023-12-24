import { render, screen, fireEvent } from '@testing-library/react'
import Notification from '../components/Notification'
import { INotification, NotificationType } from '../models'

const handleSetAsRead = jest.fn()
const handleClick = jest.fn()
const notification: INotification = {
  id: '5',
  type: NotificationType.WARNING,
  title: 'Warning',
  description: 'This is a warning notification',
  read: true,
  metrics: 'metrics'
}

describe('Notification Component', () => {
  const setup = () => render(<Notification notification={notification} handleClick={handleClick} handleSetAsRead={handleSetAsRead} />)

  it('should exist on document', () => {
    setup()
    const testComponent = screen.getByTestId('notification_5')
    expect(testComponent).toBeInTheDocument()
  })

  it('should be a warning notification', () => {
    setup()
    const testComponent = screen.getByTestId('ReportProblemOutlinedIcon')
    expect(testComponent).toBeInTheDocument()
  })

  it('should has title', () => {
    setup()
    const titleElement = screen.getByText(/Warning/)
    expect(titleElement).toBeInTheDocument()
  })

  it('should has a description', () => {
    setup()
    const linkElement = screen.getByText(/This is a warning notification/)
    expect(linkElement).toBeInTheDocument()
  })

  it('should has a check control', () => {
    setup()
    const checkElement = screen.getByTestId('read-checkbox_5')
    expect(checkElement).toBeInTheDocument()
  })

  it('should call handleClick when clicked', () => {
    setup()
    const notification = screen.getByTestId('notification_5')
    fireEvent.click(notification)
    expect(handleClick).toBeCalled()
  })

  it('should call handleSetAsRead when checkbox is clicked', () => {
    setup()
    const checkbox = screen.getByTestId('read-checkbox_5')
    fireEvent.click(checkbox)
    expect(handleSetAsRead).toBeCalled()
  })
})
