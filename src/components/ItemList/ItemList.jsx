import React, { useState } from "react";
import css from "./ItemList.css";

const ItemList = (props) => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, { name: productName }]);
    setProductName("");
    console.log(products);
  };

  const handleInputChange = (event) => {
    const element = event.target;
    setProductName(element.value);
  };

  const handleProductRemove = (product) => {
    return (event) => {
      console.log(event, product);
      setProducts([products.filter((items) => items.name !== product.name)]);
    };
  };

  return (
    <div className="page">
      <div className="container">
        <header>
          <h1>To do list</h1>
        </header>
        <form>
          <input
            type="text"
            placeholder="add your todo"
            onChange={handleInputChange}
            value={productName}
          />
          <button type="submit" onClick={handleAddProduct}>
            Add
          </button>
        </form>
        <div className="item-wrapper">
          {products.map((product) => (
            <div className="products" key={product.name}>
              {product.name}
              <button onClick={handleProductRemove(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemList;
