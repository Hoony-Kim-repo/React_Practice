import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import RootLayout from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/products", Component: Products },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
