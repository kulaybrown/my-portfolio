import { Text } from "@radix-ui/themes";
import { experience } from "../../data/data";

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="mx-auto w-[min(1000px,calc(100vw-3rem))]">
        <Text as="p" size="2" weight="bold" className="text-blue-600 uppercase tracking-wider mb-2 text-center">
            CAREER
        </Text>
        <h2 className="text-[length:var(--font-size-8)] font-bold tracking-tight text-center">
          Work Experience
        </h2>
        <Text as="p" size="3" color="gray" className="mt-2 text-center">
            Over a decade of building across agencies, startups, and enterprise teams.
        </Text>
        <div className="relative mt-10 pl-6 before:absolute before:bottom-[0.45rem] before:left-0 before:top-[0.45rem] before:w-0.5 before:rounded before:bg-[var(--line)] before:content-['']">
          {experience.map((job) => (
            <article key={job.id} className="relative pb-8 pl-0 md:pl-7 last:pb-0">
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
                  <span className="shrink-0 whitespace-nowrap rounded-md bg-[var(--accent-light)] px-3 py-1 text-xs font-bold text-[var(--accent)]">{job.period}</span>
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