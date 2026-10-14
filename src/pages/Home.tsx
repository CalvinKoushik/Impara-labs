import React from 'react';
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
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200/80">
        {/* Subtle engineering grid backdrop */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Copy, Highlights, CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Top Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-subtle text-xs font-semibold text-slate-700">
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
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <Calendar className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>3-Month Structured</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <Layers className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>2 Mini + 1 Capstone</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <Award className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>Recognized Certificate</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <Sparkles className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>Weekday & Weekend</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                  <Users className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                  <span>1-on-1 Code Reviews</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-brand-primary font-semibold">
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-brand-primary hover:bg-slate-50 text-xs font-semibold transition-colors"
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
                <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md">
                  {/* Poster Graphic Image */}
                  <img
                    src="/assets/program-poster.jpg"
                    alt="Impara Creative Labs 3-Month Industry Supported Program Poster"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="eager"
                  />

                  {/* Overlay Badge */}
                  <div className="p-3.5 bg-slate-900/95 backdrop-blur-md text-white border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-slate-400">Next Upcoming Cohort</p>
                      <p className="text-xs font-bold text-white">Enrollment Interest Open</p>
                    </div>
                    <Link
                      to="/enroll"
                      className="px-3 py-1.5 rounded-md bg-brand-primary hover:bg-brand-primary-hover text-xs font-semibold text-white transition-colors flex items-center gap-1"
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
      </section>

      {/* TRUST & CREDIBILITY (STATISTICS) */}
      <TrustStats />

      {/* THREE FLAGSHIP PROGRAMMES */}
      <section className="py-20 bg-white" id="programs">
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
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 lg:p-14 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-grid-subtle opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Start Building Today</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Your Next Big Idea Starts Here.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
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
                  className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm transition-colors shadow-sm flex items-center gap-1.5"
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

              <p className="text-xs text-slate-400 pt-2">
                Questions before enrolling? Speak with our advisors at {siteConfig.contact.phoneFormatted}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
