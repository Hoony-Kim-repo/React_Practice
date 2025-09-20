import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/Root";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import { logout, tokenLoader } from "../util/auth";
import authRoute from "./Auth.route";
import eventRoute from "./Event.route";
import newsletterRoute from "./Newsletter.route";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, Component: HomePage },
      eventRoute,
      newsletterRoute,
      authRoute,
      {
        path: "logout",
        action: logout,
      },
    ],
  },
]);

export default router;
