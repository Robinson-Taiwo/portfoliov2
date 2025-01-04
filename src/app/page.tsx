import AboutComponent from '@/components/AboutComponent'
import Home from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div  className="flex flex-col  pb-[20rem] items-center  gap-8 " >
    <Home/>
    <AboutComponent/>

    </div>
  )
}

export default page
