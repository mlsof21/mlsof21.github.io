import React from "react";
import logo from "./logo.svg";
import { ReactComponent as UpInSmokeLogo } from "./assets/up-in-smoke-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UpInSmokeLogo title="Up in Smoke Pyrography" aria-hidden="true" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
