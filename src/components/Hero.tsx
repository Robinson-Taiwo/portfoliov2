"use client";

import { TypingAnimationDemo } from "@/components/TypingAnimation";
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
    }, 5000);

    const timeoutName = setTimeout(() => {
      setShowName(true);
    }, 6000);

    const timeoutMagicText = setTimeout(() => {
      setShowMagicText(true);
    }, 9000);

    const timeoutParagraph = setTimeout(() => {
      setShowParagraph(true);
    }, 12000);

    return () => {
      clearTimeout(timeoutWelcome);
      clearTimeout(timeoutName);
      clearTimeout(timeoutMagicText);
      clearTimeout(timeoutParagraph);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-6">
      {/* Welcome Section */}
      {showWelcome && (
        <div className="flex items-center justify-center w-full">
          <div className="text-base font-light pt-10 text-[#8c909b] font-mono">
            <TypingAnimationDemo size="lg" text="Welcome to my little space on the web" />
          </div>
        </div>
      )}

      {/* Main Div */}
      {showMainDiv && (
        <div
          className={`flex flex-col px-4 gap-2 lg:pt-32 pt-16 transition-opacity duration-500 ease-in ${showMainDiv ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="text-sm mt-4 relative top-8 text-[#00e5ff]">
            <TypingAnimationDemo size="base" text="Heyyyy!! welcome to my space, i&apos;m" />
          </div>

          {showName && (
            <h2 className="text-7xl font-extrabold text-white">
              <TypingAnimationDemo size="xl" text="Omoyeni Taiwo" />
            </h2>
          )}

          {showMagicText && (
            <h2 className="text-7xl font-extrabold text-[#8c909b]">
              <TypingAnimationDemo size="xl" text="I create Magic on the web" />
            </h2>
          )}

          {showParagraph && (
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="w-[55%] mt-4 mb-14 text-lg text-[#8c909b]">
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
                  text-[#00e5ff]  border border-[#00e5ff] rounded-sm px-4 text-lg py-4 w-fit 
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
