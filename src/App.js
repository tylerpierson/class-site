import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HeroSection from "./components/HeroSection/HeroSection";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ClassroomSection from "./components/ClassroomSection/ClassroomSection";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import EducatorAuthPage from "./pages/EducatorAuthPage/EducatorAuthPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import EducatorDashboard from "./pages/EducatorDashboard/EducatorDashboard";
import EducatorsPage from "./pages/EducatorsPage/EducatorsPage";
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
                <LanguagesSection />
                <ClassroomSection />
                <FeaturesSection />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/educator-auth" element={<EducatorAuthPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/educator-dashboard"
            element={
              <ProtectedRoute requiredRoles={["educator", "admin"]}>
                <EducatorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/educators"
            element={
              <ProtectedRoute requiredRoles={["admin"]}>
                <EducatorsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
  );
}
