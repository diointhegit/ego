import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function Page() {
  return (
    <div>
      <Home />
      <div className="text-center text-lg">
        Designing and Developing the best.
      </div>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
