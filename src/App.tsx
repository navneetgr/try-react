import React from "react";
import "./App.css";

const greeting = "greeting";

function App() {
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
    </div>
  );
}

export default App;
