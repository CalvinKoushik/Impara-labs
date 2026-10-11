import React from 'react';
import { EnquiryForm } from '../components/EnquiryForm';
import { Phone } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Enroll: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-pale/40 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Admissions & Batch Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight mt-2">
            Enquire & Register Your Interest
          </h1>
          <p className="text-sm sm:text-base text-brand-body mt-3 leading-relaxed">
            Take the first step toward building real-world projects. Submit your programme preferences below, and our team will provide full batch schedules, syllabus details, and answer any questions.
          </p>
        </div>

        {/* 3-Step Process Indicator */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-center">
          <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1">
              1
            </span>
            <p className="text-xs font-bold text-brand-navy">Submit Enquiry</p>
            <p className="text-[11px] text-gray-500">Select course & schedule</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1">
              2
            </span>
            <p className="text-xs font-bold text-brand-navy">Advisor Consultation</p>
            <p className="text-[11px] text-gray-500">Phone or WhatsApp call</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary font-bold text-xs inline-flex items-center justify-center mb-1">
              3
            </span>
            <p className="text-xs font-bold text-brand-navy">Batch Onboarding</p>
            <p className="text-[11px] text-gray-500">Syllabus & kit access</p>
          </div>
        </div>

        {/* Form Container */}
        <EnquiryForm />

        {/* Quick Assistance Strip */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-3xl bg-white border border-brand-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Prefer to discuss immediately?</h4>
            <p className="text-xs text-brand-body">Our team is available on phone and WhatsApp to answer fast inquiries.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919176747268"
              className="px-4 py-2.5 rounded-xl border border-brand-border text-xs font-bold text-brand-navy hover:bg-gray-50 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>Call Us</span>
            </a>
            <WhatsAppButton size="sm" label="Chat on WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};
