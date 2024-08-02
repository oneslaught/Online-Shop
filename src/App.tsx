import * as React from "react";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// import FurnitureShowcase from "./components/FurnitureShowcase";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import OnSale from "./components/OnSale";
import Slider from "./components/Slider";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <OnSale />
      <AboutUs />
      <ImageGallery />
      {/* <FurnitureShowcase /> */}
      <ContactUs />
    </>
  );
}
