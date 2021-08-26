import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "🚣‍♂️": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🏔": "Snow-Capped Mountain",
  "🌋": "Volcano",
  "🏕": "Camping",
  "🏖": "Beach with Umbrella",
  "🏝": "Desert Island"
};
export default function App() {
  const [meaning, setMeaning] = useState("");

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
      <h1>inside outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <div>{meaning}</div>
      {Object.keys(emojiDictionary).map((item) => {
        return item;
      })}
    </div>
  );
}
