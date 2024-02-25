import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <section>
        <h1>Heading/Nav</h1>
        <Outlet />
        <h1>Footer</h1>
    </section>
  )
}

export default DashboardLayout