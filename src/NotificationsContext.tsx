import React, { useState, createContext, useContext, PropsWithChildren, useMemo } from 'react'
import { NotificationsContextType, INotification } from './models'

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: [] as INotification[],
  setNotifications: (notifications: INotification[]) => {}
})

const useNotifications = () => {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsContextProvider')
  }
  return context
}

const NotificationsContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [notifications, setNotifications] = useState<INotification[]>([])

  const value = useMemo(
    () => ({
      notifications,
      setNotifications
    }),
    [notifications]
  )

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>
}

export { NotificationsContext, NotificationsContextProvider, useNotifications }
