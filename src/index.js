import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { Header } from "./components/Header";
import { Main } from "./Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Guide } from "./Guide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/play",
    element: <App></App>,
  },
  {
    path: "/guide",
    element: <Guide></Guide>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
  </React.StrictMode>
);
