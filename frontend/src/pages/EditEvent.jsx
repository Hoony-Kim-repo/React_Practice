import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/Event/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventForm method="patch" event={data.event} />;
};

export default EditEvent;
