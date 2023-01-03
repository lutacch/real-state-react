import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find the perfect place</h1>
        <p className="search-text">
          Search the largest selection of apartments. Your next home is waiting
          for you.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter Keyword .." />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" checked />
            <label>Rent</label>
            <button type="submit">+</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
