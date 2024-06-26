import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Register,
  Dashboard,
  MyTrades,
  Profile,
  ErrorPage,
  MyCards,
} from '../pages';
import PrivateRoute from './PrivateRoute';

const RouteConfig: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route
        path="my-cards"
        element={
          <PrivateRoute>
            <MyCards />
          </PrivateRoute>
        }
      />
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="my-trades"
        element={
          <PrivateRoute>
            <MyTrades />
          </PrivateRoute>
        }
      />
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouteConfig;
