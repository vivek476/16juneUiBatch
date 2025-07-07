import { useState } from "react";

function Profilematch() {
  const [profiles] = useState([
    { id: 1, name: "Rizwan Ahmad", degree: "B.Tech", skill: "React" },
    { id: 2, name: "Vivek Solanki", degree: "MCA", skill: "Java" },
    { id: 3, name: "Piyush Sharma", degree: "BCA", skill: "Python" },
    { id: 4, name: "Pooja Shah", degree: "MBA", skill: "Marketing" },
    { id: 5, name: "Vikram Singh", degree: "B.Tech", skill: "Node.js" },
    { id: 6, name: "Neha Sharma", degree: "M.Tech", skill: "Machine Learning" },
    { id: 7, name: "Anil Dhakad", degree: "B.Tech", skill: "React" },
    { id: 8, name: "Avijit Gorai", degree: "MCA", skill: "Java" },
    { id: 9, name: "Raju Chauhan", degree: "BCA", skill: "Python" },
    { id: 10, name: "Anil Kumar Shah", degree: "MBA", skill: "Marketing" },
    { id: 11, name: "Rohit Bharadwaj", degree: "B.Tech", skill: "Node.js" },
    { id: 12, name: "Pooja Singh", degree: "M.Tech", skill: "Machine Learning" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const filteredProfiles = profiles.filter(p =>
    p.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedProfiles = filteredProfiles.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredProfiles.length / pageSize);

  const handleDownload = () => {
    const header = "Name,Degree,Skill\n";
    const csv = profiles.map(p => `${p.name},${p.degree},${p.skill}`).join("\n");
    const blob = new Blob([header + csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "profiles.csv";
    link.click();
  };

  return (
    <div className="container mt-4">
      <h2>Employee Profile Match</h2>

      <div className="row g-2 mb-3 align-items-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by skill or degree..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-success"
            onClick={handleDownload}
            title="Download CSV"
          >
            <i className="bi bi-download"></i> Export
          </button>
        </div>
        <div className="col-md-4 text-md-end">
          <label className="form-label me-2 mb-0">Items per page:</label>
          <select
            className="form-select d-inline-block w-auto"
            value={pageSize}
            onChange={e => {
              setPageSize(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={1}>1</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Degree</th>
            <th>Skill</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProfiles.length > 0 ? (
            paginatedProfiles.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.degree}</td>
                <td>{p.skill}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No Profile Found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Profilematch;
