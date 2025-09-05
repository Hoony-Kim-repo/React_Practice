import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projectsList: [],
    tasks: [],
  });

  const handleCreateProject = () => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prev) => {
      const newProject = {
        ...projectData,
        id: prev.projectsList.length + 1,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projectsList: [...prev.projectsList, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: projectId };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projectsList: prev.projectsList.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  let content = (
    <SelectedProject
      project={projectsState.projectsList.find(
        (project) => project.id === projectsState.selectedProjectId
      )}
      selectedProjectId={projectsState.selectedProjectId}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreate={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onCreate={handleCreateProject}
        projects={projectsState.projectsList}
        onSelect={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />

      {content}
    </main>
  );
}

export default App;
