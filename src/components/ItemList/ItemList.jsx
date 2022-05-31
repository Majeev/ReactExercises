import React, { useState } from "react";
import css from "./ItemList.css";

const ItemList = (props) => {
  const [products, setProducts] = useState(props.products);
  const [productName, setProductName] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (productName.length >= 1) {
      setProducts([...products, { name: productName }]);
      setProductName("");
    }
  };

  const handleInputChange = (event) => {
    const input = event.target;
    setProductName(input.value);
  };

  const handleProductRemove = (product) => {
    return () => {
      setProducts(products.filter((item) => item.name !== product.name));
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
          {props.products.map((product) => (
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
