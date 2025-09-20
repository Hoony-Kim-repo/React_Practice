import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import authRoute from "./Auth.route";
import eventRoute from "./Event.route";
import newsletterRoute from "./Newsletter.route";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      eventRoute,
      newsletterRoute,
      authRoute,
    ],
  },
]);

export default router;
