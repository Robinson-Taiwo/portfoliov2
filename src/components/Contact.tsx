import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center mt-28 p-4 max-w-xl gap-2  "  >

      <div className="group flex tracking-widest    w-fit  gap-2  items-end space-x-1">
        <span className="text-[#00e5ff] font-light font-mono  ">
          04.
        </span>
        <span className=" text-[#00e5ff] text-xl   transition">What&apos;s Next?</span>
      </div>


      {/* get in touch text heading  */}
      <h1 className="  text-4xl md:text-5xl  font-extrabold text-[#ccd6f6]  ">Get In Touch</h1>

      <p className="md:text-base text-base text-center mt-6 text-[#8c909b] ">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <div className="w-full md:h-[20vh] h-[20vh] items-center flex justify-center">
        {/* Say hello Link */}
        <Link
          href="/email"
          target="_blank"
          rel="noopener noreferrer"
          className="
text-[#00e5ff] border border-[#00e5ff] rounded-sm px-6 py-4
transition-all duration-300 ease-in-out 
relative 
hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#00e5ff]
active:translate-x-[-2px] active:translate-y-[-2px] active:shadow-[2px_2px_0px_#00e5ff] md:text-xl
hover:bg-[] hover:text-[#00e5ff]
"
        >
         Say Hello
        </Link>
      </div>

    </div>
  )
}

export default Contact
