import { createContext, useReducer, useState } from "react";

export const ProjectContext = createContext({
  idList: [],
  selectedProjectId: undefined,
  projectsList: [],
  tasks: [],
});

const projectsStateReducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_CREATE_PROJECT_PAGE":
      console.log("MOVE_TO_CREATE_PROJECT_PAGE action dispatched");
      return { ...state, selectedProjectId: null };
    case "ADD_PROJECT":
      console.log("ADD_PROJECT action dispatched");
      // Generate ID for the new project
      // ID starts from 1 and increments by 1 for each new project
      const updatedProjectsState = { ...state };

      let newId = 1;
      while (true) {
        if (!updatedProjectsState.idList.includes(newId)) {
          updatedProjectsState.idList.push(newId);
          break;
        }
        newId++;
      }

      const newProject = {
        ...action.payload,
        id: newId,
      };

      updatedProjectsState.projectsList.push(newProject);

      return { ...updatedProjectsState, selectedProjectId: undefined };
    case "CANCEL_ADD_PROJECT":
      console.log("CANCEL_ADD_PROJECT action dispatched");
      return { ...state, selectedProjectId: undefined };
    case "SELECT_PROJECT":
      console.log("SELECT_PROJECT action dispatched");
      return { ...state, selectedProjectId: action.payload };
    case "DELETE_PROJECT":
      console.log("DELETE_PROJECT action dispatched");
      return {
        ...state,
        selectedProjectId: undefined,
        projectsList: state.projectsList.filter(
          (project) => project.id !== state.selectedProjectId
        ),
        idList: state.idList.filter((id) => id !== state.selectedProjectId),
      };
    default:
      return state;
  }
};

export default function ProjectContextProvider({ children }) {
  const [state, dispatch] = useReducer(projectsStateReducer, {
    idList: [],
    selectedProjectId: undefined,
    projectsList: [],
    tasks: [],
  });

  const moveToCreateProjectPage = () => {
    dispatch({ type: "MOVE_TO_CREATE_PROJECT_PAGE" });
  };

  const addProject = (projectData) => {
    dispatch({ type: "ADD_PROJECT", payload: projectData });
  };

  const cancelAddProject = () => {
    dispatch({ type: "CANCEL_ADD_PROJECT" });
  };

  const selectProject = (projectId) => {
    dispatch({ type: "SELECT_PROJECT", payload: projectId });
  };

  const deleteProject = () => {
    dispatch({ type: "DELETE_PROJECT" });
  };

  const context = {
    ...state,
    moveToCreateProjectPage,
    addProject,
    cancelAddProject,
    selectProject,
    deleteProject,
  };

  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
}
