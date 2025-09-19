import EventLayout from "../layouts/EventLayout";
import EditEvent from "../pages/EditEvent";
import EventDetail from "../pages/EventDetail";
import Events, { loadEvent } from "../pages/Events";
import NewEvent from "../pages/NewEvent";

const EventRoutes = [
  {
    path: "/events",
    Component: EventLayout,
    children: [
      {
        index: true,
        Component: Events,
        loader: loadEvent,
      },
      {
        path: ":id",
        Component: EventDetail,
      },
      {
        path: "new",
        Component: NewEvent,
      },
      {
        path: ":id/edit",
        Component: EditEvent,
      },
    ],
  },
];

export default EventRoutes;
