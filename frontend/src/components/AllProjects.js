import React from "react";

const AllProjects = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        All Projects
      </h2>
      <p className="text-center text-gray-600 mb-12">
        A collection of my full-stack and web development projects, showcasing
        creativity, problem-solving, and technical expertise.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Portfolio Project */}
        <ProjectCard
          img="https://miro.medium.com/v2/resize:fit:730/0*SEdGTbPR8hfkTWR2.jpg"
          title="Portfolio"
          description="A React-based portfolio site to highlight my professional journey, showcasing my skills, projects, and contact details with a modern layout."
        />

        {/* Hospital Management System */}
        <ProjectCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FxkX7gmGqzZEko3U4skN9jxYGBKwztTm0A&s"
          title="Hospital Management System"
          description="A web-based hospital management solution for handling patient data, appointments, and billing using React.js, Node.js, and MongoDB."
        />

        {/* Code Nexus */}
        <ProjectCard
          img="https://www.knowmad.com/hubfs/webdesign-photo.jpg"
          title="Code Nexus"
          description="An online course learning platform featuring user registration, course browsing, and admin functionalities built on the MERN stack."
        />

        {/* Blockchain-Enabled Tamper-Proof Document Verification */}
        <ProjectCard
          img="https://externlabs.com/blogs/wp-content/uploads/2022/07/iStock-1131340856-scaled-e1631638302998.jpg"
          title="Blockchain-Enabled Tamper-Proof Document Verification"
          description="A blockchain-based system that ensures secure, immutable, and transparent verification of official documents. Designed to eliminate fraud and enhance data integrity using smart contracts and decentralized validation."
        />
      </div>
    </section>
  );
};

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

export default AllProjects;
