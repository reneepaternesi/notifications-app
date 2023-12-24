import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import { INotification } from '../models'
import { useNotifications } from '../NotificationsContext'

const MetricDetail = () => {
  let { state } = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<INotification>()
  const { notifications } = useNotifications()

  useEffect(() => {
    setIsLoading(true)
    if (state.id) {
      setNotification(notifications.find((notification: INotification) => notification.id === state.id))
    }
    setIsLoading(false)
  }, [state.id])

  return (
    <Box sx={{ flexGrow: 1, margin: 5 }}>
      {isLoading && (
        <Typography variant="body1" component="div" sx={{ margin: 2, fontWeight: 'bold', minWidth: '571px' }}>
          Loading ...
        </Typography>
      )}
      {!isLoading && notification && (
        <>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Metric: {notification.title}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }}>
            {notification.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 3 }}>
            Status: {notification.read ? 'Read' : 'Unread'}
          </Typography>
        </>
      )}
    </Box>
  )
}

export default MetricDetail
