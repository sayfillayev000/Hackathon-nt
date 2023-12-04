import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = () => {
  const [active, setActive] = useState('');
  useEffect(() => {
    document.addEventListener("DOMContentLoaded",()=>{
      setActive('Profile')
    })
  },[])
  const handleChangeActive = (propActive) => {
    if (active === propActive) {
      return;
    }
    setActive(propActive);
  };

  const Items = [
    {
      name: 'Profile',
      path: '/profile/' || "/profile/profile",
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
              onClick={() => handleChangeActive(item.name)}
            >
              <span className='number_item'>
                {index+1}
              </span>
              <span data-type = "link_name">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ProfileHeader;
