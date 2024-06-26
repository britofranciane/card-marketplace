import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticatedUser } from './authService';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = isAuthenticatedUser();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
