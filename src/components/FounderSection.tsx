import React from 'react';
import { Award, GraduationCap, Clock, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

export const FounderSection: React.FC = () => {
  const { founder } = siteConfig;

  return (
    <section className="py-20 bg-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-pale rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Bio & Portrait Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Leadership & Vision</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {founder.name}
              </h2>
              <p className="text-sm font-bold text-brand-primary mt-1">
                {founder.title}
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
                Research Engineer • Technology Innovator • Educator
              </p>

              <blockquote className="mt-6 p-4 rounded-2xl bg-white border border-brand-border text-sm italic text-brand-body leading-relaxed shadow-sm">
                “Impara was built on a simple belief: students learn best by building, experimenting and solving real-world problems. We don’t just teach technology. We help students build with it.”
              </blockquote>

              <div className="mt-6 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-brand-border text-xs font-semibold text-brand-navy">
                  <Clock className="w-3.5 h-3.5 text-brand-primary" />
                  7+ Years R&D Experience
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-brand-border text-xs font-semibold text-brand-navy">
                  <Users className="w-3.5 h-3.5 text-brand-primary" />
                  10,000+ Students Mentored
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-brand-border text-xs font-semibold text-brand-navy">
                  <Award className="w-3.5 h-3.5 text-brand-primary" />
                  IEEE Member (Madras Section)
                </span>
              </div>
            </div>

            {/* Right Academic & R&D Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Academic Credentials */}
              <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-brand-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                    Academic Background & Qualifications
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {founder.academics.map((academic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-body font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span>{academic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research & Innovation Focus */}
              <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-3">
                  Research & Innovation Domains
                </h3>
                <div className="flex flex-wrap gap-2">
                  {founder.focusAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-brand-pale border border-brand-border text-xs font-semibold text-brand-navy"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mentorship and IEEE */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-brand-border text-xs text-brand-body leading-relaxed">
                <p>
                  <strong>Professional Affiliation:</strong> {founder.ieeeAffiliation}. Founder of TechKnots, dedicated to turning academic theoretical engineering into practical commercial and industrial solutions through student incubation and project labs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
