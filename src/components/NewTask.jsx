import { use } from "react";
import { useState } from "react";
import { TaskContext } from "../store/task-context";
import { ProjectContext } from "../store/project-context";

export default function NewTask(props) {
  const { onAdd, ...prop } = props;

  const taskContext = use(TaskContext);
  const projectContext = use(ProjectContext);

  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task.trim() === "") {
      return;
    }

    const savedIdList = taskContext.tasks
      .filter((task) => task.projectId === projectContext.selectedProjectId)
      .map((task) => task.id);

    let newId = 1;
    while (true) {
      if (!savedIdList.includes(newId)) {
        break;
      }
      newId++;
    }

    const newTask = {
      id: newId,
      text: task,
      projectId: projectContext.selectedProjectId,
    };

    taskContext.addTask(newTask);
    setTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={task}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
