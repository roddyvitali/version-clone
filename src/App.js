import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Feature7 = () => <p>New Feature 7.0</p>;
const Feature6 = () => <p>New Feature 6.0</p>;
const Feature5 = () => <p>New Feature 5.0</p>;
const Feature4 = () => <p>New Feature 4.0</p>;
const Feature3 = () => <p>New Feature 3.0</p>;
const Feature2 = () => <p>New Feature 2.0</p>;
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
        <Feature3 />
        <Feature4 />
        <Feature5 />
        <Feature6 />
        <Feature7 />

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
