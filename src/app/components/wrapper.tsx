"use client";

import { useState } from "react";
import { Project } from "../types/project";
import { Home } from "./home";
import { AnimatePresence, motion } from "motion/react";
import { Screen } from "./screen";
import { SelectOptions } from "./selectoptions";

export const Wrapper = ({ projects }: { projects: Project[] }) => {
  console.log(projects);

  const [started, setStart] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!started && <Home setStart={setStart} />}

      {started && <SelectScreen projects={projects} />}
    </AnimatePresence>
  );
};

const SelectScreen = ({ projects }: { projects: Project[] }) => {
  const [option, setOption] = useState();
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="bg-[#02112c] h-screen w-screen px-5 py-2 flex flex-wrap text-white gap-10 items-center justify-center max-h-screen overflow-y-hidden overflow-x-hidden"
    >
      <Screen option={option} projects={projects} />
      <SelectOptions option={option} setOption={setOption} />
    </motion.div>
  );
};
