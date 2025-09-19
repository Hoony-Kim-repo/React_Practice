import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import EventRoutes from "./Event";
import Error from "../pages/Error";

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
    ],
  },
];

export default RootRoutes;
