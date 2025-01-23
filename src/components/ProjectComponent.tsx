import { ExternalLink } from 'lucide-react'
import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image';


const ProjectComponent = () => {
    return (
        <div className="flex xl:h-[363px] lg:h-[300px]  w-full  flex-row relative" >

            <div className="projext-image h-full relative   w-[60%]   ">

                <div className="absolute rounded-lg bg-green-500 lack h-full  z-10 xl:w-[120%] lg:w-[150%] ">
                    <div className="relative w-full h-full ">

                        <div className="bg-[#00e5ff] border-r-[1px] border-r-[#00e5ff] rounded-sm bg-opacity-30 hover:border-none  z-20 absolute h-full w-full hover:bg-transparent  "></div>

                        <Image src="/portfolioShot.png" className="w-full  z-10 object-fit bg-blend-overlay  h-full" width={578} height={363} alt="link thumbnail" />
                    </div>

                </div>

            </div>

            <div className="texts h-full gap-4 py-6  flex flex-col items-end  w-[578] ">

                {/* PROJECT FEATURED TEXT */}
                <div className="featured-project  text-[#00e5ff] " >
                    Featured Project
                </div>
                {/* PROJECT TITLE */}
                <div className='font-bold text-2xl hover:text-[#00e5ff] text-[#ccd6f6] cursor-pointer  ' >
                    My Portfolio
                </div>
                {/* PROJECT DESCRIPTION */}
                <div className="w-[98%] px-6 py-6 bg-[#11213f] flex justify-end relative  rounded-md   z-50" >
                    <div className=" text-[#ccd6f6]    w-[95%]  text-end text-[0.85rem] " >
                        A minimal, dark blue theme portfolio inspired by Brittany Chiang. it contains all my social media handles alongside my experiences and amazing projects all together
                    </div>
                </div>

                {/* PROJECT TOOLS */}
                <div className="flex relative  z-50  text-[#ccd6f6] gap-4 text-sm"  >
                    <div> VS Code</div>
                    <div>Next.js</div>
                    <div>Typescript</div>
                    <div>Tailwind CSS</div>
                    <div>Framer Motion</div>


                </div>

                {/* GITHUB AND VIEW */}
                <div className="flex flex-row gap-6 text-[#8c909b] "  >
                    <FaGithub className='h-6 w-6 cursor-pointer  hover:text-[#00e5ff]  ' />
                    <ExternalLink className='hover:text-[#00e5ff] cursor-pointer ' />
                </div>

            </div>




        </div>
    )
}

export default ProjectComponent
