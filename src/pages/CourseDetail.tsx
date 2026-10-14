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
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  Users,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { FAQAccordion } from '../components/FAQAccordion';

interface CourseDetailProps {
  customSlug?: string;
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ customSlug }) => {
  const { slug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || slug;

  const course = courses.find(
    (c) => c.slug === activeSlug || c.aliases?.includes(activeSlug || '')
  );

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const brochureLink = course.brochureUrl || '/assets/impara-program-brochure.pdf';

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-sky-50/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/50 to-white py-12 sm:py-16 border-b border-sky-100">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white_40%,transparent_80%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded text-xs font-semibold bg-blue-50 text-brand-primary border border-blue-100">
                  {course.badge}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Powered by <strong className="text-slate-800 font-semibold">TechKnots</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                {course.title}
              </h1>

              <p className="text-xs sm:text-sm font-bold text-brand-primary tracking-wide uppercase">
                {course.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {course.fullDescription}
              </p>

              {/* Meta Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Duration</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{course.duration}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Batches</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{course.schedule}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <Layers className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Deliverables</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{course.projectSummary}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={`/enroll?course=${encodeURIComponent(course.slug)}`}
                  className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span>Enquire for This Programme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <WhatsAppButton
                  courseTitle={course.title}
                  size="md"
                  label="Inquire via WhatsApp"
                  className="rounded-lg"
                />

                <a
                  href={brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-brand-primary hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-all shadow-subtle"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download Brochure (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-slate-50/80 rounded-xl p-6 border border-slate-200 shadow-subtle space-y-4">
                <div className="pb-3 border-b border-slate-200">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-primary">
                    Course Highlights
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    What's Included
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    <strong>Batch Scheduling:</strong> Morning, evening, and weekend slots are structured per cohort with live mentor reviews.
                  </p>
                  <Link
                    to={`/enroll?course=${encodeURIComponent(course.slug)}`}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold text-center block transition-colors shadow-sm"
                  >
                    Register Your Interest Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Week Structured Roadmap (Page 4 from brochure) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              12-Week Structured Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Month-by-Month Curriculum
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              Structured into foundational understanding, applied engineering, advanced toolchains, and an end-to-end Capstone Project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.curriculum.map((cMonth) => (
              <div
                key={cMonth.month}
                className="bg-white rounded-xl p-5 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-md bg-blue-50 text-brand-primary border border-blue-100 flex items-center justify-center font-bold text-xs">
                      0{cMonth.month}
                    </span>
                    <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {cMonth.weeks}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                    {cMonth.title}
                  </h3>
                  <p className="text-xs font-medium text-brand-primary mb-4">
                    {cMonth.subtitle}
                  </p>

                  <div className="space-y-2">
                    {cMonth.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-1.5"></span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Phase 0{cMonth.month} Focus
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-6 italic">
            * Note: Proposed curriculum subject to continuous review and alignment with industry toolchain updates.
          </p>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 bg-gradient-to-b from-white via-sky-50/50 to-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Applied Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
              Tools & Technologies You Will Master
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Industry-standard environments, frameworks, libraries, protocols, and deployment platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.toolsAndTechnologies.map((cat) => (
              <div
                key={cat.category}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-subtle"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-3.5 h-3.5 text-brand-primary" />
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700"
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

      {/* Skills You'll Build (Page 5 from brochure) */}
      {course.skillsYouBuild && course.skillsYouBuild.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Practical Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
                Skills You'll Build
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Gain hands-on competencies that recruiters look for across production engineering workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.skillsYouBuild.map((skill) => (
                <div
                  key={skill.number}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm transition-all duration-150 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <span className="w-7 h-7 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        {skill.number}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {skill.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project-Based Learning: 2 Mini Projects + 1 Capstone (Page 6 from brochure) */}
      {course.projects && course.projects.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/80" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Hands-On Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
                Project-Based Learning
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-brand-primary mt-1">
                2 Mini Projects + 1 Capstone Project
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every learner completes tangible, production-style projects with live deployments, documentation, and source code.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {course.projects.map((proj, idx) => {
                const isCapstone = idx === course.projects.length - 1;
                return (
                  <div
                    key={proj.number}
                    className={`rounded-xl p-6 flex flex-col justify-between transition-all ${
                      isCapstone
                        ? 'bg-slate-900 text-white border border-slate-700 shadow-md relative'
                        : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {isCapstone && (
                      <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-primary text-white shadow-sm">
                        Culminating Deliverable
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider ${
                            isCapstone
                              ? 'bg-white/10 text-slate-200 border border-white/15'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {proj.name}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isCapstone ? 'text-blue-300' : 'text-brand-primary'
                          }`}
                        >
                          {proj.timeline}
                        </span>
                      </div>

                      <h3
                        className={`text-base sm:text-lg font-bold mb-3 leading-snug ${
                          isCapstone ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {proj.title}
                      </h3>

                      <ul className="space-y-2.5 mb-5">
                        {proj.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className={`flex items-start gap-2 text-xs leading-relaxed ${
                              isCapstone ? 'text-slate-300' : 'text-slate-600'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                                isCapstone ? 'bg-brand-primary' : 'bg-brand-primary'
                              }`}
                            ></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {proj.technologies && proj.technologies.length > 0 && (
                      <div
                        className={`pt-4 border-t ${
                          isCapstone ? 'border-white/10' : 'border-slate-100'
                        }`}
                      >
                        <p
                          className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${
                            isCapstone ? 'text-slate-400' : 'text-slate-400'
                          }`}
                        >
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                                isCapstone
                                  ? 'bg-white/10 text-slate-200 border border-white/10'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Career Opportunities & Beyond the Classroom (Page 7 from brochure) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 cols: Career Opportunities */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  Career Horizons
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tracking-tight">
                  Career Opportunities
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-brand-primary mt-1">
                  Skills Today. Opportunities Tomorrow.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Upon completing this program, you will be prepared for in-demand roles across high-growth engineering domains:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {course.careerOpportunities.map((role, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 hover:border-slate-300 transition-colors"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-brand-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-100">
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Industry Alignment:</strong> Programs are delivered in technical partnership with <strong>TechKnots</strong>, ensuring modern toolchain relevance and AICTE-aligned internship pathways.
                </p>
              </div>
            </div>

            {/* Right 6 cols: Beyond the Classroom */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-md space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Holistic Support
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Beyond the Classroom
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Everything you need to translate learning into career readiness.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">01. Portfolio Projects</span>
                    </div>
                    <p className="text-[11px] text-slate-400">3 tangible projects for resume and GitHub.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">02. Industry Exposure</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Practices derived from TechKnots R&D operations.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">03. Expert Mentorship</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Direct feedback, code reviews, and debugging assistance.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">04. Certification</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Recognized certificate upon successful capstone review.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">05. LinkedIn Support</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Profile positioning to showcase capstones to recruiters.</p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-brand-primary" />
                      <span className="text-xs font-semibold text-white">06. Mock Interviews</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Technical screening simulations and Q&A preparations.</p>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href={brochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download full official syllabus brochure (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Key Outcomes */}
      <section className="py-16 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  Target Audience
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Who Is This Course For?
                </h3>
              </div>

              <div className="space-y-2.5">
                {course.audience.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded bg-blue-50 text-brand-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  Key Outcomes
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Learning Outcomes
                </h3>
              </div>

              <div className="space-y-2.5">
                {course.learningOutcomes.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-subtle flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Specific FAQs */}
      <FAQAccordion
        faqs={course.faqs}
        title={`${course.title} — Common Questions`}
        subtitle="Frequently asked questions about this track's syllabus, prerequisites, projects, and batch formats."
      />

      {/* Bottom Conversion Section */}
      <section className="py-16 bg-gradient-to-b from-sky-50/50 to-sky-100/70 border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0866E8] via-[#0752BA] to-[#0A1E3C] rounded-2xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl border border-blue-400/30">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Build Real Projects in {course.title}?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Submit your interest for the upcoming cohort. Our program advisor will connect with you to review syllabus details, schedules, and answer your questions.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                to={`/enroll?course=${encodeURIComponent(course.slug)}`}
                className="px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm transition-all"
              >
                Enquire for This Course
              </Link>
              <WhatsAppButton
                courseTitle={course.title}
                variant="white"
                size="md"
                label="Ask on WhatsApp"
                className="rounded-lg"
              />
              <a
                href={brochureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
