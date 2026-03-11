import "./styles/About.css";
import { memo } from "react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "AI / Automation",
    items: ["LangChain", "OpenAI API", "n8n", "Zapier", "Python"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Vercel", "Figma", "Linux"],
  },
] as const;

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me about-content">
        <h3 className="title">About Me</h3>
        <p className="about-bio para">
          I'm Urvil Darji, a Full Stack Developer and AI Automation Engineer
          based in India. I build end-to-end digital products — from
          pixel-perfect frontends to robust backend systems — and layer
          intelligent automation on top to make them genuinely smart. I'm
          obsessed with the intersection of great design and powerful
          engineering: things that look effortless but perform exceptionally.
          When I'm not shipping features, I'm experimenting with AI workflows,
          LLM integrations, and tools that save humans from repetitive work.
        </p>
        <div className="skills-section">
          <p className="skills-heading">Skills &amp; Tech Stack</p>
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <span className="skill-category-label">{group.category}</span>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(About);
