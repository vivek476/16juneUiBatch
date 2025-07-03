import React, { useState } from 'react';

function Jobmatches() {
  const [filters, setFilters] = useState({
    skill: '',
    experience: '',
    location: ''
  });

  // Static matched jobs (sample UI data)
  const matchedJobs = [
    { title: 'React Developer', company: 'ABC Pvt Ltd', location: 'Delhi', experience: '1 Year' },
    { title: 'Backend Developer (.Net)', company: 'XYZ Ltd', location: 'Mumbai', experience: '2 Years' },
    { title: 'Full Stack Developer', company: 'TechSol', location: 'Pune', experience: '3+ Years' }
  ];

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Job Matches</h3>

      {/* Filter Form */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Skill</label>
              <select className="form-select" name="skill" value={filters.skill} onChange={handleChange}>
                <option value="">-- Select Skill --</option>
                <option value="React">React</option>
                <option value=".Net">.Net</option>
                <option value="Node.js">Node.js</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Experience</label>
              <select className="form-select" name="experience" value={filters.experience} onChange={handleChange}>
                <option value="">-- Select Experience --</option>
                <option value="Fresher">Fresher</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3+ Years">3+ Years</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                placeholder="Enter location"
                value={filters.location}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Matched Jobs Table */}
      <div className="card shadow">
        <div className="card-body p-0">
          <table className="table table-bordered table-hover text-center mb-0">
            <thead className="table-primary">
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {matchedJobs.map((job, index) => (
                <tr key={index}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>{job.experience}</td>
                  <td>
                    <button className="btn btn-sm btn-success">Apply</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Jobmatches;
