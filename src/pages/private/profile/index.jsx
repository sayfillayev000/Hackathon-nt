import React from 'react';
import { BrowserRouter, NavLink, Outlet } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <ul>
            <li className="profile_item">
              <NavLink to="/profile" className="nav_link">Profile</NavLink>
            </li>
            <li className="profile_item">
              <NavLink to="/profile/security" className="nav_link">Security</NavLink>
            </li>
            <li className="profile_item">
              <NavLink to="/profile/settings" className="nav_link">Settings</NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
      </BrowserRouter>
    </>
  );
};

export default Index;
