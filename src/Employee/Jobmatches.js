import { useState } from "react";

function Jobmatches() {
    const [countries, setCountries] = useState([
        { id: 1, jobtitle: "React Developer", company: "Tech Solutions", location: "New York", experience: "2 Years", skill: "React.js" },
        { id: 2, jobtitle: "Backend Developer (.Net)", company: "Innovatech", location: "San Francisco", experience: "3 Years", skill: ".Net Core" },
        { id: 3, jobtitle: "Frontend Developer (Angular)", company: "Web Creators", location: "Los Angeles", experience: "1 Year", skill: "Angular" },
        { id: 4, jobtitle: "Full Stack Developer (Next.js)", company: "CodeCrafters", location: "Chicago", experience: "4 Years", skill: "Next.js" },
        { id: 5, jobtitle: "Database Administrator (SQL)", company: "Data Masters", location: "Houston", experience: "5+ Years", skill: "SQL / Database" },
    ]);

    const [newTitle, setNewTitle] = useState("");
    const [newCompany, setNewCompany] = useState("");
    const [newSkill, setNewSkill] = useState("");
    const [newExperience, setNewExperience] = useState("");
    const [newLocation, setNewLocation] = useState("");

    const [showAddModal, setShowAddModal] = useState(false);
    const [newCountry, setNewCountry] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleAddCountry = () => {
        if (newCountry.trim() !== "") {
            const newId = countries.length + 1;
            setCountries([...countries, { id: newId, jobtitle: newTitle, company: newCompany, location: newLocation, experience: newExperience, skill: newSkill }]);
            setNewCountry("");
            setShowAddModal(false);
        }
    };

    const handleDownload = () => {
        const header = "Job Title, Company, Location, Experience, Skill \n";
        const csvData = countries.map(c =>
            `${c.jobtitle} ${c.company} ${c.location}, ${c.experience}, ${c.skill}`
        ).join("\n");
        const blob = new Blob([header + csvData], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "countries.csv";
        link.click();
    };

    const filteredCountries = countries.filter(c =>
        `${c.jobtitle} ${c.company}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    return (
        <div className="container mt-4">
            <h2>Job Matches</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Match Job</button>
            <div className="row g-2 mb-3 align-items-center">
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Search..." value={searchTerm} onChange={e => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success" onClick={handleDownload} title="Download CSV"><i className="bi bi-download"></i> Export</button>
                </div>
                <div className="col-md-4 text-md-end">
                    <label className="form-label me-2 mb-0">Items per page:</label>
                    <select className="form-select d-inline-block w-auto" value={pageSize} onChange={e => {
                        setPageSize(parseInt(e.target.value)); setCurrentPage(1);
                    }}>
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
                        <th>Job Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.jobtitle}</td>
                            <td>{c.company}</td>
                            <td>{c.location}</td>
                            <td>{c.experience}</td>
                            <td>{c.skill}</td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="2" className="text-center">No Matced Jobs found.</td>
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
                                <h5 className="modal-title">Match Job</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            {/* <div className="modal-body">
                <input type="text" className="form-control" placeholder="Country Name" value={newCountry} onChange={e => setNewCountry(e.target.value)} />
              </div> */}
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        {/* Job Title */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Job Title</label>
                                            <input type="text" className="form-control" placeholder="Enter Job Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
                                        </div>

                                        {/* Company */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Company Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Company Name" value={newCompany} onChange={e => setNewCompany(e.target.value)} />
                                        </div>

                                        {/* Skill */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Skill</label>
                                            <select className="form-select" value={newSkill} onChange={e => setNewSkill(e.target.value)}>
                                                <option value="">Select skill</option>
                                                <option value="reactjs">React.js</option>
                                                <option value="nodejs">Node.js</option>
                                                <option value=".netcore">.Net Core</option>
                                                <option value="angular">Angular</option>
                                                <option value="next">Next</option>
                                                <option value="sql/database">SQL / Database</option>
                                            </select>
                                        </div>

                                        {/* Experience */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Experience</label>
                                            <select className="form-select" value={newExperience} onChange={e => setNewExperience(e.target.value)}>
                                                <option value="">Select experience</option>
                                                <option value="0">Fresher</option>
                                                <option value="1">1 Year</option>
                                                <option value="2">2 Years</option>
                                                <option value="3">3 Years</option>
                                                <option value="4">4 Years</option>
                                                <option value="5">5+ Years</option>
                                            </select>
                                        </div>

                                        {/* Location */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Location</label>
                                            <input type="text" className="form-control" placeholder="Enter Location" value={newLocation} onChange={e => setNewLocation(e.target.value)} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleAddCountry}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {showAddModal && (
                <div className="modal-backdrop fade show" onClick={() => setShowAddModal(false)}></div>
            )}
        </div>
    );
}

export default Jobmatches;