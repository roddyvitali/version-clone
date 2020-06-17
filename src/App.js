import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Feature2 = () => <p>New Feature 2.0</p>;
const Feature2 = () => <p>New Feature 2</p>;
const Feature = () => <p>New Feature</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Feature />
        <Feature2 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
