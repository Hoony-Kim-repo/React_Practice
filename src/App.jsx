import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import EditEvent from "./components/Events/EditEvent.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import Events from "./components/Events/Events.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import { queryClient } from "./util/http.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Navigate to="/events" />,
  },
  {
    path: "/events",
    Component: Events,

    children: [
      {
        path: "/events/new",
        Component: NewEvent,
      },
    ],
  },
  {
    path: "/events/:id",
    Component: EventDetails,
    children: [
      {
        path: "/events/:id/edit",
        Component: EditEvent,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
