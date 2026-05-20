import { useState } from "react";
import { skills } from "../../data/data";

function SkillIcon({ skill }) {
  const slug = skill.slug.toLowerCase();
  const source = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
  const [hasError, setHasError] = useState(false);
  const iconColor = skill.color || "#4b5563";

  if (skill.icon) {
    return (
      <img
        src={skill.icon}
        alt={skill.name}
        className="h-[42px] w-[42px] object-contain"
      />
    );
  }

  if (hasError) {
    return (
      <span className="flex h-[42px] w-[42px] items-center justify-center text-[0.6rem] font-bold leading-tight text-[#1e3a8a] text-center">
        {skill.name}
      </span>
    );
  }

  return (
    <span
      className="inline-block h-[42px] w-[42px] min-h-[42px] min-w-[42px] shrink-0 flex-none bg-[var(--icon-color)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
      role="img"
      aria-label={skill.name}
      style={{
        "--icon-color": iconColor,
        WebkitMaskImage: `url("${source}")`,
        maskImage: `url("${source}")`,
      }}
    >
      <img
        src={source}
        alt=""
        aria-hidden="true"
        className="hidden"
        onError={() => {
          setHasError(true);
        }}
      />
    </span>
  );
}

export default function SkillsTech() {
  return (
    <section id="skills" className="bg-[var(--surface2)] py-14 md:py-20">
      <div className="mx-auto w-[min(1100px,calc(100vw-3rem))]">
        <p className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Expertise</p>
        <h2 className="mb-3 text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">Skills &amp; Technologies</h2>
        <p className="mb-10 max-w-[52ch] leading-[1.7] text-[var(--text2)]">
          Tools and technologies I work with to build and ship great products.
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4">
          {skills.map((skill) => (
            <div key={skill.slug} className="flex cursor-default flex-col items-center gap-2 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-4 pb-4 pt-6 text-center transform-gpu transform will-change-transform hover:-translate-y-[5px] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[var(--accent)] hover:shadow-[var(--shadow)]">
              <SkillIcon skill={skill} />
              <span className="text-xs font-semibold leading-[1.3] text-[var(--text2)]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
