import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { ProjectCard } from "./project-card";
import { Project } from "../types/project";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <div className=" py-10 px-5 " id="projects">
      <div className="flex flex-col space-y-5 items-center">
        {projects.map((project: Project, index: number) => {
          return <ProjectCard project={project} index={index} key={index} />;
        })}
      </div>
    </div>
  );
};
