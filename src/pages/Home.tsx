import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  Award,
  Users,
  Compass,
  Download,
  Maximize2,
  ZoomIn,
  X,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { TrustStats } from '../components/TrustStats';
import { BenefitsSection } from '../components/BenefitsSection';
import { LearningJourney } from '../components/LearningJourney';
import { TechKnotsPartner } from '../components/TechKnotsPartner';
import { FounderSection } from '../components/FounderSection';
import { AudienceSection } from '../components/AudienceSection';
import { CareerSupportSection } from '../components/CareerSupportSection';
import { FAQAccordion } from '../components/FAQAccordion';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { TechKnotsLogo } from '../components/BrandLogos';

export const Home: React.FC = () => {
  const [posterModalOpen, setPosterModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPosterModalOpen(false);
    };
    if (posterModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [posterModalOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-sky-100">
        {/* Subtle engineering grid backdrop */}
        <div className="absolute inset-0 bg-grid-subtle opacity-35 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Copy, Highlights, CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Top Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-sky-100 shadow-subtle text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Admissions Open • 3-Month Industry-Supported Programmes</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                Learn Technology.{' '}
                <span className="text-brand-primary block sm:inline">Build What Matters.</span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Turn your curiosity into real-world skills through industry-supported technology programmes, hands-on lab projects, and guided capstone experiences.
              </p>

              {/* Value Proposition Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-sky-100/90 shadow-subtle">
                  <Calendar className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>3-Month Structured</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-sky-100/90 shadow-subtle">
                  <Layers className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>2 Mini + 1 Capstone</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-sky-100/90 shadow-subtle">
                  <Award className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>Recognized Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-sky-100/90 shadow-subtle">
                  <Sparkles className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>Weekday & Weekend</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-sky-100/90 shadow-subtle">
                  <Users className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>1-on-1 Code Reviews</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/80 border border-blue-100 text-brand-primary font-semibold shadow-subtle">
                  <Compass className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Powered by TechKnots</span>
                </div>
              </div>

              {/* Buttons & WhatsApp Action */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/courses"
                  className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <WhatsAppButton
                  size="md"
                  label="Talk to Our Team"
                  className="rounded-lg"
                />

                <a
                  href="/assets/impara-program-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-sky-200/90 bg-white/80 text-slate-700 hover:text-brand-primary hover:bg-sky-50 text-xs font-semibold transition-colors shadow-subtle"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Brochure (PDF)</span>
                </a>
              </div>

              {/* Knowledge Partner Pill */}
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <span>Knowledge & R&D Partner:</span>
                <TechKnotsLogo className="h-6" />
              </div>
            </div>

            {/* Right Column: Visual Poster & Student Lab Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-sky-100 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  {/* Expand button badge */}
                  <button
                    type="button"
                    onClick={() => setPosterModalOpen(true)}
                    className="absolute top-3 right-3 z-10 px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-950 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-md transition-all group-hover:scale-105"
                    title="Click to view full poster"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Full Poster</span>
                  </button>

                  {/* Poster Graphic Image - displayed fully with natural aspect ratio and zero clipping */}
                  <div
                    onClick={() => setPosterModalOpen(true)}
                    className="cursor-pointer overflow-hidden bg-sky-50/40 relative"
                    title="Click to view full poster"
                  >
                    <img
                      src="/assets/program-poster.jpg"
                      alt="Impara Creative Labs 3-Month Industry Supported Program Poster"
                      className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="p-3.5 bg-gradient-to-r from-sky-50 via-white to-blue-50 text-slate-800 border-t border-sky-100 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">Next Upcoming Cohort</p>
                      <p className="text-xs font-bold text-slate-900">Enrollment Interest Open</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPosterModalOpen(true)}
                        className="px-2.5 py-1.5 rounded-lg border border-sky-200 hover:bg-sky-50 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1"
                        title="Click to expand complete poster"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-brand-primary" />
                        <span className="hidden sm:inline">Expand</span>
                      </button>
                      <Link
                        to="/enroll"
                        className="px-3 py-1.5 rounded-md bg-brand-primary hover:bg-brand-primary-hover text-xs font-semibold text-white transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY (STATISTICS) */}
      <TrustStats />

      {/* THREE FLAGSHIP PROGRAMMES */}
      <section className="py-20 bg-gradient-to-b from-white via-sky-50/40 to-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Flagship Curricula
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Three Comprehensive Technology Pathways
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Designed directly from industry requirements, each 3-month programme combines hands-on labs, progressive assignments, and a real capstone portfolio project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} featured={idx === 0} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary hover:text-slate-900 transition-colors"
            >
              <span>Compare all curricula, syllabus details, and practical assignments →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE IMPARA? (BENEFITS) */}
      <BenefitsSection />

      {/* LEARNING JOURNEY TIMELINE */}
      <LearningJourney />

      {/* POWERED BY TECHKNOTS */}
      <TechKnotsPartner />

      {/* FOUNDER & CEO LEADERSHIP SPOTLIGHT */}
      <FounderSection />

      {/* WHO CAN JOIN? */}
      <AudienceSection />

      {/* PROJECT AND CAREER SUPPORT */}
      <CareerSupportSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion />

      {/* FINAL CONVERSION SECTION */}
      <section className="py-16 bg-gradient-to-b from-sky-50/60 to-[#E8F1FB] border-t border-sky-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0866E8] via-[#0752BA] to-[#0A1E3C] rounded-2xl p-8 sm:p-12 lg:p-14 text-white text-center relative overflow-hidden shadow-xl border border-blue-400/30">
            <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                <span>Start Building Today</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Your Next Big Idea Starts Here.
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                Choose your learning path, build practical engineering skills, and graduate with 3 tangible projects to prove your capability.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/courses"
                  className="px-5 py-2.5 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-colors shadow-sm"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/enroll"
                  className="px-5 py-2.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm transition-colors shadow-sm flex items-center gap-1.5"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <WhatsAppButton
                  size="md"
                  variant="white"
                  label="Chat on WhatsApp"
                  className="rounded-lg"
                />
              </div>

              <p className="text-xs text-blue-100/80 pt-2">
                Questions before enrolling? Speak with our advisors at {siteConfig.contact.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL POSTER LIGHTBOX MODAL */}
      {posterModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-opacity"
          onClick={() => setPosterModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-sky-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 px-4 bg-gradient-to-r from-sky-50 via-white to-blue-50 border-b border-sky-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Impara Creative Labs • Programme Poster
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 text-brand-primary font-semibold hidden sm:inline-block">
                  3-Month Industry Supported
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/assets/program-poster.jpg"
                  download="impara-program-poster.jpg"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-100 hover:bg-sky-200 text-brand-primary text-xs font-semibold transition-colors"
                  title="Download Poster"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPosterModalOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-200/80 text-slate-600 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="overflow-auto flex-1 p-2 sm:p-4 bg-slate-100/60 flex justify-center items-center">
              <img
                src="/assets/program-poster.jpg"
                alt="Impara Creative Labs Full Programme Poster"
                className="max-h-[80vh] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
