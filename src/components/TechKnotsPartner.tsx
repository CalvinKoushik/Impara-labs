import React from 'react';
import { Cpu, Briefcase, Lightbulb, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { TechKnotsLogo } from './BrandLogos';
import { Link } from 'react-router-dom';

export const TechKnotsPartner: React.FC = () => {
  const pillars = [
    {
      title: "R&D & Technology",
      desc: "Rooted in real engineering research across embedded hardware, IoT gateways, and intelligent systems.",
      icon: <Cpu className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Industry Experience",
      desc: "Proven workflows, industry-standard protocols, and real architectural standards applied to education.",
      icon: <Briefcase className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Technology Innovation",
      desc: "Constantly integrating contemporary toolchains like ESP32-CAM, MQTT cloud brokers, and generative AI.",
      icon: <Lightbulb className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Student Ecosystem",
      desc: "Nurturing 10,000+ engineering students with hands-on project mentoring, technical guidance, and hackathons.",
      icon: <Users2 className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-pale border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#091B78] to-[#0866E8] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle decorative background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200">
                <span>Knowledge Partner:</span>
                <TechKnotsLogo inverted={true} className="scale-90" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Creative Learning. <br className="hidden sm:inline" />
                Backed by Real-World Technology Experience.
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
                Impara Creative Labs is powered by TechKnots, an R&D-driven technology organization working across IoT, embedded systems, robotics, automation, AI and emerging technologies. This connection helps shape practical, project-oriented learning experiences that go beyond theory.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-navy hover:bg-blue-50 font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Learn About Our Partnership</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-2 text-xs text-blue-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Real R&D Insights, Not Textbook-Only Slides</span>
                </div>
              </div>
            </div>

            {/* Right Pillars (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-blue-100/80 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
