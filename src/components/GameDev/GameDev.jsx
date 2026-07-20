import React from "react";
import jumpyRunImg from "../../assets/images/jumpyrun-img.jpg";
import streetBusterImg from "../../assets/images/streetbuster-img.jpg";

const gameProjects = [
  {
    id: "g1",
    name: "Jumpy Run",
    image: jumpyRunImg,
    description:
      "An endless pixel-platformer about momentum, mistimed jumps, and getting back up. One button, infinite ways to fail beautifully.",
    link: "https://www.iamthelosworld.com/jumpy-run",
    status: "In Development",
    tech: ["React", "Vite", "Tailwind CSS", "HTML5 Canvas", "HTML5 Web Audio API", "PostgreSQL", "Supabase", "Node.js"],
  },
  {
    id: "g2",
    name: "Street Buster",
    description:
      "An arcade-style action game focused on high-intensity destruction. Select your fighter, choose your stage, and obliterate objects against the clock to set the ultimate high score.",
    image: streetBusterImg,
    link: "https://www.iamthelosworld.com/street-buster",
    status: "In Development",
    tech: ["React", "Vite", "CSS Styling", "PixiJS"],
  },
];

export default function GameDev() {
  return (
    <section id="gamedev" className="bg-[var(--surface2)] pb-14 md:pb-20 transition-colors duration-300">
      <div className="mx-auto w-[min(1100px,calc(100vw-3rem))]">
        
        {/* Subtle separator line to bridge Projects and GameDev within the same surface background */}
        <hr className="mb-14 md:mb-20 border-[var(--line)] opacity-60" />

        {/* Outer Container with an authentic Retro Grid backdrop */}
        <div
          className="relative overflow-hidden transition-all duration-300"
          style={{
            backgroundImage: `
              radial-gradient(circle at 85% 15%, var(--accent-light) 0%, transparent 45%),
              repeating-conic-gradient(var(--line) 0% 25%, transparent 0% 50%)
            `,
            backgroundSize: "100% 100%, 16px 16px",
            backgroundBlendMode: "normal",
          }}
        >
          {/* Opaque overlay to soften the grid so it remains extremely subtle in both light and dark modes */}
          <div className="absolute inset-0 bg-[var(--surface2)] opacity-[0.93] pointer-events-none" />

          {/* Core Content Container */}
          <div className="relative z-10">
            
            {/* Header Area */}
            <div className="mb-10">
              <span className="mb-2 inline-flex items-center gap-1.5 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--accent)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
                Indie Dev
              </span>
              <h2 className="mb-3 text-[clamp(1.7rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]">
                Game Labs
              </h2>
              <p className="max-w-[52ch] leading-[1.7] text-[var(--text2)]">
                Experimental mechanics, physics sandboxes, and retro passion projects built outside my day-to-day web stack.
              </p>
            </div>

            {/* Game Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {gameProjects.map((game) => (
                <article
                  key={game.id}
                  className="group flex flex-col overflow-hidden rounded-[calc(var(--radius)-4px)] border border-[var(--line)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow-lg)]"
                >
                  {/* Aspect Ratio 16:9 thumbnail frame */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--surface2)]">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                    {/* Pixel-style Pulse Status Badge */}
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded bg-black/80 px-2.5 py-1 text-[0.65rem] font-extrabold tracking-wider uppercase text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                      {game.status}
                    </span>
                  </div>

                  {/* Card Body details */}
                  <div className="flex flex-1 flex-col p-6">
                    
                    {/* Tech Pills */}
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {game.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-[var(--surface2)] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--text2)] border border-[var(--line)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-2 text-lg font-black group-hover:text-[var(--accent)] transition-colors duration-300">
                      {game.name}
                    </h3>
                    
                    <p className="mb-6 flex-1 text-sm leading-[1.65] text-[var(--text2)]">
                      {game.description}
                    </p>

                    {/* Action Button */}
                    <div className="border-t border-[var(--line)] pt-4">
                      <a
                        href={game.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--accent)] hover:underline"
                      >
                        Launch Game
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    </div>

                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}