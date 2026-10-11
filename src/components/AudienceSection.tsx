import React from 'react';
import { GraduationCap, Briefcase, Compass, Code, Rocket } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      title: "Engineering Students",
      desc: "Gain the tangible hardware, IoT, and software project experience required for academic capstones, hackathons, and campus recruitments.",
      icon: <GraduationCap className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "College Students & Recent Graduates",
      desc: "Bridge the gap between textbook theory and actual industry standards with hands-on labs and mentor-reviewed assignments.",
      icon: <Briefcase className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Beginners Interested in Technology",
      desc: "Structured, beginner-friendly roadmaps that break down microcontrollers, web programming, and AI into clear, manageable steps.",
      icon: <Compass className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Aspiring Developers",
      desc: "Upgrade your skills with contemporary stacks: TypeScript, React, full-stack APIs, and generative AI API integration.",
      icon: <Code className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Future Innovators & Entrepreneurs",
      desc: "Transform your concepts into working prototypes with end-to-end guidance from research engineers and founders.",
      icon: <Rocket className="w-6 h-6 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-brand-pale/40 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Who Can Join?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Designed for Curious Builders at Every Stage
          </h2>
          <p className="text-sm text-brand-body mt-3">
            Whether you are stepping into coding for the first time or leveling up your engineering portfolio, our programmes are engineered for practical growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, index) => (
            <div
              key={aud.title}
              className={`bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-pale flex items-center justify-center mb-4 border border-brand-border">
                  {aud.icon}
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-2">
                  {aud.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
