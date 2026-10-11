import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import {
  Clock,
  Calendar,
  CheckCircle,
  Layers,
  ArrowRight,
  Download,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { FAQAccordion } from '../components/FAQAccordion';

interface CourseDetailProps {
  customSlug?: string;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ customSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || slug;

  const course = courses.find((c) => c.slug === activeSlug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-pale via-white to-white py-14 sm:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-primary text-white">
                  {course.badge}
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  Powered by <strong className="text-brand-navy">TechKnots</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-brand-primary">
                {course.tagline}
              </p>

              <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-3xl">
                {course.fullDescription}
              </p>

              {/* Meta Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Clock className="w-4 h-4 text-brand-primary" />
                    <span>Duration</span>
                  </div>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">{course.duration}</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span>Batches</span>
                  </div>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">{course.schedule}</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Layers className="w-4 h-4 text-brand-primary" />
                    <span>Project Deliverable</span>
                  </div>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">{course.projectSummary}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/enroll?course=${encodeURIComponent(course.slug)}`}
                  className="px-7 py-3.5 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Enquire for This Programme</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  courseTitle={course.title}
                  size="lg"
                  label="Inquire via WhatsApp"
                />

                <a
                  href="/assets/impara-program-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-brand-border text-brand-navy hover:text-brand-primary text-xs font-bold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Syllabus PDF</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-xl space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Programme Highlights
                  </p>
                  <h3 className="text-xl font-extrabold text-brand-navy mt-1">
                    What's Included
                  </h3>
                </div>

                <div className="space-y-3">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-body">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 bg-brand-pale/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                  <p className="text-xs text-brand-body leading-relaxed mb-3">
                    <strong>Batch Scheduling:</strong> Morning, evening, and weekend slots are structured per cohort to fit your routine.
                  </p>
                  <Link
                    to={`/enroll?course=${encodeURIComponent(course.slug)}`}
                    className="w-full py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-primary text-white text-xs font-bold text-center block transition-colors shadow-md"
                  >
                    Register Your Interest Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum by Month (Phase 5 breakdown) */}
      <section className="py-20 bg-white" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              12-Week Structured Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
              Month-by-Month Curriculum
            </h2>
            <p className="text-sm text-brand-body mt-3">
              Proposed curriculum structured into foundational understanding, advanced integration, and an end-to-end Capstone Project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {course.curriculum.map((cMonth) => (
              <div
                key={cMonth.month}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-pale border border-brand-border flex items-center justify-center font-black text-brand-primary mb-5">
                    0{cMonth.month}
                  </div>
                  <h3 className="text-lg font-extrabold text-brand-navy mb-1">
                    {cMonth.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-primary mb-6">
                    {cMonth.subtitle}
                  </p>

                  <div className="space-y-2.5">
                    {cMonth.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-1.5"></span>
                        <span className="leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Phase 0{cMonth.month} Deliverable
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 italic">
            * Note: Proposed curriculum subject to continuous review and alignment with industry toolchain updates.
          </p>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-brand-pale/50 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Applied Stack
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              Tools & Technologies You Will Master
            </h2>
            <p className="text-xs sm:text-sm text-brand-body mt-2">
              Industry-standard hardware, development environments, protocols, and cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.toolsAndTechnologies.map((cat) => (
              <div
                key={cat.category}
                className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-brand-pale text-brand-navy text-xs font-semibold border border-brand-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Assignments & Capstone Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Practical Assignments (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Hands-On Work
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy mt-1">
                  Practical Assignments
                </h3>
                <p className="text-xs text-brand-body mt-1">
                  Build confidence with progressive assignments tested on real scenarios.
                </p>
              </div>

              <div className="space-y-3">
                {course.practicalAssignments.map((assign, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-brand-border shadow-card flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-body font-medium leading-relaxed">
                      {assign}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Milestones (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Month 3 Culmination
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy mt-1">
                  Capstone Project Milestones
                </h3>
                <p className="text-xs text-brand-body mt-1">
                  Guided progression from specification to demo day and code review.
                </p>
              </div>

              <div className="space-y-3">
                {course.capstoneMilestones.map((ms, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-brand-pale/50 border border-brand-border shadow-card"
                  >
                    <p className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-1">
                      {ms.phase}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                      {ms.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Projects Showcase */}
      <section className="py-20 bg-brand-pale border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Real Ideas to Build
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
              Example Capstone Project Ideas
            </h2>
            <p className="text-xs sm:text-sm text-brand-body mt-2">
              Choose from curated industry scenarios or propose your own innovative idea with mentor validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.exampleProjects.map((proj, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <h3 className="text-base font-extrabold text-brand-navy">
                    {proj.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-body leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Specific FAQs */}
      <FAQAccordion
        faqs={course.faqs}
        title={`${course.title} — Common Questions`}
        subtitle="Frequently asked questions about this track's syllabus, prerequisites, and projects."
      />

      {/* Bottom Conversion Section */}
      <section className="py-20 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Real Projects in {course.title}?
          </h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Submit your interest for the upcoming batch. Our program coordinator will connect with you to review syllabus details and schedules.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={`/enroll?course=${encodeURIComponent(course.slug)}`}
              className="px-8 py-3.5 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white font-extrabold text-base shadow-xl transition-all"
            >
              Enquire for This Course
            </Link>
            <WhatsAppButton
              courseTitle={course.title}
              variant="white"
              size="lg"
              label="Ask on WhatsApp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
