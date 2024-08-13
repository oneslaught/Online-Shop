import * as React from "react";

import ContactUs from "../Reusable Components/ContactUs";
import Navbar from "../Reusable Components/Navbar";
import FurnitureCategories from "./FurnitureCategories";
import FurnitureExpirience from "./FurnitureExperience";
import ImageGallery from "./ImageGallery";
import LearnMore from "./LearnMore";
import NewCollections from "./NewCollections";
import OnSale from "./OnSale";
import Slider from "./Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <OnSale />
      <LearnMore />
      <NewCollections />
      <FurnitureCategories />
      <FurnitureExpirience />
      <ImageGallery />
      <ContactUs />
    </>
  );
}
