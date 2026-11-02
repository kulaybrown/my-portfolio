import { useCallback, useEffect, useRef, useState } from "react";
import { Card, Flex, Text, Badge, Button } from "@radix-ui/themes";
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
    <section id="projects" className="bg-[var(--surface2)] py-14 md:py-20">
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Text as="p" size="2" weight="bold" className="text-blue-600 uppercase tracking-wider mb-2">
              Work
            </Text>
            <h2 className="text-[length:var(--font-size-8)] font-bold tracking-tight">
              Project Portfolio
            </h2>
            <Text as="p" size="3" color="gray" className="mt-2 max-w-[52ch]">
              A selection of sites and apps I&apos;ve built across different industries.
            </Text>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="group grid h-10 w-10 place-items-center rounded-full border light:border-slate-800 bg-white text-black-600 will-change-transform transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[5px] enabled:hover:border-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white"
            >
              <svg className="text-black group-hover:text-white group-disabled:text-black group-disabled:opacity-30 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <Text as="span" size="2" weight="medium" className="min-w-12 text-center text-dark">
              {current + 1}&thinsp;/&thinsp;{maxIndex + 1}
            </Text>
            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Next"
              className="group grid h-10 w-10 place-items-center rounded-full border light:border-slate-800 bg-white text-black-600 will-change-transform transition-all duration-300 disabled:cursor-default disabled:opacity-30 enabled:hover:-translate-y-[5px] enabled:hover:border-blue-500 enabled:hover:bg-blue-500 enabled:hover:text-white"
            >
              <svg className="text-black group-hover:text-white group-disabled:text-black group-disabled:opacity-30 transition-colors" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="overflow-hidden pt-[5px]">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {projects.map((project) => (
              <article key={project.id} className="min-w-0 shrink-0 grow-0 basis-full lg:basis-[calc(100%_/_var(--items)_-_1rem)]" style={{ '--items': items }}>
                <Card size="3" className="flex h-full flex-col justify-between overflow-hidden border border-slate-100 light:border-slate-800 transition-all duration-300 hover:shadow-lg">
                  <Flex className="flex-col h-full" style={{ justifyContent: "space-between" }}>
                    <div>
                      {/* End-to-end Image Thumbnail */}
                      {project.img && (
                        <div className="-mx-6 -mt-6 mb-4 overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
                          <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      {/* Tech Stack Badges */}
                      <Flex wrap="wrap" gap="2" className="mb-3">
                        {project.tech.map((t) => (
                          <span key={t} className="shrink-0 whitespace-nowrap rounded-md bg-[var(--accent-light)] px-2 py-1 text-xs font-bold text-[var(--accent)]">
                            {t}
                          </span>
                        ))}
                      </Flex>
                      <Text as="h3" size="5" weight="bold" className="mb-2">
                        {project.name}
                      </Text>
                      <Text as="p" size="2" color="gray" className="mb-6 leading-relaxed">
                        {project.description}
                      </Text>
                    </div>
                    {/* Footer Action */}
                    <div className="pt-3 border-t border-slate-100 light:border-slate-800">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          Visit Project <ArrowUpRight />
                        </a>
                    
                      ) : (
                        <Text as="span" size="2" color="gray" className="italic">
                          Private project
                        </Text>
                      )}
                    </div>
                  </Flex>
                </Card>
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