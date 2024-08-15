import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUsPage from "./components/About Us Page/AboutUsPage";
import HomePage from "./components/Home Page/HomePage";
import "./styles/app.css";
import ScrollToTop from "./utils/RouteScrollToTop";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<HomePage />} index />
          <Route element={<AboutUsPage />} path="/about-us" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
