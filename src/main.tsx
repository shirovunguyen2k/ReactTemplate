import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Product from "./component/Product.tsx";
import AppKeeper from "./component/AppKeeper.tsx";
import ErrorPage from "./component/Error.tsx";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AppKeeper",
        element: <AppKeeper />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
