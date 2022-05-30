import "./App.css";
import ItemList from "./components/ItemList/ItemList";

const data = [
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
  return (
    <div id="app">
      <ItemList products={data} />
    </div>
  );
}

export default App;
