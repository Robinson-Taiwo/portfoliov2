"use client";
import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("Mtech IT Services");

  const experiences = [
    { name: "Mtech IT Services", content: "Details about Mtech IT Services." },
    { name: "ITPA", content: "Details about ITPA." },
    { name: "HNG (internship)", content: "Details about HNG internship." },
    { name: "Cranebolt Technology", content: "Details about Cranebolt Technology." },
  ];

  return (
    <div className="flex flex-col w-full md:px-10">
      {/* Header Title */}
      <div className="flex px-[1.4rem] flex-row gap-2 lg:gap-6 mb-20 items-center">
        <div className="group flex text-3xl gap-2 font-bold items-end space-x-1">
          <span className="text-[#00e5ff] font-light font-mono text-xl">02.</span>
          <span className="text-[white] md:text-2xl text-xl transition">
            Where I&apos;ve worked
          </span>
        </div>

        <div className="lg:w-96 flex-grow h-[0.5px] bg-[#8c909b]"></div>
      </div>

      <div className="flex flex-col w-full gap-8">
        {/* Navigation Tabs */}
        <div className="w-full pl-[1.4rem] overflow-auto">
          <div className="flex w-[210%] border-b border-b-[#8c909b] gap-6 overflow-auto flex-row">
            {experiences.map((experience) => (
              <p
                key={experience.name}
                onClick={() => setActiveTab(experience.name)}
                className={`text-sm w-full cursor-pointer ${
                  activeTab === experience.name
                    ? "text-[#00e5ff] bg-[#2b5255] items-center justify-center flex  px-[0.5rem]   border-b py-[0.5rem]  border-b-[#00e5ff]"
                    : "text-[#8c909b] items-center justify-center flex  px-[0.5rem]  "
                }`}
              >
                {experience.name}
              </p>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full px-4 py-6">
          {experiences.find((experience) => experience.name === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Experience;
