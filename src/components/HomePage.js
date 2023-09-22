import React from "react";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div className="Home-div">
      <header className="App-header">
        <h1 className="display-1">borcell lamps</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-catchy-phrase">
          Illuminate Your Space with Elegance.
        </p>
      </header>
    </div>
  );
};

export default HomePage;
