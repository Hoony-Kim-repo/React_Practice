import { use } from "react";
import Button from "./Button";
import { ProjectContext } from "../store/project-context";

export default function ProjectsSidebar(props) {
  const { ...prop } = props;

  const projectContext = use(ProjectContext);
  const projects = projectContext.projectsList;

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
        <Button onCreate={projectContext.moveToCreateProjectPage} {...prop}>
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssStyleing =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === projectContext.selectedProjectId) {
            cssStyleing += " bg-stone-800 text-stone-200 font-bold";
          } else {
            cssStyleing += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssStyleing}
                onClick={() => projectContext.selectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
