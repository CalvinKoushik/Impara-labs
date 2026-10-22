import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { About } from './pages/About';
import { Enroll } from './pages/Enroll';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

function PageViewTracker() {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.('track', 'PageView');
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageViewTracker />
      <div className="flex flex-col min-h-screen text-brand-body bg-gradient-to-b from-[#F0F6FD] via-[#FAFCFF] to-[#EFF6FD] selection:bg-brand-primary selection:text-white">
        {/* Reusable Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            
            {/* Direct course routes as required */}
            <Route
              path="/courses/iot-smart-automation"
              element={<CourseDetail customSlug="iot-smart-automation" />}
            />
            <Route
              path="/courses/iot-embedded-systems"
              element={<CourseDetail customSlug="iot-smart-automation" />}
            />
            <Route
              path="/courses/full-stack-ai"
              element={<CourseDetail customSlug="full-stack-ai" />}
            />
            <Route
              path="/courses/generative-ai"
              element={<CourseDetail customSlug="generative-ai" />}
            />
            <Route path="/courses/:slug" element={<CourseDetail />} />

            <Route path="/about" element={<About />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Reusable Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
