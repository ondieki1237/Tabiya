import React from 'react';
import { FaUser, FaChartLine, FaBriefcase, FaCheckCircle, FaSearch } from 'react-icons/fa';
import './Search.css'; // Assume you have a CSS file to style this section.

const Search = () => {
  return (
    <div>
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <FaUser className="icon" />
            <h3>Create a Profile</h3>
            <p>"Sign up and let our chatbot match your skills with the job market. No certificate? No problem—there’s a job for what you do best!"</p>
          </div>
          <div className="step">
            <FaChartLine className="icon" />
            <h3>Bridge The Gap</h3>
            <p>"Discover the skills you need to excel in your career. Worried about gaps? We’ve got you covered!"</p>
          </div>
          <div className="step">
            <FaBriefcase className="icon" />
            <h3>Find Jobs or Talent</h3>
            <p>"Use our advanced search to find jobs or top talent. We match skills with the right job titles—no more vague listings!"</p>
          </div>
          <div className="step">
            <FaCheckCircle className="icon" />
            <h3>Get Hired or Hire</h3>
            <p>Submit proposals, collaborate, check our jobseeker listings and jobs and grow your career or business.</p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="searchControl">
        <section className="job-search">
          <h2>Search for Jobs</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search jobs by title, keyword, or company" />
            <button className="search-button"><FaSearch /></button>
          </div>
        </section>

        <section className="job-search">
          <h2>Search for Talents</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search talents by title, keyword, or company" />
            <button className="search-button"><FaSearch /></button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Search;