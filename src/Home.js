import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', paddingTop: '60px' }}>
      <div className="container text-center">
        <div className="p-5 bg-white shadow rounded">
          <h1 className="mb-3 text-primary">Welcome to VivS Job Portal</h1>
          <p className="lead mb-4">
            Connecting companies with talented professionals. Find your dream job or the right candidate here.
          </p>

          <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
            <Link to="/register" className="btn btn-success btn-lg">
              Register Now
            </Link>
            <Link to="/login" className="btn btn-outline-primary btn-lg">
              Login
            </Link>
          </div>

          <hr />

          <div className="row mt-5">
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Post a Job</h5>
                  <p className="card-text">Are you a company? Start hiring by posting job openings.</p>
                  <Link to="/postnewjob" className="btn btn-primary">Post Job</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Browse Jobs</h5>
                  <p className="card-text">Explore available job opportunities based on your skills and interest.</p>
                  <Link to="/jobs" className="btn btn-primary">Browse</Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Connect with Companies</h5>
                  <p className="card-text">Reach out to companies directly and showcase your profile.</p>
                  <Link to="/profilematch" className="btn btn-primary">Get Matched</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
