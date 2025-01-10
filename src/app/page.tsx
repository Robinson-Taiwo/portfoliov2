import AboutComponent from '@/components/AboutComponent'
import Experience from '@/components/Experience'
import Home from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col w-full  pb-[20rem] gap-6 items-center  " >
      <Home />
      <AboutComponent />
      <div className="mt-14 w-full">
        <Experience />
      </div>

    </div>
  )
}

export default page
