import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle2, ArrowRight, Cpu, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import type { Course } from '../data/courses';
import { WhatsAppButton } from './WhatsAppButton';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'iot-smart-automation':
      case 'iot-embedded-systems':
        return <Cpu className="w-5 h-5 text-brand-primary" />;
      case 'full-stack-ai':
        return <Code2 className="w-5 h-5 text-brand-primary" />;
      case 'generative-ai':
        return <Sparkles className="w-5 h-5 text-brand-primary" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-primary" />;
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
        featured
          ? 'border-brand-primary/60 shadow-sm hover:shadow-md'
          : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
      }`}
    >
      {/* Top Header Content */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center text-brand-primary">
              {getCourseIcon(course.id)}
            </div>
            <span className="text-xs font-semibold text-slate-500">
              3-Month Track
            </span>
          </div>

          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
            {course.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
          {course.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
          {course.shortDescription}
        </p>

        {/* Project Deliverable Spotlight */}
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 mb-5">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-brand-primary" />
              <span>Project Output</span>
            </span>
            <span className="font-semibold text-brand-primary">
              {course.projectSummary}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-200/60 mt-1.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{course.duration}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{course.schedule}</span>
            </span>
          </div>
        </div>

        {/* Highlight Curriculum Points */}
        <div className="space-y-2 mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
            What You'll Master
          </span>
          {course.highlights.slice(0, 4).map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-3 bg-slate-50/60 border-t border-slate-100 flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-2.5">
          <Link
            to={`/courses/${course.slug}`}
            className="w-full py-2 px-3 text-center text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors shadow-subtle"
          >
            Curriculum
          </Link>
          <Link
            to={`/enroll?course=${encodeURIComponent(course.slug)}`}
            className="w-full py-2 px-3 text-center text-xs font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover rounded-lg transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            <span>Enquire</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <WhatsAppButton
          courseTitle={course.title}
          variant="ghost"
          size="sm"
          label="Inquire via WhatsApp"
          className="w-full justify-center text-xs text-slate-600 hover:text-emerald-700 font-medium py-1"
        />
      </div>
    </div>
  );
};
