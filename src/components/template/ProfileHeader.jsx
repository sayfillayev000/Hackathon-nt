import React from 'react'
import { NavLink } from 'react-router-dom'
const ProfileHeader = () => {
    return (
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
    )
}

export default ProfileHeader