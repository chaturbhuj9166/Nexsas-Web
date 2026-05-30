import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

// Placeholder for pages not yet migrated
function ComingSoon({ title }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-heading-3 text-secondary mb-4">{title}</h1>
      <p className="text-body-1 text-secondary/60">This page is coming soon.</p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Company pages */}
        <Route path="/career" element={<ComingSoon title="Careers" />} />
        <Route path="/customer" element={<ComingSoon title="Customers" />} />
        <Route path="/testimonial" element={<ComingSoon title="Testimonials" />} />
        <Route path="/success-stories" element={<ComingSoon title="Success Stories" />} />
        <Route path="/why-choose-us" element={<ComingSoon title="Why Choose Us" />} />

        {/* Product pages */}
        <Route path="/integration" element={<ComingSoon title="Integrations" />} />
        <Route path="/process" element={<ComingSoon title="Process" />} />
        <Route path="/services" element={<ComingSoon title="Services" />} />
        <Route path="/press" element={<ComingSoon title="Press" />} />
        <Route path="/download" element={<ComingSoon title="Download" />} />

        {/* Resources pages */}
        <Route path="/blog" element={<ComingSoon title="Blog" />} />
        <Route path="/blog-details" element={<ComingSoon title="Blog Details" />} />
        <Route path="/faq" element={<ComingSoon title="FAQ" />} />
        <Route path="/tutorial" element={<ComingSoon title="Tutorials" />} />
        <Route path="/analytics" element={<ComingSoon title="Analytics" />} />
        <Route path="/whitepaper" element={<ComingSoon title="Whitepaper" />} />
        <Route path="/glossary" element={<ComingSoon title="Glossary" />} />
        <Route path="/changelog" element={<ComingSoon title="Changelog" />} />

        {/* Account & Legal pages */}
        <Route path="/affiliates" element={<ComingSoon title="Affiliates" />} />
        <Route path="/gdpr" element={<ComingSoon title="GDPR" />} />
        <Route path="/legal" element={<ComingSoon title="Legal" />} />
        <Route path="/terms-conditions" element={<ComingSoon title="Terms & Conditions" />} />
        <Route path="/privacy-policy" element={<ComingSoon title="Privacy Policy" />} />
        <Route path="/refund-policy" element={<ComingSoon title="Refund Policy" />} />
        <Route path="/referral-program" element={<ComingSoon title="Referral Program" />} />
        <Route path="/security" element={<ComingSoon title="Security" />} />

        {/* 404 fallback */}
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}
