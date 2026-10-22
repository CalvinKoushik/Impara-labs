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

  const cleanPhone = siteConfig.contact.phone.replace('+', '');
  const encodedMessage = encodeURIComponent(finalMessage);
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 font-medium',
    md: 'px-4 py-2 text-sm gap-2 font-semibold',
    lg: 'px-5 py-2.5 text-sm gap-2 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#128C7E] hover:bg-[#075E54] text-white shadow-sm transition-colors',
    outline:
      'border border-[#128C7E] text-[#128C7E] hover:bg-emerald-50 transition-colors',
    ghost:
      'text-[#128C7E] hover:bg-emerald-50/60 transition-colors',
    pill:
      'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors rounded-full',
    white:
      'bg-white text-emerald-800 hover:bg-slate-50 shadow-sm font-semibold transition-colors',
  };

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => window.fbq?.('track', 'Contact')}
      aria-label={`${label} (${siteConfig.contact.phoneFormatted})`}
      className={`inline-flex items-center justify-center rounded-lg cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-4.5 h-4.5' : 'w-4 h-4'} fill-current`} />
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
        <div className="mb-3 w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-4 text-left animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Impara Support</p>
                <p className="text-[10px] text-emerald-600 font-medium">Online • Instant Enquiry</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 text-xs"
              aria-label="Close tooltip"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Have questions about syllabus, batches, or enrollment? Chat directly with our program coordinators.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.fbq?.('track', 'Contact')}
            className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#128C7E] hover:bg-[#075E54] text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Impara Creative Labs on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#128C7E] hover:bg-[#075E54] text-white rounded-full shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-emerald-200"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current transition-transform" />
      </button>
    </aside>
  );
};
