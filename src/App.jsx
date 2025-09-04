import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, isSetProjectsState] = useState({
    selectedProjectId: undefined,
    projectsList: [],
  });

  const handleCreateProject = () => {
    isSetProjectsState((prev) => {
      return { prev, selectedProjectId: null };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreate={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onCreate={handleCreateProject} />

      {content}
    </main>
  );
}

export default App;
