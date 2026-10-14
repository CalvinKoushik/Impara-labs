import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { Link } from 'react-router-dom';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Who are these 3-month programmes designed for?",
    answer: "Our tracks are built for circuit and computer science engineering students (ECE, EEE, CSE, IT, Mechatronics, Mechanical), recent graduates, and ambitious beginners who want tangible, hands-on project experience and portfolio evidence for placements and career growth.",
  },
  {
    question: "What is the role of TechKnots in Impara Creative Labs?",
    answer: "Impara Creative Labs is powered by TechKnots, an established R&D-driven technology and innovation firm. TechKnots provides curriculum validation, applied engineering standards, hardware toolchains, project reviews, and AICTE/NIRF-aligned internship pathways.",
  },
  {
    question: "How do the 2 Mini Projects and 1 Capstone Project work?",
    answer: "Every programme is divided into progressive build milestones: Mini Project 1 (Weeks 1–4) solidifies foundational coding/interfacing; Mini Project 2 (Weeks 5–8) implements connected systems, APIs, or data pipelines; and the Capstone Project (Weeks 9–12) is a full-scale, production-ready solution that you document, deploy, and showcase on GitHub.",
  },
  {
    question: "Are weekday and weekend batch timings available?",
    answer: "Yes. We offer flexible scheduling options including weekday evening batches and weekend intensive cohorts to accommodate college class timetables and semester exams.",
  },
  {
    question: "Are online, offline and hybrid options available?",
    answer: "Yes. Learning modes (online live interactive, offline hands-on lab sessions, or hybrid) depend on cohort scheduling and your location. You can specify your preferred mode when submitting your enquiry.",
  },
  {
    question: "How can I get the syllabus and fee details?",
    answer: "You can download the official course brochure directly on the site, submit an enquiry form (/enroll), or message our team on WhatsApp. Our program advisor will share the complete syllabus document, upcoming cohort dates, and fee structure.",
  },
  {
    question: "How do I enrol in a programme?",
    answer: "Simply visit our Enrolment page (/enroll), choose your preferred course, schedule, and learning mode, and submit your enquiry. Our program coordinator will connect with you via phone or WhatsApp to verify prerequisites, guide you through batch slots, and finalize your registration.",
  },
  {
    question: "Can I contact the team before enrolling?",
    answer: "Yes, we encourage it! You can speak directly with our program advisors via phone at +91 98432 86522, email us at imparacreativelabs@gmail.com, or send a quick WhatsApp message to ask any questions about course fit, batch timing, or technical requirements.",
  },
];

interface FAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our programmes, batches, and project methodology.",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-brand-primary border border-blue-100 mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base transition-colors ${
                    isOpen ? 'bg-slate-50 text-brand-primary' : 'bg-white text-slate-900 hover:bg-slate-50/70'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-brand-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 bg-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Still have specific questions?</h3>
            <p className="text-xs text-slate-600 mt-0.5">Our technical mentoring team is happy to discuss your background and suggest the best pathway.</p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <WhatsAppButton size="sm" label="Chat with Advisor" />
            <Link
              to="/contact"
              className="px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-subtle"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
