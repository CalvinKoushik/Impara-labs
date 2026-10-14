import React from 'react';
import { Hammer, Network, Milestone, CalendarClock, UserCheck, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Learn by Building",
      desc: "Develop practical skills through hands-on labs, live debugging, and guided experimentation rather than passive lectures.",
      icon: <Hammer className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Industry-Supported Curriculum",
      desc: "Built on TechKnots' applied technology, robotics, and embedded systems R&D operations.",
      icon: <Network className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "3 Milestone Projects",
      desc: "Every student builds 2 Mini Projects and 1 end-to-end Capstone Project with verifiable source code.",
      icon: <Milestone className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Flexible Cohorts",
      desc: "Choose weekday evening or weekend intensive batches tailored to university and work schedules.",
      icon: <CalendarClock className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Direct Mentor Reviews",
      desc: "Receive 1-on-1 technical reviews, schematic audits, and debugging direction from practicing engineers.",
      icon: <UserCheck className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Career & Portfolio Readiness",
      desc: "Graduate with production-style GitHub repositories, structured documentation, and interview preparation.",
      icon: <Briefcase className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Editorial Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                The Impara Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-2 tracking-tight leading-tight">
                Practical Education Built for Tangible Proof of Work.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Traditional education stops at textbook theory and chalkboards. Impara bridges the gap between academic concepts and real engineering execution.
            </p>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                The Core Standard:
              </p>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Hardware & software in-the-loop training</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Zero passive slide reading; 100% applied implementation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Verifiable credentials & portfolio review with recruiters</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="text-xs font-semibold text-brand-primary hover:text-brand-navy inline-flex items-center gap-1 transition-colors"
              >
                <span>Read our founding story and technical philosophy →</span>
              </Link>
            </div>
          </div>

          {/* Right Structured Feature Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50/80 flex items-center justify-center border border-blue-100">
                      {benefit.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.desc}
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
