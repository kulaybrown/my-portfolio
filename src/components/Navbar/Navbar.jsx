import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills & Tech", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      document.body.classList.add("resize-animation-stopper");
      
      // Auto-close menu if resizing to desktop
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
      }, 300);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] transition-all duration-300 ${
        scrolled
          ? "bg-[color-mix(in_srgb,var(--surface)_92%,transparent)] shadow-[var(--shadow)] backdrop-blur-md"
          : "bg-transparent"
      }`}
      ref={navRef}
    >
      <div className="mx-auto flex h-full w-[min(1100px,calc(100vw-3rem))] items-center justify-between">
        <a
          className="shrink-0 text-base font-bold tracking-[-0.01em] text-[var(--text)] no-underline transition-colors hover:text-[var(--accent)]"
          href="#hero"
          onClick={handleNavClick}
        >
          Angelo H. Lagumbay
        </a>

        <div
          className={`fixed left-0 right-0 top-[var(--nav-h)] flex flex-col items-stretch gap-1 bg-[var(--surface)] px-6 pb-6 pt-4 shadow-[var(--shadow-lg)] transition-[transform,opacity] duration-300 md:static md:top-auto md:flex-row md:items-center md:gap-1 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:transition-none ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-[110%] opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-2 py-3 text-base font-medium text-[var(--text2)] no-underline transition md:px-3 md:py-2 md:text-sm hover:bg-[var(--accent-light)] hover:text-[var(--accent)]"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <button
            className="mt-2 ml-0 inline-flex items-center justify-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface2)] px-4 py-2 text-sm font-semibold text-[var(--text)] will-change-transform transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(14,26,32,0.2)] [html[data-theme='dark']_&]:hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:mt-0 md:ml-2 md:justify-start md:px-3 md:py-1.5 md:text-xs [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
            <span>{theme === "light" ? "Dark" : "Light"}</span>
          </button>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((o) => !o);
          }}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-5 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
