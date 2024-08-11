import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { RouterExample } from "./components/About Us Page/RouterExample";
import HomePage from "./components/Home Page/HomePage";
import "./styles/app.css";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <RouterExample />,
    path: "/about-us",
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
