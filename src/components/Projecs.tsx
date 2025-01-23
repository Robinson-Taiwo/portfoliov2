import React from 'react'
import ProjectComponent from './ProjectComponent'

const Projects = () => {
    return (
        <div className="w-full mt-32 max-w-[1000px] flex-col flex items-center justify-center " >

            {/* projects header */}

            <div className='flex lg:flex-row   px-[1.4rem] md:px-10 lg:px-0  flex-col  w-full ' >
                <div className="flex flex-row gap-2  lg:gap-6 mb-20 items-center">
                    <div className="group flex text-3xl w-fit  gap-2 font-bold items-end space-x-1">
                        <span className="text-[#00e5ff] font-light font-mono text-xl ">
                            03.
                        </span>
                        <span className=" text-[white] md:text-2xl text-xl transition">Some Things I&apos;ve Built</span>
                    </div>

                    <div className="lg:w-96 flex-grow lg:flex-none h-[0.1px] bg-[#8c909b] "></div>
                </div>
            </div>

            <div className="w-full flex md:px-12 lg:px-0 flex-col gap-24 " >
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />
                <ProjectComponent />

            </div>

        </div>
    )
}

export default Projects
