export interface SiteConfig {
  brandName: string;
  partnerName: string;
  partnerTagline: string;
  tagline: string;
  coreDifferentiator: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    websiteUrl: string;
    whatsappUrl: string;
    whatsappDefaultText: string;
    location: string;
  };
  focusAreas: string[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
  footerLinks: {
    programs: { label: string; href: string }[];
    quickLinks: { label: string; href: string }[];
    legal: { label: string; href: string }[];
  };
  founder: {
    name: string;
    title: string;
    bio: string;
    experience: string;
    academics: string[];
    mentorship: string;
    ieeeAffiliation: string;
    focusAreas: string[];
  };
}

export const siteConfig: SiteConfig = {
  brandName: "Impara Creative Labs",
  partnerName: "TechKnots",
  partnerTagline: "One knot at a time",
  tagline: "Learn. Create. Build. Beyond.",
  coreDifferentiator: "Impara helps students build real-world skills, not just learn theory.",
  contact: {
    phone: "+919843286522",
    phoneFormatted: "+91 98432 86522",
    email: "imparacreativelabs@gmail.com",
    websiteUrl: "https://www.imparalabs.com",
    whatsappUrl: "https://wa.me/919843286522?text=share%20me%20more%20details%20to%20enroll",
    whatsappDefaultText: "share me more details to enroll",
    location: "Chennai, Tamil Nadu, India",
  },
  focusAreas: [
    "IoT & Smart Automation",
    "Full Stack Development",
    "AI & Generative AI",
    "Data & Emerging Technologies",
  ],
  stats: [
    {
      value: "50+",
      label: "Academic Collaborations",
      sublabel: "Working with students and institutions across India",
    },
    {
      value: "100+",
      label: "Industry Projects",
      sublabel: "Real-world hardware, IoT, and software implementations",
    },
    {
      value: "AICTE / NIRF",
      label: "Approved Internships",
      sublabel: "Through TechKnots organizational internship programs",
    },
    {
      value: "10,000+",
      label: "Students Mentored",
      sublabel: "Empowering engineering students through hands-on project building",
    },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    programs: [
      { label: "IoT & Smart Automation", href: "/courses/iot-smart-automation" },
      { label: "Full Stack Development with AI", href: "/courses/full-stack-ai" },
      { label: "Generative AI", href: "/courses/generative-ai" },
    ],
    quickLinks: [
      { label: "About Impara", href: "/about" },
      { label: "All Programmes", href: "/courses" },
      { label: "Enquire & Enrol", href: "/enroll" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  founder: {
    name: "Nixon E",
    title: "Founder & CEO, Impara Creative Labs | Founder, TechKnots",
    bio: "Nixon E is a technology researcher, innovator, and educator with 7+ years of hands-on R&D experience across AI, IoT, embedded systems, robotics, and automation. He founded TechKnots to build real-world technology solutions and Impara Creative Labs to deliver practical, project-driven education.",
    experience: "7+ Years of R&D Experience in AI, IoT, Embedded Systems, Robotics & Automation",
    academics: [
      "B.E. Electrical & Electronics Engineering (EEE)",
      "M.Tech Power Electronics",
      "M.E. Embedded Systems",
      "MBA Scholar",
      "DBA Scholar",
    ],
    mentorship: "10,000+ Engineering Students Mentored through technology projects and innovation initiatives",
    ieeeAffiliation: "IEEE Member (Madras Section) with 5+ years of active professional participation",
    focusAreas: [
      "IoT & Smart Automation",
      "Full Stack Development",
      "Artificial Intelligence & Generative AI",
      "Robotics & Autonomous Systems",
      "Industrial IoT & Digital Twin",
      "Smart Infrastructure & Agriculture",
    ],
  },
};
