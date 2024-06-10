import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
    </>
  );
}
