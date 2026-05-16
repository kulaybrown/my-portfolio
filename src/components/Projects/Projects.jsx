import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "../../data/data";

export default function Projects() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 1024 ? 1 : 3);
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
    <section id="projects" className="bg-[var(--surface2)] py-14 md:py-20">
      <div className="mx-auto w-[min(1100px,calc(100vw-3rem))]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Work</p>
            <h2 className="mb-3 text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">Project Portfolio</h2>
            <p className="max-w-[52ch] leading-[1.7] text-[var(--text2)]">
              A selection of sites and apps I&apos;ve built across different industries.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] will-change-transform transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[5px] enabled:hover:border-[var(--accent)] enabled:hover:bg-[var(--accent)] enabled:hover:text-white enabled:hover:shadow-[var(--shadow)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="min-w-12 text-center text-xs font-semibold text-[var(--text2)]">
              {current + 1}&thinsp;/&thinsp;{maxIndex + 1}
            </span>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] will-change-transform transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[5px] enabled:hover:border-[var(--accent)] enabled:hover:bg-[var(--accent)] enabled:hover:text-white enabled:hover:shadow-[var(--shadow)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-hidden pt-[5px]">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {projects.map((project) => (
              <article key={project.id} className="min-w-0 shrink-0 grow-0 basis-full lg:basis-[calc(33.333%_-_1rem)]">
                <div className="flex h-full flex-col gap-3 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] p-6 transform-gpu transform will-change-transform hover:-translate-y-[5px] transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[var(--shadow-lg)]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-[var(--accent-light)] px-2 py-0.5 text-[0.7rem] font-bold tracking-[0.02em] text-[var(--accent)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="m-0 text-[1.05rem] font-bold">{project.name}</h3>
                  <p className="m-0 flex-1 text-sm leading-[1.65] text-[var(--text2)]">{project.description}</p>
                  <div className="mt-auto border-t border-[var(--line)] pt-2">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] no-underline"
                      >
                        Visit project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-xs italic text-[var(--text2)]">Private project</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-2" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`h-2 rounded-full border-0 p-0 transition-all ${
                i === current
                  ? "w-[22px] bg-[var(--accent)]"
                  : "w-2 bg-[var(--line)]"
              }`}
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
