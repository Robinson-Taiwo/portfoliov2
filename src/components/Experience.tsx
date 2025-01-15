"use client";
import React, { useState } from "react";
import { experiences } from "./experience";
import { Triangle } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("Mtech IT Services");



  return (
    <div className="flex flex-col w-full max-w-3xl md:px-10">
      {/* Header Title */}
      <div className="flex px-[1.4rem] md:px-[0rem] flex-row gap-2 lg:gap-6 mb-20 items-center">
        <div className="group flex text-3xl gap-2 font-bold items-end space-x-1">
          <span className="text-[#00e5ff] font-light font-mono text-xl">02.</span>
          <span className="text-[white] md:text-2xl text-xl transition">
            Where I&apos;ve worked
          </span>
        </div>

        <div className="lg:w-[00%] flex-grow h-[0.5px] bg-[#8c909b]"></div>
      </div>

      <div className="flex flex-col md:flex-row   md:w-fit w-full gap-8">
        {/* Navigation Tabs */}
        <div className="w-full md:w-fit  pl-[1.4rem] md:pl-[0rem] overflow-auto">
          <div className="flex w-[210%] md:w-fit border-b md:border-l-[#8c909b] md:border-l md:border-b-0   border-b-[#8c909b] gap-6 overflow-auto md:flex-col flex-row">
            {experiences.map((experience) => (
              <p
                key={experience.name}
                onClick={() => setActiveTab(experience.name)}
                className={`text-sm w-full cursor-pointer transition-all duration-10x00 ease-in-out ${activeTab === experience.name
                    ? "text-[#00e5ff] bg-[#2b5255] text-center items-center justify-center flex px-[0.5rem] border-b py-[0.5rem] md:border-b-0 md:border-l md:border-l-[#00e5ff] border-b-[#00e5ff]"
                    : "text-[#8c909b] items-center text-center justify-center flex px-[0.5rem]"
                  }`}
              >
                {experience.name}
              </p>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full md:px-0 md:py-0 px-4 py-6">
          {experiences.find((experience) => experience.name === activeTab)?.content && (
            <div className="text-[#8c909b]">
              {/* Role and Company */}
              <h3 className="text-lg text-[#00e5ff] font-bold">
                {experiences.find((experience) => experience.name === activeTab)?.content.role}{" "}
                @ {activeTab}
              </h3>

              {/* Date */}
              <p className="text-sm text-[#8c909b] mb-4">
                {experiences.find((experience) => experience.name === activeTab)?.content.date}
              </p>

              {/* Activities */}
              <div className="list-disc pl-5  text-sm space-y-2">
                {experiences
                  .find((experience) => experience.name === activeTab)
                  ?.content.activities.map((activity, index) => (
                    <div key={index} className="flex  flex-row">

                      <Triangle className="mr-2 rotate-90 mt-[0.4rem] text-[#00e5ff]   h-2 w-2  " />


                      <p className="text-[#8c909b] w-full ">
                        {activity}
                      </p>

                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Experience;
