import React from 'react';
import { Cpu, Briefcase, Lightbulb, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { TechKnotsLogo } from './BrandLogos';
import { Link } from 'react-router-dom';

export const TechKnotsPartner: React.FC = () => {
  const pillars = [
    {
      title: "R&D & Technology",
      desc: "Rooted in engineering research across embedded hardware, IoT gateways, and intelligent systems.",
      icon: <Cpu className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Industry Experience",
      desc: "Workflows, communication protocols, and architectural standards applied directly to student learning.",
      icon: <Briefcase className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Technology Innovation",
      desc: "Constantly integrating contemporary toolchains like ESP32-CAM, MQTT, Spring Boot, and GenAI.",
      icon: <Lightbulb className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Student Ecosystem",
      desc: "Nurturing 10,000+ engineering students with hands-on project mentoring, technical guidance, and hackathons.",
      icon: <Users2 className="w-4 h-4 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-sky-200 shadow-card relative overflow-hidden">
          {/* Subtle technical background grid */}
          <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_50%,transparent_80%)]"></div>

          {/* Soft atmospheric sky glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-sky-50 border border-sky-200/90 text-xs font-semibold text-slate-800 shadow-subtle">
                <span className="text-brand-primary uppercase tracking-wider text-[11px] font-bold">Knowledge & R&D Partner:</span>
                <TechKnotsLogo inverted={false} className="h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Creative Learning. Backed by Real-World Technology Experience.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Impara Creative Labs is powered by TechKnots, an R&D-driven technology organization working across IoT, embedded systems, robotics, automation, and emerging AI technologies. This alliance directly shapes practical, project-oriented learning experiences that go far beyond theory.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <span>Explore Co-Designed Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Real R&D Insights, Not Textbook Slides</span>
                </div>
              </div>
            </div>

            {/* Right Pillars (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-gradient-to-b from-sky-50/70 to-white border border-sky-100 hover:border-sky-200 hover:shadow-subtle transition-all duration-150"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-2.5 text-brand-primary">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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
