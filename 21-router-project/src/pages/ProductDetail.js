import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  // return params object which contains every dynamic path segment
  // defined in the route definition as a property eg) params.productId;
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetails;
