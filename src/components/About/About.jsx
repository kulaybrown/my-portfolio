import aboutImg from "../../assets/images/about-img.jpg";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto grid w-[min(1100px,calc(100vw-3rem))] grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1fr_1.25fr]">
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Angelo"
            className="mx-auto block aspect-[4/5] w-full max-w-[300px] rounded-3xl object-cover shadow-[var(--shadow-lg)] md:max-w-[460px]"
          />
          <div className="absolute bottom-6 right-[calc(50%-150px-1rem)] rounded-2xl bg-[var(--accent)] px-4 py-3 text-center leading-tight text-white shadow-[var(--shadow-lg)] md:right-[-1rem]">
            <strong className="block text-[1.8rem] font-extrabold leading-none">10+</strong>
            <span className="text-[0.72rem] font-semibold opacity-90">Years<br />Experience</span>
          </div>
        </div>

        <div>
          <p className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">About Me</p>
          <h2 className="mb-3 text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Detail-Oriented Developer Who Cares About the Details
          </h2>
          <p className="mb-4 leading-[1.8] text-[var(--text2)]">
            Detail-oriented Frontend Developer with over 10 years of experience translating
            designs into functional, mobile-responsive user interfaces. Proficient in HTML5,
            CSS3, JavaScript, ReactJS, and WordPress, with a strong ability to optimize
            applications for speed and scalability.
          </p>
          <p className="mb-4 leading-[1.8] text-[var(--text2)]">
            Proven track record of building reusable code components and ensuring
            cross-browser compatibility. I actively leverage AI-assisted development tools
            like GitHub Copilot and Gemini to accelerate workflows, improve code quality,
            and ship features faster — without sacrificing attention to detail.
          </p>
          <div className="my-7 flex flex-wrap gap-6">
            <div className="flex flex-col gap-1">
              <strong className="text-[1.9rem] font-extrabold leading-none text-[var(--accent)]">10+</strong>
              <span className="text-xs font-medium text-[var(--text2)]">Years of Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-[1.9rem] font-extrabold leading-none text-[var(--accent)]">30+</strong>
              <span className="text-xs font-medium text-[var(--text2)]">Projects Delivered</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-[1.9rem] font-extrabold leading-none text-[var(--accent)]">9</strong>
              <span className="text-xs font-medium text-[var(--text2)]">Companies Worked With</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:anelolag@gmail.com"
              className="inline-flex items-center gap-1 rounded-full border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white no-underline will-change-transform transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] hover:text-white hover:shadow-[var(--shadow)]"
            >
              Let&apos;s work together
            </a>
            <a
              href="https://github.com/kulaybrown"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border-2 border-[var(--line)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--text)] no-underline will-change-transform transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow)]"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
