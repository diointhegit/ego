import { promises as fs } from "fs";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { ProjectCard } from "./project-card";
import { Project } from "../types/project";

export const Projects = async () => {
  const file = await fs.readFile(
    process.cwd() + "/public/projects.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="h-screen w-screen  py-10 px-5 " id="projects">
      <div className="h-full flex items-center flex-col w-screen">
        <p className="text-2xl font-bold w-3/4 my-2">See some of my work</p>
        <div className="flex flex-col space-y-5 w-screen items-center">
          {data.map((project: Project, index: number) => {
            return <ProjectCard project={project} index={index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
