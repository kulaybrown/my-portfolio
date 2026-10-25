import iconAcf from "../assets/images/icon-acf.png";

import p0 from "../assets/images/projects/p0.jpg";
import p1 from "../assets/images/projects/p1.jpg";
import p3 from "../assets/images/projects/p3.jpg";
import p6 from "../assets/images/projects/p6.jpg";
import p8 from "../assets/images/projects/p8.jpg";
import p9 from "../assets/images/projects/p9.jpg";
import p10 from "../assets/images/projects/p10.jpg";
import p12 from "../assets/images/projects/p12.jpg";
import p13 from "../assets/images/projects/p13.jpg";
import px from "../assets/images/projects/px.jpg";

export const projects = [
  {
    id: 0,
    name: "WEBFLOW",
    description:
      "From full-fledged web design to interactive user experiences, this project showcases the capabilities of Webflow.",
    tech: ["Webflow"],
    url: "https://loss-stellar-site.webflow.io/",
    img: p13,
  },
  {
    id: 1,
    name: "Aspen Street Lodge",
    description:
      "High-end real estate and lodging website with detailed property views and premium imagery.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: "https://aspenstreetlodge.com/",
    img: p1,
  },
  {
    id: 2,
    name: "Waterline Square",
    description:
      "Luxury real estate platform with condominiums and premium rentals, featuring galleries and virtual tours.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: "",
    img: px,
    // url: "http://18.188.183.102/",
  },
  {
    id: 3,
    name: "D'USSE",
    description:
      "Sophisticated brand website focused on product details and high-quality visual brand experiences.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: "https://www.dusse.com/",
    img: p3,
  },
  {
    id: 4,
    name: "Gurneys Resorts",
    description:
      "Comprehensive hospitality and real estate site for hotels and residential resort listings.",
    tech: ["Drupal", "Drupal E-Commerce"],
    url: "https://www.gurneysresorts.com/",
    img: px,
  },
  {
    id: 5,
    name: "Live Gurneys",
    description:
      "Specialized real estate site featuring residential hotels and resorts with full specs and imagery.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    img: px,
  },
  {
    id: 6,
    name: "Affiliate World Conferences",
    description:
      "Main conference platform showcasing global events, speaker lineups, agendas, and ticket information.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/",
    img: p6,
  },
  {
    id: 7,
    name: "Affiliate World Europe",
    description:
      "Regional event experience for Europe with localized schedules, venue details, and registration flow.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/europe",
    img: px,
  },
  {
    id: 8,
    name: "Affiliate World Dubai",
    description:
      "Dedicated conference landing site for Dubai featuring event highlights, partners, and attendee resources.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/dubai",
    img: p8,
  },
  {
    id: 9,
    name: "Affiliate World Asia",
    description:
      "Asia-focused conference website with destination details, program information, and conversion-driven pages.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/asia",
    img: p9,
  },
  {
    id: 10,
    name: "Affiliate World Americas",
    description:
      "Americas edition event site highlighting speakers, sessions, and streamlined attendee sign-up journeys.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/americas",
    img: p10,
  },
  {
    id: 11,
    name: "Affiliate World Meetups",
    description:
      "Global meetup events connecting affiliate marketers, industry leaders, and networking opportunities.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "https://affiliateworldmeetups.com/",
    img: px,
  },
  {
    id: 12,
    name: "AdWorld Prime",
    description:
      "Premier advertising and marketing event connecting industry leaders and professionals.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "https://adworldprime.com/",
    img: p12,
  },
  {
    id: 13,
    name: "CreatorConf",
    description: "Marketing website dedicated to the CreatorConf event.",
    tech: ["ReactJS", "React Boilerplate"],
    url: "https://creatorconf.com/",
    img: px,
  },
  {
    id: 14,
    name: "Conference Nights",
    description:
      "Affiliate event listing site with curated schedules and details for company-related gatherings.",
    tech: ["ReactJS", "React Boilerplate"],
    img: px,
  },
  {
    id: 15,
    name: "IAMTHELOSWORLD",
    description:
      "This website is a dedicated showcase of my passion for creating games. It features a collection of my game projects, each with detailed descriptions, screenshots, and links to play or download them.",
    tech: ["React", "Vite", "Tailwind CSS"],
    url: "https://iamthelosworld.com/",
    img: p0,
  },
];

export const skills = [
  { name: "HTML5", slug: "html5", color: "#e34f26" },
  { name: "CSS3", slug: "css3", color: "#1572B6" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "ReactJS", slug: "react", color: "#61DAFB" },
  { name: "Next.js", slug: "nextdotjs", color: "#000000" },
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "Strapi", slug: "strapi", color: "#4945FF" },
  { name: "PHP", slug: "php", color: "#777BB4" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
  { name: "ACF", slug: "advancedcustomfields", color: "#00E4BC", icon: iconAcf },
  { name: "Shopify", slug: "shopify", color: "#95bf47" },
  { name: "jQuery", slug: "jquery", color: "#0769AD" },
  { name: "Bootstrap", slug: "bootstrap", color: "#7952B3" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "SCSS", slug: "sass", color: "#CC6699" },
  { name: "Less", slug: "less", color: "#1D365D" },
  { name: "Figma", slug: "figma", color: "#F24E1E" },
  { name: "Photoshop", slug: "adobephotoshop", color: "#31A8FF" },
  { name: "Illustrator", slug: "adobeillustrator", color: "#FF9A00" },
  { name: "InDesign", slug: "adobeindesign", color: "#FF3366" },
  { name: "VS Code", slug: "visualstudiocode", color: "#007ACC" },
  { name: "GitHub Copilot", slug: "githubcopilot", color: "#000000" },
  { name: "Gemini", slug: "googlegemini", color: "#8E75B2" },
  { name: "ChatGPT", slug: "openai", color: "#412991" },
  { name: "REST API", slug: "postman", color: "#FF6C37" },
  { name: "Webflow", slug: "webflow", color: "#156aed" },
];

export const experience = [
  {
    id: 1,
    role: "Web Developer / Front End",
    company: "iStack Conferences",
    location: "Makati, Philippines",
    period: "Aug 2022 – Apr 2026",
    details: [
      "Translated complex Figma designs into high-performance, responsive, and WCAG-accessible web interfaces using Next.js and Tailwind CSS, consuming structured content models managed via Strapi.",
      "Optimized client-side application performance, page load speeds, and mobile responsiveness across core frontend systems.",
      "Integrated modern AI workflows (GitHub Copilot, Gemini) into daily engineering practices to accelerate feature delivery and resolve complex codebase logic."    ]  
  },
  {
    id: 2,
    role: "Web Designer / Web Developer",
    company: "MyGolfingStore",
    location: "US (Remote)",
    period: "Aug 2023 – Nov 2025",
    details: [
      "Managed daily content publishing and end-to-end web updates across platforms, conducting rigorous quality assurance checks on pages, components, and form configurations to ensure accuracy, visual consistency, and UX standards.",
      "Conducted regular SEO audits and tracked site performance via Google Analytics, monitoring keyword performance, metadata, and link health to optimize copy and landing pages for search engine marketing.",
      "Collaborated with marketing teams to design and execute high-converting landing pages and HTML newsletters within WordPress, applying UI/UX principles, accessibility standards, and conversion rate optimization (CRO) strategies.",
      "Performed cross-browser testing and quality assurance on promotional assets and web forms, ensuring multi-device responsiveness, rapid load times, and reliable tracking integrations."
    ]
  },
  {
    id: 3,
    role: "Web Designer / Web Developer",
    company: "IAmMarketing",
    location: "US (Remote)",
    period: "Feb 2021 – Aug 2023",
    details: [
      "Designed and built performance-optimized sales funnels and direct-response landing pages for CBSplit using custom CSS3 and responsive frontend workflows.",
      "Guaranteed full mobile and desktop cross-device compatibility, delivering high rendering speed across all major browsers."
    ],
  },
  {
    id: 4,
    role: "Fullstack Web Developer",
    company: "PenBrothers",
    location: "Makati, Philippines",
    period: "Jan 2020 – Dec 2020",
    details: [
      "Built custom themes, responsive interfaces, and modular components using WordPress, Drupal, React.js, HTML, and CSS.",
      "Conducted comprehensive code audits, cross-browser compatibility testing, and routine maintenance across client web properties."
    ]
  },
  {
    id: 5,
    role: "Web Developer / Front End",
    company: "iStack Conferences",
    location: "Makati, Philippines",
    period: "Sep 2017 – Sep 2019",
    details: [
      "Developed reusable React.js UI components to standardize design patterns and streamline development workflows across frontend projects.",
      "Integrated ActiveCampaign REST APIs and automated tracking hooks for lead generation systems.",
      "Optimized client-side application rendering, achieving measurable improvements in load speeds and scalability."
    ]

  },
  {
    id: 6,
    role: "Application Developer",
    company: "IBM",
    location: "Quezon City, Philippines",
    period: "Nov 2016 – Mar 2017",
    details: [
      "Converted wireframes into semantic, cross-browser compatible code using JavaScript, HTML, and CSS.",
    ]
  },
  {
    id: 7,
    role: "Web Developer / Front End",
    company: "ABSS",
    location: "Makati, Philippines",
    period: "Nov 2013 – Sep 2016",
    details: [
      "Developed custom, lightweight themes and templates for WordPress and Laravel using CSS3, JavaScript, and jQuery.",
      "Migrated legacy web assets into modern cross-platform fluid grids and responsive layouts.",
      "Designed and coded responsive HTML email newsletters ensuring accurate rendering across all major email clients."
    ]
  },
  {
    id: 8,
    role: "Web Developer / Designer",
    company: "XVA Media",
    location: "Quezon City, Philippines",
    period: "May 2013 – Nov 2013",
    details: [
      "Designed website mockups and successfully translated them into functional, production-ready front-end templates."
    ]
  },
  {
    id: 9,
    role: "Graphic Designer",
    company: "Affinity Express",
    location: "Quezon City, Philippines",
    period: "Sep 2010 – Dec 2011",
    details: [
      "Designed print advertisements, brochures, and layouts for newspapers and magazines under tight deadlines."
    ]
  },
];
