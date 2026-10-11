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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-brand-pale via-white to-white py-16 sm:py-20 border-b border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Contact Impara Creative Labs
          </h1>

          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed">
            Have questions about our 3-month technology programmes, capstone projects, or admissions? Reach out directly to our team.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-1">Phone Inquiry</h3>
                <p className="text-xs text-brand-body mb-4">
                  Call our admissions and technical advisory team directly.
                </p>
                <p className="text-base font-extrabold text-brand-navy">
                  {siteConfig.contact.phoneFormatted}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-pale hover:bg-blue-100 text-brand-primary text-xs font-bold text-center block transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-1">Email Support</h3>
                <p className="text-xs text-brand-body mb-4">
                  Send us your queries, collaboration proposals, or feedback.
                </p>
                <p className="text-sm font-bold text-brand-navy break-all">
                  {siteConfig.contact.email}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-pale hover:bg-blue-100 text-brand-primary text-xs font-bold text-center block transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-1">WhatsApp Chat</h3>
                <p className="text-xs text-brand-body mb-4">
                  Instant messaging for rapid answers and syllabus downloads.
                </p>
                <p className="text-sm font-bold text-brand-navy">
                  {siteConfig.contact.phoneFormatted}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100">
                <WhatsAppButton
                  variant="primary"
                  size="md"
                  label="Chat on WhatsApp"
                  className="w-full text-xs"
                />
              </div>
            </div>

            {/* Enrol Card */}
            <div className="bg-brand-pale rounded-3xl p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center mb-6 shadow-sm">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy mb-1">Programme Form</h3>
                <p className="text-xs text-brand-body mb-4">
                  Submit your detailed course and batch preferences online.
                </p>
                <p className="text-xs font-bold text-brand-primary">
                  Fast 2-Minute Form
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-brand-border">
                <Link
                  to="/enroll"
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white text-xs font-bold text-center block shadow-md transition-colors"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Knowledge Partner Verification Strip */}
      <section className="py-16 bg-brand-pale/40 border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-8 bg-white rounded-3xl border border-brand-border shadow-card space-y-4">
            <h3 className="text-xl font-extrabold text-brand-navy">
              Official Brand & Knowledge Partnership
            </h3>
            <p className="text-xs sm:text-sm text-brand-body max-w-2xl mx-auto leading-relaxed">
              <strong>Impara Creative Labs</strong> is the public-facing technology education platform. <strong>TechKnots</strong> is its R&D and engineering partner, providing practical project architectures and technical standards.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6">
              <ImparaLogo className="scale-90" />
              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
              <TechKnotsLogo className="scale-90" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
