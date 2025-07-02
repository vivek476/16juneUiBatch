import React from 'react';

function Appliedjob() {
  // Static sample data of applied jobs
  const appliedJobs = [
    {
      title: 'Fullstack Developer',
      company: 'VivS Infotech',
      location: 'Indore',
      appliedDate: '2024-07-01',
      status: 'Confirmed'
    },
    {
      title: '.Met Core Backend Developer',
      company: 'CodeWave Technologies',
      location: 'Bangalore',
      appliedDate: '2025-06-25',
      status: 'Shortlisted'
    },
    {
      title: 'React Developer',
      company: 'TechSquare Pvt. Ltd.',
      location: 'Remote',
      appliedDate: '2025-06-22',
      status: 'Rejected'
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Applied Job Details</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-primary">
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Applied Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.appliedDate}</td>
                <td>
                  <span className={`badge ${
                    job.status === 'Pending' ? 'bg-warning text-dark' :
                    job.status === 'Confirmed' ? 'bg-transparent text-dark' :
                    job.status === 'Shortlisted' ? 'bg-success' :
                    'bg-danger'
                  }`}>
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appliedjob;
