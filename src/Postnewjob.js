import React from 'react';

function Postnewjob() {
  return (
    <>
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#postJobModal"
      >
        Post New Job
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="postJobModal"
        tabIndex="-1"
        aria-labelledby="postJobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="postJobModalLabel">Post New Job</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="row">
                  {/* Job Title */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                    <input type="text" className="form-control" id="jobTitle" placeholder="Enter job title" />
                  </div>

                  {/* Degree */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="degree" className="form-label">Degree</label>
                    <select className="form-select" id="degree">
                      <option selected disabled>Select degree</option>
                      <option value="bca">BCA</option>
                      <option value="btech">B.Tech</option>
                      <option value="mca">MCA</option>
                      <option value="mba">MBA</option>
                    </select>
                  </div>

                  {/* Skill */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="skill" className="form-label">Skill</label>
                    <select className="form-select" id="skill">
                      <option selected disabled>Select skill</option>
                      <option value="react">React</option>
                      <option value="node">Node.js</option>
                      <option value=".netcore">.Net Core</option>
                      <option value="database">Database</option>
                    </select>
                  </div>

                  {/* Salary */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="salary" className="form-label">Salary (in ₹)</label>
                    <input type="number" className="form-control" id="salary" placeholder="Enter salary" />
                  </div>

                  {/* Experience */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="experience" className="form-label">Experience</label>
                    <select className="form-select" id="experience">
                      <option selected disabled>Select experience</option>
                      <option value="0">Fresher</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3+ Years</option>
                    </select>
                  </div>

                  {/* No. of Vacancy */}
                  <div className="mb-3 col-md-6">
                    <label htmlFor="vacancy" className="form-label">No. of Vacancy</label>
                    <input type="number" className="form-control" id="vacancy" placeholder="Enter number of vacancies" />
                  </div>

                  {/* Detail (full width) */}
                  <div className="mb-3 col-12">
                    <label htmlFor="detail" className="form-label">Job Description / Detail</label>
                    <textarea className="form-control" id="detail" rows="3" placeholder="Enter job details..."></textarea>
                  </div>
                </div>
              </form>
            </div>


            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Post Job</button>
            </div>

          </div>
        </div>
      </div>

      {/* Static Table Displayed Below Modal */}
      <div className="container mt-5">
        <h4 className="mb-3">Posted Jobs</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center">
            <thead className="table-primary">
              <tr>
                <th>Job Title</th>
                <th>Degree</th>
                <th>Skill</th>
                <th>Experience</th>
                <th>Salary</th>
                <th>No. of Vacancy</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>React Developer</td>
                <td>B.Tech</td>
                <td>React</td>
                <td>2 Years</td>
                <td>₹60,000.00</td>
                <td>3</td>
                <td>Frontend developer with strong React skills.</td>
              </tr>
              <tr>
                <td>.Net Core Backend</td>
                <td>MCA</td>
                <td>.Net Core</td>
                <td>3+ Years</td>
                <td>₹80,000.00</td>
                <td>2</td>
                <td>Experience in .Net Core and APIs.</td>
              </tr>
              <tr>
                <td>Database Engineer</td>
                <td>B.Tech</td>
                <td>Database</td>
                <td>1 Year</td>
                <td>₹50,000.00</td>
                <td>1</td>
                <td>Good knowledge of SQL, MongoDB and Data Visualization.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Postnewjob;
