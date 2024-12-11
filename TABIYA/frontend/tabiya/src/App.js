import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import Footer from "./components/Footer/Footer";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import Search from "./components/Search/Search";
import Login from "./components/Account/Login/Login";
import Signup from "./components/Account/Signup/Signup";
import VoiceRecord from "./components/ChatBot/ChatBot";

// This is a wrapper component for HeroSection and Footer that can be used across pages
const PageWrapper = ({ children }) => (
  <>
    <HeroSection />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup Route */}
        <Route
          path="/signup"
          element={
            <PageWrapper>
              <Signup />
            </PageWrapper>
          }
        />

        {/* Login Route */}
        <Route
          path="/login"
          element={
            <PageWrapper>
              <Login />
            </PageWrapper>
          }
        />

        {/* ChatBot (VoiceRecord) Route */}
        <Route
          path="/chat"
          element={
            <PageWrapper>
              <VoiceRecord />
            </PageWrapper>
          }
        />

        {/* Add other routes here */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <FeatureSection />
              <TestimonialSection />
              <FeaturedJobs />
              <Search />
            </PageWrapper>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
