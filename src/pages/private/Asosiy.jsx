import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from ".";

const Asosiy = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Asosiy;
