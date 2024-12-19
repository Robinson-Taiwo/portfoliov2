import React from 'react'

const AboutComponent = () => {
    return (
        <div className="flex flex-row    mt-80 w-full " >


            <div >
                <div className="flex-col">

                    <div className="flex flex-row gap-6 items-center" >

                    <div className="group flex text-3xl gap-2 font-bold items-end space-x-1">
                        <span className="text-[#00e5ff] font-light font-mono text-xl ">01.</span>
                        <span className=" text-[white] transition">About me</span>
                    </div>

                    <div className="w-96 h-[0.5px] bg-[#8c909b] "></div>

                    </div>

                    <div>
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>

                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
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
