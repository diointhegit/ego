import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Home = ({
  setStart,
}: {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [panel, setPanel] = useState(true);

  const handleExit = () => {
    setPanel(false);

    setTimeout(() => {
      setStart(true);
    }, 1000);
  };

  return (
    <motion.div
      // exit={{ opacity: 1, transition: { duration: 2 } }}
      className="w-screen h-[100vh] flex text-secondary  items-center justify-center bg-[url(/megaman-wallpaper.jpg)] bg-no-repeat bg-cover"
    >
      <AnimatePresence>
        {panel && (
          <motion.div
            className="px-10"
            exit={{
              y: -1000,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <div className="flex flex-col md:w-[40rem]  text-white outline-2 outline-white rounded-tl-lg rounded-br-lg justify-around items-center px-10 py-10 w-full">
              <div className="flex flex-col items-center">
                <div className=" rounded-lg  px-10 py-5   shadow-xl drop-shadow-xl">
                  <p className="text-3xl">
                    Hello, my name is Denis and i'm a Fullstack Developer
                  </p>
                </div>
                <p className="pt-2">
                  A code wizard equipped with typescript and java
                </p>
              </div>
            </div>
            {/* <div className="text-center text-lg">
        Designing and Developing the best.
      </div> */}

            <div className="flex items-center justify-center">
              <h1
                className=" text-4xl py-5 hover:text-blue-400 ease-in-out transition-all cursor-pointer"
                onClick={handleExit}
              >
                Press Start
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ChooseLanguage = () => {
  return;
};
