import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import SuspenseWrapper from "./wrapper/SusspenseWrapper";

const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            Component: SuspenseWrapper(BlogPage),
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            Component: SuspenseWrapper(PostPage),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
