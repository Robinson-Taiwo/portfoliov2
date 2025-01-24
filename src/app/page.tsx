import AboutComponent from '@/components/AboutComponent'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Home from '@/components/Hero'
import OtherProject from '@/components/OtherProject'
import Projects from '@/components/Projecs'
import Socials from '@/components/Socials'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col w-full   gap-6 items-center  " >
      <Home />
      <AboutComponent />
      <div className="mt-14 w-full flex items-center justify-center ">
        <Experience />
      </div>
      <Projects />
      <OtherProject />
      <Contact />
      <Socials />

      <div className="text-sm pb-8 mt-4 font-serif   text-[#ccd6f6] flex-wrap px-10 text-center ">
        <p className='mb-8' >inspired by Brittany Chiang, developed by Omoyeni Taiwo.</p>
      </div>

    </div>
  )
}

export default page
