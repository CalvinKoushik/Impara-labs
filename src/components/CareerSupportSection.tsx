import React from 'react';
import { Target, Users, HelpCircle, FileText, FolderGit2 } from 'lucide-react';

export const CareerSupportSection: React.FC = () => {
  const supports = [
    {
      title: "Capstone Project Guidance",
      desc: "End-to-end milestone reviews to ensure your final project is technically rigorous, fully documented, and ready to impress recruiters.",
      icon: <Target className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Technical Mentoring",
      desc: "Direct access to practicing engineers and researchers to unblock technical hurdles and refine system design choices.",
      icon: <Users className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Mock Interview Sessions",
      desc: "Simulate technical interviews, hardware viva questions, system design walkthroughs, and problem-solving evaluations.",
      icon: <HelpCircle className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "Résumé Development",
      desc: "Structure your résumé to highlight project achievements, measurable engineering outcomes, and hands-on skills.",
      icon: <FileText className="w-5 h-5 text-brand-primary" />,
    },
    {
      title: "LinkedIn Profile Optimization",
      desc: "Showcase your project videos, GitHub repos, and certification milestones to build professional discoverability.",
      icon: (
        <svg className="w-5 h-5 text-brand-primary fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28m1.4 9.74v-8.37H5.06v8.37h2.8Z" />
        </svg>
      ),
    },
    {
      title: "Portfolio & GitHub Guidance",
      desc: "Organize clean codebases, README files, architectural block diagrams, and live demos that stand out during hiring reviews.",
      icon: <FolderGit2 className="w-5 h-5 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-brand-pale border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Beyond the Classroom
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
            Project and Career Readiness Support
          </h2>
          <p className="text-sm text-brand-body mt-3">
            Technical learning is only the first step. We prepare you with the portfolio, presentation skills, and practical experience needed to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supports.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-brand-border">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold text-brand-navy mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-brand-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Career Support Notice */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-brand-border text-center shadow-sm">
          <p className="text-xs text-brand-body leading-relaxed">
            <strong className="text-brand-navy font-bold">Our Commitment to Honest Education:</strong> Impara Creative Labs empowers students through authentic skill building, mentoring, and tangible portfolio creation. We do not make misleading claims of guaranteed placements, unreal salaries, or passive outcomes. Your career success is powered by your effort and project execution.
          </p>
        </div>
      </div>
    </section>
  );
};
