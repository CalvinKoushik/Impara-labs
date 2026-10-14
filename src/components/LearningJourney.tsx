import React from 'react';
import { BookOpen, Hammer, Award, FileCheck2, Rocket } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "LEARN",
      desc: "Understand core foundations and master modern industry tools through applied technical training.",
      icon: <BookOpen className="w-4 h-4 text-brand-primary" />,
    },
    {
      num: "02",
      title: "BUILD",
      desc: "Develop 2 mini projects and 1 end-to-end, functional Capstone Project solving real scenarios.",
      icon: <Hammer className="w-4 h-4 text-brand-primary" />,
    },
    {
      num: "03",
      title: "SHOWCASE",
      desc: "Publish live deployments, test suites, and clean GitHub repositories for recruiter validation.",
      icon: <Award className="w-4 h-4 text-brand-primary" />,
    },
    {
      num: "04",
      title: "PREPARE",
      desc: "Refine technical problem-solving with mock interviews, LinkedIn branding, and resume positioning.",
      icon: <FileCheck2 className="w-4 h-4 text-brand-primary" />,
    },
    {
      num: "05",
      title: "GROW",
      desc: "Gain industry exposure, mentorship, and career opportunities through TechKnots ecosystem support.",
      icon: <Rocket className="w-4 h-4 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Step-by-Step Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            The Impara Learning Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            A structured pathway from foundational theory to production-ready portfolio prototypes.
          </p>
        </div>

        {/* Desktop Horizontal Milestone Flow */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-7 left-12 right-12 h-px bg-slate-200 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 bg-white rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col items-center text-center group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-3 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                {step.icon}
              </div>
              <span className="text-[11px] font-bold text-brand-primary tracking-wider uppercase mb-1">
                Step {step.num}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-px before:bg-slate-200">
          {steps.map((step) => (
            <div key={step.num} className="relative flex items-start gap-3.5 pl-1">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-brand-primary/40 flex items-center justify-center z-10 shadow-sm text-brand-primary font-bold text-xs">
                {step.num}
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
