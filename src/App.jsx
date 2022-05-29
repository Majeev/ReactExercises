import './App.css';
import ItemList from './components/ItemList/ItemList'


const data = [
  {
    product: "Milk"
  },
  {
    product: "Butter"
  },
  {
    product: "Bread"
  },
  {
    product: "Cheese"
  },
  {
    product: "Eggs"
  }
]

function App() {
  return (
    <div id="app">
      <ItemList products={data} />
    </div>
  );
}

export default App;
