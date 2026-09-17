import { useState } from "react";
import d1 from "../../assets/images/design/d1.webp";
import d2 from "../../assets/images/design/d2.webp";
import d3 from "../../assets/images/design/d3.webp";

const designs = [
  {
    id: 1,
    title: "Luxury Real Estate Landing Page",
    description: "Sleek, image-focused real estate storefront concept featuring minimalist UI, high contrast layouts, and fluid responsive grid modules.",
    image: d1,
  },
  {
    id: 2,
    title: "Modern Property Portfolio",
    description: "An elegant lodging design layout emphasizing high-end listing specs, interactive map filters, and immersive branding typography.",
    image: d2,
  },
  {
    id: 3,
    title: "Minimalist Golf Game Concept",
    description: "Clean retro-inspired user interface design showcasing gameplay mechanics, level selections, and game stats inside.",
    image: d3,
  },
];

export default function WebDesign() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="webdesign" className="py-14 md:py-20 transition-colors duration-300">
      <div className="mx-auto w-[min(1100px,calc(100vw-3rem))]">
        <div className="mb-10 text-center md:text-left">
          <p className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
            UI &amp; UX DESIGN
          </p>
          <h2 className="mb-3 text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">
            Web Design Projects
          </h2>
          <p className="max-w-[52ch] leading-[1.7] text-[var(--text2)]">
            Visual concepts, wireframes, and creative design systems focused on user-centered experiences.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow-lg)] cursor-pointer"
            >
              {/* Aspect Ratio 4:3 frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--surface2)] border-b border-[var(--line)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Description container */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-bold group-hover:text-[var(--accent)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.65] text-[var(--text2)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-8 animate-fade-in backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 z-[210] flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/45 shadow-md"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-[1500px] overflow-y-auto rounded-xl shadow-2xl bg-black/50 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full h-auto block rounded-lg cursor-zoom-out"
              onClick={() => setActiveImage(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
