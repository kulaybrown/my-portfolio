import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContentPlaceholder from "./components/ContentPlaceholder";
import useHashScrollOnLoad from "./hooks/useHashScrollOnLoad";
import "./index.css";

// Lazy-load below-the-fold sections to prevent initial bundle pressure and DOM weight
const SkillsTech = lazy(() => import("./components/SkillsTech"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const PersonalProjects = lazy(() => import("./components/PersonalProjects"));
const WebDesign = lazy(() => import("./components/WebDesign"));
// const GameDev = lazy(() => import("./components/GameDev"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useHashScrollOnLoad();

  useEffect(() => {
    // Theme setup logic
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    // Dismiss loading screen after resources/window load
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-[var(--bg)] text-[var(--text)]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<ContentPlaceholder />}>
          <SkillsTech />
          <About />
          <Projects />
          <PersonalProjects />
          <WebDesign />
          {/* <GameDev /> */}
          <Experience />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}