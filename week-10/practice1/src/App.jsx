import ProductList from "./ProductList";
import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  let content = <p>No product data found</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Fetching data... </p>;
  }

  if (products.length > 0) {
    content = <ProductList products={products} />;
  }
  return (
    <>
      <h1>Incorporating data to React</h1>
      <div className="card">
        <button onClick={fetchProducts}>Fetch Products</button>
      </div>
      <div className="card">
        {content}
      </div>
    </>
  );
}

export default App;
