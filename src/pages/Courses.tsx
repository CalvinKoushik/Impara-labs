import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { Download, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Courses: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-brand-pale to-white py-16 sm:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3-Month Intensive Engineering Tracks</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Industry-Supported Technology Programmes
          </h1>
          <p className="text-base sm:text-lg text-brand-body max-w-2xl mx-auto mt-4 leading-relaxed">
            Choose a focused 3-month engineering track. Each course is structured with 2 hands-on mini projects, dedicated mentoring, and an end-to-end Capstone Project.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/enroll"
              className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white font-bold text-sm shadow-md transition-all"
            >
              Enquire About Upcoming Batches
            </Link>
            <a
              href="/assets/impara-program-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-border bg-white text-brand-navy hover:text-brand-primary font-bold text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} featured={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Overview Matrix */}
      <section className="py-16 bg-brand-pale/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Programme Feature Comparison
            </h2>
            <p className="text-xs sm:text-sm text-brand-body mt-2">
              All courses adhere to our rigorous project-first learning philosophy with equal commitment to hands-on development.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-brand-border overflow-hidden shadow-card text-left text-xs sm:text-sm">
              <thead className="bg-brand-pale text-brand-navy border-b border-brand-border font-bold">
                <tr>
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5">IoT & Embedded Systems</th>
                  <th className="p-4 sm:p-5">Full Stack Development with AI</th>
                  <th className="p-4 sm:p-5">Mastering Generative AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-brand-body">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Duration</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                  <td className="p-4 sm:p-5">3 Months (12 Weeks)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Batch Format</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                  <td className="p-4 sm:p-5">Weekday & Weekend Batches</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Projects Completed</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                  <td className="p-4 sm:p-5 font-semibold text-brand-primary">2 Mini + 1 Capstone</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Core Focus</td>
                  <td className="p-4 sm:p-5">ESP32, Microcontrollers, MQTT, Cloud Dashboards</td>
                  <td className="p-4 sm:p-5">React, TypeScript, Node.js, REST APIs, AI SDKs</td>
                  <td className="p-4 sm:p-5">LLMs, Prompt Engineering, RAG, AI Agents</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Knowledge Partner</td>
                  <td className="p-4 sm:p-5">TechKnots R&D Labs</td>
                  <td className="p-4 sm:p-5">TechKnots Software Engineering</td>
                  <td className="p-4 sm:p-5">TechKnots AI Innovation Lab</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Certification</td>
                  <td className="p-4 sm:p-5">Course Completion Certificate</td>
                  <td className="p-4 sm:p-5">Course Completion Certificate</td>
                  <td className="p-4 sm:p-5">Course Completion Certificate</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-brand-navy">Action</td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/iot-embedded-systems" className="text-brand-primary font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/full-stack-ai" className="text-brand-primary font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link to="/courses/generative-ai" className="text-brand-primary font-bold hover:underline">
                      View Details →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-brand-navy mb-2">Need help choosing the right track?</h3>
          <p className="text-sm text-brand-body mb-6">
            Speak with an educator about your background, career targets, and upcoming batch availability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/enroll"
              className="px-6 py-3 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white font-bold text-sm shadow-md"
            >
              Register Interest for Any Track
            </Link>
            <WhatsAppButton size="md" label="Ask an Advisor on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
};
