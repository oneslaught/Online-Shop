import * as React from "react";

import FurnitureCategories from "./FurnitureCategories";
import FurnitureExpirience from "./FurnitureExperience";
import ImageGallery from "./ImageGallery";
import LearnMore from "./LearnMore";
import NewCollections from "./NewCollections";
import OnSale from "./OnSale";
import Slider from "./Slider";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <OnSale />
      <LearnMore />
      <NewCollections />
      <FurnitureCategories />
      <FurnitureExpirience />
      <ImageGallery />
    </div>
  );
}
