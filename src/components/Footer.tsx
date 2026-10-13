import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { ImparaLogo, TechKnotsLogo } from './BrandLogos';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/60">
          {/* Brand & Partner Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-3 sm:p-3.5 inline-block shadow-md">
              <ImparaLogo className="h-10" />
            </div>

            <p className="text-blue-100 text-sm max-w-sm leading-relaxed">
              <strong className="text-white font-semibold">{siteConfig.tagline}</strong>
              <br />
              {siteConfig.coreDifferentiator}
            </p>

            {/* Knowledge Partner Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-sm space-y-3">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-blue-300">
                Knowledge & R&D Partner
              </div>
              <TechKnotsLogo inverted={true} className="h-8" />
              <p className="text-xs text-blue-200/80 leading-normal">
                Supported by the industry and research capabilities of TechKnots across IoT, embedded engineering, automation, and AI.
              </p>
            </div>
          </div>

          {/* Programmes Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Flagship Programmes
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.programs.map((prog) => (
                <li key={prog.href}>
                  <Link
                    to={prog.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{prog.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/courses"
                  className="text-xs font-semibold text-brand-accent hover:text-white underline underline-offset-4"
                >
                  View All Course Curricula →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-blue-200 hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-blue-200 hover:text-white transition-colors text-xs"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs text-blue-100">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={siteConfig.contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>imparacreativelabs.com</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-bold text-xs shadow-md transition-all mt-2"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-blue-300/80 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} Impara Creative Labs. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Industry-Supported Learning & Capstone Mentoring</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
