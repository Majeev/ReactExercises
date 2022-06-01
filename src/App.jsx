import React, { useEffect, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const preset = [
  {
    name: "Milk",
  },
  {
    name: "Butter",
  },
  {
    name: "Bread",
  },
  {
    name: "Cheese",
  },
  {
    name: "Eggs",
  },
];

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setInterval(() => {
      setData(
        preset.slice(
          randomInteger(0, preset.length),
          randomInteger(0, preset.length)
        )
      );
    }, 3500);
  }, []);

  return (
    <div id="app">
      <ItemList products={data} />
    </div>
  );
}

export default App;
