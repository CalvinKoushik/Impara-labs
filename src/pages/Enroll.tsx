import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { Phone } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { siteConfig } from '../config/site';

export const Enroll: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Admissions & Batch Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1.5">
            Enquire & Register Your Interest
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Take the first step toward building real-world projects. Submit your programme preferences below, and our team will provide full batch schedules, syllabus details, and answer any questions.
          </p>
        </div>

        {/* 3-Step Process Indicator */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-center">
          <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-subtle">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1 border border-blue-100">
              1
            </span>
            <p className="text-xs font-semibold text-slate-900">Submit Enquiry</p>
            <p className="text-[11px] text-slate-500">Select course & schedule</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-subtle">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1 border border-blue-100">
              2
            </span>
            <p className="text-xs font-semibold text-slate-900">Advisor Consultation</p>
            <p className="text-[11px] text-slate-500">Phone or WhatsApp review</p>
          </div>
          <div className="bg-white p-3.5 rounded-lg border border-slate-200/80 shadow-subtle">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1 border border-blue-100">
              3
            </span>
            <p className="text-xs font-semibold text-slate-900">Batch Onboarding</p>
            <p className="text-[11px] text-slate-500">Syllabus & kit access</p>
          </div>
        </div>

        {/* Form Container */}
        <EnquiryForm />

        {/* Quick Assistance Strip */}
        <div className="mt-10 max-w-3xl mx-auto p-5 rounded-xl bg-white border border-slate-200/80 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Prefer to discuss immediately?</h2>
            <p className="text-xs text-slate-500 mt-0.5">Our team is available on phone and WhatsApp to answer fast inquiries.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="px-3.5 py-2 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>Call Us ({siteConfig.contact.phoneFormatted})</span>
            </a>
            <WhatsAppButton size="sm" label="Chat on WhatsApp" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
