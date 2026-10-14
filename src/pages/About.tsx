import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Compass,
  Cpu,
  Bot,
  Code2,
  BrainCircuit,
  Radio,
  Layers,
} from 'lucide-react';
import { FounderSection } from '../components/FounderSection';
import { TechKnotsPartner } from '../components/TechKnotsPartner';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const About: React.FC = () => {
  const domains = [
    {
      title: "IoT & Smart Automation",
      desc: "Microcontroller architecture, firmware development, sensors, actuators, industrial protocols (MQTT, HTTP), and cloud automation.",
      icon: <Cpu className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Full Stack Development",
      desc: "Modern React web applications, enterprise Core Java, Spring Boot REST APIs, relational SQL databases, and AI integration.",
      icon: <Code2 className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "AI & Generative AI",
      desc: "Large Language Models, Context Engineering, RAG vector pipelines, Model Context Protocol (MCP), and autonomous AI agents.",
      icon: <BrainCircuit className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Data & Emerging Technologies",
      desc: "Connected cloud dashboards, telemetry analytics, edge computer vision, ESP32-CAM processing, and smart devices.",
      icon: <Layers className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Robotics and Automation",
      desc: "Microcontrollers, motor control, sensor fusion, and applied hardware automation.",
      icon: <Bot className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Smart Systems",
      desc: "Real-time telematics, IoT cloud platforms (Blynk, AWS IoT, ThingSpeak), and automated IFTTT event workflows.",
      icon: <Radio className="w-4 h-4 text-brand-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-14 sm:py-20 border-b border-sky-100">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-100 shadow-subtle text-xs font-semibold text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>Our Origin & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Making Technology Learning More{' '}
            <span className="text-brand-primary">Practical, Creative & Accessible.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Impara Creative Labs was founded to solve a critical challenge in technical education: the gap between textbook theory and actual, working engineering systems. We enable learners to transition from memorizing concepts to building real, demonstrable prototypes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-xl p-7 sm:p-9 border border-sky-100 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-primary mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  Our Mission
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-3">
                  Transforming Ideas into Working Solutions
                </h2>
                <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-sky-50/60 p-4 rounded-lg border border-sky-100 shadow-subtle">
                  “To make modern technology education more practical, creative and accessible, empowering learners to transform ideas into working solutions.”
                </blockquote>
              </div>
              <p className="text-xs text-slate-500 mt-5 leading-relaxed">
                We believe students discover true engineering instinct when they hold real hardware, write real firmware, debug errors in real-time, and see their systems communicate.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0866E8] via-[#0752BA] to-[#0A1E3C] text-white rounded-xl p-7 sm:p-9 border border-blue-400/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-sky-200 mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">
                  Our Vision
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                  A Destination for Real Project Excellence
                </h2>
                <blockquote className="text-xs sm:text-sm text-blue-100 leading-relaxed italic bg-white/10 p-4 rounded-lg border border-white/15">
                  “To become a trusted destination for project-driven technology education, innovation and industry-relevant skill development.”
                </blockquote>
              </div>
              <p className="text-xs text-blue-100/80 mt-5 leading-relaxed">
                Nurturing a new generation of inventors, hardware engineers, and software architects equipped with practical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Impara Exists: Theory vs Reality */}
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/50 to-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              The Impara Difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Why Project-Driven Learning Outperforms Theory Alone
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Traditional classrooms often stop at circuit diagrams on chalkboards or code snippets on lecture slides. Here is how Impara bridges the gap:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-xs border border-blue-100">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Hands-on Experimentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learners work directly with microcontrollers, breadboards, sensors, cloud brokers, and codebases. Understanding failure modes and debugging in hardware is where true mastery happens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-xs border border-blue-100">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">The Capstone-Based Approach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every curriculum culminates in an end-to-end Capstone Project. Students define a problem statement, select hardware, write firmware, connect cloud dashboards, and present a working demo.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-xs border border-blue-100">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Flexible Learning Options</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether attending interactive online sessions or hands-on laboratory workshops, students can choose weekday evening or weekend batch tracks that align with their university or work schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains of Operation */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Technology Domains We Operate In
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Practical learning across interconnected engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((dom) => (
              <div
                key={dom.title}
                className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 shadow-subtle transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 flex items-center justify-center mb-3 border border-blue-100">
                  {dom.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {dom.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {dom.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by TechKnots */}
      <TechKnotsPartner />

      {/* Founder Spotlight */}
      <FounderSection />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 to-sky-100/70 border-t border-sky-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Start Your Journey with Impara Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Explore our 3-month programmes or connect directly with our admissions and technical mentoring team.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/courses"
              className="px-5 py-2.5 rounded-lg bg-brand-primary text-white font-semibold text-sm shadow-sm hover:bg-brand-primary-hover transition-all"
            >
              Browse Programmes
            </Link>
            <Link
              to="/enroll"
              className="px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all shadow-subtle"
            >
              Submit Enrolment Enquiry
            </Link>
            <WhatsAppButton size="md" label="Chat on WhatsApp" className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};
