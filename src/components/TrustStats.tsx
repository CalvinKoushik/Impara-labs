import React from 'react';
import { Award, Building2, Briefcase, Users, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export const TrustStats: React.FC = () => {
  const getIcon = (index: number) => {
    const iconClass = "w-5 h-5 text-brand-primary";
    switch (index) {
      case 0:
        return <Building2 className={iconClass} />;
      case 1:
        return <Briefcase className={iconClass} />;
      case 2:
        return <Users className={iconClass} />;
      case 3:
        return <Award className={iconClass} />;
      default:
        return <Award className={iconClass} />;
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200/60 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Proven Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Backed by Proven Academic & Industry Impact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Built on years of engineering R&D, university workshops, and hands-on project mentoring across India.
          </p>
        </div>

        {/* Structured Metric Grid with Clean Hairline Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="lg:px-8 first:pl-0 last:pr-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Metric 0{idx + 1}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Credential Clarification */}
        <div className="mt-10 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <Info className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
          <span>
            Impact metrics reflect combined academic workshops, guest lectures, student mentoring, and applied technology research delivered under TechKnots leadership.
          </span>
        </div>
      </div>
    </section>
  );
};
