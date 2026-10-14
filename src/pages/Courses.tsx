import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Download, Sparkles, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Courses: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-14 sm:py-18 border-b border-sky-100">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-100 shadow-subtle text-xs font-semibold text-slate-700 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span>3-Month Intensive Engineering Tracks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Industry-Supported Technology Programmes
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Choose a focused 3-month engineering track. Each course is structured with 2 hands-on mini projects, dedicated mentoring, and an end-to-end Capstone Project.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/enroll"
              className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm transition-all"
            >
              Enquire About Upcoming Batches
            </Link>
            <a
              href="/assets/impara-program-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-sky-200 bg-white text-slate-700 hover:text-brand-primary hover:bg-sky-50 font-semibold text-sm transition-all shadow-subtle"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>Download Overview Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} featured={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Overview Matrix */}
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/30 to-sky-50/60 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Direct Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Programme Feature Comparison
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              All courses adhere to our rigorous project-first learning philosophy with equal commitment to hands-on development.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 font-bold">
                <tr>
                  <th className="p-4 sm:p-5 text-xs uppercase tracking-wider text-slate-500">Feature</th>
                  <th className="p-4 sm:p-5">IoT & Smart Automation</th>
                  <th className="p-4 sm:p-5">Full Stack Development with AI</th>
                  <th className="p-4 sm:p-5">Generative AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Duration</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Batch Format</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Projects Completed</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Core Focus</td>
                  <td className="p-4 sm:p-5">Arduino, ESP32, MQTT, Blynk, AWS IoT, ESP32-CAM</td>
                  <td className="p-4 sm:p-5">React, Core Java, Spring Boot, SQL & AI Integration</td>
                  <td className="p-4 sm:p-5">Python, LLMs, Context Engineering, RAG, MCP, LangGraph, CrewAI</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Knowledge Partner</td>
                  <td className="p-4 sm:p-5">TechKnots Industry R&D</td>
                  <td className="p-4 sm:p-5">TechKnots Industry R&D</td>
                  <td className="p-4 sm:p-5">TechKnots Industry R&D</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Certification</td>
                  <td className="p-4 sm:p-5">Industry-Recognized Certificate</td>
                  <td className="p-4 sm:p-5">Industry-Recognized Certificate</td>
                  <td className="p-4 sm:p-5">Industry-Recognized Certificate</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">Action</td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/iot-smart-automation" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/full-stack-ai" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/generative-ai" className="text-brand-primary font-semibold hover:underline inline-flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 to-sky-100/70 text-center border-t border-sky-100">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Need help choosing the right track?</h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            Speak with an educator about your background, career targets, and upcoming batch availability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/enroll"
              className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm transition-all"
            >
              Register Interest for Any Track
            </Link>
            <WhatsAppButton size="md" label="Ask an Advisor on WhatsApp" className="rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};
