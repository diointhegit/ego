import { AnimatePresence, easeInOut, motion } from "motion/react";
import { TechImages } from "./new/tech-images";
import { techList } from "./new/tech-list";
import { Projects } from "./projects";
import { Project } from "../types/project";
import { AboutScreen } from "./about";
import { ContactScreen } from "./new/contact";
import { TechScreen } from "./new/tech";
export const Screen = ({
  option,
  projects,
}: {
  option: any;
  projects: Project[];
}) => {
  return (
    <div className="w-[50rem]   rounded-tl-lg rounded-br-lg max-h-[50vh]">
      <AnimatePresence mode="wait">
        <div className="h-[50vh]">
          {option == "About" && <AboutScreen key={"about"} />}
          {option == "Techs" && <TechScreen key={"techs"} />}
          {option == "Projects" && (
            <Projects projects={projects} key={"projects"} />
          )}
          {option == "Contact" && <ContactScreen key={"contact"} />}
        </div>
      </AnimatePresence>
    </div>
  );
};
