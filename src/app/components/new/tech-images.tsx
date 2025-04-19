import {
  BunOriginal,
  FigmaOriginal,
  MongodbOriginal,
  NodejsOriginal,
  PythonOriginal,
  ReactOriginal,
  SpringOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { FaNode, FaReact } from "react-icons/fa";

export const TechImages = ({ tech, size }: { tech: string; size?: number }) => {
  return (
    <div>
      {tech == "Figma" && <FigmaOriginal size={size} />}
      {tech == "React" && <ReactOriginal size={size} />}
      {tech == "Bun" && <BunOriginal size={size} />}
      {tech == "NodeJS" && <NodejsOriginal size={size} />}
      {tech == "Python" && <PythonOriginal size={size} />}
      {tech == "Spring" && <SpringOriginal size={size} />}
      {tech == "MongoDB" && <MongodbOriginal size={size} />}
      {tech == "Tailwind" && <TailwindcssOriginal size={size} />}
      {tech == "Typescript" && <TypescriptOriginal size={size} />}
    </div>
  );
};
