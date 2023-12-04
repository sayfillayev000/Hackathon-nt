import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Register = lazy(() => import("../pages/auth/Register"));
const Login = lazy(() => import("../pages/auth/Login"));
const Home = lazy(() => import("../pages/private/Home"));
const Books = lazy(() => import("../pages/private/Books"));
const Profile = lazy(() => import("../pages/private/Profile"));
const Security = lazy(() => import("../pages/private/profile/Security"));
const Settings = lazy(() => import("../pages/private/profile/Settings"));
const CreateBook = lazy(() => import("../pages/private/create/CreateBook"));
const CreateAuthor = lazy(() => import("../pages/private/create/CreateAuthor"));

export const authRoutes = [
  {
    key: "register",
    path: "/register",
    component: Register,
  },
  {
    key: "login",
    path: "/login",
    component: Login,
  },
];
export const protectRoutes = [
  {
    key: "home",
    path: "/",
    role: ["admin", "user"],
    component: Home,
  },
  {
    key: "books",
    path: "/books",
    role: ["admin", "user"],
    component: Books,
  },
  {
    key: "profile",
    path: "/profile",
    role: ["admin", "user"],
    component: Profile,
    children: [
      {
        key: "security_profile",
        path: "/profile/security",
        role: ["admin", "user"],
        component: Security,
      },
      {
        key: "settings",
        path: "/profile/settings",
        role: ["admin", "user"],
        component: Settings,
      },
      // Add more child routes here if needed
    ],
  },
  {
    key: "security",
    path: "/security",
    role: ["admin", "user"],
    component: CreateAuthor,
  },
  {
    key: "create-book",
    path: "/create-book",
    role: ["admin"],
    component: CreateBook,
  },
  {
    key: "create-author",
    path: "/create-author",
    role: ["admin"],
    component: CreateAuthor,
  },
];

const Routes = { authRoutes, protectRoutes };

export default Routes;
