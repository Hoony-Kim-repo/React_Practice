import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject(props) {
  const { onAdd, onCancel, ...prop } = props;

  const modal = useRef();

  const projectTitle = useRef();
  const projectDesc = useRef();
  const projectDueDate = useRef();

  let errorModal;

  const handleNewProjectSave = () => {
    const title = projectTitle.current.value;
    const description = projectDesc.current.value;
    const dueDate = projectDueDate.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      errorModal = <Modal ref={modal} />;
      return;
    }

    onAdd({ title, description, dueDate });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hoverLtext-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleNewProjectSave}
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input type="text" label="Title" ref={projectTitle} />
        <Input label="Description" textarea ref={projectDesc} />
        <Input type="date" label="Due Date" ref={projectDueDate} />
      </div>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text=stone=600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text=stone=600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
    </div>
  );
}
