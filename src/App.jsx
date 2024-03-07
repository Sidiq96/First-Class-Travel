import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
