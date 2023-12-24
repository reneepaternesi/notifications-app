import React from 'react'
import { Alert, AlertTitle, Badge, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { INotification } from '../models'

interface NotificationProps {
  notification: INotification
  handleSetAsRead: () => void
  handleClick: (notificationId: string) => void
}

const Notification = ({ notification, handleSetAsRead, handleClick }: NotificationProps) => {
  return (
    <Badge
      color="error"
      badgeContent="Read"
      invisible={notification.read}
      sx={{ width: '100%', cursor: 'pointer' }}
      onClick={() => handleClick(notification.id)}
      data-testid={`notification_${notification.id}`}
    >
      <Alert severity={notification.type} sx={{ width: '100%' }}>
        <AlertTitle>{notification.title}</AlertTitle>
        {notification.description}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="success"
                checked={notification.read}
                onClick={(e) => {
                  e.stopPropagation()
                  handleSetAsRead()
                }}
                data-testid={`read-checkbox_${notification.id}`}
              />
            }
            label="Mark as read"
          />
        </FormGroup>
      </Alert>
    </Badge>
  )
}

export default Notification
