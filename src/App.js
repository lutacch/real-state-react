import React from "react";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Best/>
      <Featured/>
    </div>
  );
}

export default App;
