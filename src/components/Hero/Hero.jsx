import heroImg from "../../assets/images/hero-img3.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-0 pb-0 pt-[calc(var(--nav-h)+3rem)] md:pt-[calc(var(--nav-h)+5rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#1e1b4b_0%,#1e3a8a_30%,#1e40af_50%,#7e22ce_75%,#be185d_100%)] opacity-20 [html[data-theme='dark']_&]:opacity-30" />
      <div className="relative z-10 mx-auto grid w-[min(1100px,calc(100vw-3rem))] grid-cols-1 items-center lg:grid-cols-[4fr_3fr] gap-4 md:gap-4 lg:gap-0 pb-10 md:pb-10 lg:pb-0">
        <div>
          <p className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">Frontend Developer</p>
          <h1 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
            Building fast, reliable, and user&#8209;focused web experiences.
          </h1>
          <p className="mb-9 text-[1.05rem] leading-[1.75] text-[var(--text2)]">
            Highly skilled developer with 10+ years of experience translating designs
            into responsive, cross-browser interfaces. Strong in React, WordPress, and
            scalable front-end implementation.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="mailto:anelolag@gmail.com"
              className="inline-flex items-center gap-1 rounded-full border-2 border-[var(--accent)] bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white no-underline will-change-transform transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] hover:text-white hover:shadow-[var(--shadow)]"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/kulaybrown"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--text)] no-underline will-change-transform transition-all duration-300 hover:-translate-y-[5px] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow)] [html[data-theme='dark']_&]:border-white [html[data-theme='dark']_&]:hover:border-[var(--accent)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[var(--text2)]">
            <a className="text-[var(--text2)] transition-colors hover:text-[var(--accent)] hover:no-underline" href="mailto:anelolag@gmail.com">anelolag@gmail.com</a>
            <span className="select-none text-[var(--line)]">·</span>
            <a className="text-[var(--text2)] transition-colors hover:text-[var(--accent)] hover:no-underline" href="tel:+639062764229">+63 906 276 4229</a>
            <span className="select-none text-[var(--line)]">·</span>
            <span>San Jose Del Monte, Bulacan</span>
          </div>
        </div>

        <div className="relative order-first flex items-center justify-center lg:order-none">
          <div className="relative z-10 w-full max-w-[400px] overflow-hidden md:max-w-[550px]">
            <img
              src={heroImg}
              alt="Angelo Lagumbay"
              className="block h-full w-full object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-14%] z-0 rounded-[60%_40%_55%_45%/50%_60%_40%_55%] bg-[conic-gradient(from_180deg_at_50%_60%,#6d28d9_0deg,#2563eb_90deg,#db2777_200deg,#7c3aed_300deg,#6d28d9_360deg)] opacity-35 blur-[36px] [html[data-theme='dark']_&]:opacity-55"
          />
        </div>
      </div>
    </section>
  );
}
