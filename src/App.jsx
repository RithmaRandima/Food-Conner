import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeaderCards from "./components/HeaderCards";
import Food from "./components/Food";
import Category from "./components/Category";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeaderCards />
      <Food />
      <Category />
    </div>
  );
};

export default App;
