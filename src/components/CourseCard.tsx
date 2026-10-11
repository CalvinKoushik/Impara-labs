import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, CheckCircle, ArrowRight, Cpu, Code2, Sparkles } from 'lucide-react';
import type { Course } from '../data/courses';
import { WhatsAppButton } from './WhatsAppButton';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'iot-embedded-systems':
        return <Cpu className="w-6 h-6 text-brand-primary" />;
      case 'full-stack-ai':
        return <Code2 className="w-6 h-6 text-brand-primary" />;
      case 'generative-ai':
        return <Sparkles className="w-6 h-6 text-brand-primary" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <div
      className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        featured
          ? 'border-brand-primary shadow-xl ring-2 ring-brand-primary/20 hover:shadow-2xl'
          : 'border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-accent'
      }`}
    >
      {/* Top Banner & Badge */}
      <div className="p-6 sm:p-8 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-pale flex items-center justify-center border border-brand-border">
            {getCourseIcon(course.id)}
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-pale text-brand-navy border border-brand-border">
            {course.badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight mb-2 group-hover:text-brand-primary transition-colors">
          {course.title}
        </h3>

        <p className="text-sm text-brand-body leading-relaxed mb-6">
          {course.shortDescription}
        </p>

        {/* Program Metadata Pills */}
        <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-gray-100 text-xs text-brand-navy font-semibold mb-6">
          <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
            <Clock className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100">
            <Calendar className="w-4 h-4 text-brand-primary flex-shrink-0" />
            <span className="truncate">{course.schedule}</span>
          </div>
        </div>

        {/* Highlight Checklist */}
        <div className="space-y-2 mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
            Key Topics & Deliverables:
          </span>
          {course.highlights.slice(0, 4).map((highlight, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-brand-body">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Project Tag */}
        <div className="p-3 rounded-xl bg-blue-50/60 border border-brand-border/60 text-xs text-brand-navy font-semibold flex items-center justify-between">
          <span className="text-brand-primary font-bold">Practical Output:</span>
          <span>{course.projectSummary}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-8 pt-4 bg-gray-50/60 border-t border-gray-100 flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={`/courses/${course.slug}`}
            className="w-full py-2.5 px-4 text-center text-xs sm:text-sm font-bold text-brand-navy bg-white hover:bg-gray-100 border border-brand-border rounded-xl transition-all shadow-sm"
          >
            Explore Course
          </Link>
          <Link
            to={`/enroll?course=${encodeURIComponent(course.slug)}`}
            className="w-full py-2.5 px-4 text-center text-xs sm:text-sm font-bold text-white bg-brand-primary hover:bg-[#0756c4] rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <WhatsAppButton
          courseTitle={course.title}
          variant="ghost"
          size="sm"
          label="Quick Inquiry on WhatsApp"
          className="w-full justify-center text-xs font-semibold"
        />
      </div>
    </div>
  );
};
