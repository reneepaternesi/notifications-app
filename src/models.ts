export enum NotificationType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

export interface INotification {
  id: string
  type: NotificationType
  title: string
  description: string
  read: boolean
  metrics?: string // should be model better based on metrics content
}

export type NotificationsContextType = {
  notifications: INotification[]
  setNotifications: (notifications: INotification[]) => void
}
