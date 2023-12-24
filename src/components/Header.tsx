import React, { useState, useEffect, useCallback } from 'react'
import { AppBar, Box, Toolbar, Typography, Button, Stack, Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CustomDrawer from './Drawer'
import Notification from './Notification'
import { INotification } from '../models'
import Repository from '../repository'
import { useNotifications } from '../NotificationsContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { notifications, setNotifications } = useNotifications()
  const navigate = useNavigate()

  const setAllNotificationsAsRead = async () => {
    const updatedNotifications: INotification[] = await Repository.setAllCustomerRecordsAsRead(1) //fake orgId
    setNotifications(updatedNotifications)
  }

  const setNotificationsAsRead = useCallback(async () => {
    const recordsId: string[] = notifications.filter((notification) => notification.read).map((notification) => notification.id)

    const updatedNotifications: INotification[] = await Repository.setCustomerRecordsAsRead(1, recordsId) //fake orgId
    setNotifications(updatedNotifications)
  }, [notifications, setNotifications])

  const setNotificationAsRead = (notificationID: string) => {
    const updatedNotifications: INotification[] = notifications.map((notification: INotification) =>
      notification.id === notificationID ? { ...notification, read: true } : notification
    )
    setNotifications(updatedNotifications)
  }

  const handleNotificationClick = (notificationId: string) => {
    setNotificationAsRead(notificationId)
    setOpenDrawer(false)
    navigate('/metric', { state: { id: notificationId } })
  }

  useEffect(() => {
    const getNotifications = async () => {
      const notifications = await Repository.getAllUnreadCustomerRecords(1) // fake orgId
      setNotifications(notifications)
    }

    setIsLoading(true)
    getNotifications()
      .catch(console.error)
      .finally(() => setIsLoading(false))

    return () => {
      // call  bulk update based on context data on component unmount
      setNotificationsAsRead()
    }
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Notification App
          </Typography>
          <Button color="inherit" variant="outlined" onClick={() => setOpenDrawer(true)} data-testid="notification-btn">
            Notifications
          </Button>
        </Toolbar>
        <CustomDrawer open={openDrawer} toggleDrawer={setOpenDrawer}>
          <Box sx={{ padding: 4, width: { xs: '15rem', sm: '25rem', lg: '30rem' } }}>
            {isLoading && (
              <Typography variant="body1" component="div" sx={{ margin: 2, fontWeight: 'bold', minWidth: '571px' }}>
                Loading ...
              </Typography>
            )}
            {!isLoading && notifications.length === 0 && (
              <Typography variant="body1" component="div" sx={{ margin: 2, fontWeight: 'bold' }}>
                There are no unread notifications
              </Typography>
            )}
            {!isLoading && notifications.length > 0 && (
              <>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ marginBottom: 3 }}>
                  <Typography variant="body1" component="div" sx={{ margin: 2, fontWeight: 'bold' }}>
                    Unread Notifications
                  </Typography>
                  <Button variant="contained" size="small" sx={{ maxHeight: '3rem' }} onClick={() => setAllNotificationsAsRead()}>
                    Set All As Read
                  </Button>
                </Grid>
                <Stack sx={{ width: '100%' }} spacing={2}>
                  {notifications
                    .filter((notification: INotification) => !notification.read)
                    .map((notification: INotification) => (
                      <Notification
                        notification={notification}
                        key={notification.id}
                        handleSetAsRead={() => setNotificationAsRead(notification.id)}
                        handleClick={() => handleNotificationClick(notification.id)}
                      />
                    ))}
                </Stack>
              </>
            )}
          </Box>
        </CustomDrawer>
      </AppBar>
    </Box>
  )
}

export default Header
