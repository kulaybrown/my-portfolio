import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsTech from "./components/SkillsTech";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("light");

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
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SkillsTech />
        <About />
        <Projects />
        <Experience />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>&copy; {new Date().getFullYear()} Angelo H. Lagumbay</span>
          <a
            href="https://github.com/kulaybrown"
            target="_blank"
            rel="noreferrer"
          >
            github.com/kulaybrown
          </a>
        </div>
      </footer>
    </>
  );
}
