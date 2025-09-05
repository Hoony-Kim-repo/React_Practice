import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject(props) {
  const { onAdd, ...prop } = props;

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
          <button className="text-stone-800 hoverLtext-stone-950">
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
        <p>Error Happened</p>
      </Modal>
    </div>
  );
}
