import React from 'react';
import { Hammer, Network, Milestone, CalendarClock, UserCheck, Briefcase } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Learn by Building",
      desc: "Develop practical skills through projects, live debugging, and guided experimentation rather than passive listening.",
      icon: <Hammer className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Industry-Supported Learning",
      desc: "Benefit directly from TechKnots' applied technology, robotics, and embedded systems R&D ecosystem.",
      icon: <Network className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Structured Capstone Projects",
      desc: "Progress systematically from problem identification to schematic design, implementation, and final demonstration.",
      icon: <Milestone className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Flexible Schedules",
      desc: "Express a preference for weekday evening batches or weekend intensive sessions tailored to your college timetable.",
      icon: <CalendarClock className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Mentor Guidance",
      desc: "Receive 1-on-1 support, technical reviews, architectural advice, and practical direction from experienced engineers.",
      icon: <UserCheck className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Career Readiness",
      desc: "Build a demonstrable project portfolio, a polished technical résumé, and practical interview confidence.",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Why Choose Impara?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Practical Education Designed for Tangible Outcomes
          </h2>
          <p className="text-sm text-brand-body mt-3">
            Everything we do is focused on helping you transform theoretical understanding into working, demonstrable engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-pale border border-brand-border group-hover:border-brand-primary flex items-center justify-center mb-5 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-extrabold text-brand-navy mb-2 group-hover:text-brand-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
