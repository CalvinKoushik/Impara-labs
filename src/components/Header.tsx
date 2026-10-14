import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { ImparaLogo, TechKnotsLogo } from './BrandLogos';
import { siteConfig } from '../config/site';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      {/* Top micro-bar showing partnership notice */}
      <div className="bg-slate-50 border-b border-slate-200/70 py-1.5 px-4 text-xs font-medium text-slate-600">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Industry-Supported 3-Month Tech Programmes</span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-xs text-slate-500">
              Powered by <strong className="text-slate-800 font-semibold">TechKnots</strong>
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-slate-600 hover:text-brand-primary transition-colors font-medium hidden md:inline-flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-brand-primary" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-brand-primary border border-blue-100">
              Weekday & Weekend Batches
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ImparaLogo className="h-8 sm:h-10" />
            <div className="hidden lg:block h-6 w-px bg-slate-200"></div>
            <div className="hidden lg:flex items-center">
              <TechKnotsLogo className="h-6" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              to="/courses"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 rounded-lg transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/enroll"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary-hover shadow-sm hover:shadow rounded-lg transition-all"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/enroll"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-primary rounded-lg shadow-sm"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/courses"
              className="w-full py-2.5 text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Explore All Courses
            </Link>
            <Link
              to="/enroll"
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-brand-primary rounded-lg shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Enquire Now / Register Interest</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div>
              <span className="block text-[11px] text-slate-400 mb-1">Knowledge Partner:</span>
              <TechKnotsLogo className="h-5" />
            </div>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
            >
              <Phone className="w-3 h-3" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
