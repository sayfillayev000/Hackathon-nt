import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/register" replace />;
  } else {
    return <Outlet />;
  }

};

export default ProtectRoutes;
