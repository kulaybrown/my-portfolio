import React, { useState } from 'react';
import { 
  Terminal, 
  Code2, 
  Layers, 
  FolderGit2, 
  Mail, 
  ArrowUpRight, 
  Copy, 
  Check, 
  ChevronRight,
  CheckCircle2,
  Cpu,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code'); // 'code', 'terminal', 'skills'
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Initializing Kulaybrown Dev Environment v10.4.0...' },
    { type: 'success', text: 'Loaded profile: Angelo Lagumbay (Web Developer)' },
    { type: 'info', text: 'Type "help" or click suggestions below to explore.' }
  ]);

  const handleCopyCode = () => {
    const codeString = `const developer = {
  name: "Angelo 'Lo' Lagumbay",
  handle: "kulaybrown",
  role: "Web Developer",
  yearsExperience: 10,
  stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PHP", "WordPress", "Shopify"],
  availability: "Available for Remote, Onsite & Hybrid Roles"
};`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${terminalInput}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ 
          type: 'response', 
          text: 'Available commands: bio, stack, contact, status, clear' 
        });
        break;
      case 'bio':
        newLogs.push({ 
          type: 'response', 
          text: 'Angelo Lagumbay: Web Developer with 10+ years crafting scalable, high-performance web applications and digital solutions.' 
        });
        break;
      case 'stack':
        newLogs.push({ 
          type: 'response', 
          text: 'React, Next.js, TypeScript, Tailwind CSS, PHP, WordPress, Shopify, REST/GraphQL APIs, Performance & SEO Optimization' 
        });
        break;
      case 'contact':
        newLogs.push({ 
          type: 'response', 
          text: 'GitHub: github.com/kulaybrown | Email: available via contact section below' 
        });
        break;
      case 'status':
        newLogs.push({ 
          type: 'success', 
          text: '🟢 Currently available for Remote, Onsite & Hybrid Web Developer roles.' 
        });
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({ 
          type: 'error', 
          text: `Command not recognized: "${cmd}". Type "help" for options.` 
        });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const runPresetCmd = (cmd) => {
    setTerminalInput(cmd);
    setTimeout(() => {
      const e = { preventDefault: () => {} };
      handleTerminalSubmit(e);
    }, 50);
  };

  return (
    <section className="relative w-full py-12 md:py-20 lg:py-28 overflow-hidden text-[var(--text)] transition-colors duration-300">
      {/* Decorative Subtle Grid & Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
      
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Bio, Badges & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Badge */}
          <div className="mt-5 md:mt-0 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--card-bg,rgba(255,255,255,0.05))] border border-[var(--line)] backdrop-blur-md text-xs font-medium text-[var(--text)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Remote, Onsite & Hybrid Roles</span>
            <span className="text-[var(--text2)] opacity-50">•</span>
            <span className="font-mono text-[var(--text2)]">10+ Yrs Experience</span>
          </div>

          {/* Main Typography */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Building <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 bg-clip-text text-transparent">scalable, high-performance</span> web applications.
            </h1>
            
            <p className="text-md md:text-lg text-[var(--text2)] font-normal leading-relaxed max-w-2xl">
              Hi, I'm <strong className="text-[var(--text)] font-semibold">Angelo Lagumbay</strong>—a Web Developer with over 10 years of experience turning complex user experience designs into robust, performant digital web products using React, Next.js, PHP, and modern CMS platforms.
            </p>
          </div>

          {/* Core Technical Stack Badges */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text2)] font-semibold block">
              Core Stack & Expertise
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'React', 
                'Next.js', 
                'TypeScript', 
                'Tailwind CSS', 
                'PHP', 
                'WordPress', 
                'Shopify', 
                'REST & GraphQL'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md border border-[var(--line)] bg-[var(--card-bg,rgba(0,0,0,0.02))] text-[var(--text)] text-xs font-mono font-medium transition-all hover:border-[var(--accent,rgba(59,130,246,0.5))] hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Featured Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:anelolag@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--line)] bg-[var(--card-bg)] text-[var(--text)] font-medium text-sm hover:border-[var(--accent)] transition-all"
            >
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="pt-6 border-t border-[var(--line)] grid grid-cols-3 gap-4 max-w-lg">
            <div>
              <p className="text-2xl font-bold font-mono text-[var(--text)]">10+</p>
              <p className="text-xs text-[var(--text2)]">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-blue-500">30+</p>
              <p className="text-xs text-[var(--text2)]">Web Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-mono text-indigo-500">99.9%</p>
              <p className="text-xs text-[var(--text2)]">Code Quality</p>
            </div>
          </div>

        </div>

        {/* Right Column: Developer Workspace Card (No Photo) */}
        <div className="relative lg:col-span-5 w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-14%] z-0 rounded-[60%_40%_55%_45%/50%_60%_40%_55%] bg-[conic-gradient(from_180deg_at_50%_60%,#6d28d9_0deg,#2563eb_90deg,#db2777_200deg,#7c3aed_300deg,#6d28d9_360deg)] opacity-35 blur-[36px] [html[data-theme='dark']_&]:opacity-55"
          />
          <div className="relative rounded-2xl border border-[var(--line)] [html[data-theme='dark']_&]:bg-[var(--card-bg-dark,rgba(0,0,0,0.6))] bg-[var(--card-bg,rgba(255,255,255,0.7))] shadow-xl backdrop-blur-md overflow-hidden group">
            
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg)] border-b border-[var(--line)]">
              {/* Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80 block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80 block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80 block" />
              </div>

              {/* View Selector Tabs */}
              <div className="flex bg-[var(--card-bg)] p-1 rounded-lg border border-[var(--line)] text-xs font-mono">
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'code' 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-[var(--text2)] hover:text-[var(--text)]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Profile.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('terminal')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'terminal' 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-[var(--text2)] hover:text-[var(--text)]'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CLI</span>
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'skills' 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-[var(--text2)] hover:text-[var(--text)]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Stack</span>
                </button>
              </div>

              {/* Action Button */}
              {activeTab === 'code' && (
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-md text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--line)] transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>

            {/* Tab 1: TypeScript View */}
            {activeTab === 'code' && (
              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto text-[var(--text)] leading-relaxed min-h-[340px] flex flex-col justify-between">
                <div>
                  <div className="text-[var(--text2)] mb-2 opacity-70">// Web Developer Profile</div>
                  <div>
                    <span className="text-purple-500 font-semibold">const</span>{' '}
                    <span className="text-blue-500 font-semibold">developer</span>{' '}
                    <span className="text-[var(--text2)]">:</span>{' '}
                    <span className="text-emerald-500 font-semibold">WebDeveloper</span>{' '}
                    <span className="text-[var(--text2)]">=</span> {'{'}
                  </div>
                  
                  <div className="pl-4 space-y-1 my-1">
                    <div>
                      <span className="text-sky-500">name</span>: <span className="text-amber-500">"Angelo Lagumbay"</span>,
                    </div>
                    <div>
                      <span className="text-sky-500">handle</span>: <span className="text-amber-500">"kulaybrown"</span>,
                    </div>
                    <div>
                      <span className="text-sky-500">role</span>: <span className="text-amber-500">"Web Developer"</span>,
                    </div>
                    <div>
                      <span className="text-sky-500">yearsExperience</span>: <span className="text-purple-500">10</span>,
                    </div>
                    <div>
                      <span className="text-sky-500">coreStack</span>: [
                      <span className="text-amber-500">"React"</span>, <span className="text-amber-500">"Next.js"</span>, <span className="text-amber-500">"PHP"</span>, <span className="text-amber-500">"TypeScript"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-sky-500">availability</span>: <span className="text-emerald-500">"Remote / Onsite / Hybrid"</span>,
                    </div>
                  </div>

                  <div>{'}'};</div>
                  
                  <div className="mt-4 pt-3 border-t border-[var(--line)] text-[var(--text2)] opacity-70">
                    <span className="text-purple-500 font-semibold">export default</span> <span className="text-blue-500 font-semibold">developer</span>;
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs text-[var(--text2)]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Clean Architecture & Type-Safe
                  </span>
                  <span>UTF-8</span>
                </div>
              </div>
            )}

            {/* Tab 2: Terminal View */}
            {activeTab === 'terminal' && (
              <div className="p-4 font-mono text-xs sm:text-sm min-h-[340px] flex flex-col justify-between bg-black/5 dark:bg-black/30">
                <div className="space-y-2 overflow-y-auto max-h-[220px] pr-2">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className="leading-snug">
                      {log.type === 'user' && <span className="text-blue-500 font-semibold">{log.text}</span>}
                      {log.type === 'system' && <span className="text-[var(--text2)] opacity-60">{log.text}</span>}
                      {log.type === 'success' && <span className="text-emerald-500">{log.text}</span>}
                      {log.type === 'info' && <span className="text-sky-500">{log.text}</span>}
                      {log.type === 'response' && <span className="text-[var(--text)] pl-2 block">{log.text}</span>}
                      {log.type === 'error' && <span className="text-rose-500">{log.text}</span>}
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 my-3 pt-2 border-t border-[var(--line)]">
                    <span className="text-[10px] text-[var(--text2)] uppercase tracking-wider block w-full mb-1 font-semibold">Try Quick Commands:</span>
                    {['bio', 'stack', 'status', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => runPresetCmd(cmd)}
                        className="px-2 py-0.5 rounded bg-[var(--card-bg)] text-[var(--text)] text-xs hover:border-blue-500 border border-[var(--line)] transition-all"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 text-[var(--text)] bg-[var(--bg)] px-3 py-2 rounded-lg border border-[var(--line)]">
                    <span className="text-blue-500 font-bold">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type a command (e.g. 'bio')..."
                      className="bg-transparent border-none outline-none w-full text-xs font-mono text-[var(--text)] placeholder-[var(--text2)] focus:ring-0"
                    />
                  </form>
                </div>
              </div>
            )}

            {/* Tab 3: Stack Breakdown */}
            {activeTab === 'skills' && (
              <div className="p-5 font-sans min-h-[340px] flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-[var(--line)]">
                    <span className="text-xs font-mono text-[var(--text2)] uppercase tracking-wider">Engineering Breakdown</span>
                    <Cpu className="w-4 h-4 text-blue-500" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-[var(--text)] font-medium mb-1">
                        <span>Frontend Apps (React, Next.js, TS)</span>
                        <span className="font-mono text-blue-500">Expert</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[95%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[var(--text)] font-medium mb-1">
                        <span>PHP & CMS Platforms (WordPress, Shopify)</span>
                        <span className="font-mono text-indigo-500">Senior</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[var(--text)] font-medium mb-1">
                        <span>UI Styling (Tailwind CSS, CSS Modules)</span>
                        <span className="font-mono text-teal-500">Expert</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 rounded-full w-[96%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-[var(--text)] font-medium mb-1">
                        <span>SEO, Web Vitals & Optimization</span>
                        <span className="font-mono text-emerald-500">Senior</span>
                      </div>
                      <div className="w-full h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[90%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs text-[var(--text2)] font-mono">
                  <span>Web Standards & API Integration</span>
                  <span className="text-[var(--text)]">REST / GraphQL</span>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}