"use client";

// import { TypingAnimationDemo } from "@/components/TypingAnimation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainDiv, setShowMainDiv] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showMagicText, setShowMagicText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timeoutWelcome = setTimeout(() => {
      setShowWelcome(false);
      setShowMainDiv(true);
    }, 2000);

    const timeoutName = setTimeout(() => {
      setShowName(true);
    }, 3000);

    const timeoutMagicText = setTimeout(() => {
      setShowMagicText(true);
    }, 6000);

    const timeoutParagraph = setTimeout(() => {
      setShowParagraph(true);
    }, 8000);

    return () => {
      clearTimeout(timeoutWelcome);
      clearTimeout(timeoutName);
      clearTimeout(timeoutMagicText);
      clearTimeout(timeoutParagraph);
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-screen mt-6 md:h-[80vh] md:justify-center lg:justify-start lg:mt-24   lg:max-w-5xl gap-6">
      {/* Welcome Section */}
      {showWelcome && (
        <div className="flex items-center justify-center w-full">
          <div className="text-base font-light pt-10 text-[#8c909b] font-mono">
            {/* <TypingAnimationDemo size="lg" text="Welcome to my little space on the web" /> */}
          </div>
        </div>
      )}

      {/* Main Div */}
      {showMainDiv && (
        <div
          className={`flex flex-col lg:px-0   px-4 md:px-14 w-full  md:mt-2 gap-2  md:gap-4 lg:gap-0  transition-opacity duration-500 ease-in ${showMainDiv ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="text-base mt-4 w-full relative  text-[#00e5ff]">
            Heyyyy!! my name is
            {/* <TypingAnimationDemo size="base" text="Heyyyy!! welcome to my space, i&apos;m" /> */}
          </div>

          {showName && (
            <h2 className="lg:text-7xl lg:leading-relaxed text-4xl md:text-6xl font-extrabold text-white">
              Omoyeni Taiwo.
              {/* <TypingAnimationDemo size="xl" text="" /> */}
            </h2>
          )}

          {showMagicText && (
            <h2 className="xl:text-7xl lg:text-6xl text-4xl font-extrabold md:text-5xl text-[#8c909b]">
              I build things for the web.
              {/* <TypingAnimationDemo size="xl" text="" /> */}
            </h2>
          )}

          {showParagraph && (
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="lg:w-[60%] md:w-[80%] mt-4 mb-14 lg:text-lg text-base text-[#8c909b]">
                I’m a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused
                on building accessible, human-centered products at{" "}
                <span
                  className="
    text-[#00e5ff] relative 
    before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#00e5ff] 
    before:transition-all before:duration-300 before:ease-in-out
    hover:before:w-full
  "
                >
                  Upstatement.
                </span>

              </p>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[#00e5ff]  border border-[#00e5ff] rounded-sm px-4 lg:text-lg text-base py-4 w-fit 
                  transition-all duration-300 ease-in-out
                 
                  hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_#00e5ff]
                  active:translate-x-[-2px] active:translate-y-[-2px] active:shadow-[2px_2px_0px_#00e5ff]
                  hover:bg-[] hover:text-[#00e5ff]
                "
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                Check me out on linkedin!
              </motion.a>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
