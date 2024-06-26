import * as React from "react";

import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Slider from "./components/Slider";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <NewProducts />
    </>
  );
}
