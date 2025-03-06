"use client";

import { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { motion } from "motion/react";
import Link from "next/link";
export const DownloadCVButton = () => {
  const [languageModal, setLanguageModal] = useState(false);

  const openModal = () => setLanguageModal(true);
  const closeModal = () => setLanguageModal(false);

  return (
    <div>
      <button
        onClick={openModal}
        type="button"
        className="bg-primary rounded-md border-1 border-primary py-2 px-5 text-secondary flex items-center justify-center hover:text-primary hover:bg-secondary cursor-pointer gap-5"
      >
        <FaFileDownload className="cursor-pointer" /> Download my CV
      </button>
      {languageModal && (
        <div className="inset-0 fixed z-10 bg-black/50 h-full w-screen flex items-center justify-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="bg-secondary w-[20rem] flex flex-col  justify-around text-center h-[8rem] px-5 py-2 rounded-md"
          >
            <div className="flex justify-center gap-5 items-center">
              <p className="text-xl">Chose the language!</p>
              <FiX onClick={closeModal} className="cursor-pointer" />
            </div>
            <div className="flex items-center gap-5 justify-center">
              <Link href="/public/#">
                <button className="h-12 bg-primary px-5 py-2 rounded-md text-secondary cursor-pointer hover:bg-secondary hover:text-primary border-1 border-primary">
                  {" "}
                  PT-BR
                </button>
              </Link>
              <Link href="/public/#">
                <button className="h-12 bg-primary px-5 py-2 rounded-md text-secondary cursor-pointer hover:bg-secondary hover:text-primary border-1 border-primary">
                  {" "}
                  EN{" "}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
