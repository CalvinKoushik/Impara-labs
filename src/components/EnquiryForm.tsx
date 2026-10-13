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

  // Handle URL preselection (e.g., ?course=iot-embedded-systems)
  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      if (courseParam === 'iot-embedded-systems') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'IoT & Embedded Systems' }));
      } else if (courseParam === 'full-stack-ai') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'Full Stack Development with AI' }));
      } else if (courseParam === 'generative-ai') {
        setFormData((prev) => ({ ...prev, preferredCourse: 'Mastering Generative AI' }));
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

    // Indian mobile number validation (10 digits, optional country code)
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

      const responseData = await response.json().catch(() => null);

      if (response.ok && (!responseData || responseData.success !== false)) {
        setIsSuccess(true);
      } else {
        const errorMsg =
          responseData?.error ||
          responseData?.message ||
          `Submission failed with status: ${response.status}`;
        throw new Error(errorMsg);
      }
    } catch (err: unknown) {
      console.error('Enquiry submission error:', err);
      const message =
        err instanceof Error
          ? err.message
          : 'We encountered an issue submitting your enquiry. Please verify your internet connection or reach out directly on WhatsApp.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-card max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-3">
          Enquiry Received!
        </h3>

        <div className="p-4 rounded-2xl bg-brand-pale border border-brand-border text-brand-body text-sm sm:text-base leading-relaxed mb-6 text-left space-y-2">
          <p className="font-semibold text-brand-navy">
            “Thank you for your interest in Impara Creative Labs! Your enquiry has been submitted successfully. Our team will connect with you regarding your selected programme and available batches.”
          </p>
          <p className="text-xs text-brand-body/80">
            Note: This enquiry registers your interest. Batch seat confirmation and syllabus walkthrough will be shared upon direct coordination with our team.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs text-left mb-8 space-y-1">
          <p><strong>Enquirer:</strong> {formData.fullName}</p>
          <p><strong>Selected Programme:</strong> {formData.preferredCourse}</p>
          <p><strong>Mobile:</strong> {formData.mobileNumber}</p>
          <p><strong>Schedule:</strong> {formData.preferredSchedule} ({formData.learningMode})</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-border text-brand-navy font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Explore More Courses
          </Link>
          <WhatsAppButton
            message={`Hi, I just submitted an enrolment enquiry for ${formData.preferredCourse} (${formData.fullName}). Could you please share more batch details?`}
            label="Continue on WhatsApp"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card max-w-3xl mx-auto">
      <div className="border-b border-gray-100 pb-6 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
          <Send className="w-3.5 h-3.5" />
          <span>Student Enquiry & Registration of Interest</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
          Register Your Programme Interest
        </h2>
        <p className="text-xs sm:text-sm text-brand-body mt-2 leading-relaxed">
          Fill out this form to express your interest in our 3-month industry-supported programmes. Our admissions coordinator will reach out with the detailed syllabus, schedule options, and next steps.
        </p>
      </div>

      {submitError && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
        className="space-y-6"
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
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary flex items-center justify-center text-xs">1</span>
            <span>Contact Information</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 mb-1">
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
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                }`}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-bold text-gray-700 mb-1">
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
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.mobileNumber ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                }`}
              />
              {errors.mobileNumber && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">
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
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all ${
                  errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: Course & Schedule Preferences */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary flex items-center justify-center text-xs">2</span>
            <span>Programme & Schedule Preferences</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Course */}
            <div className="sm:col-span-2">
              <label htmlFor="preferredCourse" className="block text-xs font-bold text-gray-700 mb-1">
                Preferred Programme <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredCourse"
                name="preferredCourse"
                required
                value={formData.preferredCourse}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all bg-white ${
                  errors.preferredCourse ? 'border-rose-400 bg-rose-50/30' : 'border-gray-200'
                }`}
              >
                <option value="">-- Select a 3-Month Programme --</option>
                <option value="IoT & Embedded Systems">IoT & Embedded Systems (Hardware, Protocols & Cloud)</option>
                <option value="Full Stack Development with AI">Full Stack Development with AI (Modern Web & LLMs)</option>
                <option value="Mastering Generative AI">Mastering Generative AI (LLMs, RAG & Agents)</option>
                <option value="Not sure yet — need guidance">Not sure yet — need guidance from mentor</option>
              </select>
              {errors.preferredCourse && (
                <p className="text-xs text-rose-600 mt-1 font-medium">{errors.preferredCourse}</p>
              )}
            </div>

            {/* Preferred Schedule */}
            <div>
              <label htmlFor="preferredSchedule" className="block text-xs font-bold text-gray-700 mb-1">
                Preferred Schedule <span className="text-rose-500">*</span>
              </label>
              <select
                id="preferredSchedule"
                name="preferredSchedule"
                required
                value={formData.preferredSchedule}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary bg-white"
              >
                <option value="Flexible">Flexible (Either weekday or weekend)</option>
                <option value="Weekday">Weekday Batches (Evening)</option>
                <option value="Weekend">Weekend Batches (Sat / Sun)</option>
              </select>
            </div>

            {/* Learning Mode */}
            <div>
              <label htmlFor="learningMode" className="block text-xs font-bold text-gray-700 mb-1">
                Learning Mode <span className="text-rose-500">*</span>
              </label>
              <select
                id="learningMode"
                name="learningMode"
                required
                value={formData.learningMode}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary bg-white"
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
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-navy mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-pale text-brand-primary flex items-center justify-center text-xs">3</span>
            <span>Academic & Professional Profile (Optional)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Status */}
            <div>
              <label htmlFor="currentStatus" className="block text-xs font-bold text-gray-700 mb-1">
                Current Status <span className="text-rose-500">*</span>
              </label>
              <select
                id="currentStatus"
                name="currentStatus"
                required
                value={formData.currentStatus}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary bg-white"
              >
                <option value="Student">Current College Student</option>
                <option value="Recent graduate">Recent Graduate</option>
                <option value="Working professional">Working Professional</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* College or Organization */}
            <div>
              <label htmlFor="collegeOrOrganization" className="block text-xs font-bold text-gray-700 mb-1">
                College / Organization
              </label>
              <input
                type="text"
                id="collegeOrOrganization"
                name="collegeOrOrganization"
                value={formData.collegeOrOrganization}
                onChange={handleChange}
                placeholder="e.g. Anna University / Tech Corp"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Degree / Branch */}
            <div>
              <label htmlFor="degree" className="block text-xs font-bold text-gray-700 mb-1">
                Degree / Branch
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="e.g. B.E. EEE / B.Tech CSE"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Graduation Year */}
            <div>
              <label htmlFor="graduationYear" className="block text-xs font-bold text-gray-700 mb-1">
                Year of Study / Graduation
              </label>
              <input
                type="text"
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="e.g. 3rd Year / 2026"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            {/* Goals / Questions */}
            <div className="sm:col-span-2">
              <label htmlFor="learningGoals" className="block text-xs font-bold text-gray-700 mb-1">
                What are your main learning goals or project ideas?
              </label>
              <textarea
                id="learningGoals"
                name="learningGoals"
                rows={3}
                value={formData.learningGoals}
                onChange={handleChange}
                placeholder="Tell us what you hope to build or learn during this 3-month journey..."
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:ring-2 focus:ring-brand-primary"
              ></textarea>
            </div>
          </div>
        </div>

        {/* SECTION 4: Consent & Legal Checkboxes */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          {/* Contact Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="contactConsent"
              name="contactConsent"
              required
              checked={formData.contactConsent}
              onChange={handleChange}
              className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300 mt-1 cursor-pointer"
            />
            <label htmlFor="contactConsent" className="text-xs text-brand-body leading-normal cursor-pointer">
              I consent to being contacted by Impara Creative Labs via WhatsApp, phone, or email regarding this programme enquiry and available batch dates. <span className="text-rose-500">*</span>
            </label>
          </div>
          {errors.contactConsent && (
            <p className="text-xs text-rose-600 font-medium pl-7">{errors.contactConsent}</p>
          )}

          {/* Privacy Policy Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              required
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="w-4 h-4 rounded text-brand-primary focus:ring-brand-primary border-gray-300 mt-1 cursor-pointer"
            />
            <label htmlFor="privacyConsent" className="text-xs text-brand-body leading-normal cursor-pointer">
              I have read and agree to the{' '}
              <Link to="/privacy-policy" className="text-brand-primary font-bold underline">
                Privacy Policy
              </Link>{' '}
              and understand that this submission is an enquiry of interest and does not represent an admission guarantee. <span className="text-rose-500">*</span>
            </label>
          </div>
          {errors.privacyConsent && (
            <p className="text-xs text-rose-600 font-medium pl-7">{errors.privacyConsent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-2xl bg-brand-primary hover:bg-[#0756c4] text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Your Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Programme Enquiry</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-gray-500 mt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Your information is handled strictly for educational consultation. No spam.</span>
          </p>
        </div>
      </form>
    </div>
  );
};
