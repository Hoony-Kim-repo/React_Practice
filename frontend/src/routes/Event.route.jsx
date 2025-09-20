import { action as manipulateEventAction } from "../components/EventForm";
import EventsRootLayout from "../layout/EventsRoot";
import EditEventPage from "../pages/event/EditEvent";
import EventDetailPage, {
  action as deleteEventAction,
  loader as eventDetailLoader,
} from "../pages/event/EventDetail";
import EventsPage, { loader as eventsLoader } from "../pages/event/Events";
import NewEventPage from "../pages/event/NewEvent";

const eventIdRoutes = {
  path: ":eventId",
  id: "event-detail",
  loader: eventDetailLoader,
  children: [
    {
      index: true,
      Component: EventDetailPage,
      action: deleteEventAction,
    },
    {
      path: "edit",
      Component: EditEventPage,
      action: manipulateEventAction,
    },
  ],
};

const eventRoute = {
  path: "events",
  Component: EventsRootLayout,
  children: [
    {
      index: true,
      Component: EventsPage,
      loader: eventsLoader,
    },
    eventIdRoutes,
    {
      path: "new",
      Component: NewEventPage,
      action: manipulateEventAction,
    },
  ],
};

export default eventRoute;
