import "./styles/Career.css";

const experiences = [
  {
    role: "Full Stack Intern",
    company: "Trusted Communities Organization Pvt. Ltd",
    year: "2025",
    period: "Jan 2025 – Jun 2025",
    description:
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB — handling both frontend UI and backend logic end-to-end. Built AI-driven automation tools to streamline repetitive workflows and improve user interaction. Integrated language models and AI agents to create smart internal features, reducing manual effort and boosting operational efficiency.",
    highlights: [
      "Developed and maintained web applications using React, Node.js, and MongoDB — handling both frontend and backend tasks.",
      "Created responsive user interfaces ensuring smooth performance across all devices and browsers.",
      "Built AI-driven tools to automate repetitive tasks and improve how users interact with web applications.",
      "Used language models and AI agents to create smart features that made internal workflows faster and more efficient.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Independent / Open to Work",
    year: "NOW",
    period: "2025 – Present",
    description:
      "Building full-stack products and AI automation systems independently. Open to full-time roles and exciting collaborations.",
  },
] as const;

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp) => (
            <div className="career-info-box" key={`${exp.year}-${exp.company}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>
                    {exp.company}
                    {"period" in exp ? ` (${exp.period})` : ""}
                  </h5>
                </div>
                <h3>{exp.year}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
