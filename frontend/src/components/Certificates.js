import React from "react";
import { Link } from "react-router-dom";

export default function Certifications() {
  return (
    <div id="certificates" className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">
        Certifications & Achievements
      </h2>

      {/* Certificates Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Certificate 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 border w-80 transform hover:scale-105 transition duration-300 hover:shadow-xl">
          <h3 className="text-base font-semibold mb-2">
            MERN Stack Developer Internship
          </h3>
          <p className="text-gray-700 text-sm mb-2 leading-relaxed">
            Completed 1-month AICTE & ICAC approved internship as a MERN Stack
            Developer Intern at Codec Technologies Pvt. Ltd.
          </p>
          <p className="text-xs text-gray-500">Aug 2025 - Sep 2025</p>
          <p className="text-xs text-gray-600 mt-2">
            Issued by: Codec Technologies
          </p>

          <div className="mt-3 text-right">
            <a
              href="https://drive.google.com/file/d/13PZFjPfnqYv0Sh-a5TlKw44KkzpA_3Z-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-purple-600 font-medium underline hover:text-purple-800 transition"
            >
              View
            </a>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 border w-80 transform hover:scale-105 transition duration-300 hover:shadow-xl">
          <h3 className="text-base font-semibold mb-2">Java Full Stack</h3>
          <p className="text-gray-700 text-sm mb-2 leading-relaxed">
            Certificate issued by{" "}
            <span className="font-semibold">EduSkills Academy</span> for
            completing the{" "}
            <span className="font-semibold">
              Java Full Stack Development Program
            </span>
            , covering frontend, backend, databases, and deployment.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Issued by: EduSkills Academy
          </p>

          <div className="mt-3 text-right">
            <a
              href="https://drive.google.com/file/d/1iGtGMwuskmvXJuGMeCfrtIBkCPW0AoPO/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-purple-600 font-medium underline hover:text-purple-800 transition"
            >
              View
            </a>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 border w-80 transform hover:scale-105 transition duration-300 hover:shadow-xl">
          <h3 className="text-base font-semibold mb-2">
            ServiceNow RiseUp Program
          </h3>
          <p className="text-gray-700 text-sm mb-2 leading-relaxed">
            Micro-Certification on{" "}
            <span className="font-semibold">Welcome to ServiceNow</span>,
            focusing on the fundamentals of the ServiceNow platform and its
            applications.
          </p>
          <p className="text-xs text-gray-500 mt-3">Issued by: ServiceNow</p>

          <div className="mt-3 text-right">
            <a
              href="https://drive.google.com/file/d/1L7jn8JVFcLrFlxELCaz_Wki3BmXkWqv1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs text-purple-600 font-medium underline hover:text-purple-800 transition"
            >
              View
            </a>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-right mt-8">
        <Link
          to="/all-certificates"
          className="inline-block px-5 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          View All →
        </Link>
      </div>
    </div>
  );
}
