import { memo, useState } from "react";
import "./styles/Work.css";

const projects = [
  {
    title: "ProConnect",
    category: "Full Stack",
    tools:
      "React, Node.js, PostgreSQL, REST API, JWT Auth, TypeScript, Tailwind CSS",
    image: "/images/project1.png",
    liveUrl: "[your-proconnect-live-url]",
    githubUrl: "https://github.com/Urvil004/ProConnect",
  },
  {
    title: "Oak Immigration",
    category: "Full Stack",
    tools:
      "Next.js, Node.js, MongoDB, Email Automation, CMS Integration, Tailwind CSS, Vercel",
    image: "/images/project2.png",
    liveUrl: "https://oak-immigration.vercel.app/",
    githubUrl: "https://github.com/Urvil004/oak-immigration-deployment",
  },
  {
    title: "Sakhi Designer Studio",
    category: "Full Stack",
    tools:
      "React, Node.js, MongoDB, WhatsApp API, Gallery CMS, Booking System, CSS Animations",
    image: "/images/project3.png",
    liveUrl: "https://sakhidesignerstudio.vercel.app/",
    githubUrl: "[your-sakhi-studio-github-url]",
  },
  {
    title: "NaoLogic — Work Orders",
    category: "Frontend Engineering",
    tools:
      "React, TypeScript, Custom Gantt Engine, Dynamic Grid Layout, Real-time State, CSS Variables, Component Architecture",
    image: "/images/project4.png",
    liveUrl: "https://schedule-flow-psi.vercel.app/",
    githubUrl: "[your-naologic-github-url]",
  },
  {
    title: "Tech.Care — Patient Dashboard",
    category: "Frontend Engineering",
    tools:
      "React, TypeScript, Chart.js, Multi-panel Layout, Component Design System, Real-time State, Tailwind CSS",
    image: "/images/project5.png",
    liveUrl:
      "https://urvil004.github.io/coalition-dashboard-FrontEnd-/",
    githubUrl: "[your-techcare-github-url]",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = projects.length;
  const currentProject = projects[currentIndex];
  const isEven = currentIndex % 2 !== 0;

  const goNext = () => {
    if (currentIndex < totalProjects - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-slider">
          <div
            className={`project-card ${isEven ? "even" : "odd"}`}
            key={currentIndex}
          >
            <div className="project-image">
              <img src={currentProject.image} alt={currentProject.title} />
            </div>

            <div className="project-info">
              <span className="project-number">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="project-title">{currentProject.title}</h3>
              <span
                className={`project-category ${currentProject.category === "Full Stack"
                  ? "category-fullstack"
                  : "category-frontend"
                  }`}
              >
                {currentProject.category}
              </span>
              <div>
                <p className="tools-label">Tools &amp; Features</p>
                <p className="tools-list">{currentProject.tools}</p>
              </div>

              <div className="pagination-controls">
                <button
                  className="pagination-btn"
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  aria-label="Previous project"
                  data-cursor="disable"
                >
                  ←
                </button>
                <span className="pagination-counter">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(totalProjects).padStart(2, "0")}
                </span>
                <button
                  className="pagination-btn"
                  onClick={goNext}
                  disabled={currentIndex === totalProjects - 1}
                  aria-label="Next project"
                  data-cursor="disable"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Work);
