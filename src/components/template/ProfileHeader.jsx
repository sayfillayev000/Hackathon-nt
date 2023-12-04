import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = ({ active: propActive }) => {
  const [active, setActive] = useState(propActive);

  const Items = [
    {
      name: 'Profile',
      path: '/profile',
    },
    {
      name: 'Security',
      path: '/profile/security',
    },
    {
      name: 'Settings',
      path: '/profile/settings',
    },
  ];

  return (
    <header>
      <ul>
        {Items.map((item, index) => (
          <li key={index} className="profile_item">
            <NavLink
              to={item.path}
              className={`nav_link ${active === item.name ? 'active' : ''}`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ProfileHeader;
