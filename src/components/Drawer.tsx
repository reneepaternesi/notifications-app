import React, { ReactNode } from 'react'
import { Drawer } from '@mui/material'

interface CustomDrawerProps {
  open: boolean
  children: ReactNode
  toggleDrawer: (open: boolean) => void
}

const CustomDrawer = ({ open, children, toggleDrawer }: CustomDrawerProps) => {
  const toggleCustomDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }
    toggleDrawer(open)
  }

  return (
    <div data-testid="drawer">
      <React.Fragment>
        <Drawer anchor="right" open={open} onClose={toggleCustomDrawer(false)}>
          {children}
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default CustomDrawer
