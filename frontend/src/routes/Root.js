import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import EventRoutes from "./Event";
import NewsletterRoutes from "./Newsletter";

const RootRoutes = [
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      ...EventRoutes,
      ...NewsletterRoutes,
    ],
  },
];

export default RootRoutes;
