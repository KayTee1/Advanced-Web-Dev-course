import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <h1>Product Details</h1>
      <p>ID: {id}</p>
    </>
  );
};

export default ProductDetails;
