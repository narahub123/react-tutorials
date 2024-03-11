import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// https://example.com/ : domain
// /product : path

// define a route
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // the path is active, the element should be loaded
  }, // route object
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  // how to use a route
  return <RouterProvider router={router} />;
}

export default App;
