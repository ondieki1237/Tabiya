import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
  const jobs = [
    {
      title: 'Digital Marketer',
      company: 'ABC Marketing Agency',
      location: 'Remote',
      pay: 'Ksh 4,000/hr',
      type: 'Part Time',
      jobId: 3,
    },
    {
      title: 'Data Entry Clerk',
      company: 'Kenya Data Services',
      location: 'Remote',
      pay: 'Ksh 1,500/hr',
      type: 'Casual',
      jobId: 4,
    },
    {
      title: 'Sales Executive',
      company: 'Superb Sales Ltd',
      location: 'Nairobi',
      pay: 'Ksh 25,000/month',
      type: 'Full Time',
      jobId: 5,
    },
    {
      title: 'Plumber',
      company: 'QuickFix Services',
      location: 'Nairobi',
      pay: 'Ksh 1,000/hr',
      type: 'Informal',
      jobId: 6,
    },
    {
      title: 'Content Writer',
      company: 'Creative Minds',
      location: 'Remote',
      pay: 'Ksh 2,500/hr',
      type: 'Freelance',
      jobId: 7,
    },
    {
      title: 'Construction Worker',
      company: 'BuildWell Contractors',
      location: 'Nairobi',
      pay: 'Ksh 1,800/day',
      type: 'Casual',
      jobId: 8,
    },
  ];

  return (
    <section className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.jobId} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <p>{job.pay} - {job.type}</p>
            <Link to={`/jobs/${job.jobId}`} className="job-cta">Apply Now</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;