export interface CurriculumMonth {
  month: number;
  weeks: string;
  title: string;
  subtitle: string;
  topics: string[];
}

export interface SkillCategory {
  number: string;
  category: string;
  points: string[];
}

export interface CourseProjectItem {
  number: string;
  name: string;
  timeline: string;
  title: string;
  points: string[];
  technologies?: string[];
}

export interface Course {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  badge: string;
  duration: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  mode: string;
  schedule: string;
  projectSummary: string;
  highlights: string[];
  audience: string[];
  learningOutcomes: string[];
  curriculum: CurriculumMonth[];
  toolsAndTechnologies: {
    category: string;
    items: string[];
  }[];
  skillsYouBuild: SkillCategory[];
  projects: CourseProjectItem[];
  careerOpportunities: string[];
  practicalAssignments: string[];
  capstoneMilestones: {
    phase: string;
    description: string;
  }[];
  exampleProjects: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  brochureUrl?: string;
}

export const courses: Course[] = [
  {
    id: "iot-smart-automation",
    slug: "iot-smart-automation",
    aliases: ["iot-embedded-systems"],
    title: "IoT & Smart Automation",
    badge: "Hardware & Connected Systems",
    duration: "3 Months (12 Weeks)",
    brochureUrl: "/assets/iot-smart-automation-brochure.pdf",
    tagline: "LEARN IOT. BUILD 3 PROJECTS. CREATE SMART, CONNECTED SOLUTIONS.",
    shortDescription: "Complete the course with 3 hands-on projects and the skills to build connected, automated IoT solutions.",
    fullDescription: "A comprehensive 3-month industry-supported career program designed to take you from fundamentals to real-world, project-based IoT solutions. Built on the applied technology, R&D, and industry experience of TechKnots.",
    mode: "Technical Training + Hands-on Learning + Project Development (Online / Offline as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "Hardware-in-the-loop training with Arduino, ESP8266, ESP32 & ESP32-CAM",
      "Industrial communication protocols: MQTT, HTTP, Webhooks, CoAP, AMQP, SNMP",
      "Cloud dashboards & automation with Blynk, AWS IoT, ThingSpeak & IFTTT",
      "Embedded C/C++, Arduino IDE, and VS Code + PlatformIO workflows",
      "Computer Vision & basic DIP integration using ESP32-CAM",
      "AICTE & NIRF approved internship alignment via TechKnots",
    ],
    audience: [
      "Circuit & Core engineering students (ECE, EEE, EIE, Mechatronics, Mechanical)",
      "Computer Science & IT students eager to build physical computing systems",
      "College graduates looking for embedded systems & IoT career skills",
      "Robotics and automation enthusiasts who want practical hardware experience",
      "Engineers seeking portfolio-ready hardware prototypes and industry exposure",
    ],
    learningOutcomes: [
      "Understand IoT, IIoT, and AIoT architectures and physical computing stages",
      "Master microcontroller and processor pin configurations, GPIO, ADC, and PWM",
      "Write clean embedded firmware using Arduino IDE and VS Code + PlatformIO",
      "Implement wireless device-to-device communication, IPv4/IPv6, MAC, and mDNS",
      "Publish telemetry to real-time cloud dashboards (Blynk, AWS, ThingSpeak)",
      "Build automated event-driven workflows with IFTTT and webhooks",
      "Integrate camera vision, image capture, and DIP using ESP32-CAM into an end-to-end Capstone",
    ],
    curriculum: [
      {
        month: 1,
        weeks: "Weeks 1 - 3",
        title: "IoT Fundamentals",
        subtitle: "Foundations, Hardware, Inputs & Outputs",
        topics: [
          "Introduction to IoT, IIoT & AIoT",
          "Types and stages of IoT",
          "Sensors and inputs",
          "Microcontrollers & microprocessors",
          "Actuators and outputs",
          "Basic IoT architecture",
        ],
      },
      {
        month: 2,
        weeks: "Weeks 4 - 6",
        title: "Embedded Systems",
        subtitle: "Microcontrollers, Firmware & Circuit Design",
        topics: [
          "Arduino Uno, Nano & Mega",
          "ESP8266 & ESP32 development boards",
          "Pin configuration & interfacing",
          "Sensors, controllers & actuators",
          "Arduino IDE development",
          "VS Code + PlatformIO setup",
          "Circuit design & simulation (Tinkercad, Wokwi, Fritzing)",
        ],
      },
      {
        month: 3,
        weeks: "Weeks 7 - 9",
        title: "Connectivity & Communication",
        subtitle: "Protocols, Networking & Standards",
        topics: [
          "IoT communication protocols",
          "MQTT (Message Queuing Telemetry Transport)",
          "HTTP & RESTful endpoints",
          "Webhooks & real-time triggers",
          "CoAP & AMQP protocols",
          "SMTP & SNMP network monitoring",
          "RFID & NFC identification technologies",
          "IPv4, IPv6 & MAC addressing",
          "IEEE standards & networking rules",
          "Local IP & mDNS discovery",
        ],
      },
      {
        month: 4,
        weeks: "Weeks 10 - 12",
        title: "Cloud, Automation & Project Development",
        subtitle: "Cloud Platforms, Vision & Capstone Solution",
        topics: [
          "Blynk IoT platform integration",
          "AWS IoT Core cloud dashboards",
          "ThingSpeak data analytics",
          "IFTTT automation workflows",
          "ESP32-CAM setup and configuration",
          "Computer Vision applications & edge vision",
          "Basic DIP (Digital Image Processing)",
          "System integration & hardware-software testing",
          "End-to-end Capstone Project development & presentation",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Development Boards",
        items: ["Arduino Uno", "Arduino Nano", "Arduino Mega", "ESP8266", "ESP32", "ESP32-CAM"],
      },
      {
        category: "Sensors & Actuators",
        items: ["Sensors & Input Devices", "Actuators & Output Devices", "Microcontrollers & Processors", "Pin Configuration & Interfacing"],
      },
      {
        category: "Development & Coding",
        items: ["Arduino IDE", "VS Code", "PlatformIO", "Embedded C/C++"],
      },
      {
        category: "Simulation & Circuit Design",
        items: ["Tinkercad", "Wokwi", "Fritzing"],
      },
      {
        category: "Cloud & IoT Platforms",
        items: ["Blynk", "AWS IoT", "ThingSpeak"],
      },
      {
        category: "Connectivity & Automation",
        items: ["MQTT", "HTTP", "Webhooks", "CoAP", "AMQP", "SMTP", "SNMP", "IFTTT"],
      },
      {
        category: "Identification & Networking",
        items: ["RFID", "NFC", "IPv4", "IPv6", "MAC", "IEEE Standards", "mDNS"],
      },
    ],
    skillsYouBuild: [
      {
        number: "01",
        category: "IoT System Design",
        points: [
          "Understand IoT, IIoT & AIoT architectures",
          "Design basic IoT systems from scratch",
          "Work with sensors, controllers and actuators",
          "Configure device pins, buses and interfaces",
        ],
      },
      {
        number: "02",
        category: "Embedded Development",
        points: [
          "Program Arduino boards (Uno, Nano, Mega)",
          "Work with ESP8266 and dual-core ESP32",
          "Interface analog and digital sensors & actuators",
          "Build, debug and test embedded systems",
        ],
      },
      {
        number: "03",
        category: "Connectivity & Protocols",
        points: [
          "Connect IoT devices to local and wide-area networks",
          "Work with MQTT, HTTP, Webhooks and IoT protocols",
          "Understand IP addressing, subnets and networking",
          "Implement device-to-device & telemetry communication",
        ],
      },
      {
        number: "04",
        category: "Cloud & Smart Automation",
        points: [
          "Connect devices to Blynk, AWS and ThingSpeak",
          "Build automated conditional workflows with IFTTT",
          "Work with local IP, mDNS and web servers",
          "Develop connected IoT mobile and cloud applications",
        ],
      },
      {
        number: "05",
        category: "Computer Vision & Integration",
        points: [
          "Work with ESP32-CAM hardware",
          "Explore basic Computer Vision on embedded microcontrollers",
          "Apply basic Digital Image Processing (DIP)",
          "Integrate hardware, software and connectivity into complete systems",
        ],
      },
    ],
    projects: [
      {
        number: "01",
        name: "Mini Project 1",
        timeline: "Weeks 1 – 4",
        title: "Sensor Interfacing & Embedded Controller Prototype",
        points: [
          "Apply the fundamentals of sensors, microcontrollers, inputs and outputs",
          "Build and test a standalone embedded sensing system",
          "Gain hands-on experience with breadboarding, circuit simulation and C/C++ coding",
        ],
        technologies: ["Arduino Uno/Nano", "Sensors & Actuators", "Wokwi / Tinkercad", "Arduino IDE"],
      },
      {
        number: "02",
        name: "Mini Project 2",
        timeline: "Weeks 5 – 8",
        title: "Connected IoT Telemetry & Automation Hub",
        points: [
          "Build a connected IoT system using communication, cloud or automation concepts",
          "Implement real-time sensor data collection, processing and cloud transmission",
          "Explore integration with MQTT brokers, Blynk cloud dashboards, and protocol triggers",
        ],
        technologies: ["ESP8266 / ESP32", "MQTT / HTTP", "Blynk IoT", "Webhooks"],
      },
      {
        number: "03",
        name: "Capstone Project",
        timeline: "Weeks 9 – 12",
        title: "End-to-End Smart Automation & Vision Solution",
        points: [
          "Integrate hardware, connectivity, software and automation into a complete IoT solution",
          "Solve a real-world problem with an end-to-end connected system",
          "Build a portfolio-ready, working prototype to showcase your skills and hardware mastery",
        ],
        technologies: ["ESP32-CAM", "AWS / ThingSpeak", "IFTTT Automation", "Computer Vision / DIP"],
      },
    ],
    careerOpportunities: [
      "IoT Developer",
      "Embedded Systems Developer",
      "IoT Solutions Engineer",
      "Embedded IoT Engineer",
      "Smart Automation Engineer",
      "IoT Project / Technical Associate",
    ],
    practicalAssignments: [
      "Assignment 1: Precision sensor calibration and multi-sensor telemetry readout with Arduino",
      "Assignment 2: Wi-Fi network credential provisioning and local Web Server creation on ESP8266/ESP32",
      "Assignment 3: Bidirectional MQTT publish-subscribe broker communication with structured payloads",
      "Assignment 4: Remote telemetry dashboard on Blynk and ThingSpeak with automated alert thresholds",
      "Assignment 5: Automated IFTTT alert notification system triggering email and mobile notifications",
      "Assignment 6: Image capture and streaming over Wi-Fi using ESP32-CAM with edge triggers",
      "Assignment 7: Full integration test simulating real-world packet drops and hardware reconnection loops",
    ],
    capstoneMilestones: [
      { phase: "Phase 1: Architecture & Circuit Design", description: "Define system block diagram, component specifications, sensor pin mapping, and simulation verification." },
      { phase: "Phase 2: Firmware & Sensor Integration", description: "Write modular embedded C/C++ drivers, configure GPIO interrupts, and test local control logic." },
      { phase: "Phase 3: Cloud & Network Telemetry", description: "Connect to cloud brokers via MQTT/HTTP, configure automated triggers, and build interactive dashboards." },
      { phase: "Phase 4: Demonstration & Documentation", description: "Assemble production enclosure, benchmark reliability, document circuit schematics, and present live demo." },
    ],
    exampleProjects: [
      {
        title: "Smart Industrial Machine Health & Vibration Monitoring",
        description: "ESP32-based vibration and thermal telemetry node publishing MQTT sensor streams to AWS IoT Core with threshold shutdown alerts.",
      },
      {
        title: "Autonomous Edge-Vision Security & Gate Access System",
        description: "ESP32-CAM device with PIR wake-up, image capture, local web server streaming, and IFTTT mobile notification dispatch.",
      },
      {
        title: "Precision Smart Agriculture & Soil Telematics Hub",
        description: "Solar-powered IoT node measuring NPK, moisture, and ambient temperature with automated irrigation relay activation and ThingSpeak visualization.",
      },
      {
        title: "Smart Building Energy Management & Asset Tracking",
        description: "RFID access authentication linked with current monitoring relays, MQTT broker synchronization, and centralized dashboard reporting.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior electronics or coding knowledge?",
        answer: "No. The course starts with fundamental electronics and basic C programming before advancing into complex IoT architectures and cloud integration.",
      },
      {
        question: "Is physical hardware used in this course?",
        answer: "Yes! You will work hands-on with development boards (Arduino, ESP8266, ESP32, ESP32-CAM), real sensors, actuators, and communication modules, complemented by circuit simulators (Wokwi, Tinkercad).",
      },
      {
        question: "What is the project structure in this 3-month program?",
        answer: "You will complete 2 structured mini projects (Weeks 1-4 and Weeks 5-8) followed by a comprehensive, mentor-reviewed Capstone Project in Weeks 9-12.",
      },
      {
        question: "What career roles does this program prepare me for?",
        answer: "This program prepares you for roles such as IoT Developer, Embedded Systems Developer, IoT Solutions Engineer, Embedded IoT Engineer, Smart Automation Engineer, and Technical Associate.",
      },
      {
        question: "Can I choose between weekday and weekend batches?",
        answer: "Yes, we offer both weekday evening batches and weekend intensive batches to accommodate college timetables and working schedules.",
      },
    ],
  },
  {
    id: "full-stack-ai",
    slug: "full-stack-ai",
    aliases: ["full-stack-development"],
    title: "Full Stack Development with AI",
    badge: "Modern Web & Intelligent Systems",
    duration: "3 Months (12 Weeks)",
    brochureUrl: "/assets/full-stack-development-with-ai-brochure.pdf",
    tagline: "LEARN MODERN TECH. BUILD REAL PROJECTS. CREATE AI-POWERED APPLICATIONS.",
    shortDescription: "Learn to build modern, full-stack web applications with AI-powered development workflows.",
    fullDescription: "A comprehensive 3-month industry-supported career program taking you from web fundamentals to real-world, project-based full-stack application development. Master React, Core Java, Spring Boot, SQL, and AI integration to build intelligent, production-ready web platforms.",
    mode: "Technical Training + Hands-on Learning + Project Development (Online / Offline as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "Modern React and Tailwind CSS frontend engineering",
      "Enterprise backend development with Core Java & Spring Boot",
      "Relational database design, SQL queries, CRUD, joins & transactions",
      "RESTful API endpoint design, JDBC, Hibernate, ORM & persistence",
      "AI integration using OpenAI API, LangChain & AI-assisted application workflows",
      "Full-stack project development: TaskFlow, DevConnect, and LearnSphere Capstone",
    ],
    audience: [
      "Computer Science, IT, and software engineering students",
      "Aspiring developers looking for full-stack Java + React industry readiness",
      "Programmers wanting to build enterprise applications with Spring Boot and AI",
      "Innovators and builders creating AI-augmented web platforms",
      "Graduates preparing for full-stack software development career roles",
    ],
    learningOutcomes: [
      "Build modern, responsive, accessible web interfaces using React, JavaScript, and Tailwind CSS",
      "Master Core Java, Object-Oriented Programming (OOP), Collections, and clean code principles",
      "Develop scalable enterprise REST APIs using Spring Boot, Controllers, Services, and DTOs",
      "Design relational databases with SQL, perform complex queries, joins, and manage transactions",
      "Connect applications with JDBC and Hibernate for reliable object-relational mapping (ORM)",
      "Integrate AI capabilities into web apps using OpenAI API, LangChain, and AI-assisted workflows",
      "Deploy, test, and present a complete full-stack Capstone application (LearnSphere)",
    ],
    curriculum: [
      {
        month: 1,
        weeks: "Weeks 1 - 3",
        title: "Web & Programming Foundations",
        subtitle: "HTML, CSS, JavaScript & Core Java",
        topics: [
          "HTML & CSS fundamentals",
          "Responsive Web Design & layout patterns",
          "JavaScript (ES6+) syntax, functions, and logic",
          "DOM manipulation & Event handling",
          "JSON data format & Fetch API",
          "Async JavaScript (Promises, async/await)",
          "Core Java fundamentals & syntax",
          "OOP Fundamentals (Classes, Objects, Inheritance, Polymorphism)",
        ],
      },
      {
        month: 2,
        weeks: "Weeks 4 - 6",
        title: "Frontend & Database",
        subtitle: "React, Modern Styling & Relational SQL",
        topics: [
          "Java Collections framework (Lists, Sets, Maps)",
          "React architecture & modern toolchain",
          "Components & JSX syntax",
          "Props & State management",
          "Forms handling, input validation & client-side routing",
          "Tailwind CSS for rapid utility-first UI styling",
          "SQL fundamentals & relational data modeling",
          "Database Design, constraints & schema planning",
          "CRUD operations, filtering, grouping & Joins",
          "Mini Project 1: TaskFlow application development",
        ],
      },
      {
        month: 3,
        weeks: "Weeks 7 - 9",
        title: "Backend & Application Development",
        subtitle: "JDBC, Spring Boot & Hibernate ORM",
        topics: [
          "JDBC (Java Database Connectivity) fundamentals",
          "Database connectivity & connection pooling",
          "Spring Boot framework architecture & setup",
          "Controllers & Services layering",
          "Repositories, Data Access Objects (DAOs) & DTOs",
          "REST Endpoint Design, HTTP verbs & status codes",
          "Hibernate framework & JPA concepts",
          "ORM (Object-Relational Mapping) & Persistence",
          "Database Relationships (One-to-One, One-to-Many, Many-to-Many)",
          "Mini Project 2: DevConnect application development",
        ],
      },
      {
        month: 4,
        weeks: "Weeks 10 - 12",
        title: "Integration, AI & Final Application",
        subtitle: "Full-Stack Integration, AI Features & Capstone",
        topics: [
          "REST API Integration: Connecting React frontend with Spring Boot backend",
          "Full-stack data flow: React → Spring Boot → SQL database",
          "Authentication & Authorization (Role-based security, tokens)",
          "Testing & Validation (unit testing, API testing, debugging)",
          "AI Integration: Connecting OpenAI API & LangChain",
          "AI-assisted features, prompt workflows, and automated assistance",
          "Error handling, exception advice & application security",
          "Production readiness, packaging, build optimization & documentation",
          "Final Demonstration: LearnSphere Capstone showcase",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
      },
      {
        category: "Backend Development",
        items: ["Core Java", "Object-Oriented Programming", "Collections", "JDBC", "Hibernate", "Spring Boot"],
      },
      {
        category: "Database",
        items: ["SQL", "Relational Databases", "Database Design", "CRUD Operations", "Joins", "Transactions"],
      },
      {
        category: "API & Integration",
        items: ["REST APIs", "HTTP", "JSON", "Frontend - Backend Communication"],
      },
      {
        category: "AI Integration",
        items: ["OpenAI API", "LangChain", "Generative AI", "AI-Assisted Application Development"],
      },
      {
        category: "Development Environment",
        items: ["VS Code", "GitHub", "Docker", "Postman"],
      },
      {
        category: "Additional Tools & Frameworks",
        items: ["Node.js", "MongoDB", "Maven / Gradle", "Other Development Tools"],
      },
    ],
    skillsYouBuild: [
      {
        number: "01",
        category: "Frontend Development",
        points: [
          "Build modern, responsive web interfaces",
          "Work with HTML, CSS, JavaScript, Tailwind CSS",
          "Develop dynamic UIs with React components & hooks",
          "Implement forms, validation and client-side routing",
        ],
      },
      {
        number: "02",
        category: "Backend Development",
        points: [
          "Learn Core Java and enterprise OOP concepts",
          "Work with Collections, JDBC and Hibernate",
          "Build scalable REST APIs with Spring Boot",
          "Implement business logic, validation and exception handling",
        ],
      },
      {
        number: "03",
        category: "Database Development",
        points: [
          "Design and architect relational database schemas",
          "Write SQL queries and perform full CRUD operations",
          "Work with joins, constraints and relational normalization",
          "Connect applications using JDBC and Hibernate ORM",
        ],
      },
      {
        number: "04",
        category: "API & Application Integration",
        points: [
          "Build and consume robust REST APIs",
          "Work with HTTP, JSON payloads and API integration",
          "Connect frontend React apps with backend Spring Boot services",
          "Understand real-world client-server application architecture",
        ],
      },
      {
        number: "05",
        category: "AI Integration",
        points: [
          "Integrate AI capabilities into full-stack applications",
          "Work with OpenAI API and LangChain workflows",
          "Build AI-assisted features, copilots and automated summarization",
          "Explore real-world use cases of Generative AI in business software",
        ],
      },
      {
        number: "06",
        category: "Development Practices",
        points: [
          "Use professional development tools and workflows",
          "Work collaboratively with Git and GitHub",
          "Test and debug applications thoroughly",
          "Follow best practices for clean, maintainable, scalable code",
          "Prepare for real-world deployment and production release",
        ],
      },
    ],
    projects: [
      {
        number: "01",
        name: "Mini Project 1",
        timeline: "Weeks 1 – 4",
        title: "TaskFlow — Responsive Web Application",
        points: [
          "Build a simple, responsive web application using HTML, CSS and JavaScript",
          "Implement form handling, input validation, and user feedback",
          "Work with DOM manipulation, browser events, and dynamic list rendering",
          "Deploy the application with a clean, responsive user interface",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "DOM / Events"],
      },
      {
        number: "02",
        name: "Mini Project 2",
        timeline: "Weeks 5 – 8",
        title: "DevConnect — Community Platform with React & Tailwind",
        points: [
          "Build a modern React-based single-page application",
          "Create modular, reusable components styled with Tailwind CSS",
          "Implement client routing, authentication state, and form handling",
          "Integrate with a backend REST API (using mock API or real backend)",
        ],
        technologies: ["React", "Tailwind CSS", "React Router", "REST API / Fetch"],
      },
      {
        number: "03",
        name: "Capstone Project",
        timeline: "Weeks 9 – 12",
        title: "LearnSphere — AI-Powered Learning Platform",
        points: [
          "Build a complete full-stack enterprise application with React and Spring Boot",
          "Implement relational database integration with SQL and Hibernate ORM",
          "Develop and consume secure REST APIs with full CRUD and authorization",
          "Integrate generative AI features (AI tutor, auto-quizzing, intelligent recommendations)",
          "Deploy, document, and present a real-world, production-ready solution",
        ],
        technologies: ["React", "Spring Boot", "SQL / Hibernate", "OpenAI API", "Docker", "Postman"],
      },
    ],
    careerOpportunities: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Java Developer",
      "React Developer",
      "Spring Boot Developer",
      "Web Application Developer",
      "Software Engineer",
      "AI-Integrated Developer",
      "Technical Consultant",
    ],
    practicalAssignments: [
      "Assignment 1: Responsive multi-page web layout with semantic HTML5 and modern CSS Flexbox/Grid",
      "Assignment 2: Interactive JavaScript application with DOM manipulation, storage, and asynchronous Fetch",
      "Assignment 3: Core Java OOP banking/inventory system utilizing Collections and exception handling",
      "Assignment 4: React interactive component library with props, state, custom hooks, and Tailwind CSS",
      "Assignment 5: Relational SQL database schema design with tables, primary/foreign keys, joins, and transactions",
      "Assignment 6: Spring Boot REST API service with controller endpoints, service logic, and DTO validation",
      "Assignment 7: Full-stack integration connecting React UI to Spring Boot API and OpenAI API endpoints",
    ],
    capstoneMilestones: [
      { phase: "Phase 1: Requirements, ER Modeling & UI Wireframes", description: "Define user stories, database ER diagrams, API route contracts, and Figma wireframe mockups." },
      { phase: "Phase 2: Database Schema & Spring Boot Backend", description: "Implement SQL schemas, Hibernate entities, Spring Boot repositories, services, and REST controllers." },
      { phase: "Phase 3: React Frontend & State Management", description: "Build interactive React user interface, connect to backend APIs via Fetch/Axios, and handle forms." },
      { phase: "Phase 4: AI Feature Integration & Demo Day", description: "Infuse OpenAI / LangChain AI capabilities, test end-to-end workflows, document code, and deliver live demo." },
    ],
    exampleProjects: [
      {
        title: "LearnSphere — AI-Powered Learning & Mentorship Platform",
        description: "Full-stack education portal built with React, Spring Boot, and SQL, featuring course management, interactive modules, and an AI study assistant.",
      },
      {
        title: "DevConnect — Developer Community & Project Collaboration Hub",
        description: "Interactive networking portal with React UI, Spring Boot microservices, user profiles, discussion threads, and AI-suggested project collaborators.",
      },
      {
        title: "Smart Enterprise Resource & Ticketing Application",
        description: "Full-stack enterprise ticketing desk with role-based access control, relational database tracking, automated email alerts, and AI ticket classification.",
      },
      {
        title: "E-Commerce Management System with AI Recommendation Engine",
        description: "Comprehensive product catalog with shopping cart, secure checkout API, order tracking in SQL, and personalized AI product recommendations.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior experience with Java or React before joining?",
        answer: "Basic programming curiosity is recommended, but the course is structured from the ground up: starting with web fundamentals (HTML, CSS, JS) and Core Java before advancing to React, Spring Boot, and AI.",
      },
      {
        question: "Why does the curriculum focus on Java and Spring Boot for the backend?",
        answer: "Java and Spring Boot power enterprise software across major tech companies, financial institutions, and large-scale applications globally. Combining Spring Boot with modern React and AI delivers immense market demand and career versatility.",
      },
      {
        question: "How is AI incorporated into the web development curriculum?",
        answer: "You will learn how modern full-stack engineers integrate AI: connecting OpenAI and LangChain APIs, building AI-assisted features (summarization, intelligent helpers, dynamic content), and utilizing AI development workflows.",
      },
      {
        question: "What projects will I build during the 3 months?",
        answer: "You will build 3 complete hands-on projects: TaskFlow (HTML/CSS/JS web app), DevConnect (React community application), and LearnSphere (full-stack React + Spring Boot + SQL + AI Capstone).",
      },
    ],
  },
  {
    id: "generative-ai",
    slug: "generative-ai",
    title: "Generative AI",
    badge: "Applied AI & Agentic Systems",
    duration: "3 Months (12 Weeks)",
    brochureUrl: "/assets/generative-ai-brochure.pdf",
    tagline: "LEARN GENAI. BUILD REAL PROJECTS. CREATE INTELLIGENT SOLUTIONS.",
    shortDescription: "Learn to design, build and deploy real-world Generative AI solutions through hands-on projects.",
    fullDescription: "A hands-on, industry-supported career program taking you from foundations to real-world, project-based Generative AI solutions. Master Large Language Models, Context Engineering, RAG pipelines, Model Context Protocol (MCP), Multimodal AI, and Autonomous AI Agents using cutting-edge industry frameworks.",
    mode: "Technical Training + Hands-on Learning + Project Development (Online / Offline as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "GenAI foundations: LLMs, GPT, Transformers, tokens & model behaviour",
      "Python programming for AI, data handling, and agentic workflows",
      "Context engineering, prompting patterns, RAG & vector databases (Pinecone, Chroma, FAISS, Weaviate)",
      "Model Context Protocol (MCP), multimodal AI, and external tool integration",
      "Autonomous AI agents with multi-step reasoning using LangGraph & CrewAI",
      "End-to-end GenAI application deployment with Streamlit, FastAPI, Docker, and Cloud",
    ],
    audience: [
      "Software developers seeking to transition into applied GenAI engineering",
      "Computer Science, AI, and Data Science students wanting hands-on LLM projects",
      "Technical professionals looking to build automated AI pipelines and RAG systems",
      "Product builders, innovators, and entrepreneurs building AI-native applications",
      "Engineers wanting to master AI agents, MCP, and cutting-edge GenAI toolchains",
    ],
    learningOutcomes: [
      "Understand the mechanics of Large Language Models, transformers, tokens, and model behaviors",
      "Write advanced Python pipelines for AI data processing and automated workflows",
      "Master context engineering, advanced prompt design, and structured JSON schema enforcement",
      "Build production-grade Retrieval-Augmented Generation (RAG) pipelines over documents",
      "Implement the Model Context Protocol (MCP) to seamlessly connect LLMs to external systems",
      "Orchestrate multi-step autonomous AI agents using LangGraph, CrewAI, AutoGen, and n8n",
      "Deploy, test, and ship complete GenAI applications using Streamlit, FastAPI, Docker, and cloud platforms",
    ],
    curriculum: [
      {
        month: 1,
        weeks: "Weeks 1 – 3",
        title: "GenAI Fundamentals",
        subtitle: "LLMs, GPT & Transformer Foundations",
        topics: [
          "Introduction to AI and Generative AI",
          "LLMs, GPT & Transformers architecture",
          "Tokens and model behaviour (temperature, top-p, context windows)",
          "GenAI concepts and real-world applications",
          "AI application landscape & industry ecosystem",
        ],
      },
      {
        month: 2,
        weeks: "Weeks 4 – 6",
        title: "Application Development & RAG",
        subtitle: "Python, Prompting & Vector Retrieval",
        topics: [
          "Python programming for AI & data structures",
          "Data handling and processing for GenAI",
          "Building GenAI applications from scratch",
          "Prompting and context handling (zero-shot, few-shot, chain-of-thought)",
          "Retrieval-Augmented Generation (RAG) architecture",
          "Embeddings and vector databases (Pinecone, Chroma, FAISS, Weaviate)",
          "Mini Project 1: AI Assistant application development",
        ],
      },
      {
        month: 3,
        weeks: "Weeks 7 – 9",
        title: "Models, Multimodal AI & Tooling",
        subtitle: "Multimodal, MCP & Tool Integrations",
        topics: [
          "Fine-tuning fundamentals & model adaptation",
          "Transformer architecture and model adaptation strategies",
          "Multimodal AI (text, image, audio workflows)",
          "Image generation workflows (DALL-E, Stable Diffusion, CLIP)",
          "Model Context Protocol (MCP) fundamentals and implementation",
          "AI tools and integrations",
          "Connecting models with external tools, APIs and databases",
          "Mini Project 2: Chat with Your Documents (RAG) development",
        ],
      },
      {
        month: 4,
        weeks: "Weeks 10 – 12",
        title: "Agents, Automation & Project Development",
        subtitle: "Autonomous Agents, Orchestration & Capstone",
        topics: [
          "AI agents and agent architecture (perception, reasoning, action)",
          "Multi-step reasoning workflows & planner-executor patterns",
          "LangGraph & CrewAI for multi-agent orchestration",
          "AI automation and workflow development (n8n, AutoGen)",
          "AI security, reliability, guardrails and prompt safety",
          "End-to-end GenAI project development",
          "Testing, deployment and best practices (Streamlit, FastAPI, Docker, AWS, Render)",
          "Final Capstone Demonstration & live evaluation",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Programming & Development",
        items: ["Python", "Jupyter Notebook", "VS Code", "Git & GitHub"],
      },
      {
        category: "Generative AI & LLM Frameworks",
        items: ["OpenAI API", "LangChain", "Llama Models", "Hugging Face", "Transformers"],
      },
      {
        category: "Agents & Workflow Tools",
        items: ["LangGraph", "CrewAI", "AutoGen", "n8n"],
      },
      {
        category: "RAG & Vector Databases",
        items: ["Pinecone", "Chroma", "FAISS", "Weaviate"],
      },
      {
        category: "Multimodal AI Tools",
        items: ["DALL-E", "Stable Diffusion", "CLIP", "Whisper"],
      },
      {
        category: "Deployment & Cloud",
        items: ["Streamlit", "FastAPI", "Docker", "AWS", "Render"],
      },
    ],
    skillsYouBuild: [
      {
        number: "01",
        category: "Generative AI Foundations",
        points: [
          "Introduction to AI and Generative AI",
          "Large Language Models (LLMs) & Transformer fundamentals",
          "GPT and Transformer architectures",
          "Understanding tokens and model behaviour",
          "Generative AI concepts and applications",
          "AI application landscape",
        ],
      },
      {
        number: "02",
        category: "Python for AI",
        points: [
          "Python programming fundamentals",
          "Data handling and processing",
          "Working with AI libraries and packages",
          "Python workflows for Generative AI",
          "Introduction to agentic workflows",
        ],
      },
      {
        number: "03",
        category: "GenAI Application Development",
        points: [
          "Building GenAI applications",
          "Working with language models",
          "Prompting and structured interaction",
          "Context handling & context engineering",
          "Connecting AI models with applications",
        ],
      },
      {
        number: "04",
        category: "Context Engineering, RAG & NLP",
        points: [
          "Context engineering concepts",
          "Natural Language Processing (NLP)",
          "Text processing and information extraction",
          "Embeddings and vector-based retrieval",
          "Working with structured and unstructured information",
          "Building context-aware AI applications",
        ],
      },
      {
        number: "05",
        category: "Multimodal AI, MCP & Agent Engineering",
        points: [
          "Multimodal AI concepts",
          "Text-to-text, text-to-image and image-to-image workflows",
          "Combining different modalities",
          "Model Context Protocol (MCP)",
          "AI tools and tool integration",
          "AI agents and agent architecture",
          "Multi-step reasoning workflows",
          "Agent orchestration (LangGraph, CrewAI)",
          "Agent-based application development",
        ],
      },
    ],
    projects: [
      {
        number: "01",
        name: "Mini Project 1",
        timeline: "Weeks 3 – 4",
        title: "AI Assistant / Chat Application",
        points: [
          "Build a simple GenAI application using language models",
          "Implement prompting and structured interaction",
          "Work with context and user inputs",
          "Deploy a working application with an interactive user interface",
        ],
        technologies: ["Python", "OpenAI API", "Streamlit", "Prompt Engineering"],
      },
      {
        number: "02",
        name: "Mini Project 2",
        timeline: "Weeks 7 – 8",
        title: "Chat with Your Documents (RAG System)",
        points: [
          "Build a RAG-based application for custom document interrogation",
          "Work with document processing (PDF, Text), chunking and embeddings",
          "Implement information retrieval with LLMs and vector databases",
          "Create a context-aware AI system for real-world enterprise use",
        ],
        technologies: ["LangChain", "Chroma / Pinecone", "FastAPI", "Embeddings"],
      },
      {
        number: "03",
        name: "Capstone Project",
        timeline: "Weeks 11 – 12",
        title: "Autonomous GenAI Agent & Multi-Tool Automation System",
        points: [
          "Build an end-to-end GenAI application with agentic reasoning",
          "Integrate LLMs, RAG, autonomous agents and workflow automation",
          "Connect with external tools, APIs, web search, and data sources",
          "Solve a real-world problem and deploy a complete production-grade solution",
        ],
        technologies: ["LangGraph / CrewAI", "Model Context Protocol (MCP)", "FastAPI / Docker", "Vector DB", "Cloud"],
      },
    ],
    careerOpportunities: [
      "AI Engineer",
      "GenAI Developer",
      "Prompt Engineer",
      "Applied AI Researcher",
      "AI Product Developer",
      "LLM Solutions Engineer",
      "Data & AI Analyst",
      "AI Automation Engineer",
      "Technical Consultant (GenAI)",
    ],
    practicalAssignments: [
      "Assignment 1: Prompt engineering suite with structured JSON output and schema validation",
      "Assignment 2: Multi-turn conversational support assistant with memory and system instructions",
      "Assignment 3: Document embedding pipeline over PDFs and markdown files with semantic search",
      "Assignment 4: Complete RAG question-answering pipeline using Chroma and Pinecone vector stores",
      "Assignment 5: Tool calling and Model Context Protocol (MCP) server implementation for external APIs",
      "Assignment 6: Multi-agent cooperative workflow using LangGraph or CrewAI for research and synthesis",
      "Assignment 7: Containerized deployment of a GenAI web service using FastAPI, Streamlit, and Docker",
    ],
    capstoneMilestones: [
      { phase: "Phase 1: Problem Scoping & Architecture", description: "Select domain problem statement, design agent persona, define tool contracts, and design RAG retrieval flow." },
      { phase: "Phase 2: RAG Pipeline & Tool Integration", description: "Implement vector store indexing, document chunking, semantic retrieval, and external tool/MCP integration." },
      { phase: "Phase 3: Multi-Agent Orchestration & UI", description: "Build autonomous multi-step reasoning agent with LangGraph/CrewAI and develop interactive user interface." },
      { phase: "Phase 4: Evaluation, Deployment & Demo", description: "Evaluate accuracy, add safety guardrails, containerize with Docker, and deliver live prototype demonstration." },
    ],
    exampleProjects: [
      {
        title: "Enterprise Multi-Document Knowledge Intelligence Hub",
        description: "Retrieval-augmented AI system ingesting company manuals, contracts, and SOPs with semantic chunking, citation verification, and interactive QA.",
      },
      {
        title: "Autonomous Research & Content Generation Agent",
        description: "LangGraph-powered multi-agent pipeline that conducts web searches, gathers reference data, synthesizes technical drafts, and generates diagrams.",
      },
      {
        title: "Customer Support Copilot with Automated Workflow Actions",
        description: "Agentic assistant integrated with CRM databases and email APIs via MCP to diagnose user inquiries, query account details, and draft resolutions.",
      },
      {
        title: "Multimodal Visual Inspection & Reporting Engine",
        description: "Vision-enabled GenAI application analyzing equipment photos via CLIP/GPT-4o to identify defects, summarize anomalies, and generate PDF inspection reports.",
      },
    ],
    faqs: [
      {
        question: "Do I need a high-end GPU or machine to take this course?",
        answer: "No. The program focuses on modern API-based development using cloud-hosted Foundation Models and lightweight cloud or local environments. A standard laptop is completely sufficient.",
      },
      {
        question: "What programming language is used in this programme?",
        answer: "We primarily utilize Python, which is the global industry standard for Generative AI development, data processing, and agent orchestration.",
      },
      {
        question: "What is the Model Context Protocol (MCP) covered in the curriculum?",
        answer: "Model Context Protocol (MCP) is the emerging open standard for connecting AI models securely to local and remote data sources, developer tools, and enterprise environments.",
      },
      {
        question: "What career roles does this program prepare me for?",
        answer: "This program prepares you for roles such as AI Engineer, GenAI Developer, Prompt Engineer, Applied AI Researcher, AI Product Developer, LLM Solutions Engineer, and AI Automation Engineer.",
      },
      {
        question: "What projects will I build during the 3 months?",
        answer: "You will build 3 complete hands-on projects: an AI Assistant (Weeks 3-4), a RAG-based Chat with Documents system (Weeks 7-8), and an end-to-end Autonomous GenAI Agent Capstone (Weeks 11-12).",
      },
    ],
  },
];
