import React from 'react'

function Useraccount() {
  return (
    <>
      {/* Main Account Info Display */}
      <div className="container mt-5">
        <h4 className="mb-4">User Account</h4>

        <div className="card shadow-sm">
          <div className="card-body">

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">First Name:</label>
              <div className="col-sm-9">Anil Kumar Sah</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Middle Name:</label>
              <div className="col-sm-9">Kumar</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Last Name:</label>
              <div className="col-sm-9">Sah</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Address:</label>
              <div className="col-sm-9">101, Tech Park, Sector 126</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">City:</label>
              <div className="col-sm-9">Mohali</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Pincode:</label>
              <div className="col-sm-9">140055</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Mobile No.:</label>
              <div className="col-sm-9">+91-9876543210</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Detail:</label>
              <div className="col-sm-9">Leading provider of IT solutions and training services.</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Degree:</label>
              <div className="col-sm-9">MCA</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Skill:</label>
              <div className="col-sm-9">.Net Core</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Pass Year:</label>
              <div className="col-sm-9">2011</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Experience:</label>
              <div className="col-sm-9">3+ Years</div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
              >
                Update Details
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Update Details Modal Form */}
      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="updateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">Update User Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="row">
                  {/* First Name */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" defaultValue="Anil" />
                  </div>

                  {/* Middle Name */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Middle Name</label>
                    <input type="text" className="form-control" defaultValue="Kumar" />
                  </div>

                  {/* Last Name */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" defaultValue="Sah" />
                  </div>

                  {/* Address */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" defaultValue="101, Tech Park, Sector 126" />
                  </div>

                  {/* City */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" defaultValue="Mohali" />
                  </div>

                  {/* Pincode */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" defaultValue="140055" />
                  </div>

                  {/* Mobile No */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Mobile No.</label>
                    <input type="text" className="form-control" defaultValue="+91-9876543210" />
                  </div>

                  {/* Degree */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Degree</label>
                    <select className="form-select" defaultValue="MCA">
                      <option value="">Select degree</option>
                      <option value="bca">BCA</option>
                      <option value="btech">B.Tech</option>
                      <option value="bsc">B.Sc</option>
                      <option value="bcom">M.Tech</option>
                      <option value="mca">MCA</option>
                    </select>
                  </div>

                  {/* Skill */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Skill</label>
                    <select className="form-select" defaultValue=".Net Core">
                      <option value="">Select skill</option>
                      <option value="react">React.js</option>
                      <option value="node">Node.js</option>
                      <option value="dotnet">.Net Core</option>
                      <option value="angular">Angular</option>
                      <option value="java">Next</option>
                      <option value="sql">SQL / Database</option>
                    </select>
                  </div>

                  {/* Detail (full width) */}
                  <div className="mb-3 col-12">
                    <label className="form-label">Detail</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      defaultValue="Leading provider of IT solutions and training services."
                    />
                  </div>

                  {/* Pass Year */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Pass Year</label>
                    <select className="form-select" defaultValue="2011">
                      <option value="">Select pass year</option>
                      <option value="2008">2008</option>
                      <option value="2009">2009</option>
                      <option value="2010">2010</option>
                      <option value="2011">2011</option>
                      <option value="2012">2012</option>
                      <option value="2013">2013</option>
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                      <option value="2016">2016</option>
                      <option value="2017">2017</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Experience</label>
                    <select className="form-select" defaultValue="3= Years">
                      <option value="">Select experience</option>
                      <option value="0">Fresher</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3 Years</option>
                      <option value="4">4 Years</option>
                      <option value="5">5+ Years</option>
                    </select>
                  </div>

                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Update Details</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Useraccount