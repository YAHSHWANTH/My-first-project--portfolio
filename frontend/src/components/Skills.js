import React, { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-white py-20 px-10 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Skills
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 flex-wrap gap-3">
          <button
            onClick={() => handleTabChange("frontend")}
            className={`px-6 py-2 rounded-lg text-sm ${
              activeTab === "frontend"
                ? "bg-purple-500 text-white"
                : "text-gray-800 border border-gray-300"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => handleTabChange("backend")}
            className={`px-6 py-2 rounded-lg text-sm ${
              activeTab === "backend"
                ? "bg-purple-500 text-white"
                : "text-gray-800 border border-gray-300"
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => handleTabChange("tools")}
            className={`px-6 py-2 rounded-lg text-sm ${
              activeTab === "tools"
                ? "bg-purple-500 text-white"
                : "text-gray-800 border border-gray-300"
            }`}
          >
            Tools
          </button>
          <button
            onClick={() => handleTabChange("os")}
            className={`px-6 py-2 rounded-lg text-sm ${
              activeTab === "os"
                ? "bg-purple-500 text-white"
                : "text-gray-800 border border-gray-300"
            }`}
          >
            Operating Systems
          </button>
          <button
            onClick={() => handleTabChange("frameworks")}
            className={`px-6 py-2 rounded-lg text-sm ${
              activeTab === "frameworks"
                ? "bg-purple-500 text-white"
                : "text-gray-800 border border-gray-300"
            }`}
          >
            Frameworks & Libraries
          </button>
        </div>

        {/* Display skills based on active tab */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Frontend Skills */}
          {activeTab === "frontend" && (
            <>
              <SkillCard title="HTML" />
              <SkillCard title="CSS" />
              <SkillCard title="JavaScript" />
              {/* <SkillCard title="React.js" /> */}
            </>
          )}

          {/* Backend Skills */}
          {activeTab === "backend" && (
            <>
              <SkillCard title="Java" />
              <SkillCard title="Python" />
              <SkillCard title="Node.js" />
              <SkillCard title="Express.js" />
            </>
          )}

          {/* Tools */}
          {activeTab === "tools" && (
            <>
              <SkillCard title="Git & GitHub" />
              <SkillCard title="VS Code" />
              <SkillCard title="Postman" />
              <SkillCard title="ChatGPT" />
              <SkillCard title="MangoDB compass" />
            </>
          )}

          {/* Operating Systems */}
          {activeTab === "os" && (
            <>
              <SkillCard title="Windows 11" />
              <SkillCard title="Ubuntu" />
            </>
          )}

          {/* Frameworks & Libraries */}
          {activeTab === "frameworks" && (
            <>
              <SkillCard title="React.js" />
              <SkillCard title="Tailwind CSS" />
              {/* <SkillCard title="Express.js" />
              <SkillCard title="Bootstrap" /> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// Reusable Skill Card component
const SkillCard = ({ title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 w-full max-w-xs">
    <h3 className="text-lg font-semibold text-gray-700 text-center">{title}</h3>
  </div>
);

export default Skills;
