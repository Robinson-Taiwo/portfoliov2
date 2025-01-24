import React from 'react'
import {  Github, InstagramIcon, Linkedin, X } from 'lucide-react';
const Socials = () => {
  return (
    <div  className="w-full px-6 " >

<div className="flex flex-row lg:hidden w-full max-w-4xl justify-center  items-center p-4  gap-10">
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

   


      </div>

      
    </div>
  )
}

export default Socials
