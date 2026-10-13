import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-brand-body mt-2">
            Last Updated: October 2026 • Impara Creative Labs | Powered by TechKnots
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-brand-pale border border-brand-border flex items-start gap-3 mb-8 text-xs text-brand-body">
          <Info className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <p>
            This privacy policy outlines how Impara Creative Labs collects, uses, and safeguards the information you provide when using our website and submitting programme enquiries. This policy is a template subject to final legal review prior to commercial operations.
          </p>
        </div>

        <div className="prose prose-blue max-w-none space-y-8 text-xs sm:text-sm text-brand-body leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">1. Information We Collect</h2>
            <p>
              We adhere strictly to minimal data collection. When you submit an interest or enquiry form on our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Full Name</li>
              <li>Contact details (mobile/WhatsApp number, email address)</li>
              <li>Academic and professional status (student, graduate, working professional)</li>
              <li>Educational background (institution, degree, graduation year)</li>
              <li>Programme and scheduling preferences (weekday/weekend, learning mode)</li>
              <li>Questions or specific learning goals you choose to share</li>
            </ul>
            <p className="font-semibold text-brand-navy">
              We do NOT collect payment card numbers, banking credentials, or sensitive personal data on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">2. How We Use Your Information</h2>
            <p>
              Information submitted via our forms is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Responding to your specific programme inquiries and answering syllabus questions</li>
              <li>Providing consultation regarding batch schedules, prerequisites, and learning modes</li>
              <li>Communicating via phone, WhatsApp, or email per your explicit consent</li>
              <li>Internal academic planning and batch size optimization</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">3. Third-Party Sharing & Hosting</h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketing companies. Form submissions are processed securely through our serverless infrastructure and encrypted cloud endpoints using secure HTTPS connections.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">4. Security Measures</h2>
            <p>
              All interactions on our site are secured via Transport Layer Security (TLS/HTTPS). We employ automated bot filtering and honeypot protection to prevent spam. Internal access to submitted enquiries is restricted to authorized program coordinators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">5. Your Rights and Preferences</h2>
            <p>
              You have the right to request access to the information you submitted, ask for corrections, or request that your contact details be removed from our enquiry database at any time. To do so, email us at <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-primary underline">{siteConfig.contact.email}</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">6. Contact for Privacy Matters</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact:
            </p>
            <p className="font-semibold text-brand-navy">
              Impara Creative Labs<br />
              Email: {siteConfig.contact.email}<br />
              Phone: {siteConfig.contact.phoneFormatted}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
