import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

interface WhatsAppButtonProps {
  message?: string;
  courseTitle?: string;
  variant?: 'primary' | 'outline' | 'ghost' | 'pill' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  courseTitle,
  variant = 'primary',
  size = 'md',
  className = '',
  label = 'Chat on WhatsApp',
}) => {
  let finalMessage = message || siteConfig.contact.whatsappDefaultText;
  if (courseTitle && !message) {
    finalMessage = `Hi, I want more details about the ${courseTitle} programme at Impara Creative Labs.`;
  }

  const encodedMessage = encodeURIComponent(finalMessage);
  const waUrl = `https://wa.me/919176747268?text=${encodedMessage}`;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 font-medium',
    md: 'px-4 py-2.5 text-sm gap-2 font-semibold',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-bold',
  };

  const variantClasses = {
    primary:
      'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5',
    outline:
      'border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all',
    ghost:
      'text-[#128C7E] hover:bg-emerald-50 transition-colors',
    pill:
      'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors rounded-full',
    white:
      'bg-white text-emerald-700 hover:bg-emerald-50 shadow-md font-bold transition-all',
  };

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (+91 91767 47268)`}
      className={`inline-flex items-center justify-center rounded-xl cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4.5 h-4.5'} fill-current`} />
      <span>{label}</span>
    </a>
  );
};

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const waUrl = siteConfig.contact.whatsappUrl;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip / Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-brand-border p-4 text-left animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 leading-tight">Impara Support</p>
                <p className="text-[10px] text-emerald-600 font-medium">Online | Instant Enquiry</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 text-xs"
              aria-label="Close tooltip"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-brand-body mb-3">
            Have questions about syllabus, batches, or enrollment? Chat directly with our program coordinators.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Impara Creative Labs on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </button>
    </aside>
  );
};
