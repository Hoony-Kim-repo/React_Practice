import { Link } from "react-router-dom";

const DUMMY = [
  { id: "1", title: "DUMMY 1" },
  { id: "2", title: "DUMMY 2" },
  { id: "3", title: "DUMMY 3" },
];

const Events = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY.map((dummy) => (
          <li key={dummy.id}>
            <Link to={dummy.id}>{dummy.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Events;
