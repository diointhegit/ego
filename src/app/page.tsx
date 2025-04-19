import { promises as fs } from "fs";

import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { motion } from "motion/react";
import { Wrapper } from "./components/wrapper";

export default async function Page() {
  const file = await fs.readFile(
    process.cwd() + "/public/projects.json",
    "utf8"
  );
  const projects = JSON.parse(file);

  return (
    <div>
      <Wrapper projects={projects} />
    </div>
  );
}
