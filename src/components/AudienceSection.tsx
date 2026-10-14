import React from 'react';
import { GraduationCap, Briefcase, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      title: "Core & Circuit Engineering Students",
      desc: "ECE, EEE, EIE, Mechatronics, and Mechanical engineers seeking hardware-in-the-loop firmware and IoT prototyping experience.",
      icon: <GraduationCap className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Computer Science & IT Undergrads",
      desc: "Software engineering students wanting to master React, enterprise Core Java, Spring Boot, SQL, and AI workflows.",
      icon: <Code className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Recent College Graduates",
      desc: "Graduates preparing for campus placement drives, technical screenings, and high-demand developer roles.",
      icon: <Briefcase className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Curious Beginners & Builders",
      desc: "Motivated learners who want structured roadmaps starting from foundations to tangible Capstone deployment.",
      icon: <Compass className="w-4 h-4 text-brand-primary" />,
    },
    {
      title: "Future Innovators & Startup Founders",
      desc: "Builders transforming ideas into working hardware/software prototypes with direct mentor guidance.",
      icon: <Rocket className="w-4 h-4 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Prerequisites Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Eligibility & Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight leading-tight">
                Designed for Curious Builders at Every Stage.
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are building your first microcontroller circuit, writing your first Spring Boot REST API, or deploying your first RAG pipeline, our programmes guide you step-by-step.
            </p>

            <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-subtle space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What You Need to Get Started
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Curiosity and commitment to active project building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>A standard laptop for coding, simulation, and IDEs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>No prior advanced industrial experience required</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/enroll"
                  className="text-xs font-semibold text-brand-primary hover:text-brand-navy inline-flex items-center gap-1"
                >
                  <span>Talk to an advisor about batch fit →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {audiences.map((aud) => (
              <div
                key={aud.title}
                className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-subtle flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {aud.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                    {aud.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {aud.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
