import { Suspense } from "react";
import { Await, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/Event/EventItem";
import EventsList from "../components/Event/EventsList";

const EventDetail = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response("Could not fetch details for selected events.", {
      status: response.status,
    });
  } else {
    const resData = await response.json();
    // console.log(resData.event);
    return resData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response("Could not fetch details for selected events.", {
      status: response.status,
    });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

const loader = async ({ request, params }) => {
  const id = params.id;

  return { event: await loadEvent(id), events: loadEvents() };
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
