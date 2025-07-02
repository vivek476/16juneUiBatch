import React from 'react';

function Changepassword() {
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="mb-4 text-center">Change Password</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          <form>

            {/* Old Password */}
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">Old Password</label>
              <input
                type="password"
                className="form-control"
                id="oldPassword"
                placeholder="Enter old password"
              />
            </div>

            {/* New Password */}
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter new password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Change Password</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
