import { useState } from "react";
import { skills } from "../../data/data";
import "./SkillsTech.css";

function SkillIcon({ skill }) {
  const slug = skill.slug.toLowerCase();
  const source = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
  const [hasError, setHasError] = useState(false);
  const iconColor = skill.color || "#4b5563";

  if (hasError) {
    return null;
  }

  return (
    <span
      className="skill-icon"
      role="img"
      aria-label={skill.name}
      style={{
        backgroundColor: iconColor,
        WebkitMaskImage: `url("${source}")`,
        maskImage: `url("${source}")`,
      }}
    >
      <img
        src={source}
        alt=""
        aria-hidden="true"
        className="skill-icon-probe"
        onError={() => {
          setHasError(true);
        }}
      />
    </span>
  );
}

export default function SkillsTech() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Tools and technologies I work with to build and ship great products.
        </p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.slug} className="skill-card">
              <SkillIcon skill={skill} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
