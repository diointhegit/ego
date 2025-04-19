import { motion } from "motion/react";
export const AboutScreen = () => {
  return (
    <div className="h-[50vh] flex items-center flex-col justify-center space-y-5">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%", transition: { duration: 1 } }}
        className=" outline-1 outline-white rounded-tr-2xl rounded-bl-4xl max-h-[28rem] h-[22rem] md:h-[13rem] sm:h-[15rem] p-7 text-2xl space-y-2 flex flex-col items-center justify-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
          className="font-bold"
        >
          I use my creativity to solve problems with code.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
          className="font-light "
        >
          I use Figma to design and typescript to create whatever i need,
          whenever i need the way i, or you, want it.
        </motion.p>
      </motion.div>

      <motion.div className="py-5 px-2 outline-1 outline-green-500 rounded-tr-2xl rounded-bl-2xl">
        Available for freelance jobs
      </motion.div>
    </div>
  );
};
