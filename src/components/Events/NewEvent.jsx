import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { createNewEvent } from "../../util/http.js";
import ErrorBlcok from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";

export default function NewEvent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlcok
          title="Failed to create event"
          message={
            error.info?.message ||
            "Failed to create event. Please check your inputs and try again later."
          }
        />
      )}
    </Modal>
  );
}
