import React from 'react'
import { Box, Github,  InstagramIcon, Linkedin, X } from 'lucide-react';


const LeftSideBar = () => {
  return (
    <div className="w-32 h-full relative  lg:flex hidden flex-col justify-end    "  >


          <div className="flex flex-col   items-center space-y-6 p-4">
            {/* GitHub Icon */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="text-white hover:text-[#00e5ff] transition-colors" size={24} />
            </a>

            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-white hover:text-[#00e5ff] transition-colors" size={24} />
            </a>

            {/* Twitter Icon */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <X className="text-white hover:text-[#00e5ff] transition-colors" size={24} />
            </a>

            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white hover:text-[#00e5ff] transition-colors" size={24} />
            </a>

            {/* Box Icon */}
            <a href="https://box.com" target="_blank" rel="noopener noreferrer">
              <Box className="text-white hover:text-blue-500 transition-colors" size={24} />
            </a>


            <div className="w-[1px] bg-white h-32"></div>

          </div>


        </div>
  )
}

export default LeftSideBar
