import React from 'react';
import { FileText, Info } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50 py-14 sm:py-18">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-brand-primary border border-blue-100 mb-2.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-1.5">
            Last Updated: October 2026 • Impara Creative Labs | Powered by TechKnots
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-xl bg-white/90 border border-sky-100 shadow-subtle flex items-start gap-3 mb-8 text-xs text-slate-600 leading-relaxed">
          <Info className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <p>
            Please read these Terms and Conditions carefully before using our website or submitting programme enquiries. These terms govern your use of the website and clarify the nature of our educational offerings.
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Educational Nature of Programmes</h2>
            <p>
              Impara Creative Labs provides skill development, technical training, hands-on workshops, and project-based educational experiences. Our programmes are designed to build practical engineering capabilities through mentored capstone projects.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Enrolment Enquiry vs. Confirmed Admission</h2>
            <p>
              Submission of an enquiry or registration of interest form on this website does NOT constitute confirmed admission, seat reservation, or a binding contractual agreement. Admission is finalized only upon consultation with our admissions team, fulfillment of prerequisites, verification of batch schedules, and completion of formal enrolment procedures.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. No Guaranteed Placement Claims</h2>
            <p>
              While Impara Creative Labs and TechKnots provide comprehensive career readiness support—including portfolio optimization, GitHub repository reviews, résumé guidance, and mock interviews—we do not guarantee job placement, employment offers, or specific compensation figures. Career outcomes depend entirely on individual dedication, market conditions, and personal project execution.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Intellectual Property & Student Projects</h2>
            <p>
              Course materials, curriculum roadmaps, slide decks, and proprietary lab exercises created by Impara Creative Labs and TechKnots remain the intellectual property of the respective organizations. Original projects and codebases built independently by students during capstone exercises remain the intellectual property of the student authors, unless otherwise agreed for sponsored industry challenges.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. Curriculum Adjustments</h2>
            <p>
              Technology toolchains evolve rapidly. Impara Creative Labs reserves the right to make minor adjustments to specific software versions, development boards, and cloud platforms within a curriculum to ensure students work with the most current and industry-relevant standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">6. Governing Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, with jurisdiction in Chennai, Tamil Nadu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
