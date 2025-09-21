import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditEvent from "./components/Events/EditEvent.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import Events from "./components/Events/Events.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
