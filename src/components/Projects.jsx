import React from "react";
import ProjectBox from "./ProjectBox";
import WeatherImg from "../images/WeatherApp.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const projectData = [
  { photo: WeatherImg, name: "WeatherApp" },
  { name: "CurriculumCraft" },
];

const Projects = () => {
  const { darkMode } = useSelector((state) => state.appSlice);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger the appearance of child elements
    },
  };

  const projectBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      id="projects"
      className={`${
        darkMode
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      } flex justify-center py-8 px-4 min-h-screen w-full overflow-x-hidden pt-20`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-[90%]">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <b>Projects</b>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projectData.map((project) => (
            <motion.div
              key={project.name}
              variants={projectBoxVariants} // Apply animation to each project box
              whileHover={{ scale: 1.05 }} // Slight scale-up effect on hover
            >
              <ProjectBox
                projectPhoto={project.photo}
                projectName={project.name}
                darkMode={darkMode}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
