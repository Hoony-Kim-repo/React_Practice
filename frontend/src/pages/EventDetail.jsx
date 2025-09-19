import { useRouteLoaderData } from "react-router-dom";
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

export { loader };
