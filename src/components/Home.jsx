import React, { useState } from "react";
import Type from "./Type";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const Home = () => {
  const { darkMode } = useSelector((state) => state.appSlice);
  const [showEmail, setShowEmail] = useState(false);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleClick = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      offset: -70, // Adjust for fixed navbar height
    });
    if (id === "contact") {
      setShowEmail((prev) => !prev);
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-64px)] sm:min-h-[100vh] px-4 py-8 ${
        darkMode ? "bg-background-dark" : "bg-background-light"
      } w-full overflow-x-hidden mt-10`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      <motion.div
        className="flex flex-col items-center text-center space-y-6 md:space-y-8 lg:space-y-10"
        variants={itemVariants}
      >
        <motion.h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
            darkMode ? "text-text-dark2" : "text-text-light2"
          }`}
          variants={itemVariants}
        >
          Hello there!
        </motion.h1>
        <motion.h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
            darkMode ? "text-text-dark" : "text-text-light"
          }`}
          variants={itemVariants}
        >
          <b>I'm</b> <b>Vishnu Satheesan</b>
        </motion.h1>
        <motion.div
          className={`${darkMode ? "text-typer-dark" : "text-typer-light"}`}
          variants={itemVariants}
        >
          <Type />
        </motion.div>
        <motion.div
          className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8"
          variants={itemVariants}
        >
          <a className="w-full" onClick={() => handleClick("about")}>
            <motion.div
              className={`flex items-center justify-center px-6 py-3 ${
                darkMode
                  ? "bg-button-dark text-text-dark hover:bg-button-dark-hover"
                  : "bg-button-light text-text-light hover:bg-button-light-hover"
              } rounded-md shadow-md transition duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me <BsPerson className="ml-2" />
            </motion.div>
          </a>
          <a className="w-full" onClick={() => handleClick("contact")}>
            <motion.div
              className={`flex items-center justify-center px-6 py-3 ${
                darkMode
                  ? "bg-button-dark2 text-text-dark hover:bg-button-dark2-hover"
                  : "bg-button-light2 text-text-light hover:bg-button-light2-hover"
              } rounded-md shadow-md transition duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact <CgPhone className="ml-2" />
            </motion.div>
          </a>
          {showEmail && (
            <motion.p
              className="text-lg mt-2"
            >
              Email:{" "}
              <a
                href="mailto:vishnuks2612@gmail.com"
                className="underline text-blue-500"
              >
                vishnuks2612@gmail.com
              </a>
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
