import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import HomePage from "./component/HomePage";

function App() {
  return (
    <div className="page-width">
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </div>
  );
}

export default App;
