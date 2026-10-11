import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is Impara Creative Labs?",
    answer: "Impara Creative Labs is a student-focused technology education and career development platform. We bridge the gap between academic theory and industry engineering through practical, hands-on training, structured capstone projects, and real-world mentorship.",
  },
  {
    question: "How is Impara connected to TechKnots?",
    answer: "Impara Creative Labs is powered by TechKnots, an R&D-driven technology organization specializing in IoT, embedded systems, robotics, automation, and AI. TechKnots acts as our knowledge and research partner, bringing practical engineering insights, industrial toolchains, and project standards to our curriculum.",
  },
  {
    question: "How long are the programmes?",
    answer: "All our core flagship programmes are 3-month structured journeys (12 weeks), designed to take learners progressively from core fundamentals in Month 1, through connected systems and advanced integration in Month 2, to a comprehensive Capstone Project in Month 3.",
  },
  {
    question: "Are weekday and weekend batches available?",
    answer: "Yes. We offer both weekday evening batches (tailored for college students and working learners) and intensive weekend batches. You can select your schedule preference when registering your interest on our enrolment form.",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer: "Yes. Our curricula are designed with a graduated learning curve. Month 1 starts from fundamental concepts, safety, and core coding practices before advancing into complex protocols and full-scale architectures. Mentors provide regular support to keep beginners on track.",
  },
  {
    question: "Will students complete a capstone project?",
    answer: "Yes, absolutely! Every student completes 2 mini projects during the early modules, followed by an end-to-end, mentor-reviewed Capstone Project in Month 3. You will document your project, push code to GitHub, and present a working prototype.",
  },
  {
    question: "Are online, offline and hybrid options available?",
    answer: "Yes. Learning modes (online, offline hands-on lab sessions, or hybrid) depend on batch scheduling and student location. You can specify your preferred learning mode or request guidance when submitting your enquiry.",
  },
  {
    question: "How can I get the syllabus and fee details?",
    answer: "You can download our overview brochure directly on the site, submit an enquiry via our Enrolment form (/enroll), or chat with our admissions team on WhatsApp. Our team will share the complete detailed syllabus document, upcoming batch dates, and fee structure.",
  },
  {
    question: "How do I enrol in a programme?",
    answer: "Simply visit our Enrolment Interest page (/enroll), choose your preferred course, schedule, and learning mode, and submit your enquiry. Our program coordinator will connect with you via phone or WhatsApp to verify prerequisites, guide you through batch slots, and finalize your registration.",
  },
  {
    question: "Can I contact the team before enrolling?",
    answer: "Yes, we encourage it! You can speak directly with our program advisors via phone at +91 91767 47268, email us at imparacreativelabs@gmail.com, or send a quick WhatsApp message to ask any questions about course fit, batch timing, or technical requirements.",
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-brand-body mt-3 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-brand-border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'bg-brand-pale text-brand-navy' : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-2 bg-brand-pale/50 text-xs sm:text-sm text-brand-body leading-relaxed border-t border-brand-border/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-pale border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-brand-navy">Still have specific questions?</h4>
            <p className="text-xs text-brand-body">Our technical mentoring team is happy to discuss your background and suggest the best pathway.</p>
          </div>
          <div className="flex items-center gap-3">
            <WhatsAppButton size="sm" label="Chat with Advisor" />
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-bold text-brand-navy border border-brand-border rounded-xl hover:bg-white transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
