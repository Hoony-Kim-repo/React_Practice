import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import EventRoutes from "./Event";

const RootRoutes = [
  {
    path: "/",
    Component: RootLayout,
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
