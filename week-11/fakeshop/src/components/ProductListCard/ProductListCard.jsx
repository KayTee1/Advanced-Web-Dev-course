import { Link } from "react-router-dom";
import "./ProductListCard.css";
const ProductListCard = ({ item }) => {
  return (
    <div className="product">
      <Link to={`/products/${item.id}`}>{item.title}</Link>
      <p>{item.price}€</p>
      <img className="productImage" src={item.image}></img>
    </div>
  );
};

export default ProductListCard;
