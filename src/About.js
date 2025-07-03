import React from 'react';

function About() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', paddingTop: '60px' }}>
      <div className="container bg-white p-5 shadow rounded text-center">
        <h2 className="text-primary mb-4">About VivS Job Portal</h2>
        <p className="lead">
          VivS Job Portal is a modern platform that connects job seekers with top employers. 
          Whether you're a fresh graduate, experienced professional, or a company looking to hire, 
          we've built the tools to make the hiring process easier and more effective.
        </p>

        <hr className="my-4" />

        <div className="row text-start">
          <div className="col-md-4">
            <h5>🎯 Our Mission</h5>
            <p>To bridge the gap between talent and opportunity by providing a smart and simple recruitment platform.</p>
          </div>
          <div className="col-md-4">
            <h5>🚀 Our Services</h5>
            <ul>
              <li>Job Posting for Employers</li>
              <li>Resume Submission</li>
              <li>Profile Matching</li>
              <li>Skill-Based Filtering</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>🌐 Why Choose Us?</h5>
            <p>
              We provide real-time updates, powerful matching algorithms, and an easy-to-use interface 
              for both companies and employees.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h5>📞 Need Help?</h5>
          <p>Contact our support team: <strong>support@vivsjobportal.com</strong></p>
        </div>
      </div>
    </div>
  );
}

export default About;
