import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUsPage from "./components/About Us Page/AboutUsPage";
import HomePage from "./components/Home Page/HomePage";
import ContactUs from "./components/Layout Components/ContactUs";
import Navbar from "./components/Layout Components/Navbar";
import SalePage from "./components/Sale Page/SalePage";
import "./styles/app.css";
import ScrollToTop from "./utils/RouteScrollToTop";

export default function App() {
  const basename = process.env.NODE_ENV === "production" ? "/Online-Shop" : "/";

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUsPage />} path="/about-us" />
          <Route element={<SalePage />} path="/sale" />
        </Routes>
        <ContactUs />
      </BrowserRouter>
    </>
  );
}
