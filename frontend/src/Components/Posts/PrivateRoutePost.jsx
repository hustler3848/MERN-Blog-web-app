import React from 'react'
import { useSelector } from "react-redux";
import CreatePost from './CreatePost';
import { Navigate } from 'react-router-dom';
function PrivateRoutePost() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <CreatePost /> : <Navigate to="/login" />;
}

export default PrivateRoutePost