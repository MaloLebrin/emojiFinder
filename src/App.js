import React, { useState } from "react";
import "./App.scss";
import Data from "./data/data.json"
import Search from "./search/Search"
import EmojiLine from "./emoji/EmojiLine"
import Header from "./header/Header"


const App = () => {
  const [results, setResults] = useState(Data.slice(0, 10));

  const searchEmoji = (event) => {
    let tab = [];
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].keywords.indexOf(event.target.value) !== -1) {
        tab.push(Data[i])
      }

    }
    return setResults(tab)
  }
  return (
    <main className="container">
      <Header title="😎 Emoji Search 😎" />
      <Search searchResult={searchEmoji} />
      {
        results.map((result, index) => {
          return <EmojiLine key={index} emoji={result} />
        })
      }
    </main>
  );
}

export default App;
