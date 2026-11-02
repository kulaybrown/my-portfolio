import { useState } from "react";
import { Text } from "@radix-ui/themes";
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
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
        <Text as="p" size="2" weight="bold" className="text-blue-600 uppercase tracking-wider mb-2">
          Expertise
        </Text>
        <h2 className="text-[length:var(--font-size-8)] font-bold tracking-tight">
          Skills &amp; Technologies
        </h2>
        <Text as="p" size="3" color="gray" className="mt-2 max-w-[52ch]">
          A selection of tools and technologies I use to build and ship great products.
        </Text>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 mt-8">
          {skills.map((skill) => (
            <div key={skill.slug} className="flex cursor-default flex-col items-center gap-2 bg-white dark:bg-[var(--surface)] rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] px-4 pb-4 pt-6 text-center transform-gpu transform will-change-transform hover:-translate-y-[5px] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[var(--accent)] hover:shadow-[var(--shadow)]">
              <SkillIcon skill={skill} />
              <span className="text-xs font-semibold leading-[1.3] text-[var(--text2)]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
