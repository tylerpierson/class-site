import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import CompaniesSection from "./components/CompaniesSection/CompaniesSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ClassroomSection from "./components/ClassroomSection/ClassroomSection";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
      <div className="font-sans">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                <HeroSection />
                <CompaniesSection />
                <ClassroomSection />
                <FeaturesSection />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
  );
}
