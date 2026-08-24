import { useEffect } from "react";

export default function useHashScrollOnLoad() {
  useEffect(() => {
    const rawHash = window.location.hash;
    if (!rawHash) return;

    const id = decodeURIComponent(rawHash.slice(1));
    let attempts = 0;
    const maxAttempts = 12;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior: "auto" });
      return true;
    };

    if (scrollToTarget()) return;

    const timer = window.setInterval(() => {
      attempts += 1;
      if (scrollToTarget() || attempts >= maxAttempts) {
        window.clearInterval(timer);
      }
    }, 50);

    return () => window.clearInterval(timer);
  }, []);
}