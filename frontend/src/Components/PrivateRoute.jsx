/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../Dashboard'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
  const {currentUser} = useSelector((state) => state.user)
    return (
    currentUser ? <Dashboard /> : <Navigate to='/login' />
  )
}

export default PrivateRoute