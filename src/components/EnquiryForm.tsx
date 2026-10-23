import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  preferredCourse: string;
  preferredSchedule: string;
  learningMode: string;
  currentStatus: string;
  collegeOrOrganization: string;
  degree: string;
  graduationYear: string;
  learningGoals: string;
  contactConsent: boolean;
  privacyConsent: boolean;
  botField: string;
}

interface FormErrors {
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  preferredCourse?: string;
  preferredSchedule?: string;
  learningMode?: string;
  currentStatus?: string;
  contactConsent?: string;
  privacyConsent?: string;
  general?: string;
}

const initialFormData: FormData = {
  fullName: '',
  mobileNumber: '',
  email: '',
  preferredCourse: '',
  preferredSchedule: 'Flexible',
  learningMode: 'Need guidance',
  currentStatus: 'Student',
  collegeOrOrganization: '',
  degree: '',
  graduationYear: '',
  learningGoals: '',
  contactConsent: false,
  privacyConsent: false,
  botField: '',
};

export const EnquiryForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Handle URL preselection
  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      if (courseParam === 'iot-embedded-systems' || courseParam === 'iot-smart-automation') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'IoT & Smart Automation' }));
      } else if (courseParam === 'full-stack-ai' || courseParam === 'full-stack-development') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'Full Stack Development with AI' }));
      } else if (courseParam === 'generative-ai') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'Generative AI' }));
      } else {
        setFormData((prev) => ({ ...prev, preferredCourse: courseParam }));
      }
    }
  }, [searchParams]);

  // Validation helper
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    // Indian mobile number validation
    const cleanPhone = formData.mobileNumber.replace(/[\s\-+]/g, '');
    const indianMobileRegex = /^(?:91)?[6-9]\d{9}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Please enter your mobile number.';
    } else if (!indianMobileRegex.test(cleanPhone)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredCourse) {
      newErrors.preferredCourse = 'Please select a programme or choose "Need guidance".';
    }

    if (!formData.preferredSchedule) {
      newErrors.preferredSchedule = 'Please choose your preferred schedule.';
    }

    if (!formData.learningMode) {
      newErrors.learningMode = 'Please select your preferred learning mode.';
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = 'Please select your current status.';
    }

    if (!formData.contactConsent) {
      newErrors.contactConsent = 'You must give consent to be contacted regarding your enquiry.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the Privacy Policy.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam honeypot trap
    if (formData.botField) {
      setIsSuccess(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate unique event ID for Meta deduplication (Pixel + Conversions API)
      const eventId =
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

      // Helper to extract Meta browser cookies if available
      const getCookie = (name: string) => {
        if (typeof document === 'undefined') return undefined;
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : undefined;
      };

      const payload = {
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        email: formData.email.trim(),
        preferredCourse: formData.preferredCourse,
        preferredSchedule: formData.preferredSchedule,
        learningMode: formData.learningMode,
        currentStatus: formData.currentStatus,
        collegeOrOrganization: formData.collegeOrOrganization.trim(),
        degree: formData.degree.trim(),
        graduationYear: formData.graduationYear.trim(),
        learningGoals: formData.learningGoals.trim(),
        contactConsent: formData.contactConsent,
        privacyConsent: formData.privacyConsent,
        botField: formData.botField,
        eventId,
        fbp: getCookie('_fbp'),
        fbc: getCookie('_fbc'),
      };

      const endpoint = import.meta.env.VITE_SUBMIT_API_URL || '/api/submit-enquiry';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit enquiry. Please try again.';
        try {
          const errData = await response.json();
          if (errData && errData.message) {
            errorMsg = errData.message;
          }
        } catch (_) {
          // ignore json parse error
        }
        throw new Error(errorMsg);
      }

      // Meta Pixel Lead tracking with deduplication eventID
      window.fbq?.(
        'track',
        'Lead',
        { content_name: formData.preferredCourse },
        { eventID: eventId }
      );

      setIsSuccess(true);
    } catch (err: unknown) {
      const error = err as Error;
      setSubmitError(
        error.message || 'There was an issue submitting your form. Please reach out to us directly on WhatsApp or phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200/90 shadow-sm max-w-2xl mx-auto text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Enquiry Received Successfully!
        </h2>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our admissions coordinator will review your preferences and reach out shortly via WhatsApp or phone with complete batch dates, fee structure, and syllabus details.
        </p>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-left mb-6 space-y-1.5 text-slate-700">
          <p><strong>Enquirer:</strong> {formData.fullName}</p>
          <p><strong>Selected Programme:</strong> {formData.preferredCourse}</p>
          <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
          <p><strong>Schedule:</strong> {formData.preferredSchedule} ({formData.learningMode})</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/courses"
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors shadow-subtle"
          >
            Explore More Courses
          </Link>
          <WhatsAppButton
            message={`Hi, I just submitted an enrolment enquiry for ${formData.preferredCourse} (${formData.fullName}). Could you please share more batch details?`}
            label="Continue on WhatsApp"
            size="md"
            className="w-full sm:w-auto rounded-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 rounded-2xl p-6 sm:p-9 border border-sky-100 shadow-card max-w-3xl mx-auto backdrop-blur-sm">
      <div className="border-b border-slate-100 pb-5 mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-50 text-brand-primary border border-blue-100 mb-2">
          <Send className="w-3 h-3" />
          <span>Student Enquiry & Registration of Interest</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Register Your Programme Interest
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Fill out this form to express your interest in our 3-month industry-supported programmes. Our admissions coordinator will reach out with the detailed syllabus, schedule options, and next steps.
        </p>
      </div>

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{submitError}</p>
            <div className="mt-2">
              <WhatsAppButton size="sm" variant="outline" label="Chat with Admissions via WhatsApp" />
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {/* Anti-spam honeypot */}
        <p className="hidden" aria-hidden="true">
          <label>
            Leave this empty:{' '}
            <input
              type="text"
              name="botField"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botField}
              onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
            />
          </label>
        </p>

        {/* SECTION 1: Personal Details */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary border border-blue-100 flex items-center justify-center text-xs font-bold">1</span>
            <span>Contact Information</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number (WhatsApp preferred) <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: Course & Schedule Preferences */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary border border-blue-100 flex items-center justify-center text-xs font-bold">2</span>
            <span>Programme & Schedule Preferences</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Preferred Course */}
            <div className="sm:col-span-2">
              <label htmlFor="preferredCourse" className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Programme <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredCourse"
                name="preferredCourse"
                required
                value={formData.preferredCourse}
                onChange={handleChange}
                className={`w-full px-3.5 py-2 rounded-lg border text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all bg-white ${
                  errors.preferredCourse ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                }`}
              >
                <option value="">-- Select a 3-Month Programme --</option>
                <option value="IoT & Smart Automation">IoT & Smart Automation (Hardware, Protocols & Cloud)</option>
                <option value="Full Stack Development with AI">Full Stack Development with AI (React, Java Spring Boot & AI)</option>
                <option value="Generative AI">Generative AI (LLMs, RAG, MCP & Agents)</option>
                <option value="Not sure yet — need guidance">Not sure yet — need guidance from mentor</option>
              </select>
              {errors.preferredCourse && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.preferredCourse}</p>
              )}
            </div>

            {/* Preferred Schedule */}
            <div>
              <label htmlFor="preferredSchedule" className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Schedule <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredSchedule"
                name="preferredSchedule"
                required
                value={formData.preferredSchedule}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary bg-white"
              >
                <option value="Flexible">Flexible (Either weekday or weekend)</option>
                <option value="Weekday">Weekday Batches (Evening)</option>
                <option value="Weekend">Weekend Batches (Sat / Sun)</option>
              </select>
            </div>

            {/* Learning Mode */}
            <div>
              <label htmlFor="learningMode" className="block text-xs font-semibold text-slate-700 mb-1">
                Learning Mode <span className="text-rose-500">*</span>
              </label>
              <select
                id="learningMode"
                name="learningMode"
                required
                value={formData.learningMode}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary bg-white"
              >
                <option value="Need guidance">Need guidance on best mode</option>
                <option value="Online">Online Interactive Sessions</option>
                <option value="Offline">Offline Lab / Classroom (Chennai)</option>
                <option value="Hybrid">Hybrid (Online + Weekend Lab)</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 3: Academic / Background (Optional) */}
        <div className="pt-4 border-t border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-blue-50 text-brand-primary border border-blue-100 flex items-center justify-center text-xs font-bold">3</span>
            <span>Academic & Professional Profile (Optional)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Current Status */}
            <div>
              <label htmlFor="currentStatus" className="block text-xs font-semibold text-slate-700 mb-1">
                Current Status <span className="text-rose-500">*</span>
              </label>
              <select
                id="currentStatus"
                name="currentStatus"
                required
                value={formData.currentStatus}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary bg-white"
              >
                <option value="Student">Current College Student</option>
                <option value="Recent graduate">Recent Graduate</option>
                <option value="Working professional">Working Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* College or Organization */}
            <div>
              <label htmlFor="collegeOrOrganization" className="block text-xs font-semibold text-slate-700 mb-1">
                College / Organization
              </label>
              <input
                type="text"
                id="collegeOrOrganization"
                name="collegeOrOrganization"
                value={formData.collegeOrOrganization}
                onChange={handleChange}
                placeholder="e.g. Anna University / Tech Corp"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Degree / Branch */}
            <div>
              <label htmlFor="degree" className="block text-xs font-semibold text-slate-700 mb-1">
                Degree / Branch
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g. B.E. EEE / B.Tech CSE"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Graduation Year */}
            <div>
              <label htmlFor="graduationYear" className="block text-xs font-semibold text-slate-700 mb-1">
                Year of Study / Graduation
              </label>
              <input
                type="text"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="e.g. 3rd Year / 2026"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Goals / Questions */}
            <div className="sm:col-span-2">
              <label htmlFor="learningGoals" className="block text-xs font-semibold text-slate-700 mb-1">
                What are your main learning goals or project ideas?
              </label>
              <textarea
                id="learningGoals"
                name="learningGoals"
                rows={3}
                value={formData.learningGoals}
                onChange={handleChange}
                placeholder="Tell us what you hope to build or learn during this 3-month journey..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-brand-primary"
              ></textarea>
            </div>
          </div>
        </div>

        {/* SECTION 4: Consent & Legal Checkboxes */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          {/* Contact Consent */}
          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              id="contactConsent"
              name="contactConsent"
              required
              checked={formData.contactConsent}
              onChange={handleChange}
              className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-slate-300 mt-0.5 cursor-pointer"
            />
            <label htmlFor="contactConsent" className="text-xs text-slate-600 leading-normal cursor-pointer">
              I consent to being contacted by Impara Creative Labs via WhatsApp, phone, or email regarding this programme enquiry and available batch dates. <span className="text-rose-500">*</span>
            </label>
          </div>
          {errors.contactConsent && (
            <p className="text-xs text-rose-600 font-medium pl-6">{errors.contactConsent}</p>
          )}

          {/* Privacy Policy Consent */}
          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              required
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-slate-300 mt-0.5 cursor-pointer"
            />
            <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-normal cursor-pointer">
              I have read and agree to the{' '}
              <Link to="/privacy-policy" className="text-brand-primary font-semibold underline">
                Privacy Policy
              </Link>{' '}
              and understand that this submission is an enquiry of interest and does not represent an admission guarantee. <span className="text-rose-500">*</span>
            </label>
          </div>
          {errors.privacyConsent && (
            <p className="text-xs text-rose-600 font-medium pl-6">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-5 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-sm shadow-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Your Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Programme Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Your information is handled strictly for educational consultation. No spam.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
