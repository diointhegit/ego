import { TechImages } from "./tech-images";
import { techList } from "./tech-list";
import { motion } from "motion/react";
export const TechScreen = () => {
  return (
    <div className="h-[50vh] overflox-y-scroll overflow-y-scroll max-w-[100vw] mx-0 px-0">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: "auto",
          transition: { duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
        className="flex h-full w-full items-center flex-wrap  "
      >
        <div className="flex flex-wrap h-full place-items-center justify-center w-full overflow-y-scroll p-5 gap-5 scrollbar-hidden ">
          {techList.map((tech: string) => (
            <Tech tech={tech} key={tech} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Tech = ({ tech }: { tech: any }) => {
  return (
    <motion.div className="min-h-16 border-white border-2 px-5 py-2 rounded-tl-xl rounded-br-4xl hover:translate-y-2 hover:text-yellow-500 transition-all ease-in-out ">
      <div className="flex items-center gap-2 ">
        <TechImages tech={tech} key={tech} size={30} />
        <div className="h">
          <div className="">{tech}</div>
          <div className="flex gap-x-0.5 overflow-x-hidden">
            {new Array(50).fill(0, 0, 25).map((_, id) => (
              <div className="h-2 w-2 bg-yellow-400" key={id}></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
