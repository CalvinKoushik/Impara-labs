import React from 'react';
import { Award, GraduationCap, Clock, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FounderSection: React.FC = () => {
  const { founder } = siteConfig;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/50 to-white border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border border-sky-100 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Bio & Portrait Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-brand-primary border border-blue-100 mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Leadership & Vision</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {founder.name}
              </h2>
              <p className="text-sm font-semibold text-brand-primary mt-1">
                {founder.title}
              </p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                Research Engineer • Technology Innovator • Educator
              </p>

              <blockquote className="mt-5 p-4 rounded-xl bg-white border-l-2 border-brand-primary border-y border-r border-slate-200 text-xs sm:text-sm italic text-slate-700 leading-relaxed shadow-subtle">
                “Impara was built on a simple belief: students learn best by building, experimenting, and solving real-world problems. We don’t just teach technology. We help students build with it.”
              </blockquote>

              <div className="mt-5 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                  <Clock className="w-3.5 h-3.5 text-brand-primary" />
                  7+ Years R&D Experience
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                  <Users className="w-3.5 h-3.5 text-brand-primary" />
                  10,000+ Students Mentored
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                  <Award className="w-3.5 h-3.5 text-brand-primary" />
                  IEEE Member (Madras Section)
                </span>
              </div>
            </div>

            {/* Right Academic & R&D Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Academic Credentials */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-subtle">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Academic Background & Qualifications
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {founder.academics.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50/80 p-2.5 rounded-lg border border-slate-200/60">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* R&D & Teaching Experience */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-subtle space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Applied R&D & Institutional Experience
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founder.experience}
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-semibold text-slate-500 self-center mr-1">Focus Areas:</span>
                  {founder.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
