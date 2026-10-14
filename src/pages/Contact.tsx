import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { ImparaLogo, TechKnotsLogo } from '../components/BrandLogos';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50">
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-14 sm:py-18 border-b border-sky-100">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-100 shadow-subtle text-xs font-semibold text-slate-700">
            <Mail className="w-3.5 h-3.5 text-brand-primary" />
            <span>Connect with Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Contact Impara Creative Labs
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Have questions about our 3-month technology programmes, capstone projects, or admissions? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-sky-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 border border-sky-100 shadow-subtle hover:border-sky-200 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100 text-brand-primary flex items-center justify-center mb-4">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Phone Inquiry</h3>
                <p className="text-xs text-slate-500 mb-3">
                  Call our admissions and technical advisory team directly.
                </p>
                <p className="text-sm font-bold text-slate-900">
                  {siteConfig.contact.phoneFormatted}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold text-center block transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100 text-brand-primary flex items-center justify-center mb-4">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Email Support</h3>
                <p className="text-xs text-slate-500 mb-3">
                  Send us your queries, collaboration proposals, or feedback.
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 break-all">
                  {siteConfig.contact.email}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold text-center block transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp Chat</h3>
                <p className="text-xs text-slate-500 mb-3">
                  Instant messaging for rapid answers and syllabus downloads.
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  {siteConfig.contact.phoneFormatted}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100">
                <WhatsAppButton
                  variant="primary"
                  size="sm"
                  label="Chat on WhatsApp"
                  className="w-full text-xs font-semibold py-2 rounded-lg"
                />
              </div>
            </div>

            {/* Enrol Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-subtle hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100 text-brand-primary flex items-center justify-center mb-4">
                  <Send className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Programme Form</h3>
                <p className="text-xs text-slate-500 mb-3">
                  Submit your detailed course and batch preferences online.
                </p>
                <p className="text-xs font-semibold text-brand-primary">
                  Fast 2-Minute Form
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-slate-100">
                <Link
                  to="/enroll"
                  className="w-full py-2 px-3 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-semibold text-center block shadow-sm transition-colors"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Knowledge Partner Verification Strip */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-7 bg-slate-50 rounded-xl border border-slate-200/80 shadow-subtle space-y-3">
            <h2 className="text-lg font-bold text-slate-900">
              Official Brand & Knowledge Partnership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              <strong>Impara Creative Labs</strong> is the student-focused technology education initiative. <strong>TechKnots</strong> is its applied R&D and engineering partner, providing practical curriculum standards, toolchains, and industry mentorship.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-6">
              <ImparaLogo className="h-9" />
              <div className="h-6 w-px bg-slate-300 hidden sm:block"></div>
              <TechKnotsLogo className="h-7" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
