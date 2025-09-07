import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import { use } from "react";
import ProjectContextProvider, {
  ProjectContext,
} from "./store/project-context";

function App() {
  return (
    <ProjectContextProvider>
      <InnerApp />
    </ProjectContextProvider>
  );
}

const InnerApp = () => {
  console.log("InnerApp executed");
  const projectContext = use(ProjectContext);

  // const handleAddTask = (text) => {
  //   setProjectsState((prev) => {
  //     const taskId = Math.random();
  //     const newTask = {
  //       text: text,
  //       projectId: prev.selectedProjectId,
  //       id: taskId,
  //     };

  //     return {
  //       ...prev,
  //       tasks: [...prev.tasks, newTask],
  //     };
  //   });
  // };

  // const handleDeleteTask = (taskId) => {
  //   setProjectsState((prev) => {
  //     return {
  //       ...prev,
  //       tasks: prev.tasks.filter((task) => task.id !== taskId),
  //     };
  //   });
  // };

  let content = (
    <SelectedProject
      project={projectContext.projectsList.find(
        (project) => project.id === projectContext.selectedProjectId
      )}
      selectedProjectId={projectContext.selectedProjectId}
      onDelete={projectContext.deleteProject}
      // onAddTask={handleAddTask}
      // onDeleteTask={handleDeleteTask}
      // tasks={projectsState.tasks}
    />
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onCreate={projectContext.moveToCreateProjectPage}
        projects={projectContext.projectsList}
        onSelect={projectContext.selectProject}
        selectedProjectId={projectContext.selectedProjectId}
      />

      {projectContext.selectedProjectId === null && <NewProject />}
      {projectContext.selectedProjectId === undefined && <NoProjectSelected />}
      {projectContext.selectedProjectId && (
        <SelectedProject
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasks={projectsState.tasks}
        />
      )}
    </main>
  );
};

export default App;
