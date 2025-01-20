"use client";
import React, { useState } from "react";
import { experiences } from "./experience";
import { Triangle } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("MTech IT service");



  return (
    <div className="flex flex-col w-full max-w-3xl md:px-10">
      {/* Header Title */}
      <div className="flex px-[1.4rem] md:px-[0rem] tflex-row gap-2 lg:gap-6 mb-20 items-center">
        <div className="group flex text-3xl gap-2 font-bold items-end space-x-1">
          <span className="text-[#00e5ff] font-light font-mono text-xl">02.</span>
          <span className="text-[#ccd6f6] md:text-2xl text-xl transition">
            Where I&apos;ve worked
          </span>
        </div>

        <div className="lg:w-[40%] flex-grow lg:flex-none h-[0.5px] bg-[#ccd6f6]"></div>
      </div>

      <div className="flex flex-col md:flex-row   md:w-fit w-full gap-8">
        {/* Navigation Tabs */}
        <div className="w-full md:w-fit  pl-[1.4rem] md:pl-[0rem] overflow-auto">
          <div className="flex w-[210%] md:w-fit border-b md:border-l-[#ccd6f6] md:border-l md:border-b-0   border-b-[#ccd6f6] gap-6 overflow-auto md:flex-col flex-row">
            {experiences.map((experience) => (
              <p
                key={experience.name}
                onClick={() => setActiveTab(experience.name)}
                className={`text-sm w-full cursor-pointer transition-all duration-10x00 ease-in-out ${activeTab === experience.name
                  ? "text-[#00e5ff] bg-[#2b5255] text-center items-center justify-center flex px-[0.5rem] border-b py-[0.5rem] md:border-b-0 md:border-l md:border-l-[#00e5ff] border-b-[#00e5ff]"
                  : "text-[#ccd6f6] items-center text-center justify-center flex px-[0.5rem]"
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
            <div className="text-[#ccd6f6]">
              {/* Role and Company */}
              <h3 className="text-lg text-[#00e5ff] font-bold">
                {experiences.find((experience) => experience.name === activeTab)?.content.role}{" "}
                @ <span className="relative 
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1px] before:bg-[#00e5ff] 
    before:transition-all before:duration-300 before:ease-in-out
    hover:before:w-full " > {activeTab}</span>
              </h3>

              {/* Date */}
              <p className="text-sm text-[#ccd6f6] mb-4">
                {experiences.find((experience) => experience.name === activeTab)?.content.date}
              </p>

              {/* Activities */}
              <div className="list-disc pl-5  text-sm space-y-2">
                {experiences
                  .find((experience) => experience.name === activeTab)
                  ?.content.activities.map((activity, index) => (
                    <div key={index} className="flex  flex-row">

                      <Triangle className="mr-2 rotate-90 mt-[0.4rem] text-[#00e5ff]   h-2 w-2  " />


                      <p className="text-[#ccd6f6] w-full ">
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
