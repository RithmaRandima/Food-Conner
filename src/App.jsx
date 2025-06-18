import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeaderCards from "./components/HeaderCards";
import Food from "./components/Food";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeaderCards />
      <Food />
    </div>
  );
};

export default App;
