import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import ProductListCard from "../components/ProductListCard/ProductListCard";
import MainNavigation from "../components/MainNavigation/MainNavigation";

const Products = () => {
  const [fakeApiData, setFakeApiData] = useState([]);

  const fetchData = useCallback(async () => {
    const apiUrl = "https://fakestoreapi.com/products";
    try {
      const res = await axios.get(apiUrl);
      const data = res.data;
      setFakeApiData(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <MainNavigation />
      <h1>Products List</h1>

      {fakeApiData.map((item, index) => (
        <ProductListCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Products;
