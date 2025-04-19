import {
  GithubOriginal,
  GithubOriginalWordmark,
  LinkedinOriginal,
} from "devicons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGit, FaGithub } from "react-icons/fa";
export const ContactScreen = () => {
  return (
    <div>
      <motion.div className="space-y-5">
        <motion.div
          whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
          whileTap={{ x: 10, transition: { ease: "easeInOut" } }}
        >
          <Link
            href={"https://www.github.com/diointhegit"}
            target="_blank"
            className="flex gap-2 items-center outline outline-white rounded-br-2xl rounded-tl-2xl py-2 px-5 "
          >
            <FaGithub />
            <p>Github</p>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ x: 10, transition: { ease: "easeInOut" } }}
          whileTap={{ x: 10, transition: { ease: "easeInOut" } }}
        >
          <Link
            href={"https://www.linkedin.com/in/developer-denis-silva/"}
            target="_blank"
            className="flex gap-2 items-center outline outline-white rounded-br-2xl rounded-tl-2xl py-2 px-5 "
          >
            <LinkedinOriginal />
            <p>Linkedin</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
