import * as React from "react";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FurnitureCategories from "./components/FurnitureCategories";
import FurnitureExpirience from "./components/FurnitureExperience";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import NewCollections from "./components/NewCollections";
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
      <NewCollections />
      <FurnitureCategories />
      <FurnitureExpirience />
      <ImageGallery />
      <ContactUs />
    </>
  );
}
