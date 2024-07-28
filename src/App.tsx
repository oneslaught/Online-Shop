import * as React from "react";

import AboutUs from "./components/AboutUs";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
// import NewProducts from "./components/NewProducts";
import OnSale from "./components/OnSale";
import Slider from "./components/Slider";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      {/* <NewProducts /> */}
      <OnSale />
      <AboutUs />
      <ImageGallery />
    </>
  );
}
