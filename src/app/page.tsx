import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col  w-full gap-6'  >


      <div className="flex items-center justify-center w-full">

        <h1 className="text-4xl font-extrabold pt-10 text-[#8d8787] font-mono ">Welcome to my little space on the web</h1>
      </div>



      <div className="flex flex-col gap-6" >

        <p className=" text-lg mt-20 text-[#00e5ff]" >Heyyyy!! welcome to my space, i&apos;m </p>

        <h2 className='text-7xl font-extrabold text-white '  >Omoyeni Taiwo</h2>

        <h2 className='text-7xl font-extrabold text-[#8c909b] '  >I create Magic on the web</h2>

        <p className="w-[55%] text-lg text-[#8c909b] ">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <span  className='text-[#00e5ff]' >Upstatement.</span>
        </p>

        <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
text-[#00e5ff] border border-[#00e5ff]  rounded-sm px-4 text-lg py-4 w-fit
transition-all duration-300 ease-in-out
relative 
hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#00e5ff]
active:translate-x-[-2px] active:translate-y-[-2px] active:shadow-[2px_2px_0px_#00e5ff]
hover:bg-[] hover:text-[#00e5ff]
"
                >
                  Check me out
                </a>

      </div>

    </div>
  )
}

export default Home
