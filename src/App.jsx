import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import { use } from "react";
import ProjectContextProvider, {
  ProjectContext,
} from "./store/project-context";
import TaskContextProvider from "./store/task-context";

function App() {
  return (
    <ProjectContextProvider>
      <InnerApp />
    </ProjectContextProvider>
  );
}

const InnerApp = () => {
  const projectContext = use(ProjectContext);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />

      {projectContext.selectedProjectId === null && <NewProject />}
      {projectContext.selectedProjectId === undefined && <NoProjectSelected />}
      {projectContext.selectedProjectId && (
        <TaskContextProvider>
          <SelectedProject />
        </TaskContextProvider>
      )}
    </main>
  );
};

export default App;
