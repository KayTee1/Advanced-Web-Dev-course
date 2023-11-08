import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>🛤️ React Router 🛣️</h1>
      <button onClick={navigateHandler}>Navigate to Products</button>
    </>
  );
};
export default Home;
