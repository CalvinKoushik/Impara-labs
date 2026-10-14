import React from 'react';
import { BookOpen, Hammer, Award, FileCheck2, Rocket } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "LEARN",
      desc: "Understand core foundations and master modern industry tools through applied technical training.",
      icon: <BookOpen className="w-5 h-5 text-brand-primary" />,
    },
    {
      num: "02",
      title: "BUILD",
      desc: "Develop 2 mini projects and 1 end-to-end, functional Capstone Project solving real scenarios.",
      icon: <Hammer className="w-5 h-5 text-brand-primary" />,
    },
    {
      num: "03",
      title: "SHOWCASE",
      desc: "Publish live deployments, test suites, and clean GitHub repositories for recruiter validation.",
      icon: <Award className="w-5 h-5 text-brand-primary" />,
    },
    {
      num: "04",
      title: "PREPARE",
      desc: "Refine technical problem-solving with mock interviews, LinkedIn branding, and resume positioning.",
      icon: <FileCheck2 className="w-5 h-5 text-brand-primary" />,
    },
    {
      num: "05",
      title: "GROW",
      desc: "Gain industry exposure, mentorship, and career opportunities through TechKnots ecosystem support.",
      icon: <Rocket className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Step-by-Step Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            The Impara Learning Journey
          </h2>
          <p className="text-base text-brand-body mt-3">
            A structured pathway from initial curiosity to production-ready prototypes. We don’t just teach technology — we help you build with it.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/4 left-10 right-10 h-1 bg-gradient-to-r from-brand-navy via-brand-primary to-brand-accent -translate-y-1/2 z-0 opacity-20"></div>

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-pale border-2 border-brand-border group-hover:border-brand-primary flex items-center justify-center mb-4 transition-colors">
                {step.icon}
              </div>
              <span className="text-xs font-black text-brand-primary tracking-widest uppercase mb-1">
                Step {step.num}
              </span>
              <h3 className="text-lg font-extrabold text-brand-navy mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-brand-body leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-brand-border">
          {steps.map((step) => (
            <div key={step.num} className="relative flex items-start gap-4 pl-2">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-pale border-2 border-brand-primary flex items-center justify-center z-10 bg-white shadow-sm">
                <span className="text-xs font-black text-brand-navy">{step.num}</span>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-5 border border-brand-border shadow-card">
                <div className="flex items-center gap-2 mb-1">
                  {step.icon}
                  <h3 className="text-base font-extrabold text-brand-navy">{step.title}</h3>
                </div>
                <p className="text-xs text-brand-body leading-relaxed">
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
