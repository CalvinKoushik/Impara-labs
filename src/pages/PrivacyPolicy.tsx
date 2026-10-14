import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 py-14 sm:py-18">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-brand-primary border border-blue-100 mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Transparency</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-1.5">
            Last Updated: October 2026 • Impara Creative Labs | Powered by TechKnots
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-xl bg-white/90 border border-sky-100 shadow-subtle flex items-start gap-3 mb-8 text-xs text-slate-600 leading-relaxed">
          <Info className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <p>
            This privacy policy outlines how Impara Creative Labs collects, uses, and safeguards the information you provide when using our website and submitting programme enquiries. This policy is a template subject to final legal review prior to commercial operations.
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              We adhere strictly to minimal data collection. When you submit an interest or enquiry form on our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Contact details (mobile/WhatsApp number, email address)</li>
              <li>Academic and professional status (student, graduate, working professional)</li>
              <li>Educational background (institution, degree, graduation year)</li>
              <li>Programme and scheduling preferences (weekday/weekend, learning mode)</li>
              <li>Questions or specific learning goals you choose to share</li>
            </ul>
            <p className="font-semibold text-slate-900 pt-1">
              We do NOT collect payment card numbers, banking credentials, or sensitive personal data on this website.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              Information submitted via our forms is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your specific programme inquiries and answering syllabus questions</li>
              <li>Providing consultation regarding batch schedules, prerequisites, and learning modes</li>
              <li>Communicating via phone, WhatsApp, or email per your explicit consent</li>
              <li>Internal academic planning and batch size optimization</li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base font-bold text-slate-900">3. Information Sharing & Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal information to third-party advertisers. Information is accessed only by authorized admissions coordinators and technical educators of Impara Creative Labs and our operational knowledge partner, TechKnots.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-base font-bold text-slate-900">4. Contact & Opt-Out</h2>
            <p>
              You may request deletion or correction of your enquiry data at any time by contacting us directly at {siteConfig.contact.email} or by messaging {siteConfig.contact.phoneFormatted}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
