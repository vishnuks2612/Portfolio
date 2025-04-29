import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const desc = {
  WeatherApp: {
    description:
      "Simple weather app that can be used for finding weather conditions in different cities using openweathermap api",
    github: "https://github.com/vishnuks2612/Weather-App.git",
    website: "https://vishnuks2612.github.io/Weather-App/",
  },
};

const ProjectBox = ({ projectPhoto, projectName, darkMode }) => {
  const project = desc[projectName] || {};

  return (
    <div
      className={`${
        darkMode
          ? "bg-background-dark2 text-text-dark2"
          : "bg-background-light2 text-text-light2"
      } p-4 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 flex flex-col`}
    >
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={projectPhoto}
        alt={`${projectName} display`}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{projectName}</h3>
        <p className="mb-4 flex-grow">{project.description}</p>
        <div className="flex space-x-4 mt-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button
              className={`flex items-center px-4 py-2 ${
                darkMode
                  ? "bg-button-dark text-text-dark hover:bg-button-dark-hover"
                  : "bg-button-light text-text-light hover:bg-button-light-hover"
              } rounded-md shadow-md transition duration-300`}
            >
              <FaGithub className="mr-2" /> Github
            </button>
          </a>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <button
              className={`flex items-center px-4 py-2 ${
                darkMode
                  ? "bg-button-dark2 text-text-dark hover:bg-button-dark2-hover"
                  : "bg-button-light2 text-text-light hover:bg-button-light2-hover"
              } rounded-md shadow-md transition duration-300`}
            >
              <CgFileDocument className="mr-2" /> Site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
