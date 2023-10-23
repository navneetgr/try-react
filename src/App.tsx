import React from "react";
import "./App.css";

const greeting = "greeting";
const displayElementMsg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert((event.target as HTMLElement).id)

function App() {
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      <ul>
        <li>
          <button onClick={displayElementMsg}>
            <span role="img" aria-label="grinning face" id="grinning face">
              😀
            </span>
          </button>
        </li>
        <li>
          <button onClick={displayElementMsg}>
            <span role="img" aria-label="party popper" id="party popper">
              🎉
            </span>
          </button>
        </li>
        <li>
          <button onClick={displayElementMsg}>
            <span role="img" aria-label="woman dancing" id="woman dancing">
              💃
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
