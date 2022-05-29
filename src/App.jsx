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
      <ItemList name={data} />
     
    </div>
  );
}

export default App;
