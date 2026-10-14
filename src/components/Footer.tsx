import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { ImparaLogo, TechKnotsLogo } from './BrandLogos';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#F0F7FF] via-[#E8F1FB] to-[#DEEAF7] text-slate-700 pt-16 pb-12 border-t-2 border-sky-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-200/80">
          {/* Brand & Partner Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block">
              <ImparaLogo className="h-10" />
            </div>

            <p className="text-slate-700 text-sm max-w-sm leading-relaxed">
              <strong className="text-slate-900 font-semibold">{siteConfig.tagline}</strong>
              <br />
              <span className="text-slate-600">{siteConfig.coreDifferentiator}</span>
            </p>

            {/* Knowledge Partner Badge */}
            <div className="p-4 rounded-xl bg-white/85 border border-sky-200 max-w-sm space-y-2.5 shadow-subtle backdrop-blur-sm">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-brand-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                <span>Knowledge & R&D Partner</span>
              </div>
              <TechKnotsLogo inverted={false} className="h-7" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Curriculum validation, engineering mentorship, and applied technology standards powered by TechKnots.
              </p>
            </div>
          </div>

          {/* Programmes Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Flagship Programmes
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.footerLinks.programs.map((prog) => (
                <li key={prog.href}>
                  <Link
                    to={prog.href}
                    className="text-slate-600 hover:text-brand-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{prog.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/courses"
                  className="text-xs font-semibold text-brand-primary hover:text-brand-primary-hover inline-flex items-center gap-1"
                >
                  <span>View All Course Curricula →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-brand-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-600 hover:text-brand-primary transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 hover:text-brand-primary transition-colors text-xs"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Connect Directly
            </h3>
            <div className="space-y-2.5 text-xs text-slate-700">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-brand-primary transition-colors group"
              >
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 text-brand-primary flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-slate-800">{siteConfig.contact.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-brand-primary transition-colors break-all group"
              >
                <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100 text-brand-primary flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500 text-[11px] pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Education Disclaimer */}
        <div className="py-5 border-b border-sky-200/80 text-slate-600 text-[11px] leading-relaxed">
          <p>
            <strong className="text-slate-800 font-semibold">Responsible Educational Disclaimer:</strong> Impara Creative Labs delivers technical training, milestone project development, and career preparation. We empower students with authentic capabilities and portfolio evidence. We do not offer guaranteed placements or misleading salary promises. Course outcomes rely on student diligence, active participation, and project execution.
          </p>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} Impara Creative Labs. All rights reserved. Powered by TechKnots.</p>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
