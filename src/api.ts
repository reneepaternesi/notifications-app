import { INotification, NotificationType } from './models'

const notifications: INotification[] = [
  {
    id: '1',
    type: NotificationType.INFO,
    title: 'Info',
    description: 'This is an info notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '2',
    type: NotificationType.INFO,
    title: 'Info',
    description: 'This is an info notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '3',
    type: NotificationType.SUCCESS,
    title: 'Success',
    description: 'This is a success notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '4',
    type: NotificationType.SUCCESS,
    title: 'Success',
    description: 'This is a success notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '5',
    type: NotificationType.WARNING,
    title: 'Warning',
    description: 'This is a warning notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '6',
    type: NotificationType.WARNING,
    title: 'Warning',
    description: 'This is a warning notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '7',
    type: NotificationType.ERROR,
    title: 'Error',
    description: 'This is an error notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '8',
    type: NotificationType.ERROR,
    title: 'Error',
    description: 'This is an error notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '9',
    type: NotificationType.INFO,
    title: 'Info',
    description: 'This is an info notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '10',
    type: NotificationType.INFO,
    title: 'Info',
    description: 'This is an info notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '11',
    type: NotificationType.SUCCESS,
    title: 'Success',
    description: 'This is a success notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '12',
    type: NotificationType.SUCCESS,
    title: 'Success',
    description: 'This is a success notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '13',
    type: NotificationType.WARNING,
    title: 'Warning',
    description: 'This is a warning notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '14',
    type: NotificationType.WARNING,
    title: 'Warning',
    description: 'This is a warning notification',
    read: false,
    metrics: 'metrics'
  },
  {
    id: '15',
    type: NotificationType.ERROR,
    title: 'Error',
    description: 'This is an error notification',
    read: true,
    metrics: 'metrics'
  },
  {
    id: '16',
    type: NotificationType.ERROR,
    title: 'Error',
    description: 'This is an error notification',
    read: false,
    metrics: 'metrics'
  }
]

/**
 * Get all records for a customer
 * @param orgId
 * @returns
 */
export async function getAllCustomerRecords(orgId: number): Promise<INotification[]> {
  // const response = fetch(`/api/anomaly-service/${orgId}/`)
  // return response
  return notifications
}

/**
 * Get all unread records for a customer
 * @param orgId
 * @returns
 */
export async function getAllUnreadCustomerRecords(orgId: number): Promise<INotification[]> {
  // const response = fetch(`/api/anomaly-service/${orgId}/unread`)
  // return response
  const updatedNotifications = notifications.filter((notification) => !notification.read)
  return updatedNotifications
}
/**
 * Mark all unread records as read for a customer
 * @param orgId
 * @returns
 */
export async function setAllCustomerRecordsAsRead(orgId: number): Promise<INotification[]> {
  //   const response = fetch(`/api/anomaly-service/${orgId}/mark-read`, {
  //     method: 'POST'
  //   })
  //   return response
  const updatedNotifications = notifications.map((notification: INotification) => {
    return {
      ...notification,
      read: true
    }
  })
  return updatedNotifications
}

/**
 * Mark the provided record id as read for a customer
 * @param orgId
 * @param recordsId
 * @returns
 */
export async function setCustomerRecordsAsRead(orgId: number, recordsId: string[]): Promise<INotification[]> {
  // const response = fetch(`/api/anomaly-service/${orgId}/mark-read?messageId={recordId:int}[,{recordId:int}, ...]`, {
  //   method: 'POST'
  // })
  // return response
  let notificationsAsRead: INotification[] = notifications.filter(
    (notification: INotification) => recordsId.indexOf(notification.id) !== -1
  )

  const updatedNotifications = notificationsAsRead.map((notification: INotification) => {
    return { ...notification, read: true }
  })
  return updatedNotifications
}
