import { ArrowUpRight } from 'lucide-react';
import { personalProjects as pers } from "../../data/data.js";

export default function PersonalProjects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Independent Creations
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text)]">
            Personal Projects & Explorations
          </h2>
          <p className="mt-2 text-sm text-[var(--text2)]">
            A collection of self-initiated builds, e-commerce themes, and web experiments outside of professional work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pers.map((project, index) => (
            <div 
              key={index} 
              className="overflow-hidden flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* End-to-end image thumbnail with async decoding */}
                  {project.image && (
                    <div className="-mx-6 -mt-6 mb-4 overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="338"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 object-top"
                      />
                    </div>
                  )}
                  
                  {/* Category & Tags positioned above the title */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="shrink-0 whitespace-nowrap rounded-md bg-[var(--accent-light)] px-2.5 py-1 text-xs font-bold text-[var(--accent)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-[var(--text)]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text2)] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--line)]">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all shadow-sm"
                    >
                      Visit Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {project.password && (
                    <span className="shrink-0 whitespace-nowrap rounded-md bg-red-100 dark:bg-red-950/50 px-2 py-1 text-xs text-red-600 dark:text-red-400">
                      Password: <span className="font-bold font-sans">{project.password}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}