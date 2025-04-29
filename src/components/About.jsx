import React from "react";
import Skills from "./Skills";
import { FaFileDownload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const About = () => {
  const { darkMode } = useSelector((state) => state.appSlice);

  // Framer Motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="about"
      className={`${
        darkMode
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      } min-h-screen w-full overflow-x-hidden pt-12`}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* About Text Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-6"
          variants={textVariants}
        >
          Get to <b>know</b> me!
        </motion.h1>
        <motion.p
          className="text-lg leading-relaxed mb-6"
          variants={textVariants}
        >
          Hi, my name is <b>Vishnu Satheesan</b> and I am from Kottayam, Kerala,
          India. I'm a <b>Full-stack web developer</b> and have recently
          graduated with a <b>Master of Computer Application</b>. <br />
          <br />
          I love to create projects with beautiful designs and put my own twists
          on it. You can check out some of my work in the projects section.
          <br />
          <br />I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me; links are in the
          footer. <br />
          Apart from coding, I love to make designs and do photography in my
          spare time.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/180Ox-14-Pb08j8TYJTLXXDlgSAdu832A/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-4 px-6 py-3 ${
            darkMode
              ? "bg-button-dark text-text-dark hover:bg-button-dark3-hover"
              : "bg-button-light text-text-light hover:bg-button-light3-hover"
          } rounded-md shadow-md transition duration-300`}
          whileHover={{ scale: 1.05 }}
        >
          <button className="flex items-center">
            Resume <FaFileDownload className="ml-2" />
          </button>
        </motion.a>
      </motion.div>

      {/* Skillset Section */}
      <motion.div
        className="py-8 w-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // Stagger animation for children
            },
          },
        }}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          variants={textVariants}
        >
          Skillset
        </motion.h1>
        <div className="w-screen flex justify-center">
          <motion.div
            className="flex flex-wrap justify-center gap-6 px-4 w-[90%]"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "React",
              "Redux",
              "NPM",
              "MongoDB",
              "Git",
              "GitHub",
              "Python",
              "MySQL",
              "Postman",
              "Insomnia",
              ,
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Skills skill={skill} darkMode={darkMode} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
