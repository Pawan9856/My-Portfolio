import ProjectCard from "./components/ProjectCard";
import { projects } from "@/lib/projects";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-32 justify-center mt-10 pb-32">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default page;
