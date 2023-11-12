import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  return(
    <>
      <h1>Product Details</h1>
      <h2>ID: {params.productId}</h2>
    </>
  )
}

export default ProductDetails;