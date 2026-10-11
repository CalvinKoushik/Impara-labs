import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-pale text-brand-primary font-black text-3xl flex items-center justify-center mx-auto border border-brand-border">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-brand-navy">
          Page Not Found
        </h1>
        <p className="text-sm text-brand-body leading-relaxed">
          The page you are looking for doesn't exist or has moved. Explore our technology tracks or head back home.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-primary hover:bg-[#0756c4] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/courses"
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-brand-border text-brand-navy font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};
