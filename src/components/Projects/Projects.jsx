import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../../data/data";
import "./Projects.css";

export default function Projects() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, projects.length - perView);

  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const calcOffset = useCallback(() => {
    const card = trackRef.current?.children[0];
    if (!card) return;
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
    setOffset(current * (card.offsetWidth + gap));
  }, [current]);

  useEffect(() => {
    calcOffset();
    window.addEventListener("resize", calcOffset, { passive: true });
    return () => window.removeEventListener("resize", calcOffset);
  }, [calcOffset]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-title">Project Portfolio</h2>
            <p className="section-subtitle">
              A selection of sites and apps I&apos;ve built across different industries.
            </p>
          </div>
          <div className="carousel-controls">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="ctrl-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="carousel-count">
              {current + 1}&thinsp;/&thinsp;{maxIndex + 1}
            </span>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="ctrl-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-viewport">
          <div
            ref={trackRef}
            className="carousel-track"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-inner">
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Visit project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ) : (
                      <span className="project-private">Private project</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-dots" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
