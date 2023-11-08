import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const ProductsDetails = () => {
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  const [productDetails, setProductDetails] = useState([]);

  const fetchData = useCallback(async () => {
    const apiLink = "https://fakestoreapi.com/products/" + id;
    try {
      const res = await axios.get(apiLink);
      const data = res.data;
      setProductDetails(data);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const { title, description, price, image, category } = productDetails;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button style={{ marginTop: "1em" }} onClick={navigateHandler}>
        Back
      </button>
      <h1>Product Details</h1>
      <p>{title}</p>
      <p>{price}€</p>
      <p>{description}</p>
      <p>{category}</p>
      <img
        style={{
          maxWidth: "20%",
          height: "auto",
        }}
        src={image}
        alt="Description"
      />
    </div>
  );
};

export default ProductsDetails;
