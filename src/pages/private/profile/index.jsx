import Container from "../../../components/template/Container";
import React, { Profiler } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProfileHeader from "../../../components/template/ProfileHeader";

const Index = () => {
  return (
    <>
      <Container className={"profile_container"}>
        <ProfileHeader />
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Index;
