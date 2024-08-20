import React from "react";

import ContactUs from "../Reusable Components/ContactUs";
import Navbar from "../Reusable Components/Navbar";
import FeatureHighlight from "./FeatureHighlight";
import GlobalBrand from "./GlobalBrand";
import Header from "./Header";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureHighlight />
      <GlobalBrand />
      <ContactUs />
    </>
  );
}
