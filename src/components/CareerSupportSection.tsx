import React from 'react';
import { FolderGit2, Code2, Users, Award, FileCheck2, HelpCircle, ShieldCheck } from 'lucide-react';

export const CareerSupportSection: React.FC = () => {
  const supports = [
    {
      number: "01",
      title: "Portfolio-Ready Projects",
      desc: "Complete 3 tangible, production-style projects (2 Mini Projects + 1 Capstone) with clean GitHub repositories, documentation, and live demos.",
      icon: <FolderGit2 className="w-4 h-4 text-brand-primary" />,
    },
    {
      number: "02",
      title: "Industry Exposure",
      desc: "Work on architectures, frameworks, and engineering workflows derived directly from TechKnots applied R&D operations.",
      icon: <Code2 className="w-4 h-4 text-brand-primary" />,
    },
    {
      number: "03",
      title: "Expert Mentorship",
      desc: "Direct access to practicing engineers and domain specialists for milestone reviews, debugging assistance, and code quality audits.",
      icon: <Users className="w-4 h-4 text-brand-primary" />,
    },
    {
      number: "04",
      title: "Certification",
      desc: "Receive an industry-recognized certificate backed by TechKnots upon successful completion and demonstration of your Capstone Project.",
      icon: <Award className="w-4 h-4 text-brand-primary" />,
    },
    {
      number: "05",
      title: "LinkedIn Profile Support",
      desc: "Optimize your professional online footprint with expert guidance on presenting your technical projects, tech stacks, and capstones.",
      icon: <FileCheck2 className="w-4 h-4 text-brand-primary" />,
    },
    {
      number: "06",
      title: "Mock Interviews",
      desc: "Technical screening simulations, system design walkthroughs, viva drills, and Q&A practice to build real interview confidence.",
      icon: <HelpCircle className="w-4 h-4 text-brand-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Beyond the Classroom
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
            Skills Today. Opportunities Tomorrow.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Technical learning is only the first step. We prepare you with verifiable proof-of-work, presentation skills, and practical experience needed to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supports.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50/80 flex items-center justify-center border border-blue-100">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Career Support Notice */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center shadow-subtle flex items-start sm:items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-slate-600 text-left leading-relaxed">
            <strong className="text-slate-800 font-semibold">Our Commitment to Honest Education:</strong> Impara Creative Labs empowers students through authentic skill building, mentoring, and tangible portfolio creation. We do not make misleading claims of guaranteed placements or passive outcomes. Your career success is powered by your effort, hands-on execution, and genuine project capability.
          </p>
        </div>
      </div>
    </section>
  );
};
