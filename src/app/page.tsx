import AboutComponent from '@/components/AboutComponent'
import Experience from '@/components/Experience'
import Home from '@/components/Hero'
import OtherProject from '@/components/OtherProject'
import Projects from '@/components/Projecs'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col w-full  pb-[20rem] gap-6 items-center  " >
      <Home />
      <AboutComponent />
      <div className="mt-14 w-full flex items-center justify-center ">
        <Experience />
      </div>
      <Projects />
      <OtherProject/>

    </div>
  )
}

export default page
