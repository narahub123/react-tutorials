import { useParams } from "react-router-dom";

function ProductDetails() {
  // return params object which contains every dynamic path segment
  // defined in the route definition as a property eg) params.productId;
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetails;
