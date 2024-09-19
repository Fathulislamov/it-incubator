import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
  RouteObject,
  Outlet,
} from "react-router-dom";
import App from "../App";
import { Abibas } from "../components/pages/Abibas";
import { Adidas } from "../components/pages/Adidas";
import { Croses } from "../components/pages/Croses";
import { Error404 } from "../components/pages/Error404";
import { Login } from "../components/pages/Login";
import { Model } from "../components/pages/Model";
import { Prices } from "../components/pages/Prices";
import { ProtectedPage } from "../components/pages/ProtectedPage";
import { Puma } from "../components/pages/Puma";
import { ProtectedRoute } from "./ProtectedRoute";

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECTED_PAGE: '/protected-page',
  ERROR: '/error',
  LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas />
  },
  {
    path: PATH.PUMA,
    element: <Puma />
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas />
  },
  {
    path: PATH.PRICES,
    element: <Prices />
  },
  {
    path: PATH.MODEL,
    element: <Model />
  },
  {
    path: PATH.ERROR,
    element: <Error404 />
  },
  {
    path: PATH.LOGIN,
    element: <Login />
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED_PAGE,
    element: <ProtectedPage />
  },
]



export const PrivateRoutes = () => {
  const isAuth = false
  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={PATH.ERROR} />,
    children: [
      ...publicRoutes,
			{
				element: <PrivateRoutes />,
				children: [...privateRoutes]
			}
    ]
  },
]);

