import React from 'react'
import { Box, Github, InstagramIcon, Linkedin, X } from 'lucide-react';


const LeftSideBar = () => {
  return (
    <div className="w-32 h-full relative  lg:flex hidden items-center flex-col justify-end pb-0   "  >


      <div className="flex flex-col   items-center space-y-6 p-4">
        {/* GitHub Icon */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="text-[#8c909b] hover:text-[#00e5ff] transition-colors" size={20} />
        </a>

        {/* Instagram Icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="text-[#8c909b] hover:text-[#00e5ff] transition-colors" size={20} />
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <X className="text-[#8c909b] hover:text-[#00e5ff] transition-colors" size={20} />
        </a>

        {/* LinkedIn Icon */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="text-[#8c909b] hover:text-[#00e5ff] transition-colors" size={20} />
        </a>

        {/* Box Icon */}
        <a href="https://box.com" target="_blank" rel="noopener noreferrer">
          <Box className="text-[#8c909b] hover:text-blue-500 transition-colors" size={20} />
        </a>



      </div>
        <div className="w-[1px] mb-0 bg-[#8c909b] h-24"></div>


    </div>
  )
}

export default LeftSideBar
