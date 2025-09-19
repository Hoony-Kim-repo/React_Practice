import { useLoaderData } from "react-router-dom";
import EventsList from "../components/Event/EventsList";

const Events = () => {
  const { events } = useLoaderData();

  return <EventsList events={events} />;
};

export default Events;

const loadEvent = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: response.status,
    });
  } else {
    const resData = await response.json();
    return { events: resData.events };
  }
};

export { loadEvent };
