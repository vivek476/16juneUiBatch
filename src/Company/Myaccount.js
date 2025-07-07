import { useState } from "react";

function Myaccount() {
    const [countries, setCountries] = useState([
        {
            id: 1,
            companyname: "VivS Infotech",
            address: "101 IT Park",
            city: "Indore",
            pincode: "452002",
            mobile: "9865214730",
            contactperson: "Vivek Solanki",
            detail: "Leading Provider of IT Solutions and Training Services",
        },
    ]);

    const [newCompanyname, setNewCompanyname] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newCity, setNewCity] = useState("");
    const [newPincode, setNewPincode] = useState("");
    const [newMobile, setNewMobile] = useState("");
    const [newContactperson, setNewContactperson] = useState("");
    const [newDetail, setNewDetail] = useState("");

    const [showAddModal, setShowAddModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleUpdateDetails = () => {
        setCountries(prevCountries =>
            prevCountries.map(c =>
                c.id === 1
                    ? {
                        ...c,
                        companyname: newCompanyname,
                        address: newAddress,
                        city: newCity,
                        pincode: newPincode,
                        mobile: newMobile,
                        contactperson: newContactperson,
                        detail: newDetail,
                    }
                    : c
            )
        );
        setShowAddModal(false);
    };

    const handleDownload = () => {
        const header = "Full Name, Address, City, Pincode, Mobile, Detail, Degree, Skill, Pass Year, Experience\n";
        const csvData = countries.map(c =>
            `${c.companyname}, ${c.address}, ${c.city}, ${c.pincode}, ${c.mobile}, ${c.contactperson}, ${c.detail}`
        ).join("\n");
        const blob = new Blob([header + csvData], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "countries.csv";
        link.click();
    };

    const filteredCountries = countries.filter(c =>
        `${c.companyname}, ${c.address}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    return (
        <div className="container mt-4">
            <h2>My Account</h2>
            <button
                className="btn btn-primary mb-3"
                onClick={() => {
                    const current = countries.find(c => c.id === 1);
                    if (current) {
                        setNewCompanyname(current.companyname);
                        setNewAddress(current.address);
                        setNewCity(current.city);
                        setNewPincode(current.pincode);
                        setNewMobile(current.mobile);
                        setNewContactperson(current.contactperson);
                        setNewDetail(current.detail);
                    }
                    setShowAddModal(true);
                }}
            >
                Update Details
            </button>

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
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pincode</th>
                        <th>Mobile No.</th>
                        <th>Contact Person</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.companyname}</td>
                            <td>{c.address}</td>
                            <td>{c.city}</td>
                            <td>{c.pincode}</td>
                            <td>{c.mobile}</td>
                            <td>{c.contactperson}</td>
                            <td>{c.detail}</td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="13" className="text-center">No Data Found.</td>
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
                                <h5 className="modal-title">Update Details</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        {/* All Form Fields */}
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Company Name</label>
                                            <input type="text" className="form-control" value={newCompanyname} onChange={e => setNewCompanyname(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control" value={newAddress} onChange={e => setNewAddress(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" value={newCity} onChange={e => setNewCity(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Pincode</label>
                                            <input type="text" className="form-control" value={newPincode} onChange={e => setNewPincode(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Mobile No.</label>
                                            <input type="text" className="form-control" value={newMobile} onChange={e => setNewMobile(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label">Contact Person</label>
                                            <input type="text" className="form-control" value={newContactperson} onChange={e => setNewContactperson(e.target.value)} />
                                            <div className="mb-3 col-12">
                                                <label className="form-label">Detail</label>
                                                <textarea className="form-control" rows="3" value={newDetail} onChange={e => setNewDetail(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleUpdateDetails}>Update</button>
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

export default Myaccount;
