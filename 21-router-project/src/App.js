import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// https://example.com/ : domain
// /product : path

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

// define a route
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />, // the path is active, the element should be loaded
//   }, // route object
//   { path: "/products", element: <ProductsPage /> },
// ]);

const router = createBrowserRouter(routeDefinitions);

function App() {
  // how to use a route
  return <RouterProvider router={router} />;
}

export default App;
