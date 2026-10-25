import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SkillsTech from "./components/SkillsTech";
import About from "./components/About";
import Projects from "./components/Projects";
import WebDesign from "./components/WebDesign";
import GameDev from "./components/GameDev";
import Experience from "./components/Experience";
import useHashScrollOnLoad from "./hooks/useHashScrollOnLoad";
import { Theme, Spinner } from "@radix-ui/themes";
import "./index.css";

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

  // Fullscreen Loader State
  if (loading) {
    return (
      <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="large">
        <div className="flex h-screen w-full items-center justify-center bg-[var(--bg)] text-[var(--text)]">
          <Spinner size="3" />
        </div>
      </Theme>
    );
  }

  return (
    <Theme appearance={theme} accentColor="blue" grayColor="slate" radius="large">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <SkillsTech />
        <About />
        <Projects />
        <WebDesign />
        <GameDev />
        <Experience />
      </main>
      <Footer />
    </Theme>
  );
}