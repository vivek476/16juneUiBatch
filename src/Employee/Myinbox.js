import { useState } from "react";

function Myinbox() {
  const [countries, ] = useState([
    { id: 1, company: "TCS", message: "This Is First Company Message." },
    { id: 2, company: "Infosys", message: "This Is Second Company Message" },
    { id: 3, company: "HCL", message: "This Is Third Company Message" },
    { id: 4, company: "Wipro", message: "This Is Fourth Company Message" },
    { id: 5, company: "Google", message: "This Is Fifth Company Message" },
    { id: 6, company: "Meta", message: "This Is Sixth Company Message" },
    { id: 7, company: "TCS", message: "This Is Seventh Company Message" },
    { id: 8, company: "Google", message: "This Is Eighth Company Message" },
    { id: 9, company: "Infosys", message: "This Is Ninth Company Message" },
    { id: 10, company: "Meta", message: "This Is Tenth Company Message" }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // actual search filter
  const [newCompany, setNewCompany] = useState(""); // modal input
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  // 👇 This handles the Search from the modal
  const handleSearchByCompany = () => {
    setSearchTerm(newCompany);
    setShowAddModal(false);
  };

  const handleDownload = () => {
    const header = "Company, Message\n";
    const csv = countries.map(c => `${c.company}, ${c.message}`).join("\n");
    const blob = new Blob([header + csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "inbox_messages.csv";
    link.click();
  };

  const filteredCountries = countries.filter(c =>
    c.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedCountries = filteredCountries.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredCountries.length / pageSize);

  return (
    <div className="container mt-4">
      <h2>My Inbox</h2>
      <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Search Message</button>

      <div className="row g-2 mb-3 align-items-center">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search company..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-success" onClick={handleDownload} title="Download CSV">
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
            <th>Company</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCountries.length > 0 ? (
            paginatedCountries.map(c => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.company}</td>
                <td>{c.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No Message Found.</td>
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

      {/* Modal */}
      {showAddModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Search Message By Company</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name"
                  value={newCompany}
                  onChange={e => setNewCompany(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleSearchByCompany}>Search</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showAddModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Myinbox;
