import EventLayout from "../layouts/EventLayout";
import EditEvent from "../pages/EditEvent";
import EventDetail, { loader as eventDetailLoader } from "../pages/EventDetail";
import Events, { loadEvent } from "../pages/Events";
import NewEvent, { action as newEventAction } from "../pages/NewEvent";

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
        id: "event-detail",
        loader: eventDetailLoader,
        children: [
          {
            index: true,
            Component: EventDetail,
          },
          {
            path: "edit",
            Component: EditEvent,
          },
        ],
      },
      {
        path: "new",
        Component: NewEvent,
        action: newEventAction,
      },
    ],
  },
];

export default EventRoutes;
