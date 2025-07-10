import { useState } from "react";

function Jobmatches() {
    const [countries,] = useState([
        { id: 1, company: "Tech Solutions", jobtitle: "React Developer", degree: "MCA", skill: "React.js", experience: "2 Years", salary: "50000" },
    ]);

    const [viewData, setViewData] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleDownload = () => {
        const header = "Job Title, Company, Degree, Skill, Experience, Salary\n";
        const csvData = countries.map(c =>
            `${c.jobtitle}, ${c.company}, ${c.degree}, ${c.skill}, ${c.experience}, ${c.salary}`
        ).join("\n");
        const blob = new Blob([header + csvData], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "jobs.csv";
        link.click();
    };

    const filteredCountries = countries.filter(c =>
        `${c.company} ${c.jobtitle}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    return (
        <div className="container mt-4">
            <h2 className="text-muted"><i className="bi bi-briefcase me-2 text-success"></i>Job Matches</h2>

            <div className="row g-2 mb-3 align-items-center">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success" onClick={handleDownload}>
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
                        <th>Job Title</th>
                        <th>Degree</th>
                        <th>Skill</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.company}</td>
                            <td>{c.jobtitle}</td>
                            <td>{c.degree}</td>
                            <td>{c.skill}</td>
                            <td>{c.experience}</td>
                            <td>{c.salary}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-success d-flex align-items-center gap-1 px-3 py-1"
                                    onClick={() => {
                                        setViewData(c);
                                        setShowViewModal(true);
                                    }}
                                    title="View"
                                >
                                    <i className="bi bi-eye-fill"></i>
                                    <span style={{ fontWeight: "500" }}>View</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="8" className="text-center">No matched jobs found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {showViewModal && viewData && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Company Details</h5>
                                <button type="button" className="btn-close" onClick={() => setShowViewModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Company:</strong> {viewData.company}</p>
                                <p><strong>Job Title:</strong> {viewData.jobtitle}</p>
                                <p><strong>Degree:</strong> {viewData.degree}</p>
                                <p><strong>Skill:</strong> {viewData.skill}</p>
                                <p><strong>Experience:</strong> {viewData.experience}</p>
                                <p><strong>Salary:</strong> ₹{viewData.salary}</p>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowViewModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {showViewModal && <div className="modal-backdrop fade show" onClick={() => setShowViewModal(false)}></div>}


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

export default Jobmatches;

