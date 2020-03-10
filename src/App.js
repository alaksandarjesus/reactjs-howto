import React from "react";
import "./styles.css";
import Howto from "./howto";

export default function App() {
  function stateLiftedUp() {
    alert("I am executed from parent component");
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Howto name="Alpha" onStateLiftedUp={stateLiftedUp} />
    </div>
  );
}
