"use client";

import BlurredElements from "@/components/ui/BlurredElements";
import fetchData from "@/utils/fetchData";

const About = () => {
  // const data = fetchData() as Promise<string>;
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
        <BlurredElements />
        {/* <p className="mt-5">Data: {data}</p> */}
        <div className="absolute backdrop-blur-2xl p-5 rounded font-mono">
          <h1 className="text-center mb-2 text-2xl ">This is about page</h1>
          <h2 className="inline-flex">
            Bro is cssmaxxing <p className="ml-2 animate-spin">💀</p>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
