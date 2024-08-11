import * as React from "react";

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FurnitureCategories from "./FurnitureCategories";
import FurnitureExpirience from "./FurnitureExperience";
import ImageGallery from "./ImageGallery";
import Navbar from "./Navbar";
import NewCollections from "./NewCollections";
import OnSale from "./OnSale";
import Slider from "./Slider";

export default function Home() {
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
