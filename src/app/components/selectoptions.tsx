import { motion } from "motion/react";
export const SelectOptions = ({
  setOption,
  option,
}: {
  setOption: React.Dispatch<React.SetStateAction<any>>;
  option: any;
}) => {
  const handleOption = (option: any) => {
    setOption(option);
  };

  return (
    <div className="space-y-5">
      <Option handleOption={handleOption} option={"About"} />
      <Option handleOption={handleOption} option={"Projects"} />
      <Option handleOption={handleOption} option={"Techs"} />
      <Option handleOption={handleOption} option={"Contact"} />
    </div>
  );
};

const Option = ({
  option,
  handleOption,
}: {
  option: any;
  handleOption: any;
}) => {
  return (
    <motion.div
      whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
      whileTap={{ x: 10, transition: { ease: "easeInOut" } }}
      className="h-12  outline-1 rounded-tl-2xl rounded-br-2xl text-white px-5 w-[20rem] flex items-center "
      onClick={() => handleOption(option)}
    >
      {option}
    </motion.div>
  );
};
