import React from 'react';

function Myaccount() {
  return (
    <>
      {/* Main Account Info Display */}
      <div className="container mt-5">
        <h4 className="mb-4">My Account</h4>

        <div className="card shadow-sm">
          <div className="card-body">

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Company Name:</label>
              <div className="col-sm-9">VivS Infotech Pvt. Ltd.</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Address:</label>
              <div className="col-sm-9">101, Tech Park, Sector 5</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">City:</label>
              <div className="col-sm-9">Indore</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Pincode:</label>
              <div className="col-sm-9">452001</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Mobile No.:</label>
              <div className="col-sm-9">+91-9876543210</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Contact Person:</label>
              <div className="col-sm-9">Vivek Solanki</div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3 fw-bold">Detail:</label>
              <div className="col-sm-9">Leading provider of IT solutions and training services.</div>
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
              <h5 className="modal-title" id="updateModalLabel">Update Company Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="row">
                  {/* Company Name */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" defaultValue="VivS Infotech Pvt. Ltd." />
                  </div>

                  {/* Address */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" defaultValue="101, Tech Park, Sector 5" />
                  </div>

                  {/* City */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" defaultValue="Indore" />
                  </div>

                  {/* Pincode */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" defaultValue="452001" />
                  </div>

                  {/* Mobile No */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Mobile No.</label>
                    <input type="text" className="form-control" defaultValue="+91-9876543210" />
                  </div>

                  {/* Contact Person */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Contact Person</label>
                    <input type="text" className="form-control" defaultValue="Vivek Solanki" />
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
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save Changes</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Myaccount;
