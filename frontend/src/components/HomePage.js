import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/#projects"); // navigates to main page where Projects is shown
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-20 px-10"
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Hi, I'm{" "}
          <span className="text-purple-600">BUDDAIAH VAGAIRA YASWANTH</span>
        </h1>
        <p className="text-gray-700 text-xl mt-5 max-w-2xl mx-auto">
          Passionate Java Developer at{" "}
          <span className="font-semibold">Mohan Babu University</span>, focusing
          on building efficient, scalable, and elegant web applications using
          modern technologies.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNavigate}
          className="mt-10 px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          View My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomePage;
