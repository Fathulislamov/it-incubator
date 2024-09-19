import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "../App";
import { Abibas } from "../components/pages/Abibas";
import { Adidas } from "../components/pages/Adidas";
import { Croses } from "../components/pages/Croses";
import { Error404 } from "../components/pages/Error404";
import { Model } from "../components/pages/Model";
import { Prices } from "../components/pages/Prices";
import { Puma } from "../components/pages/Puma";

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id'
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
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
    ]
  },
]);

