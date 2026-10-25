import { 
  Mail,
} from 'lucide-react';
import aboutImg from "../../assets/images/pixel-me-computer.jpg";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="mx-auto grid w-[min(1100px,calc(100vw-3rem))] grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[1fr_1.25fr]">
        <div className="relative">
          <img
            src={aboutImg}
            alt="About Angelo"
            className="mx-auto block aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-lg)] md:max-w-[460px]"
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
            Detail-oriented Web Developer with over 10 years of experience translating
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="mailto:anelolag@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-4 h-4 text-white-500" />
              <span>Let&apos;s work together</span>
            </a>
            <a
              href="https://github.com/kulaybrown"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--line)] bg-[var(--card-bg)] text-[var(--text)] font-medium text-sm hover:border-[var(--accent)] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
