import React from "react";
import "./App.css";
import Header from "./components/Header";
import Box from "./components/Box";
import Home from "./components/Home";
import Users from "./components/Users";
import Countries from "./components/Countries";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home />
      <Users/> */}
      <Countries/>
      </div>
  );
}

export default App;
