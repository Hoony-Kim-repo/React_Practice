import { action as manipulateEventAction } from "../components/EventForm";
import EventLayout from "../layouts/EventLayout";
import EditEvent from "../pages/EditEvent";
import EventDetail, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "../pages/EventDetail";
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
        id: "event-detail",
        loader: eventDetailLoader,
        children: [
          {
            index: true,
            Component: EventDetail,
            action: deleteEventAction,
          },
          {
            path: "edit",
            Component: EditEvent,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "new",
        Component: NewEvent,
        action: manipulateEventAction,
      },
    ],
  },
];

export default EventRoutes;
