import React from 'react';
import { BrowserRouter, NavLink, Outlet } from 'react-router-dom';
import ProfileHeader from '../../../components/template/ProfileHeader';
import Profile from './Profile';

const Index = () => {
  return (
    <>
      <main>
        <Profile />
        <Outlet />
      </main>
    </>
  );
};

export default Index;
