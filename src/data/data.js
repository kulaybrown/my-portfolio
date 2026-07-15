import iconAcf from "../assets/images/icon-acf.png";

export const projects = [
  {
    id: 0,
    name: "IAMTHELOSWORLD",
    description:
      "This website is a dedicated showcase of my passion for creating games. It features a collection of my game projects, each with detailed descriptions, screenshots, and links to play or download them.",
    tech: ["React", "Vite", "Tailwind CSS"],
    url: "https://iamthelosworld.com/",
  },
  {
    id: 1,
    name: "Aspen Street Lodge",
    description:
      "High-end real estate and lodging website with detailed property views and premium imagery.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: "https://aspenstreetlodge.com/",
  },
  {
    id: 2,
    name: "Waterline Square",
    description:
      "Luxury real estate platform with condominiums and premium rentals, featuring galleries and virtual tours.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: ""
    // url: "http://18.188.183.102/",
  },
  {
    id: 3,
    name: "D'USSE",
    description:
      "Sophisticated brand website focused on product details and high-quality visual brand experiences.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
    url: "https://www.dusse.com/",
  },
  {
    id: 4,
    name: "Gurneys Resorts",
    description:
      "Comprehensive hospitality and real estate site for hotels and residential resort listings.",
    tech: ["Drupal", "Drupal E-Commerce"],
    url: "https://www.gurneysresorts.com/",
  },
  {
    id: 5,
    name: "Live Gurneys",
    description:
      "Specialized real estate site featuring residential hotels and resorts with full specs and imagery.",
    tech: ["WordPress", "ACF", "jQuery", "SCSS"],
  },
  {
    id: 6,
    name: "Affiliate World Conferences",
    description:
      "Main conference platform showcasing global events, speaker lineups, agendas, and ticket information.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/",
  },
  {
    id: 7,
    name: "Affiliate World Europe",
    description:
      "Regional event experience for Europe with localized schedules, venue details, and registration flow.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/europe",
  },
  {
    id: 8,
    name: "Affiliate World Dubai",
    description:
      "Dedicated conference landing site for Dubai featuring event highlights, partners, and attendee resources.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/dubai",
  },
  {
    id: 9,
    name: "Affiliate World Asia",
    description:
      "Asia-focused conference website with destination details, program information, and conversion-driven pages.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/asia",
  },
  {
    id: 10,
    name: "Affiliate World Americas",
    description:
      "Americas edition event site highlighting speakers, sessions, and streamlined attendee sign-up journeys.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "http://affiliateworldconferences.com/americas",
  },
  {
    id: 11,
    name: "Affiliate World Meetups",
    description:
      "Global meetup events connecting affiliate marketers, industry leaders, and networking opportunities.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "https://affiliateworldmeetups.com/",
  },
  {
    id: 12,
    name: "AdWorld Prime",
    description:
      "Premier advertising and marketing event connecting industry leaders and professionals.",
    tech: ["Next.js", "Styled-Components", "Strapi", "Redux Toolkit"],
    url: "https://adworldprime.com/",
  },
  {
    id: 13,
    name: "CreatorConf",
    description: "Marketing website dedicated to the CreatorConf event.",
    tech: ["ReactJS", "React Boilerplate"],
    url: "https://creatorconf.com/",
  },
  {
    id: 14,
    name: "Conference Nights",
    description:
      "Affiliate event listing site with curated schedules and details for company-related gatherings.",
    tech: ["ReactJS", "React Boilerplate"],
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
];

export const experience = [
  {
    id: 1,
    role: "Web Developer / Front End",
    company: "iStack Holdings",
    location: "Makati, Philippines",
    period: "Aug 2022 – Apr 2026",
    details: [
      "Translated Figma designs into responsive, cross-browser compatible UIs using React.js, HTML5, and CSS3.",
      "Maintained and optimized existing web applications for performance, speed, and responsiveness."
    ]  
  },
  {
    id: 2,
    role: "Web Designer / Web Developer",
    company: "MyGolfingStore",
    location: "US (Remote)",
    period: "Aug 2023 – Dec 2025",
    details: [
        "Designed and engineered high-converting landing pages and marketing funnels, integrating them seamlessly into a custom PHP framework and WordPress ecosystem.",
        "Collaborated closely with marketing teams to implement UI/UX best practices that directly optimized conversion rates and user retention.",
        "Managed end-to-end deployment of promotional web assets, ensuring fast load times and reliable database integration."
    ]
  },
  {
    id: 3,
    role: "Web Designer / Web Developer",
    company: "IAmMarketing",
    location: "US (Remote)",
    period: "Feb 2021 – Aug 2023",
    details: [
      "Designed and developed optimized landing pages and direct-response sales funnels for CBSplit."
    ],
  },
  {
    id: 4,
    role: "Fullstack Web Developer",
    company: "PenBrothers",
    location: "Makati, Philippines",
    period: "Jan 2020 – Jan 2021",
    details: [
      "Developed responsive user interfaces and themes using WordPress, Drupal, React.js, HTML, and CSS.",
      "Maintained, audited, and resolved cross-browser compatibility issues for existing client websites."
    ]
  },
  {
    id: 5,
    role: "Web Developer / Front End",
    company: "iStack Holdings",
    location: "Makati, Philippines",
    period: "Sep 2017 – Sep 2019",
    details: [
      "Developed modular, reusable UI components in React.js to streamline development workflows and ensure engineering consistency across future projects.",
      "Integrated ActiveCampaign APIs and automation hooks for streamlined lead generation and user tracking.",
      "Optimized client-side application performance, resulting in measurable improvements to page load speeds and scalability.",
      "Implemented robust client-side form validation guardrails to ensure clean data delivery to backend services."
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
      "Built and engineered cross-platform responsive layouts, moving legacy web assets into modern fluid grids.",
      "Designed, coded, and tested highly responsive, cross-client email newsletters and marketing templates."
    ]
  },
  {
    id: 8,
    role: "Web Developer / Designer",
    company: "XVA Media",
    location: "Quezon City, Philippines",
    period: "May 2013 – Nov 2013",
    details: [
      "Designed comprehensive website mockups and successfully translated them into functional, productionready front-end templates.",
      "Crafted and optimized HTML email newsletters ensuring robust rendering across popular email clients.",
      "Troubled-shot, patched, and regularly updated diverse client web properties."
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
