import React from 'react'

const AboutComponent = () => {
    return (
        <div className="flex flex-row    mt-80 w-full " >


            <div >
                <div className="flex-col">

                    <div className="flex flex-row gap-6 mb-20 items-center" >

                        <div className="group flex text-3xl gap-2 font-bold items-end space-x-1">
                            <span className="text-[#00e5ff] font-light font-mono text-xl ">01.</span>
                            <span className=" text-[white] transition">About me</span>
                        </div>

                        <div className="w-96 h-[0.5px] bg-[#8c909b] "></div>

                    </div>

                    <div className="  flex flex-col gap-4 w-[44%] text-[#8c909b] " >
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>

                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at   <span
                                className="
   text-[#00e5ff] relative 
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#00e5ff] 
    before:transition-all before:duration-300 before:ease-in-out
    hover:before:w-full
  "
                            >
                                an advertising agency, a start-up, a huge corporation,
                            </span> and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>

                        <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>

                        <p>Here are a few technologies I’ve been working with recently:

                        </p>

                    </div>

                </div>

            </div>

            {/* second part of the about pagr */}
            <div>

            </div>


        </div>
    )
}

export default AboutComponent
