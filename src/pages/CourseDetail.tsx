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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-pale via-white to-white py-14 sm:py-20 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-primary text-white shadow-sm">
                  {course.badge}
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  Powered by <strong className="text-brand-navy">TechKnots</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-brand-primary tracking-wide uppercase">
                {course.tagline}
              </p>

              <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-3xl">
                {course.fullDescription}
              </p>

              {/* Meta Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Clock className="w-4 h-4 text-brand-primary" />
                    <span>Duration</span>
                  </div>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">{course.duration}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span>Batches</span>
                  </div>
                  <p className="text-sm font-extrabold text-brand-navy mt-1">{course.schedule}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy">
                    <Layers className="w-4 h-4 text-brand-primary" />
                    <span>Deliverable</span>
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
                  href={brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-brand-border bg-white text-brand-navy hover:text-brand-primary hover:border-brand-primary text-xs sm:text-sm font-bold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-brand-primary" />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>

            {/* Right Summary Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-xl space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                    Course Highlights
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
                    <strong>Batch Scheduling:</strong> Morning, evening, and weekend slots are structured per cohort with live mentor reviews.
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

      {/* 12-Week Structured Roadmap (Page 4 from brochure) */}
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
              Structured into foundational understanding, applied engineering, advanced toolchains, and an end-to-end Capstone Project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.curriculum.map((cMonth) => (
              <div
                key={cMonth.month}
                className="bg-white rounded-3xl p-6 border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-2xl bg-brand-pale border border-brand-border flex items-center justify-center font-black text-brand-primary text-sm">
                      0{cMonth.month}
                    </span>
                    <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-brand-pale text-brand-navy border border-brand-border">
                      {cMonth.weeks}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-brand-navy mb-1 leading-snug">
                    {cMonth.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-primary mb-5">
                    {cMonth.subtitle}
                  </p>

                  <div className="space-y-2">
                    {cMonth.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-1.5"></span>
                        <span className="leading-relaxed">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Phase 0{cMonth.month} Milestones
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
              Industry-standard environments, frameworks, libraries, protocols, and deployment platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.toolsAndTechnologies.map((cat) => (
              <div
                key={cat.category}
                className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm hover:shadow-md transition-shadow"
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

      {/* Skills You'll Build (Page 5 from brochure) */}
      {course.skillsYouBuild && course.skillsYouBuild.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Practical Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
                Skills You'll Build
              </h2>
              <p className="text-sm text-brand-body mt-2">
                Gain hands-on competencies that recruiters look for across production engineering workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.skillsYouBuild.map((skill) => (
                <div
                  key={skill.number}
                  className="p-6 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-brand-navy text-white text-sm font-black flex items-center justify-center shadow-sm">
                        {skill.number}
                      </span>
                      <h3 className="text-base font-extrabold text-brand-navy">
                        {skill.category}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {skill.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-body leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
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
        <section className="py-20 bg-brand-pale/40 border-y border-brand-border" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Hands-On Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mt-2">
                Project-Based Learning
              </h2>
              <p className="text-base font-bold text-brand-primary mt-1">
                2 Mini Projects + 1 Capstone Project
              </p>
              <p className="text-xs sm:text-sm text-brand-body mt-2">
                Every learner completes tangible, production-style projects with live deployments, documentation, and source code.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {course.projects.map((proj, idx) => {
                const isCapstone = idx === course.projects.length - 1;
                return (
                  <div
                    key={proj.number}
                    className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                      isCapstone
                        ? 'bg-gradient-to-b from-brand-navy to-[#071739] text-white border-2 border-brand-primary shadow-2xl relative'
                        : 'bg-white border border-brand-border shadow-card hover:shadow-card-hover'
                    }`}
                  >
                    {isCapstone && (
                      <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand-primary text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                        Culminating Deliverable
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${
                            isCapstone
                              ? 'bg-white/10 text-blue-200 border border-white/20'
                              : 'bg-brand-pale text-brand-navy border border-brand-border'
                          }`}
                        >
                          {proj.name}
                        </span>
                        <span
                          className={`text-xs font-extrabold ${
                            isCapstone ? 'text-blue-300' : 'text-brand-primary'
                          }`}
                        >
                          {proj.timeline}
                        </span>
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-extrabold mb-3 leading-snug ${
                          isCapstone ? 'text-white' : 'text-brand-navy'
                        }`}
                      >
                        {proj.title}
                      </h3>

                      <ul className="space-y-3 mb-6">
                        {proj.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                              isCapstone ? 'text-gray-300' : 'text-brand-body'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
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
                        className={`pt-5 border-t ${
                          isCapstone ? 'border-white/10' : 'border-gray-100'
                        }`}
                      >
                        <p
                          className={`text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
                            isCapstone ? 'text-blue-300' : 'text-gray-400'
                          }`}
                        >
                          Technologies & Tools
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                                isCapstone
                                  ? 'bg-white/10 text-white border border-white/10'
                                  : 'bg-brand-pale text-brand-navy border border-brand-border'
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: Career Opportunities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Career Horizons
                </span>
                <h2 className="text-3xl font-extrabold text-brand-navy mt-1">
                  Career Opportunities
                </h2>
                <p className="text-sm font-bold text-brand-primary mt-1">
                  Skills Today. Opportunities Tomorrow.
                </p>
                <p className="text-xs sm:text-sm text-brand-body mt-2 leading-relaxed">
                  Upon completing this program, you will be prepared for in-demand roles across high-growth engineering domains:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.careerOpportunities.map((role, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-brand-pale/50 border border-brand-border flex items-center gap-3 shadow-sm hover:border-brand-primary transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-brand-navy">
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-primary/10 to-brand-pale border border-brand-primary/20">
                <p className="text-xs text-brand-navy leading-relaxed">
                  <strong>Industry Alignment:</strong> Programs are delivered in technical partnership with <strong>TechKnots</strong>, ensuring modern toolchain relevance and AICTE-aligned internship pathways.
                </p>
              </div>
            </div>

            {/* Right 6 cols: Beyond the Classroom */}
            <div className="lg:col-span-6">
              <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                    Holistic Support
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    Beyond the Classroom
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Everything you need to translate learning into career readiness.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <FolderGit2 className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">01. Portfolio Projects</span>
                    </div>
                    <p className="text-[11px] text-gray-300">3 tangible, production-style projects for resume and GitHub.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">02. Industry Exposure</span>
                    </div>
                    <p className="text-[11px] text-gray-300">Real-world practices derived from TechKnots R&D operations.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">03. Expert Mentorship</span>
                    </div>
                    <p className="text-[11px] text-gray-300">Direct feedback, code reviews, and debugging assistance.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">04. Certification</span>
                    </div>
                    <p className="text-[11px] text-gray-300">Recognized certificate upon successful capstone review.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">05. LinkedIn Support</span>
                    </div>
                    <p className="text-[11px] text-gray-300">Profile positioning to showcase capstones to recruiters.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs font-bold text-white">06. Mock Interviews</span>
                    </div>
                    <p className="text-[11px] text-gray-300">Technical screening simulations and Q&A preparations.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={brochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download full official syllabus brochure (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section (Who This Course Is For) */}
      <section className="py-20 bg-brand-pale/40 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Target Audience
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy mt-1">
                  Who Is This Course For?
                </h3>
              </div>

              <div className="space-y-3">
                {course.audience.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-brand-border shadow-card flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-body font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                  Key Outcomes
                </span>
                <h3 className="text-2xl font-extrabold text-brand-navy mt-1">
                  Learning Outcomes
                </h3>
              </div>

              <div className="space-y-3">
                {course.learningOutcomes.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-brand-border shadow-card flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-brand-body font-medium leading-relaxed">
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
      <section className="py-20 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Real Projects in {course.title}?
          </h2>
          <p className="text-base text-blue-100 max-w-2xl mx-auto">
            Submit your interest for the upcoming cohort. Our program advisor will connect with you to review syllabus details, schedules, and answer your questions.
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
            <a
              href={brochureLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
