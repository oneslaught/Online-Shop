import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";

// import ImageCarousel from "./components/ImageCarousel";
// import Navbar from "./components/Navbar";
// import NewProducts from "./components/NewProducts";
import NewSlider from "./components/NewSlider";
import "./styles/app.css";

export default function App() {
  return (
    <>
      {/* <Navbar />
      <ImageCarousel />
      <NewProducts /> */}
      <NewSlider />
    </>
  );
}
