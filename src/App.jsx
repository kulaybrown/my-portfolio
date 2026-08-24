import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsTech from "./components/SkillsTech";
import About from "./components/About";
import Projects from "./components/Projects";
import GameDev from "./components/GameDev";
import Experience from "./components/Experience";
import useHashScrollOnLoad from "./hooks/useHashScrollOnLoad";
import { Theme } from "@radix-ui/themes";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  useHashScrollOnLoad();

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="large">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SkillsTech />
        <About />
        <Projects />
        <GameDev />
        <Experience />
      </main>
      <footer className="mt-4 border-t border-[var(--line)] py-6">
        <div className="mx-auto flex w-[min(1100px,calc(100vw-3rem))] flex-wrap items-center justify-between gap-2 text-sm text-[var(--text2)]">
          <span>&copy; {new Date().getFullYear()} Angelo H. Lagumbay</span>
          <a
            href="https://github.com/kulaybrown"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            github.com/kulaybrown
          </a>
        </div>
      </footer>
    </Theme>
  );
}
