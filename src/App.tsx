import React from "react";
import "./App.css";

const greeting = "greeting";
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

const displayElementMsg = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert((event.target as HTMLElement).id)

function App() {
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayElementMsg}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
