import Container from "../../../components/template/Container";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Container className={"profile_container"}>
        <header>
          <ul>
            <li className="profile_item">
              <NavLink to="/profile" className="nav_link">
                Profile
              </NavLink>
            </li>
            <li className="profile_item">
              <NavLink to="/profile/security" className="nav_link">
                Security
              </NavLink>
            </li>
            <li className="profile_item">
              <NavLink to="/profile/settings" className="nav_link">
                Settings
              </NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Index;
