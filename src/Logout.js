import React from 'react';

function Logout() {
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h4 className="mb-3">Log Out</h4>
          <p className="mb-4">Are you sure you want to log out?</p>
          <button className="btn btn-danger">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
