import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 py-20 px-10"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">About Me</h2>
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-gray-700">Full Stack Developer</h3>
        <p className="text-gray-600 mt-4">
          I am a passionate Full Stack Developer, currently expanding my knowledge and skills in both frontend and backend technologies.
          I focus on building scalable, user-friendly web applications. With expertise in both Java and JavaScript, I specialize in creating dynamic and responsive user interfaces and handling server-side logic.
        </p>
      </div>

      {/* Education Section */}
      <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">Education</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-800">10th (SSC)</h4>
          <p className="text-gray-600 mt-2">ZPHs CM PALLE (2020)</p>
          <p className="text-gray-600 mt-2">Score: 97%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-800">Intermediate (12th)</h4>
          <p className="text-gray-600 mt-2">Sri Chaitanya College, Tirupati (2020-2022)</p>
          <p className="text-gray-600 mt-2">Score: 900/1000 (90%)</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-xl font-bold text-gray-800">B.Tech (CSE)</h4>
          <p className="text-gray-600 mt-2">Mohan Babu University, Tirupati (2022-2026)</p>
          <p className="text-gray-600 mt-2">CGPA: 8.5 (Current)</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
