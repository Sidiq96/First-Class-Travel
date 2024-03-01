import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
    </>
  );
}

export default App;
