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
    <section className="relative bg-white w-full py-12 md:py-20 lg:py-28 overflow-hidden text-[var(--text)] transition-colors duration-300">
      {/* Decorative Subtle Grid & Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
      <style>{`
        @keyframes placeHolderShimmer {
          0% { background-position: -468px 0; }
          100% { background-position: 468px 0; }
        }
        .animated-background2 {
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: placeHolderShimmer;
          animation-timing-function: linear;
          background: #f0f4f6;
          background: linear-gradient(to right, #f0f4f6 8%, #e0e4e6 18%, #f0f4f6 33%);
          background-image: linear-gradient(to right, #f0f4f6 8%, #e0e4e6 18%, #f0f4f6 33%);
          background-size: 800px 104px;

        }

        .hide-all-element {
          position: relative;
          overflow: hidden;
          pointer-events: none;
          border-radius: 0px!important;
          box-shadow: none!important;
          border: none!important;
        }
        .hide-all-element *:not(:first-child) {
          visibility: hidden;
          
        }

        `}</style>
      <div className="mx-auto w-[min(1400px,calc(100vw-3rem))] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Bio, Badges & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Status Badge */}
          <div className="hide-all-element mt-5 md:mt-0 inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[var(--card-bg,rgba(255,255,255,0.05))] backdrop-blur-md text-xs font-medium text-[var(--text)]">
            <div 
              className="absolute inset-0 z-20 pointer-events-none animated-background2"
            />
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
            <h1 className="hide-all-element text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              <div 
                className="absolute inset-0 z-20 pointer-events-none animated-background2"
              />
              Building <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-400 bg-clip-text text-transparent">scalable, high-performance</span> web applications.
            </h1>
            
            <p className="hide-all-element text-md md:text-lg text-[var(--text2)] font-normal leading-relaxed max-w-2xl">
              <span 
                className="absolute inset-0 z-20 pointer-events-none animated-background2"
              />
              Hi, I'm <strong className="text-[var(--text)] font-semibold">Angelo Lagumbay</strong>—a Web Developer with over 10 years of experience turning complex user experience designs into robust, performant digital web products using React, Next.js, PHP, and modern CMS platforms.
            </p>
          </div>

          {/* Core Technical Stack Badges */}
          <div className="space-y-3">
            <span className="hide-all-element text-xs font-mono uppercase tracking-wider text-[var(--text2)] font-semibold block">
              <div 
                className="absolute inset-0 z-20 pointer-events-none animated-background2"
              />
              Core Stack & Expertise
            </span>
            <div className="hide-all-element flex flex-wrap gap-2">
              <div 
                className="absolute inset-0 z-20 pointer-events-none animated-background2"
              />
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
              className="hide-all-element inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
              <span>Explore Featured Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:anelolag@gmail.com"
              className="hide-all-element group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--line)] bg-white text-black font-medium text-sm hover:border-[var(--accent)] transition-colors"
            >
              <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
              <Mail className="w-4 h-4 text-dark group-hover:text-[var(--accent)] transition-colors" />
              <span className="group-hover:text-[var(--accent)] transition-colors">Get in Touch</span>
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="pt-6 border-t border-[#f0f4f6] grid grid-cols-3 gap-4 max-w-lg">
            <div className='hide-all-element'>
              <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
              <p className="text-2xl font-bold font-mono text-[var(--text)]">10+</p>
              <p className="text-xs text-[var(--text2)]">Years Experience</p>
            </div>
            <div className='hide-all-element'>
              <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
              <p className="text-2xl font-bold font-mono text-blue-500">30+</p>
              <p className="text-xs text-[var(--text2)]">Web Projects</p>
            </div>
            <div className='hide-all-element'>
              <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
              <p className="text-2xl font-bold font-mono text-indigo-500">99.9%</p>
              <p className="text-xs text-[var(--text2)]">Code Quality</p>
            </div>
          </div>

        </div>

        {/* Right Column: Developer Workspace Card (No Photo) */}
        <div className="hide-all-element relative lg:col-span-5 w-full">
          <div className="absolute inset-0 z-20 pointer-events-none animated-background2"></div>
          <div className="relative max-w-[564px] min-h-[411px] w-full h-full" />
        </div>
      </div>
    </section>
  );
}