import React from 'react';
import { Award, Building2, Briefcase, Users, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export const TrustStats: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-6 h-6 text-brand-primary" />;
      case 1:
        return <Briefcase className="w-6 h-6 text-brand-primary" />;
      case 2:
        return <Users className="w-6 h-6 text-brand-primary" />;
      case 3:
        return <Award className="w-6 h-6 text-brand-primary" />;
      default:
        return <Award className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <section className="py-12 bg-brand-pale border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Proven Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
            Backed by Proven Academic & Industry Impact
          </h2>
          <p className="text-sm text-brand-body mt-2">
            Built on years of engineering R&D, university workshops, and practical project mentoring across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-200 text-center flex flex-col items-center justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {getIcon(idx)}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-brand-body/80 mt-2 leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Credential Clarification */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-brand-body/70 text-center max-w-3xl mx-auto bg-white/70 px-4 py-2 rounded-xl border border-brand-border/60">
          <Info className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
          <span>
            Internship programs are organized in partnership with TechKnots under applicable organizational internship guidelines and academic MoUs.
          </span>
        </div>
      </div>
    </section>
  );
};
