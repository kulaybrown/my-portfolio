import { experience } from "../../data/data";

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="mx-auto w-[min(900px,calc(100vw-3rem))]">
        <p className="mb-2 block text-center text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Career</p>
        <h2 className="mb-3 text-center text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">Work Experience</h2>
        <p className="mx-auto mb-10 max-w-none text-center leading-[1.7] text-[var(--text2)]">
          Over a decade of building across agencies, startups, and enterprise teams.
        </p>
        <div className="relative pl-6 before:absolute before:bottom-[0.45rem] before:left-0 before:top-[0.45rem] before:w-0.5 before:rounded before:bg-[var(--line)] before:content-['']">
          {experience.map((job) => (
            <article key={job.id} className="relative pb-8 pl-7 last:pb-0">
              <div className="absolute left-[-1.68rem] top-[0.3rem] h-2.5 w-2.5 rounded-full border-[2.5px] border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_0_2px_var(--accent)]" aria-hidden="true" />
              <div className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-6 py-5 transition hover:border-[var(--accent)] hover:shadow-[var(--shadow)]">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="m-0 text-base font-bold">{job.role}</h3>
                    <p className="mt-1 text-sm text-[var(--text2)]">
                      {job.company}
                      <span> · </span>
                      {job.location}
                    </p>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-bold text-[var(--accent)]">{job.period}</span>
                </div>
                
                {/* Render details as list items */}
                <ul className="list-disc pl-5 space-y-1.5 text-[0.9rem] leading-[1.7] text-[var(--text2)]">
                  {job.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}