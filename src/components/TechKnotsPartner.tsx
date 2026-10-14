import React from 'react';
import { Cpu, Briefcase, Lightbulb, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { TechKnotsLogo } from './BrandLogos';
import { Link } from 'react-router-dom';

export const TechKnotsPartner: React.FC = () => {
  const pillars = [
    {
      title: "R&D & Technology",
      desc: "Rooted in engineering research across embedded hardware, IoT gateways, and intelligent systems.",
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Industry Experience",
      desc: "Workflows, communication protocols, and architectural standards applied directly to student learning.",
      icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Technology Innovation",
      desc: "Constantly integrating contemporary toolchains like ESP32-CAM, MQTT, Spring Boot, and GenAI.",
      icon: <Lightbulb className="w-4 h-4 text-blue-400" />,
    },
    {
      title: "Student Ecosystem",
      desc: "Nurturing 10,000+ engineering students with hands-on project mentoring, technical guidance, and hackathons.",
      icon: <Users2 className="w-4 h-4 text-blue-400" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B2240] via-[#091B33] to-[#061324] border border-sky-500/25 rounded-2xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle technical background grid */}
          <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-white/10 border border-white/15 text-xs font-medium text-slate-200">
                <span>Knowledge Partner:</span>
                <TechKnotsLogo inverted={true} className="h-5" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Creative Learning. Backed by Real-World Technology Experience.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Impara Creative Labs is powered by TechKnots, an R&D-driven technology organization working across IoT, embedded systems, robotics, automation, and emerging AI technologies. This alliance directly shapes practical, project-oriented learning experiences that go far beyond theory.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Learn About Our Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Real R&D Insights, Not Textbook Slides</span>
                </div>
              </div>
            </div>

            {/* Right Pillars (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2.5">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
