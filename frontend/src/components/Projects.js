import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/all-projects");
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Featured Projects
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Here are some of my featured projects crafted with modern technologies
        focusing on performance, design, and functionality.
      </p>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Portfolio Project */}
        <ProjectCard
          img="https://miro.medium.com/v2/resize:fit:730/0*SEdGTbPR8hfkTWR2.jpg"
          title="Portfolio"
          description="A personal portfolio website built with React.js to showcase my skills, projects, and achievements through a responsive and elegant design."
        />

        {/* Hospital Management System */}
        <ProjectCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FxkX7gmGqzZEko3U4skN9jxYGBKwztTm0A&s"
          title="Hospital Management System"
          description="A full-stack system for hospitals to manage patients, appointments, billing, and staff coordination using React.js, Node.js, and MongoDB."
        />

        {/* Code Nexus */}
        <ProjectCard
          img="https://www.knowmad.com/hubfs/webdesign-photo.jpg"
          title="Code Nexus"
          description="An online course learning platform developed with React, Node.js, and MongoDB for user registration, learning management, and admin control."
        />
      </div>

      {/* View All Button - aligned right */}
      <div className="flex justify-end mt-12 pr-4">
        <button
          onClick={handleViewAll}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all duration-300"
        >
          View All →
        </button>
      </div>
    </section>
  );
};

// Reusable card component
const ProjectCard = ({ img, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
    <img
      src={img}
      alt={title}
      className="w-full h-36 object-cover mb-4 rounded-lg"
    />
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 text-sm">{description}</p>
  </div>
);

export default Projects;
