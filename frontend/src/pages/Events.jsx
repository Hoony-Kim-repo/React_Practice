import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import EventsList from "../components/Event/EventsList";

const Events = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // return <EventsList events={events} />;
};

export default Events;

const loadDefer = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: response.status,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

const loadEvent = () => {
  return { events: loadDefer() };
};

export { loadEvent };
