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
      {/* 4.1 HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-pale via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-brand-border">
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline, Copy, Highlights, CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Top Partner Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm text-xs font-bold text-brand-navy">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Admissions Open • 3-Month Industry-Supported Programmes</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.1]">
                Learn Technology.{' '}
                <span className="text-gradient block sm:inline">Build What Matters.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl font-normal">
                “Turn your curiosity into real-world skills through industry-supported technology programmes, hands-on projects and guided capstone experiences.”
              </p>

              {/* Value Proposition Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-brand-navy">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-brand-border shadow-sm">
                  <Calendar className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>3-Month Structured</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-brand-border shadow-sm">
                  <Layers className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Hands-on Learning</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-brand-border shadow-sm">
                  <Award className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Capstone Projects</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-brand-border shadow-sm">
                  <Sparkles className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Weekday & Weekend</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-brand-border shadow-sm">
                  <Users className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <span>Industry Mentors</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50 border border-blue-200 shadow-sm text-brand-primary">
                  <Compass className="w-4 h-4 flex-shrink-0" />
                  <span>Powered by TechKnots</span>
                </div>
              </div>

              {/* Buttons & WhatsApp Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/courses"
                  className="px-7 py-3.5 rounded-2xl bg-brand-primary hover:bg-[#0756c4] text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore Our Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  size="lg"
                  label="Talk to Our Team"
                  className="rounded-2xl"
                />

                <a
                  href="/assets/impara-program-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl border border-brand-border text-brand-navy hover:text-brand-primary hover:bg-white text-xs font-bold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Brochure (PDF)</span>
                </a>
              </div>

              {/* Knowledge Partner Pill */}
              <div className="pt-2 flex items-center gap-3 text-xs text-gray-500">
                <span>Knowledge & R&D Partner:</span>
                <TechKnotsLogo className="scale-85 origin-left" />
              </div>
            </div>

            {/* Right Column: Visual Poster & Student Lab Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow backing */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-navy rounded-3xl blur-xl opacity-30"></div>

                <div className="relative rounded-3xl overflow-hidden bg-white border border-brand-border shadow-2xl">
                  {/* Poster Graphic Image */}
                  <img
                    src="/assets/program-poster.jpg"
                    alt="Impara Creative Labs 3-Month Industry Supported Program Poster"
                    className="w-full h-auto object-cover max-h-[520px]"
                    loading="eager"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy/90 backdrop-blur-md text-white border border-white/20 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-blue-200">Next Upcoming Cohort</p>
                      <p className="text-sm font-extrabold text-white">Enrollment Interest Open</p>
                    </div>
                    <Link
                      to="/enroll"
                      className="px-3.5 py-1.5 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-xs font-bold text-white shadow-md transition-all flex items-center gap-1"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 TRUST & CREDIBILITY (STATISTICS) */}
      <TrustStats />

      {/* 4.3 THREE FLAGSHIP PROGRAMMES */}
      <section className="py-20 bg-white" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Flagship Curricula
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
              Three Comprehensive Technology Pathways
            </h2>
            <p className="text-base text-brand-body mt-3">
              Designed from industry requirements, each 3-month programme combines hands-on labs, progressive assignments, and a real capstone portfolio project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <CourseCard key={course.id} course={course} featured={idx === 0} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-primary hover:text-brand-navy underline underline-offset-4"
            >
              <span>Compare all curricula, syllabus details, and practical assignments →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4.4 WHY CHOOSE IMPARA? (BENEFITS) */}
      <BenefitsSection />

      {/* 4.5 LEARNING JOURNEY TIMELINE */}
      <LearningJourney />

      {/* 4.6 POWERED BY TECHKNOTS */}
      <TechKnotsPartner />

      {/* FOUNDER & CEO LEADERSHIP SPOTLIGHT */}
      <FounderSection />

      {/* 4.7 WHO CAN JOIN? */}
      <AudienceSection />

      {/* 4.8 PROJECT AND CAREER SUPPORT */}
      <CareerSupportSection />

      {/* 4.9 FREQUENTLY ASKED QUESTIONS */}
      <FAQAccordion />

      {/* 4.10 FINAL CONVERSION SECTION */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-primary to-brand-accent text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Building Today</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Your Next Big Idea Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
            “Choose your learning path, build practical skills and turn what you learn into something real.”
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/courses"
              className="px-7 py-3.5 rounded-xl bg-white text-brand-navy hover:bg-blue-50 font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/enroll"
              className="px-7 py-3.5 rounded-xl bg-brand-dark hover:bg-black text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppButton
              size="lg"
              variant="white"
              label="Chat on WhatsApp"
            />
          </div>

          <p className="text-xs text-blue-200/80 pt-4">
            Questions before enrolling? Call our advisors at {siteConfig.contact.phoneFormatted}
          </p>
        </div>
      </section>
    </div>
  );
};
