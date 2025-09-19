import EventLayout from "../layouts/EventLayout";
import EditEvent from "../pages/EditEvent";
import EventDetail, { loader as eventDetailLoader } from "../pages/EventDetail";
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
        loader: eventDetailLoader,
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
