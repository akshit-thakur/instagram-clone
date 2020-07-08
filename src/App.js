import React from "react";
import Navigation from "./components/navigation/navigationComponent";
import "./App.css";
import Home from "./components/home/homeComponent";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
