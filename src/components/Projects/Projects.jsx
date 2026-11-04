import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from 'lucide-react';
import { projects } from "../../data/data.js";

export default function Projects() {
  const items = 2;
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(items);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w < 1024 ? 1 : items);
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
    <section id="works" className="bg-[var(--surface2)] py-14 md:py-20">
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Project Portfolio
            </h2>
            <p className="mt-2 max-w-[52ch] text-sm text-[var(--text2)]">
              A selection of sites and apps I&apos;ve built across different industries.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="group grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[2px] enabled:hover:border-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white"
            >
              <svg className="group-hover:text-white text-black group-disabled:text-black transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <span className="min-w-12 text-center text-sm font-medium text-[var(--text)]">
              {current + 1}&thinsp;/&thinsp;{maxIndex + 1}
            </span>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="group grid h-10 w-10 place-items-center rounded-full border border-slate-300 bg-white text-[var(--text)] transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[2px] enabled:hover:border-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white"
            >
              <svg className="group-hover:text-white text-black group-disabled:text-black transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden pt-[5px]" style={{ contain: 'layout paint style' }}>
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-300 ease-out will-change-transform"
            style={{ 
              transform: `translateX(-${offset}px) translateZ(0)`,
            }}
          >
            {projects.map((project, index) => (
              <article 
                key={project.id} 
                className="min-w-0 shrink-0 grow-0 basis-full lg:basis-[calc(100%_/_var(--items)_-_1rem)] transform-gpu" 
                style={{ '--items': items }}
              >
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Thumbnail */}
                      {project.img && (
                        <div className="-mx-6 -mt-6 mb-4 overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
                          <img
                            src={project.img}
                            alt={project.name}
                            loading={index < 2 ? "eager" : "lazy"}
                            decoding="async"
                            width="600"
                            height="338"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((t) => (
                          <span key={t} className="shrink-0 whitespace-nowrap rounded-md bg-[var(--accent-light)] px-2.5 py-1 text-xs font-bold text-[var(--accent)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-[var(--text)]">
                        {project.name}
                      </h3>
                      
                      <p className="text-sm text-[var(--text2)] mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-4 border-t border-[var(--line)]">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-sm"
                        >
                          Visit Project <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-sm text-[var(--text2)] italic">
                          Private project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-7 flex justify-center gap-2" role="tablist" aria-label="Carousel navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              className={`h-2 rounded-full border-0 p-0 transition-all ${
                i === current
                  ? "w-[22px] bg-blue-600"
                  : "w-2 bg-slate-200 dark:bg-slate-800"
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