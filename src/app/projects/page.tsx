import image1 from "@/assets/GYM-management/p1.png";
import image2 from "@/assets/GYM-management/p2.png";
import image3 from "@/assets/GYM-management/p3.png";
import ProjectCard from "./components/ProjectCard";
import { projects } from "@/lib/projects";

const page = () => {
  const project1 = [image1, image2, image3];

  return (
    <div className="w-full h-full flex flex-col gap-32 justify-center mt-10 pb-32">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </div>
  );
};

export default page;
