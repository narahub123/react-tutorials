import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate(); // trigger a navigation action to switch to different route from inside the code

  function navigationHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
