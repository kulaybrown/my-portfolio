import heroImg from "../../assets/images/hero-img.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        {/* ── Left: content ── */}
        <div className="hero-content">
          <p className="eyebrow">Frontend Developer</p>
          <h1 className="hero-title">
            Building fast, reliable, and user&#8209;focused web experiences.
          </h1>
          <p className="hero-desc">
            Highly skilled developer with 10+ years of experience translating designs
            into responsive, cross-browser interfaces. Strong in React, WordPress, and
            scalable front-end implementation.
          </p>
          <div className="hero-actions">
            <a href="mailto:anelolag@gmail.com" className="btn btn-primary">
              Get in touch
            </a>
            <a
              href="https://github.com/kulaybrown"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <a href="mailto:anelolag@gmail.com">anelolag@gmail.com</a>
            <span className="sep">·</span>
            <a href="tel:+639062764229">+63 906 276 4229</a>
            <span className="sep">·</span>
            <span>San Jose Del Monte, Bulacan</span>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="hero-image-wrap">
          <div className="hero-img-frame">
            <img
              src={heroImg}
              alt="Angelo Lagumbay"
              className="hero-img"
            />
          </div>
          <div className="hero-blob" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
