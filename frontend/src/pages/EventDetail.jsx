import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetail;

const loader = async ({ request, params }) => {
  const id = params.id;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response("Could not fetch details for selected events.", {
      status: response.status,
    });
  } else {
    return response;
  }
};

const action = async ({ request, params }) => {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response("Could not delete event.", {
      status: response.status,
    });
  }

  return redirect("/events");
};

export { action, loader };
