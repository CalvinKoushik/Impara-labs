import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { ImparaLogo, TechKnotsLogo } from './BrandLogos';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Partner Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-lg p-2.5 inline-block shadow-sm">
              <ImparaLogo className="h-9" />
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              <strong className="text-white font-semibold">{siteConfig.tagline}</strong>
              <br />
              {siteConfig.coreDifferentiator}
            </p>

            {/* Knowledge Partner Badge */}
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 max-w-sm space-y-2.5">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                Knowledge & R&D Partner
              </div>
              <TechKnotsLogo inverted={true} className="h-7" />
              <p className="text-xs text-slate-400 leading-relaxed">
                Curriculum validation, engineering mentorship, and applied technology standards powered by TechKnots.
              </p>
            </div>
          </div>

          {/* Programmes Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Flagship Programmes
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.programs.map((prog) => (
                <li key={prog.href}>
                  <Link
                    to={prog.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{prog.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/courses"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>View All Course Curricula →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect Directly
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Education Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-slate-400 text-[11px] leading-relaxed">
          <p>
            <strong className="text-slate-300">Responsible Educational Disclaimer:</strong> Impara Creative Labs delivers technical training, milestone project development, and career preparation. We empower students with authentic capabilities and portfolio evidence. We do not offer guaranteed placements or misleading salary promises. Course outcomes rely on student diligence, active participation, and project execution.
          </p>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {currentYear} Impara Creative Labs. All rights reserved. Powered by TechKnots.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
