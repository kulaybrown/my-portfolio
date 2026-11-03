import { Card, Flex, Text } from "@radix-ui/themes";
import { ArrowUpRight } from 'lucide-react';
import { personalProjects as pers } from "../../data/data.js";

export default function PersonalProjects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))]">
        <div className="mb-10">
          <Text as="p" size="2" weight="bold" className="text-blue-600 uppercase tracking-wider mb-2">
            Independent Creations
          </Text>
          <h2 className="text-[length:var(--font-size-8)] font-bold tracking-tight">
            Personal Projects & Explorations
          </h2>
          <Text as="p" size="3" color="gray" className="mt-2">
            A collection of self-initiated builds, e-commerce themes, and web experiments outside of professional work.
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pers.map((project, index) => (
            <Card key={index} size="3" className="overflow-hidden flex flex-col justify-between border border-slate-100 light:border-slate-800">
              <Flex className="flex-col h-full" style={{ justifyContent: "space-between" }}>
                <div>
                  {/* End-to-end image thumbnail */}
                  {project.image && (
                    <div className="-mx-6 -mt-6 overflow-hidden aspect-video bg-slate-100 dark:bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 object-top"
                      />
                    </div>
                  )}
                  {/* Category & Tags positioned above the title */}
                  <Flex wrap="wrap" gap="2" className="mb-6 mt-4">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="shrink-0 whitespace-nowrap rounded-md bg-[var(--accent-light)] px-2 py-1 text-xs font-bold text-[var(--accent)]">
                        {tag}
                      </span>
                    ))}
                  </Flex>
                  <Text as="h3" size="5" weight="bold" className="mb-2">
                    {project.title}
                  </Text>
                  <Text as="p" size="2" color="gray" className="mb-4 leading-relaxed">
                    {project.description}
                  </Text>
                
                </div>
                <Flex gap="3" className="pt-3 border-t border-slate-100 light:border-slate-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Visit Project <ArrowUpRight />
                    </a>
                  )}
                  {project.password && (
                    <span className="shrink-0 whitespace-nowrap rounded-md bg-red-100 px-2 py-1 text-xl text-red-600">
                      Password: <span className="font-bold" style={{"fontFamily": "sans-serif !important"}}>{project.password}</span>
                    </span>
                  )}
                </Flex>
              </Flex>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}