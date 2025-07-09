import React from "react";

function Dashboard() {
  const stats = [
    { title: "Jobs Posted", value: 12, icon: "bi-briefcase-fill", color: "primary" },
    { title: "Applications", value: 34, icon: "bi-file-earmark-text", color: "success" },
    { title: "Companies", value: 7, icon: "bi-buildings", color: "warning" },
    { title: "Users", value: 20, icon: "bi-people-fill", color: "danger" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-3">
        <i className="bi bi-speedometer2 me-2 text-info fs-1"></i> Welcome to the Dashboard
      </h2>
      <p className="lead">Monitor your job portal activity and manage operations below.</p>

      <div className="row mt-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className={`card text-white bg-${stat.color} h-100 shadow`}>
              <div className="card-body d-flex align-items-center">
                <i className={`bi ${stat.icon} me-3 fs-1`}></i>
                <div>
                  <h5 className="card-title mb-1">{stat.title}</h5>
                  <h3>{stat.value}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
