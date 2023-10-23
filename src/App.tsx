import React from "react";
import "./App.css";

const greeting = "greeting";

function App() {
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      <ul>
        <li>
          <button
            onClick={event => alert((event.target as HTMLInputElement).id)}
          >
            <span role="img" aria-label="grinning face" id="grinning face">😀</span>
          </button>
        </li>
        <li>
          <button
            onClick={event => alert((event.target as HTMLInputElement).id)}
          >
              <span role="img" aria-label="party popper" id="party popper">🎉</span>
          </button>
        </li>
        <li>
            <button
              onClick={event =>alert((event.target as HTMLInputElement).id)}
            >
              <span role="img" aria-label="woman dancing" id="woman dancing">💃</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
