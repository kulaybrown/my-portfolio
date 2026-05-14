import { experience } from "../../data/data";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <p className="section-label text-center">Career</p>
        <h2 className="section-title text-center">Work Experience</h2>
        <p className="section-subtitle text-center">
          Over a decade of building across agencies, startups, and enterprise teams.
        </p>
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.id} className="tl-item">
              <div className="tl-dot" aria-hidden="true" />
              <div className="tl-body">
                <div className="tl-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="tl-company">
                      {job.company}
                      <span> · </span>
                      {job.location}
                    </p>
                  </div>
                  <span className="tl-period">{job.period}</span>
                </div>
                <p className="tl-detail">{job.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
