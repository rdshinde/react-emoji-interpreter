import "./styles.css";
import React, { useState } from "react";
// our emoji database
var emojiDictionary = {
  "🤲": "Dua",
  "👐": " Open Hands (Hug)",
  "🙌": "Praise",
  "👏": "Clapping",
  "🤝": "Handshake",
  "🤟": "Love You",
  "✌️": "Victory",
  "🤞": "Good Luck",
  "👋": "Hello",
  "🙏🏻": "Namaste"
};
export default function App() {
  // if user clicks on emoji in our database
  function listIteamClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  const [meaning, setMeaning] = useState("");
  // for emojis that we get from user input
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in out database.";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hand Gestures</h1>
      <input
        placeholder="Enter your gesture here"
        onChange={emojiInputHandler}
      ></input>
      <div>
        <h2>{meaning}</h2>
      </div>
      <div>
        <h3>Gestures in our database.</h3>
      </div>
      {Object.keys(emojiDictionary).map((item) => {
        return (
          <span onClick={() => listIteamClickHandler(item)} key={item}>
            &nbsp; {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
