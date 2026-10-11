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
      title: "IoT and Embedded Systems",
      desc: "Microcontroller architecture, firmware development, sensors, actuators, and hardware telemetry.",
      icon: <Cpu className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Robotics and Automation",
      desc: "Autonomous rovers, motor controllers, sensor fusion, and industrial automation protocols.",
      icon: <Bot className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Full Stack Development",
      desc: "Modern React web applications, robust Node.js backend systems, relational databases, and RESTful APIs.",
      icon: <Code2 className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Generative AI and AI/ML",
      desc: "Large Language Models, prompt architectures, Retrieval-Augmented Generation (RAG), and agentic tools.",
      icon: <BrainCircuit className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Smart Systems",
      desc: "Connected cloud dashboards, energy monitoring, smart city infrastructure, and remote telematics.",
      icon: <Radio className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Prototyping & Emerging Tech",
      desc: "Fast hardware and software prototyping, rapid breadboarding, and edge computer vision.",
      icon: <Layers className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-pale via-white to-white py-16 sm:py-24 border-b border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-tight">
            Making Technology Learning More{' '}
            <span className="text-gradient">Creative, Practical and Accessible.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-3xl mx-auto font-normal">
            Impara Creative Labs was founded to solve a critical challenge in technical education: the gap between textbook theory and actual, working engineering systems. We enable learners to transition from memorizing concepts to building real, demonstrable prototypes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-brand-pale rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                  Our Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1 mb-4">
                  Transforming Ideas into Working Solutions
                </h2>
                <blockquote className="text-sm sm:text-base text-brand-body leading-relaxed italic bg-white p-5 rounded-2xl border border-brand-border/80">
                  “To make modern technology education more practical, creative and accessible, empowering learners to transform ideas into working solutions.”
                </blockquote>
              </div>
              <p className="text-xs text-brand-body/80 mt-6 leading-relaxed">
                We believe students discover true engineering instinct when they hold real hardware, write real firmware, debug errors in real-time, and see their systems communicate.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-200 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Our Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                  A Destination for Real Project Excellence
                </h2>
                <blockquote className="text-sm sm:text-base text-blue-100 leading-relaxed italic bg-white/10 p-5 rounded-2xl border border-white/15">
                  “To become a trusted destination for project-driven technology education, innovation and industry-relevant skill development.”
                </blockquote>
              </div>
              <p className="text-xs text-blue-200/80 mt-6 leading-relaxed">
                Nurturing a new generation of inventors, hardware engineers, and software architects equipped with practical capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Impara Exists: Theory vs Reality */}
      <section className="py-20 bg-brand-pale/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              The Impara Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
              Why Project-Driven Learning Outperforms Theory Alone
            </h2>
            <p className="text-sm text-brand-body mt-3">
              Traditional classrooms often stop at circuit diagrams on chalkboards or code snippets on lecture slides. Here is how Impara bridges the gap:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Hands-on Experimentation</h3>
              <p className="text-xs text-brand-body leading-relaxed">
                Learners work directly with microcontrollers, breadboards, sensors, cloud brokers, and codebases. Understanding failure modes and debugging in hardware is where true mastery happens.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-brand-navy">The Capstone-Based Approach</h3>
              <p className="text-xs text-brand-body leading-relaxed">
                Every curriculum culminates in an end-to-end Capstone Project. Students define a problem statement, select hardware, write firmware, connect cloud dashboards, and present a working demo.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-brand-navy">Flexible Learning Options</h3>
              <p className="text-xs text-brand-body leading-relaxed">
                Whether attending interactive online sessions or hands-on laboratory workshops, students can choose weekday evening or weekend batch tracks that align with their university or work schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains of Operation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
              Technology Domains We Operate In
            </h2>
            <p className="text-sm text-brand-body mt-3">
              Practical learning across interconnected engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((dom) => (
              <div
                key={dom.title}
                className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-pale flex items-center justify-center mb-4 border border-brand-border">
                  {dom.icon}
                </div>
                <h3 className="text-base font-extrabold text-brand-navy mb-2">
                  {dom.title}
                </h3>
                <p className="text-xs text-brand-body leading-relaxed">
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
      <section className="py-20 bg-brand-pale text-center border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="text-3xl font-extrabold text-brand-navy">
            Start Your Journey with Impara Today
          </h2>
          <p className="text-sm text-brand-body max-w-xl mx-auto">
            Explore our 3-month programmes or connect directly with our admissions and technical mentoring team.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 rounded-xl bg-brand-primary text-white font-bold text-sm shadow-md hover:bg-[#0756c4] transition-all"
            >
              Browse Programmes
            </Link>
            <Link
              to="/enroll"
              className="px-6 py-3 rounded-xl border border-brand-border bg-white text-brand-navy font-bold text-sm hover:bg-gray-50 transition-all"
            >
              Submit Enrolment Enquiry
            </Link>
            <WhatsAppButton size="md" label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
};
