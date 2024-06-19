import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register, Dashboard, CardDetail, CreateTrade, MyTrades, Profile } from '../pages';

const RouteConfig: React.FC = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="card/:id" element={<CardDetail />} />
        <Route path="create-trade" element={<CreateTrade />} />
        <Route path="my-trades" element={<MyTrades />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RouteConfig;