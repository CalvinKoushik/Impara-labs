import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Impara Creative Labs | Learn. Create. Build. Beyond. Powered by TechKnots',
  '/courses': 'All Programmes | Impara Creative Labs',
  '/courses/iot-smart-automation': 'IoT & Smart Automation (3-Month Programme) | Impara Creative Labs',
  '/courses/iot-embedded-systems': 'IoT & Smart Automation (3-Month Programme) | Impara Creative Labs',
  '/courses/full-stack-ai': 'Full Stack Development with AI (3-Month Programme) | Impara Creative Labs',
  '/courses/generative-ai': 'Generative AI (3-Month Programme) | Impara Creative Labs',
  '/about': 'About Us | Impara Creative Labs — Powered by TechKnots',
  '/enroll': 'Programme Enquiry & Interest Registration | Impara Creative Labs',
  '/contact': 'Contact Us | Impara Creative Labs',
  '/privacy-policy': 'Privacy Policy | Impara Creative Labs',
  '/terms': 'Terms and Conditions | Impara Creative Labs',
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Set page title
    const matchedTitle = pageTitles[pathname] || 'Impara Creative Labs | Powered by TechKnots';
    document.title = matchedTitle;
  }, [pathname]);

  return null;
};
