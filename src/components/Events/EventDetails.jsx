import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const {
    data: queryData,
    isPending: isQueryPending,
    isError: isQueryError,
    error: queryError,
  } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate,
    isPending: isMutatePending,
    isError: isMutateError,
    error: mutateError,
  } = useMutation({
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

  const onStartDelete = () => {
    setIsDeleting(true);
  };

  const onStopDelete = () => {
    setIsDeleting(false);
  };

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
      {isDeleting && (
        <Modal onClose={onStopDelete}>
          <h2>Are you sure?</h2>
          <p>
            Do you really want to delete this event ? This action cannot be
            undone.
          </p>
          <div className="form-actions">
            {isMutatePending ? (
              <p>Deleting, Please wait...</p>
            ) : (
              <>
                <button onClick={onStopDelete} className="button-text">
                  Cacncel
                </button>
                <button onClick={onDelete} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {isMutateError && (
            <ErrorBlock
              title="Failed to delete event"
              message={
                mutateError.info?.message ||
                "Failed to delete event, please try again later"
              }
            />
          )}
        </Modal>
      )}
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
              <button onClick={onStartDelete}>Delete</button>
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
