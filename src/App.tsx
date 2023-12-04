import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectRoutes from "./components/route/ProtectRoutes";
import { authRoutes, protectRoutes, Route as RouteType } from "./configs/routes";
import { useSelector } from "react-redux";
import AppRoute from "./components/route/AppRoute";
import ChackAuth from "./components/route/ChackAuth";
import "./scss/index.scss";

interface AppState {
  session: {
    singIn: boolean;
  };
  user: {
    role: string; // Update the type according to your user role data
  };
}

const App: React.FC = () => {
  const { singIn } = useSelector((state: AppState) => state.session);
  const { role } = useSelector((state: AppState) => state.user);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Protect Routes */}
        {protectRoutes.map(({ key, path, role: routeRole, component, children }: RouteType) => (
          <Route
            key={key}
            path={path}
            element={
              <ChackAuth userRole={role} role={routeRole}>
                <AppRoute component={component} />
              </ChackAuth>
            }
          >
            {children?.map(({ key, path, role: childRouteRole, component }: RouteType) => (
              <Route
                key={key}
                path={path}
                element={
                  <ChackAuth userRole={role} role={childRouteRole}>
                    <AppRoute component={component} />
                  </ChackAuth>
                }
              />
            ))}
          </Route>
        ))}

        {/* Auth Routes */}
        {authRoutes.map(({ key, path, component }: RouteType) => (
          <Route
            key={key}
            path={path}
            element={<AppRoute component={component} />}
          />
        ))}

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Suspense>
  );
};

export default App;
