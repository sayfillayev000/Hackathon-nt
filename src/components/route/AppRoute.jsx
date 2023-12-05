import React from "react";

const AppRoute = ({ component: Component }) => {
  return Component ? <Component /> : "";
};

export default AppRoute;
