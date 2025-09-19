import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/Error";
import Home from "./routes/Home";
import ProductDetail from "./routes/ProductDetail";
import Products from "./routes/Products";
import RootLayout from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: Products },
      { path: "/products/:id", Component: ProductDetail },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
