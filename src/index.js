import React from "react";
import ReactDOM from "react-dom";
import BreakfastStudio from "./components/BreakfastStudio";

import "./App.css";

function App() {
  return <BreakfastStudio />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
