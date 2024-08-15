import React from "react";

import ContactUs from "../Reusable Components/ContactUs";
import Navbar from "../Reusable Components/Navbar";
import FeatureHighlight from "./FeatureHighlight";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <FeatureHighlight />
      <ContactUs />
    </>
  );
}
