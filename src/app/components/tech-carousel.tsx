"use client";

import {
  BunOriginal,
  ReactOriginal,
  ExpressOriginal,
  NodejsOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  JavaOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  SpringOriginal,
  MysqlOriginal,
  SupabaseOriginal,
  MongodbOriginal,
} from "devicons-react";

export const TechCarousel = () => {
  return (
    <div className="flex gap-5 my-5">
      <TypescriptOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <TailwindcssOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <NodejsOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <JavaOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <SpringOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <MysqlOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
      <MongodbOriginal
        size={50}
        className="hover:scale-110 ease-in-out transition-all"
      />
    </div>
  );
};

export const Tech = () => {};
