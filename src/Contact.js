import React from 'react';

function Contact() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingTop: '60px' }}>
      <div className="container bg-white p-5 shadow rounded" style={{ maxWidth: '600px' }}>
        <h2 className="text-center text-primary mb-4">Contact Us</h2>
        <p className="text-center mb-4">
          We'd love to hear from you! Whether you have a question about features, feedback, or anything else — our team is ready to answer all your questions.
        </p>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
