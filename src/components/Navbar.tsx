import Image from 'next/image'
import logo from "@/components/assets/icons/hexagon.svg"

import React from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="w-full overflow-hidden flex flex-row items-center justify-between h-[10vh]   lg:px-12 p-4  ">

            <Link href="/" >

                <Image src={logo} alt="Hexagon Logo" />
            </Link>

            <div className="lg:flex items-center hidden  space-x-8 text-[#ccd6f6] font-mono text-sm">
                {/* Navigation Links */}
                <Link href="about" className="group flex items-center space-x-1">
                    <span className="text-[#00e5ff]">01.</span>
                    <span className="group-hover:text-[#00e5ff] transition">About</span>
                </Link>

                <Link href="experience" className="group flex items-center space-x-1">
                    <span className="text-[#00e5ff]">02.</span>
                    <span className="group-hover:text-[#00e5ff] transition">
                        Experience
                    </span>
                </Link>



                <Link href="contact" className="group flex items-center space-x-1">
                    <span className="text-[#00e5ff]">03.</span>
                    <span className="group-hover:text-[#00e5ff] transition">Contact</span>
                </Link>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
text-[#00e5ff] border border-[#00e5ff] rounded-sm px-4 py-2
transition-all duration-300 ease-in-out
relative 
hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#00e5ff]
active:translate-x-[-2px] active:translate-y-[-2px] active:shadow-[2px_2px_0px_#00e5ff]
hover:bg-[] hover:text-[#00e5ff]
"
                >
                    Resume
                </a>
            </div>


            <div className="lg:hidden  flex " >
                <Menu className="h-10  text-[#00e5ff] w-10 " />
            </div>

        </div>
    )
}

export default Navbar
