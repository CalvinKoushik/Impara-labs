export interface CurriculumMonth {
  month: number;
  title: string;
  subtitle: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  badge: string;
  duration: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  mode: string;
  schedule: string;
  projectSummary: string;
  posterImage?: string;
  highlights: string[];
  audience: string[];
  learningOutcomes: string[];
  curriculum: CurriculumMonth[];
  toolsAndTechnologies: {
    category: string;
    items: string[];
  }[];
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
}

export const courses: Course[] = [
  {
    id: "iot-embedded-systems",
    slug: "iot-embedded-systems",
    title: "IoT & Embedded Systems",
    badge: "Hardware & Connected Systems",
    duration: "3 Months (12 Weeks)",
    tagline: "Learn IoT. Build 3 Projects. Create Smart, Connected Solutions.",
    shortDescription: "Explore connected devices, microcontrollers, sensors and embedded programming while building practical IoT solutions.",
    fullDescription: "A comprehensive 3-month industry-supported career programme taking you from electronic foundations and microcontroller programming to network protocols, cloud automation, and working IoT capstone systems. Built on the R&D experience of TechKnots.",
    mode: "Online / Offline (as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "Hardware-in-the-loop hands-on lab training",
      "Arduino, ESP32, and ESP8266 development boards",
      "Industrial protocols: MQTT, HTTP, Webhooks, CoAP",
      "Cloud dashboards (Blynk, AWS IoT, ThingSpeak)",
      "Camera vision interfacing with ESP32-CAM",
      "AICTE-approved internship alignment via TechKnots",
    ],
    audience: [
      "Circuit branch students (ECE, EEE, EIE, Mechatronics)",
      "Computer Science & IT students eager to build physical computing systems",
      "College graduates looking for embedded systems & IoT career skills",
      "Robotics and automation enthusiasts who want practical hardware experience",
      "Engineers seeking portfolio-ready hardware prototypes",
    ],
    learningOutcomes: [
      "Master microcontroller architectures (AVR, ESP32 dual-core Xtensa)",
      "Interface analog and digital sensors with precision timing and ADC calibration",
      "Write clean embedded C/C++ code using Arduino IDE and PlatformIO / VS Code",
      "Implement wireless connectivity with Wi-Fi, BLE, and IoT protocols (MQTT, HTTP)",
      "Publish telemetry to real-time cloud dashboards (Blynk, AWS IoT, ThingSpeak)",
      "Integrate automated notifications and rule triggers using webhooks and IFTTT",
      "Design, build, debug, and demonstrate a complete, production-grade IoT capstone",
    ],
    curriculum: [
      {
        month: 1,
        title: "Month 1 — Foundations & Embedded Architecture",
        subtitle: "Electronics, Microcontrollers, and Hardware Interfacing",
        topics: [
          "Introduction to IoT, IIoT (Industrial IoT) and AIoT architectures",
          "Electronics fundamentals: Voltage, current, resistors, pull-ups, logic levels",
          "Microcontroller architecture vs Microprocessors",
          "Arduino family: Uno, Nano, and Mega deep-dive",
          "ESP8266 and ESP32 pin configurations & GPIO multiplexing",
          "Digital and analogue interfacing (ADC, DAC, PWM)",
          "Sensors (DHT11/22, Ultrasonic, PIR, LDR, Soil moisture) and actuators (Relays, Servos, Motors)",
          "Embedded C/C++ programming exercises in Arduino IDE and PlatformIO",
          "Circuit design, simulation, and verification using Tinkercad, Wokwi, and Fritzing",
        ],
      },
      {
        month: 2,
        title: "Month 2 — Connected Systems & Networking Protocols",
        subtitle: "Wireless Communication, Protocols, and Cloud Platforms",
        topics: [
          "ESP32 Wi-Fi station and Access Point (AP) modes",
          "Networking fundamentals: IPv4, IPv6, MAC addresses, Local IP, and mDNS",
          "IoT communication protocols: HTTP REST, MQTT (Broker/Publish/Subscribe), Webhooks",
          "Specialized IoT protocols: CoAP, AMQP, SMTP, SNMP overview",
          "Identification technologies: RFID & NFC reader integration",
          "Cloud platform integration: Blynk IoT mobile dashboard and widgets",
          "Telemetry pipelines: ThingSpeak channel logging and MATLAB visual analytics",
          "AWS IoT Core basics and secure MQTT TLS authentication",
          "Automation and webhook triggers using IFTTT",
          "Hardware debugging with logic analyzers, multimeters, and serial telemetry",
        ],
      },
      {
        month: 3,
        title: "Month 3 — Edge Vision, Integration & Capstone Project",
        subtitle: "ESP32-CAM, Systems Integration, and End-to-End Capstone",
        topics: [
          "ESP32-CAM module architecture and camera sensor configuration",
          "Basic Digital Image Processing (DIP) and edge computer vision concepts",
          "Streaming video feeds and motion-triggered snapshot capture",
          "System architecture: Power management, battery selection, and sleep modes",
          "Problem identification and scoping for the final Capstone Project",
          "Hardware selection, schematic design, and firmware structuring",
          "End-to-end integration: Sensor -> Microcontroller -> Protocol -> Cloud -> Dashboard",
          "System validation, robustness testing, and fail-safe recovery mechanisms",
          "Technical documentation, Git repository setup, and live demonstration",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Development Boards",
        items: ["Arduino Uno", "Arduino Nano", "Arduino Mega", "ESP8266 NodeMCU", "ESP32 DevKit", "ESP32-CAM"],
      },
      {
        category: "Sensors & Actuators",
        items: ["Temperature & Humidity (DHT22)", "Ultrasonic HC-SR04", "PIR Motion", "Soil Moisture", "Relay Modules", "Servo Motors", "OLED & I2C LCD"],
      },
      {
        category: "Coding & Simulation",
        items: ["Arduino IDE", "VS Code", "PlatformIO", "Wokwi Simulator", "Tinkercad Circuits", "Fritzing"],
      },
      {
        category: "Protocols & Cloud",
        items: ["MQTT", "HTTP / REST", "Webhooks", "CoAP", "Blynk IoT", "AWS IoT Core", "ThingSpeak", "IFTTT"],
      },
      {
        category: "Networking & Security",
        items: ["IPv4 / IPv6", "mDNS", "RFID / NFC", "Wi-Fi 802.11 b/g/n", "Bluetooth LE"],
      },
    ],
    practicalAssignments: [
      "Lab 1: Multi-sensor environmental telemetry monitor with serial logging",
      "Lab 2: Automated relay controller with pulse-width modulation and safety thresholds",
      "Lab 3: Remote Wi-Fi web server on ESP32 with responsive HTML control interface",
      "Lab 4: MQTT publish-subscribe system with cloud broker and mobile app dashboard",
      "Lab 5: Smart security trigger using ESP32-CAM with automated email and webhook notifications",
    ],
    capstoneMilestones: [
      { phase: "Week 9 — Architecture", description: "Problem selection, component schematic design, cloud pipeline flowchart, and bill of materials." },
      { phase: "Week 10 — Firmware & Breadboard", description: "Sensor calibration, firmware development, edge state machine, and communication verification." },
      { phase: "Week 11 — Cloud & Automation", description: "Full integration with cloud dashboard, alerting triggers, and hardware enclosure packaging." },
      { phase: "Week 12 — Demo & Review", description: "Live demonstration, stress testing, technical report compilation, and mentor evaluation." },
    ],
    exampleProjects: [
      {
        title: "Smart Agriculture Monitoring & Auto-Irrigation",
        description: "Multi-point soil moisture, temperature, and solar monitoring station with automated solenoid valve control and cloud dashboard.",
      },
      {
        title: "IoT Energy & Power Monitoring System",
        description: "Current sensor CT clamp and voltage sensing system measuring real-time kilowatt-hour consumption with alerts for anomalous power draw.",
      },
      {
        title: "Smart Home Automation with Cloud Dashboard",
        description: "App-controlled multi-relay smart switchboard with physical manual override, status telemetry, and voice assistant webhooks.",
      },
      {
        title: "Environmental Quality & Hazardous Gas Monitor",
        description: "Air quality index (AQI) monitoring node featuring particulate sensor, MQ gas detector, and emergency buzzer alert.",
      },
      {
        title: "Connected Industrial Asset & Vibration Monitor",
        description: "Vibration and motor temperature logging device with edge threshold detection and MQTT alerts for preventative maintenance.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior electronics or coding knowledge?",
        answer: "No. The course starts with fundamental electronics and basic C programming before advancing into complex IoT architectures and cloud integration.",
      },
      {
        question: "Is hardware provided or will I use simulations?",
        answer: "You will practice both with browser simulators like Wokwi and Tinkercad, as well as hands-on physical hardware kits (Arduino, ESP32, sensors, actuators) during the program.",
      },
      {
        question: "What is the project split in this 3-month course?",
        answer: "You will complete 2 structured mini projects during Months 1 and 2, followed by a comprehensive, mentor-reviewed Capstone Project in Month 3.",
      },
      {
        question: "Can I choose between weekday and weekend batches?",
        answer: "Yes, we offer both weekday evening batches and weekend intensive batches to accommodate both college students and working professionals.",
      },
    ],
  },
  {
    id: "full-stack-ai",
    slug: "full-stack-ai",
    title: "Full Stack Development with AI",
    badge: "Modern Web & Intelligent Systems",
    duration: "3 Months (12 Weeks)",
    tagline: "Learn modern full-stack web engineering and infuse cutting-edge AI.",
    shortDescription: "Learn to create modern web applications using frontend technologies, backend engineering, databases, APIs and AI integration.",
    fullDescription: "Bridge modern web development with the next generation of intelligent software. Master modern frontend architectures, robust backend APIs, relational & document databases, authentication, and integrate generative AI APIs directly into production web applications.",
    mode: "Online / Offline (as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "Modern React and TypeScript frontend architecture",
      "Node.js, Express, and RESTful API backend design",
      "Database design with PostgreSQL and MongoDB",
      "Secure authentication (JWT, OAuth2, session management)",
      "Integrating OpenAI & Gemini LLM APIs into web apps",
      "Full-stack deployment pipelines with Git, Netlify, and Cloud",
    ],
    audience: [
      "Computer Science, IT, and software engineering students",
      "Aspiring developers who want to stand out with AI-augmented web engineering",
      "Frontend developers who want to become full-stack engineers with AI skills",
      "Innovators and startup founders building modern web applications",
      "Graduates preparing for full-stack software development roles",
    ],
    learningOutcomes: [
      "Architect responsive, accessible single-page web applications using React & TypeScript",
      "Develop scalable RESTful APIs with Node.js, Express, and input validation",
      "Model relational and document databases with indexing, migrations, and ORMs",
      "Implement secure authentication, authorization, and CORS policies",
      "Connect LLM APIs, stream AI responses to the UI, and handle structured JSON outputs",
      "Use Git for professional team workflows and deploy to modern cloud platforms",
      "Ship a production-grade full-stack capstone application with AI superpowers",
    ],
    curriculum: [
      {
        month: 1,
        title: "Month 1 — Modern Frontend Engineering & Foundations",
        subtitle: "HTML5, Modern CSS, TypeScript, and React Applications",
        topics: [
          "Modern JavaScript (ES6+ features, async/await, closures, promises)",
          "TypeScript foundations: Typing, interfaces, generics, and strict safety",
          "Semantic HTML5, accessibility (a11y), and responsive mobile-first design",
          "Modern styling: Tailwind CSS, CSS Grid, Flexbox, and design tokens",
          "React architecture: Components, Props, State, Hooks (useState, useEffect, useMemo)",
          "Component lifecycle, side effects, and state management patterns",
          "Client-side routing with React Router and nested layouts",
          "Professional Git: branching, pull requests, conventional commits, and GitHub",
        ],
      },
      {
        month: 2,
        title: "Month 2 — Backend Engineering, Databases & AI APIs",
        subtitle: "Node.js, REST APIs, Databases, and AI Integration",
        topics: [
          "Node.js runtime, event loop, and asynchronous programming",
          "Building robust REST APIs with Express.js and middleware architecture",
          "Database modeling: PostgreSQL (Relational) and MongoDB (Document)",
          "Data validation with Zod and sanitize incoming payloads",
          "Authentication & security: Password hashing with bcrypt, JWT tokens, and OAuth2",
          "Introduction to AI APIs: OpenAI, Google Gemini SDK, and Anthropic APIs",
          "Prompt engineering inside backend endpoints and streaming responses to the frontend",
          "API rate limiting, error handling middleware, and logging with Winston",
        ],
      },
      {
        month: 3,
        title: "Month 3 — Full-Stack Systems Integration & AI Capstone",
        subtitle: "Architecture, AI Features, Testing, and Cloud Deployment",
        topics: [
          "Full-stack application architecture and end-to-end type safety",
          "Frontend and backend integration with TanStack Query / Axios and optimistic UI",
          "AI feature implementation: Text generation, summarization, semantic search, and copilot sidebars",
          "Handling structured outputs and JSON schema enforcement from LLMs",
          "Automated testing: Unit testing with Vitest/Jest and API testing with Supertest",
          "Continuous integration and continuous deployment (CI/CD) pipelines",
          "Cloud deployment: Netlify, Vercel, Supabase / Neon, and cloud database instances",
          "Performance optimization, caching strategies, and SEO configuration",
          "Final Capstone Project presentation, code review, and portfolio publishing",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Frontend Stack",
        items: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Lucide Icons"],
      },
      {
        category: "Backend & Runtime",
        items: ["Node.js", "Express.js", "REST APIs", "JSON Web Tokens (JWT)", "Zod"],
      },
      {
        category: "Databases & Storage",
        items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis Basics"],
      },
      {
        category: "AI & SDKs",
        items: ["Google Gemini API", "OpenAI API", "Streaming SSE", "Function Calling"],
      },
      {
        category: "DevOps & Tooling",
        items: ["Git & GitHub", "Netlify", "Vercel", "Postman", "Vitest", "Docker Basics"],
      },
    ],
    practicalAssignments: [
      "Assignment 1: Responsive multi-page SaaS marketing interface with theme switcher",
      "Assignment 2: Secure RESTful authentication API with JWT verification and refresh tokens",
      "Assignment 3: Full-stack CRUD application connected to a relational database with search & pagination",
      "Assignment 4: AI-powered text rewriter and summarizer with real-time UI streaming",
      "Assignment 5: Collaborative dashboard with real-time status and database persistence",
    ],
    capstoneMilestones: [
      { phase: "Week 9 — Product Spec & Wireframes", description: "Define user stories, database ER diagrams, API route specifications, and Figma wireframes." },
      { phase: "Week 10 — Core App & Database", description: "Implement backend API, database schemas, frontend components, and user authentication flow." },
      { phase: "Week 11 — AI Integration & Polishing", description: "Infuse AI-driven capabilities, error handling, toast notifications, and responsive UI polish." },
      { phase: "Week 12 — Deployment & Review", description: "Live production deployment on Netlify/Cloud, automated test runs, documentation, and demo day." },
    ],
    exampleProjects: [
      {
        title: "AI-Assisted Interactive Learning Platform",
        description: "A comprehensive course portal where students can take interactive quizzes and get personalized explanations from an AI tutor.",
      },
      {
        title: "Intelligent Customer Support & Ticketing Copilot",
        description: "Full-stack ticketing desk where tickets are automatically categorized, tagged with urgency, and drafted with suggested resolutions.",
      },
      {
        title: "AI-Powered Productivity & Note-Taking Workspace",
        description: "Markdown editor with semantic tag generation, automatic meeting notes summarization, and task extraction.",
      },
      {
        title: "Smart Collaborative Project Management Application",
        description: "Kanban board application with role-based access control, deadline tracking, and AI-suggested milestone breakdowns.",
      },
    ],
    faqs: [
      {
        question: "Do I need to know React or backend development beforehand?",
        answer: "Basic familiarity with programming logic is helpful, but we begin from the ground up with JavaScript fundamentals before moving into React, Node.js, and AI APIs.",
      },
      {
        question: "How is AI incorporated into the web development curriculum?",
        answer: "Rather than treating AI as an isolated topic, you will learn how modern software companies integrate AI into real web products: connecting LLM APIs, handling streaming responses, prompt chaining, and building AI copilots.",
      },
      {
        question: "Will I build a complete production portfolio?",
        answer: "Yes. Every student builds 2 guided mini projects plus an end-to-end, deployed Capstone Application with complete source code on GitHub.",
      },
    ],
  },
  {
    id: "generative-ai",
    slug: "generative-ai",
    title: "Mastering Generative AI",
    badge: "Applied AI & Agentic Systems",
    duration: "3 Months (12 Weeks)",
    tagline: "Explore generative AI, prompt engineering, intelligent workflows and practical applications.",
    shortDescription: "Explore generative AI, prompt engineering, intelligent workflows and AI-powered applications through practical projects.",
    fullDescription: "A hands-on, industry-aligned immersion into the generative AI revolution. Learn the principles behind Foundation Models, master advanced prompt engineering, build Retrieval-Augmented Generation (RAG) pipelines over custom documents, and develop autonomous agents and AI-driven applications.",
    mode: "Online / Offline (as per batch)",
    schedule: "Flexible Weekday & Weekend Batches",
    projectSummary: "2 Mini Projects + 1 Capstone Project",
    highlights: [
      "Foundation model concepts & transformer architecture intuition",
      "Advanced prompt engineering (Few-Shot, Chain-of-Thought, ReAct)",
      "Structured JSON schema outputs and deterministic function calling",
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Building AI tools, agent workflows, and document QA systems",
      "Responsible AI: Safety guidelines, guardrails, and ethics",
    ],
    audience: [
      "Software developers seeking to transition into applied AI engineering",
      "Data science and engineering students wanting practical GenAI skills",
      "Technical professionals looking to build automated AI pipelines",
      "Product managers and innovators building AI-native tools",
      "Anyone wanting to move beyond chat prompts into building real AI software",
    ],
    learningOutcomes: [
      "Understand tokenization, temperature, top-p, attention, and LLM behavior",
      "Construct robust prompt engineering pipelines that yield consistent structured responses",
      "Connect and orchestrate LLM APIs (Google Gemini, Anthropic Claude, OpenAI)",
      "Build vector embeddings and index domain documents into vector databases",
      "Implement Retrieval-Augmented Generation (RAG) to eliminate hallucinations on private data",
      "Design multi-step agentic workflows with external tool calling and web search",
      "Ship a portfolio-grade Generative AI capstone solution with production quality",
    ],
    curriculum: [
      {
        month: 1,
        title: "Month 1 — GenAI Foundations & Advanced Prompt Engineering",
        subtitle: "LLM Architectures, Prompt Patterns, and Structured Outputs",
        topics: [
          "Generative AI ecosystem: Large Language Models vs traditional Machine Learning",
          "Core concepts: Tokens, context windows, temperature, top-p, frequency penalties",
          "Prompt engineering taxonomy: Zero-shot, few-shot, role prompting, and chain-of-thought",
          "Prompt injection defense, system prompts, and safety guardrails",
          "Enforcing structured JSON outputs with Pydantic and JSON Schema",
          "AI developer productivity: GitHub Copilot, cursor workflows, and code acceleration",
          "Ethical considerations, data privacy, IP implications, and model bias awareness",
        ],
      },
      {
        month: 2,
        title: "Month 2 — AI Tools, Model APIs & Retrieval-Augmented Generation",
        subtitle: "APIs, Vector Embeddings, RAG Pipelines, and Automation",
        topics: [
          "Direct integration with Google Gemini API, OpenAI API, and open-source models",
          "Function calling and tool use: Teaching LLMs when and how to call external APIs",
          "Vector embeddings: Cosine similarity, semantic search, and embedding models",
          "Document processing: Chunking strategies, PDF/Markdown parsing, and metadata tagging",
          "Vector databases: ChromaDB, Pinecone, and FAISS in practice",
          "Building a complete Retrieval-Augmented Generation (RAG) pipeline",
          "Evaluation of RAG retrieval quality and answer fidelity",
          "Workflow automation: Connecting LLMs to webhooks, spreadsheets, and databases",
        ],
      },
      {
        month: 3,
        title: "Month 3 — Agentic Workflows, Prototyping & GenAI Capstone",
        subtitle: "Autonomous Agents, Web Interfaces, and End-to-End Capstone",
        topics: [
          "Introduction to AI Agents: Planner-Executor patterns and autonomous reasoning loops",
          "Multi-tool agent architectures: Web search, calculator, database query, and summary tools",
          "Building user-friendly AI web interfaces using Streamlit, React, or Next.js",
          "Latency optimization, caching identical prompts, and token cost economics",
          "Scoping and initiating the Generative AI Capstone Project",
          "Prompt and model experimentation, benchmark evaluation, and failure case analysis",
          "Packaging the prototype into a production-ready application",
          "Final Capstone Project showcase, documentation, and live demonstration",
        ],
      },
    ],
    toolsAndTechnologies: [
      {
        category: "Foundation Models & APIs",
        items: ["Google Gemini 1.5/2.0", "OpenAI GPT-4o", "Anthropic Claude 3.5", "Open Source Ollama / Llama 3"],
      },
      {
        category: "Embeddings & Vector Databases",
        items: ["Text Embeddings", "ChromaDB", "Pinecone", "FAISS", "Cosine Similarity"],
      },
      {
        category: "Frameworks & Tooling",
        items: ["Python / TypeScript", "LangChain / LlamaIndex concepts", "Pydantic", "Streamlit", "React"],
      },
      {
        category: "Protocols & Storage",
        items: ["REST APIs", "Server-Sent Events (SSE)", "JSON Schema", "Git / GitHub"],
      },
    ],
    practicalAssignments: [
      "Assignment 1: Prompt engineering suite for automated customer review classification with structured JSON output",
      "Assignment 2: Multi-turn conversational support assistant with configurable persona and system constraints",
      "Assignment 3: Document QA system over custom PDF manuals using semantic search embeddings",
      "Assignment 4: Function-calling AI assistant that queries a weather API and calculates mortgage schedules",
      "Assignment 5: Interactive Streamlit or React web dashboard for instant document summarization",
    ],
    capstoneMilestones: [
      { phase: "Week 9 — Use Case & Architecture", description: "Select domain problem, define model evaluation criteria, collect sample domain datasets, and architect data flow." },
      { phase: "Week 10 — RAG Pipeline & Logic", description: "Implement document chunking, vector indexing, retrieval prompts, and tool calling mechanisms." },
      { phase: "Week 11 — Frontend & Error Handling", description: "Develop clean user interface, handle streaming output, manage edge cases and hallucinations." },
      { phase: "Week 12 — Evaluation & Demo", description: "Benchmark accuracy, conduct live demonstrations, publish technical write-up and GitHub repository." },
    ],
    exampleProjects: [
      {
        title: "AI Enterprise Document Assistant & Knowledge Base",
        description: "Retrieval-augmented question answering platform over internal company policies, technical manuals, and SOPs with source citations.",
      },
      {
        title: "Intelligent Resume-to-Job Matching & Feedback Engine",
        description: "Automated candidate analysis system that reads job specifications and résumés, scores compatibility, and generates tailored improvement advice.",
      },
      {
        title: "AI Automated Technical Documentation & Code Explainer",
        description: "Interactive tool that digests GitHub repository files and generates formatted markdown documentation, API references, and architecture summaries.",
      },
      {
        title: "Educational Copilot & Quiz Generator Prototype",
        description: "Adaptive learning agent that takes textbook chapters, creates multi-difficulty flashcards, tests the student, and clarifies misconceptions.",
      },
    ],
    faqs: [
      {
        question: "Do I need a high-end GPU or machine to take this course?",
        answer: "No. The program focuses on modern API-based development using cloud-hosted Foundation Models (Gemini, OpenAI, Claude) and lightweight cloud or local environments. A standard laptop is completely sufficient.",
      },
      {
        question: "What programming language is used in this programme?",
        answer: "We primarily utilize Python and modern TypeScript/JavaScript, which are the industry standards for building LLM applications and web interfaces.",
      },
      {
        question: "Is this course focused on prompt writing or actual software development?",
        answer: "While we cover prompt engineering rigorously in Month 1, Months 2 and 3 focus heavily on actual engineering: vector databases, RAG architectures, API integration, function calling, and building full applications.",
      },
    ],
  },
];
