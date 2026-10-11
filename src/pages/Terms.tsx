import React from 'react';
import { FileText, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-brand-body mt-2">
            Last Updated: October 2026 • Impara Creative Labs | Powered by TechKnots
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-brand-pale border border-brand-border flex items-start gap-3 mb-8 text-xs text-brand-body">
          <Info className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <p>
            Please read these Terms and Conditions carefully before using our website or submitting programme enquiries. These terms govern your use of the website and clarify the nature of our educational offerings.
          </p>
        </div>

        <div className="prose prose-blue max-w-none space-y-8 text-xs sm:text-sm text-brand-body leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">1. Educational Nature of Programmes</h2>
            <p>
              Impara Creative Labs provides skill development, technical training, hands-on workshops, and project-based educational experiences. Our programmes are designed to build practical engineering capabilities through mentored capstone projects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">2. Enrolment Enquiry vs. Confirmed Admission</h2>
            <p>
              Submission of an enquiry or registration of interest form on this website does NOT constitute confirmed admission, seat reservation, or a binding contractual agreement. Admission is finalized only upon consultation with our admissions team, fulfillment of prerequisites, verification of batch schedules, and completion of formal enrolment procedures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">3. No Guaranteed Placement Claims</h2>
            <p>
              While Impara Creative Labs and TechKnots provide comprehensive career readiness support—including portfolio optimization, GitHub repository reviews, résumé guidance, and mock interviews—we do not guarantee job placement, employment offers, or specific compensation figures. Career outcomes depend entirely on individual dedication, market conditions, and personal project execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">4. Intellectual Property & Student Projects</h2>
            <p>
              Course materials, curriculum roadmaps, slide decks, and proprietary lab exercises created by Impara Creative Labs and TechKnots remain the intellectual property of the respective organizations. Original projects and codebases built independently by students during capstone exercises remain the intellectual property of the student authors, unless otherwise agreed for sponsored industry challenges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">5. Curriculum Adjustments</h2>
            <p>
              Technology toolchains, library versions, and cloud services evolve rapidly. Impara Creative Labs reserves the right to make technical adjustments or improvements to course roadmaps and tools to keep content contemporary and aligned with industry standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-brand-navy">6. Contact Information</h2>
            <p>
              For legal inquiries or clarifications regarding these terms, reach us at:
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
