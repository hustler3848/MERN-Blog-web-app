import React from 'react'
import { useSelector } from "react-redux";
import CreatePost from './CreatePost';
import { Navigate } from 'react-router-dom';
function PrivateRoutePost() {
  const { currentUserOfBloggingApp } = useSelector((state) => state.userOfBloggingApp);
  return currentUserOfBloggingApp ? <CreatePost /> : <Navigate to="/login" />;
}

export default PrivateRoutePost