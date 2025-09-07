import { createContext, useReducer } from "react";

export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
  });

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const tasks = {
    ...state,
    addTask,
    deleteTask,
  };

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
}
