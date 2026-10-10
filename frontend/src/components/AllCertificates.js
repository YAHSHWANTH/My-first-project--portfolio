import React from "react";

export default function AllCertificates() {
  const certificates = [
    {
      title: "MERN Stack Developer Internship",
      desc: "Completed 1-month AICTE & ICAC approved internship as a MERN Stack Developer Intern at Codec Technologies Pvt. Ltd.",
      issued: "Codec Technologies",
      date: "Aug 2025 - Sep 2025",
      link: "https://drive.google.com/file/d/13PZFjPfnqYv0Sh-a5TlKw44KkzpA_3Z-/view?usp=drive_link",
    },
    {
      title: "Java Full Stack",
      desc: "Certificate issued by EduSkills Academy for completing the Java Full Stack Development Program.",
      issued: "EduSkills Academy",
      date: "2025",
      link: "https://drive.google.com/file/d/1iGtGMwuskmvXJuGMeCfrtIBkCPW0AoPO/view?usp=drive_link",
    },
    {
      title: "ServiceNow RiseUp Program",
      desc: "Micro-Certification on Welcome to ServiceNow, focusing on fundamentals of the ServiceNow platform.",
      issued: "ServiceNow",
      date: "2024",
      link: "https://drive.google.com/file/d/1L7jn8JVFcLrFlxELCaz_Wki3BmXkWqv1/view?usp=drive_link",
    },
    {
      title: "INSPIRE AWARD SCHEME",
      desc: "Selected to participate in the STATE LEVEL INSPIRE EXHIBITION CUM PROJECT COMPETITIONS.",
      issued: "District Educational Officer – K. Pandurangaswamy",
      date: "2019",
      link: "https://drive.google.com/file/d/1jWbyGDDt7eOm6FO2nuzOIg2nTg3Z7vuf/view?usp=drive_link",
    },
  ];

  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">All Certificates</h2>

      {/* Grid layout matching Certifications.jsx */}
      <div className="flex flex-wrap justify-center gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border w-80 transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            <h3 className="text-base font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-700 text-sm mb-2 leading-relaxed">{cert.desc}</p>
            <p className="text-xs text-gray-500">{cert.date}</p>
            <p className="text-xs text-gray-600 mt-2">Issued by: {cert.issued}</p>

            <div className="mt-3 text-right">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs text-purple-600 font-medium underline hover:text-purple-800 transition"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
