/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../Dashboard'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {
  const { currentUserOfBloggingApp } = useSelector(
    (state) => state.userOfBloggingApp
  );
  console.log(currentUserOfBloggingApp);
  
    return currentUserOfBloggingApp ? <Dashboard /> : <Navigate to="/login" />;
}

export default PrivateRoute