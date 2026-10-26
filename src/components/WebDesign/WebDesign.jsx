import { useState, useRef, useEffect } from "react";
import d1 from "../../assets/images/design/d1.webp";
import d2 from "../../assets/images/design/d2.webp";
import d3 from "../../assets/images/design/d3.webp";
import d4 from "../../assets/images/design/d4.webp";

const designs = [
  {
    id: 1,
    title: "Modern Property Portfolio",
    description: "An elegant lodging design layout emphasizing high-end listing specs, interactive map filters, and immersive branding typography.",
    image: d2,
    link: "https://loss-stellar-site.webflow.io/",
    builtWith: ["Webflow"],
  },
  {
    id: 2,
    title: "Luxury Real Estate Landing Page",
    description: "Sleek, image-focused real estate storefront concept featuring minimalist UI, high contrast layouts, and fluid responsive grid modules.",
    image: d1,
    link: null,
    builtWith: null
  },
  {
    id: 3,
    title: "Minimalist Golf Game Concept",
    description: "Clean retro-inspired user interface design showcasing gameplay mechanics, level selections, and game stats inside.",
    image: d3,
    link: null,
    builtWith: null
  },
  {
    id: 4,
    title: "High-Performance Storefront with Shopify Hydrogen & React",
    description: "Take a look at this sleek, high-performance e-commerce concept built using Shopify Hydrogen and modern web tech.",
    image: d4,
    link: null,
    builtWith: ["Shopify Hydrogen", "React"],
  },
];

export default function WebDesign() {
  const [activeImage, setActiveImage] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      // Allow a small threshold (5px) to handle fractional pixel roundings
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // Update states shortly after scroll starts/ends
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section id="webdesign" className="pt-14 md:pt-20 pb-0 transition-colors duration-300 overflow-visible">
      {/* Header Container (Constrained width) */}
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))] mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
            UI &amp; UX DESIGN
          </p>
          <h2 className="text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">
            WEB DESIGN
          </h2>
        </div>

        {/* Carousel Arrows with disabled states */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous items"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text1)] transition ${
              !canScrollLeft
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next items"
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--text1)] transition ${
              !canScrollRight
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Scroll Container - Non-looping standard list with scroll event listener */}
      <div
        ref={carouselRef}
        onScroll={checkScrollPosition}
        className="flex pl-4 items-start gap-20 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-[max(1.5rem,calc((100vw-1400px)/2))] pb-0 overflow-visible scrollbar-none pt-[0px] md:pt-[80px] ml-6 mr-6 md:ml-1 md:mr-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {designs.map((item) => (
          <article
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group flex flex-col justify-end shrink-0 w-[92vw] sm:w-[500px] md:w-[620px] lg:w-[700px] snap-start cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-20 relative z-10"
          >
            {/* Top Text Info: Title & Description */}
            <div className="mb-4 flex-1">
              <h3 className="mb-2 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                {item.title}
              </h3>
              <p className="text-sm leading-[1.65] text-[var(--text2)] mb-2">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block text-xs font-semibold text-[var(--accent)] hover:underline"
                >
                  View Project - {item.builtWith ? item.builtWith.join(", ") : "N/A"} ↗
                </a>
              )}
            </div>

            {/* Bottom Image Frame */}
            <div className="relative h-[600px] w-full overflow-hidden bg-[var(--surface2)] border-t border-l border-r border-[var(--line)] -mb-16 md:-mb-24 shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </article>
        ))}
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