import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { ImparaLogo, TechKnotsLogo } from './BrandLogos';
import { siteConfig } from '../config/site';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      {/* Top micro-bar showing partnership notice */}
      <div className="bg-brand-pale border-b border-brand-border/60 py-1.5 px-4 text-xs font-medium text-brand-body">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-brand-navy font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Industry-Supported 3-Month Tech Programmes</span>
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="hidden sm:inline text-xs text-gray-600">
              Powered by <strong className="text-brand-navy">TechKnots</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919176747268"
              className="text-brand-navy hover:text-brand-primary transition-colors font-medium hidden md:inline"
            >
              📞 {siteConfig.contact.phoneFormatted}
            </a>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-brand-primary">
              Weekday & Weekend Batches
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-4">
            <ImparaLogo />
            <div className="hidden lg:block h-6 w-px bg-gray-200"></div>
            <div className="hidden lg:flex items-center text-xs text-gray-500">
              <TechKnotsLogo className="scale-90" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-pale'
                      : 'text-brand-body hover:text-brand-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/courses"
              className="px-4 py-2 text-sm font-semibold text-brand-navy hover:text-brand-primary border border-brand-border hover:border-brand-primary rounded-xl transition-all"
            >
              Explore Courses
            </Link>
            <Link
              to="/enroll"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-bold text-white bg-brand-primary hover:bg-[#0756c4] shadow-md hover:shadow-lg rounded-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/enroll"
              className="px-3 py-1.5 text-xs font-bold text-white bg-brand-primary rounded-lg shadow-sm"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-brand-body hover:text-brand-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-pale'
                      : 'text-brand-body hover:text-brand-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              to="/courses"
              className="w-full py-2.5 text-center text-sm font-semibold text-brand-navy border border-brand-border rounded-xl"
            >
              Explore All Courses
            </Link>
            <Link
              to="/enroll"
              className="w-full py-3 text-center text-sm font-bold text-white bg-brand-primary rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Enquire Now / Register Interest</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-brand-body">
            <div>
              <span className="block text-[11px] text-gray-500">Knowledge Partner:</span>
              <TechKnotsLogo className="scale-75 origin-left" />
            </div>
            <a
              href="tel:+919176747268"
              className="text-xs font-bold text-brand-primary bg-brand-pale px-3 py-1.5 rounded-lg"
            >
              Call: {siteConfig.contact.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
