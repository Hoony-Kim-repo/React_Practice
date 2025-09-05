import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projectsList: [],
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

  let content = (
    <SelectedProject
      project={projectsState.projectsList.find(
        (project) => project.id === projectsState.selectedProjectId
      )}
      selectedProjectId={projectsState.selectedProjectId}
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
      />

      {content}
    </main>
  );
}

export default App;
