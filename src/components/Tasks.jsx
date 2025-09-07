import { use, useContext } from "react";
import { ProjectContext } from "../store/project-context";
import NewTask from "./NewTask";
import { TaskContext } from "../store/task-context";

export default function Tasks() {
  const projectContext = useContext(ProjectContext);
  const taskContext = useContext(TaskContext);

  const tasks = taskContext.tasks.filter(
    (task) => task.projectId === projectContext.selectedProjectId
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      <p className="text-stone-800 my-4">
        This project does not have any tasks yet.
      </p>
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => taskContext.deleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
