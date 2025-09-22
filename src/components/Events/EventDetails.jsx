import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEvent, fetchEvent } from "../../util/http.js";
import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: queryData,
    isPending: isQueryPending,
    isError: isQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ["eventDetail", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        exact: true,
        refetchType: "none",
      });
      navigate("..");
    },
  });

  const onDelete = () => {
    mutate({ id });
  };

  let formattedDate;
  if (queryData) {
    formattedDate = new Date(queryData.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isQueryPending && (
        <div id="event-details-content" className="center">
          <p>Fetching event data...</p>
        </div>
      )}
      {isQueryError && (
        <ErrorBlock
          title="Fetching event is failed"
          message={
            queryError.info?.message ||
            "Fetching event has been failed. Please try again."
          }
        />
      )}

      {queryData && (
        <article id="event-details">
          <header>
            <h1>{queryData.title}</h1>
            <nav>
              <button onClick={onDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img
              src={`http://localhost:3000/${queryData.image}`}
              alt={queryData.title}
            />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{queryData.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {formattedDate} @ {queryData.time}
                </time>
              </div>
              <p id="event-details-description">{queryData.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
