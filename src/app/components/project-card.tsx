"use client";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { cn } from "../util/cn";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "../types/project";

export const ProjectCard = ({
  project,
  index,
}: {
  project?: Project;
  index: number;
}) => {
  // leftToRight
  const initialLeft = { opacity: 0, x: -150 };
  const moveToRight = { opacity: 1, x: 0 };

  // rightToLeft
  const initialRight = {
    opacity: 0,
    x: +150,
  };
  const moveToLeft = { opacity: 1, x: 0 };

  return (
    <motion.div
      className={cn(
        " p-2 min-h-[12rem] rounded-lg text-secondary outline-1 rounded-tl-2xl rounded-br-3xl flex flex-col justify-between w-[20rem] gap-10"
      )}
      whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
      whileInView={index % 2 == 0 ? moveToLeft : moveToRight}
      // animate={{ x: 0, transition: { type: "spring" } }}
      // initial={{ x: -100 }}
      initial={index % 2 == 0 ? initialRight : initialLeft}
      viewport={{ once: true }}
    >
      <div className="grid gap-2">
        <p className="text-2xl font-semibold">{project?.title}</p>
        <p className="">{project?.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 p-2 w-full">
          {project?.figma && <ProjectLink icon="Figma" link={project.figma} />}
          {project?.github && (
            <ProjectLink icon="Github" link={project.github} />
          )}{" "}
          {project?.live && <ProjectLink icon="Live" link={project.live} />}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectLink = ({
  icon,
  link,
}: {
  icon: "Github" | "Live" | "Figma";
  link: string;
}) => {
  switch (icon) {
    case "Github":
      return (
        <Link target="_blank" href={link}>
          <BsGithub size={30} />{" "}
        </Link>
      );
    case "Live":
      return (
        <Link target="_blank" href={link}>
          <TbWorld size={30} />
        </Link>
      );
    case "Figma":
      return (
        <Link target="_blank" href={link}>
          <FaFigma size={30} />
        </Link>
      );
  }
};
