import { Outlet } from "react-router-dom";
import EventsNavigation from "../navigations/EventsNavigation";

const EventLayout = () => {
  return (
    <main>
      <EventsNavigation />
      <Outlet />
    </main>
  );
};

export default EventLayout;
