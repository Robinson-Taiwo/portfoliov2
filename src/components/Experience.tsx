"use client";
import React, { useState } from "react";
import { experiences } from "./experience";
import { Triangle } from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<string>("Mtech IT Services");



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
      className={`text-sm w-full cursor-pointer transition-all duration-1000 ease-in-out ${
        activeTab === experience.name
          ? "text-[#00e5ff] bg-[#2b5255] items-center justify-center flex px-[0.5rem] border-b py-[0.5rem] border-b-[#00e5ff]"
          : "text-[#8c909b] items-center  justify-center flex px-[0.5rem]"
      }`}
    >
      {experience.name}
    </p>
  ))}
</div>
        </div>

        {/* Tab Content */}
        <div className="w-full px-4 py-6">
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
