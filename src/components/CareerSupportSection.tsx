import React from 'react';
import { FolderGit2, Code2, Users, Award, FileCheck2, HelpCircle } from 'lucide-react';

export const CareerSupportSection: React.FC = () => {
  const supports = [
    {
      number: "01",
      title: "Portfolio-Ready Projects",
      desc: "Complete 3 tangible, production-style projects (2 Mini Projects + 1 Capstone) with clean GitHub repositories, documentation, and live demos.",
      icon: <FolderGit2 className="w-5 h-5 text-brand-primary" />,
    },
    {
      number: "02",
      title: "Industry Exposure",
      desc: "Work on architectures, frameworks, and engineering workflows derived directly from TechKnots applied R&D operations.",
      icon: <Code2 className="w-5 h-5 text-brand-primary" />,
    },
    {
      number: "03",
      title: "Expert Mentorship",
      desc: "Direct access to practicing engineers and domain specialists for milestone reviews, debugging assistance, and code quality audits.",
      icon: <Users className="w-5 h-5 text-brand-primary" />,
    },
    {
      number: "04",
      title: "Certification",
      desc: "Receive an industry-recognized certificate backed by TechKnots upon successful completion and demonstration of your Capstone Project.",
      icon: <Award className="w-5 h-5 text-brand-primary" />,
    },
    {
      number: "05",
      title: "LinkedIn Profile Support",
      desc: "Optimize your professional online footprint with expert guidance on presenting your technical projects, tech stacks, and capstones.",
      icon: <FileCheck2 className="w-5 h-5 text-brand-primary" />,
    },
    {
      number: "06",
      title: "Mock Interviews",
      desc: "Technical screening simulations, system design walkthroughs, viva drills, and Q&A practice to build real interview confidence.",
      icon: <HelpCircle className="w-5 h-5 text-brand-primary" />,
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
            Skills Today. Opportunities Tomorrow.
          </h2>
          <p className="text-sm text-brand-body mt-3">
            Technical learning is only the first step. We prepare you with portfolio proof-of-work, presentation skills, and practical experience needed to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supports.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-brand-border">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-brand-primary tracking-widest uppercase">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-brand-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Career Support Notice */}
        <div className="mt-10 max-w-3xl mx-auto p-4 rounded-2xl bg-white border border-brand-border text-center shadow-sm">
          <p className="text-xs text-brand-body leading-relaxed">
            <strong className="text-brand-navy font-bold">Our Commitment to Honest Education:</strong> Impara Creative Labs empowers students through authentic skill building, mentoring, and tangible portfolio creation. We do not make misleading claims of guaranteed placements or passive outcomes. Your career success is powered by your effort, hands-on execution, and genuine project capability.
          </p>
        </div>
      </div>
    </section>
  );
};
