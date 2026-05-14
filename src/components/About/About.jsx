import aboutImg from "../../assets/images/about-img.jpg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* ── Left: image ── */}
        <div className="about-image-wrap">
          <img
            src={aboutImg}
            alt="About Angelo"
            className="about-img"
          />
          <div className="about-badge">
            <strong>10+</strong>
            <span>Years<br />Experience</span>
          </div>
        </div>

        {/* ── Right: content ── */}
        <div className="about-content">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Detail-Oriented Developer Who Cares About the Details
          </h2>
          <p>
            Detail-oriented Frontend Developer with over 10 years of experience translating
            designs into functional, mobile-responsive user interfaces. Proficient in HTML5,
            CSS3, JavaScript, ReactJS, and WordPress, with a strong ability to optimize
            applications for speed and scalability.
          </p>
          <p>
            Proven track record of building reusable code components and ensuring
            cross-browser compatibility. Eager to leverage expertise in UI development and a
            commitment to high performance to contribute to innovative projects at your
            company.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <strong>10+</strong>
              <span>Years of Experience</span>
            </div>
            <div className="about-stat">
              <strong>30+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="about-stat">
              <strong>9</strong>
              <span>Companies Worked With</span>
            </div>
          </div>
          <div className="about-actions">
            <a href="mailto:anelolag@gmail.com" className="btn btn-primary">
              Let&apos;s work together
            </a>
            <a
              href="https://github.com/kulaybrown"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
