import { useState } from "react";

function Changepassword() {
    const [countries, setCountries] = useState([
        // { id: 1, name: "India" },
        // { id: 2, name: "USA" },
    ]);

    const [newOldPassword, setNewOldPassword] = useState("");
    const [newNewPassword, setNewNewPassword] = useState("");
    const [newConfirmPassword, setNewConfirmPassword] = useState("");

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newCountry, setNewCountry] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleAddCountry = () => {
        if (newCountry.trim() !== "") {
            const newId = countries.length + 1;
            setCountries([...countries, { id: newId, name: newCountry }]);
            setNewCountry("");
            setShowAddModal(false);
        }
    };

    const handleDownload = () => {
        const csv = countries.map(c => c.name).join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "countries.csv";
        link.click();
    };

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    return (
        <div className="container mt-4">
            <h2>Change Password</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Update Password</button>
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
                    {/* <tr>
                        <th>ID</th>
                        <th>Country Name</th>
                    </tr> */}
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="2" className="text-center"></td>
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
                                <h5 className="modal-title">Update Password</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            {/* <div className="modal-body">
                <input type="text" className="form-control" placeholder="Country Name" value={newCountry} onChange={e => setNewCountry(e.target.value)} />
              </div> */}
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Old Password</label>
                                            <div className="input-group">
                                                <input type={showOldPassword ? "text" : "password"} className="form-control" placeholder="Enter Old Password" value={newOldPassword} onChange={(e) => setNewOldPassword(e.target.value)} />
                                                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowOldPassword(!showOldPassword)}><i className={`bi ${showOldPassword ? "bi-eye-slash" : "bi-eye"}`}></i></button>
                                            </div>
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">New Password</label>
                                            <div className="input-group">
                                                <input type={showNewPassword ? "text" : "password"} className="form-control" placeholder="Enter New Password" value={newNewPassword} onChange={(e) => setNewNewPassword(e.target.value)} />
                                                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowNewPassword(!showNewPassword)}><i className={`bi ${showNewPassword ? "bi-eye-slash" : "bi-eye"}`}></i></button>
                                            </div>
                                        </div>

                                        <div className="mb-3 col-md-12">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group">
                                                <input type={showConfirmPassword ? "text" : "password"} className="form-control" placeholder="Enter Confirm Password" value={newConfirmPassword} onChange={(e) => setNewConfirmPassword(e.target.value)}/>
                                                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}><i className={`bi ${showConfirmPassword ? "bi-eye-slash" : "bi-eye"}`}></i></button>
                                            </div>
                                        </div>

                                        <div className="modal-footer">
                                            <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                            <button className="btn btn-primary" onClick={handleAddCountry}>Update Password</button>
                                        </div>
                                    </div>
                                </form>
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

export default Changepassword;