import { GithubOriginal, LinkedinOriginal } from "devicons-react";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { DownloadCVButton } from "./download-cv";

export const Contact = () => {
  return (
    <div className="text-2xl text-center h-[50vh]" id="contacts">
      <div className="p-2 text-3xl font-semibold">Get in contact with me:</div>
      <div className="flex items-center justify-center gap-5">
        <div className="text-left space-y-3">
          <p className="flex items-center gap-2">
            <Link
              target="_blank"
              href="mailto:stilldenis@outloook.com"
              className="flex items-center"
            >
              <MdEmail />:
            </Link>
            stilldenis@outloook.com
          </p>

          <Link
            target="_blank"
            href="https://github.com/diointhegit"
            className="flex items-center"
          >
            <GithubOriginal size={25} />: diointhegit
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com/in/developer-denis-silva"
            className="flex items-center"
          >
            <FaLinkedin size={25} />: Denis Silva
          </Link>
          <DownloadCVButton />
        </div>
      </div>
    </div>
  );
};
