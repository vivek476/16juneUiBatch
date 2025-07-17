import axios from "axios";
import { useEffect, useState } from "react";


function Userroles() {
    const [userroles, setUserRoles] = useState([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newuserId, setNewUserId] = useState("");
    const [newroleId, setNewRoleId] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleAddUserRole = () => {
        if (
            newuserId.trim() !== "" &&
            newroleId.trim() !== ""
        ) {
            const newId = userroles.length + 1;
            const neweserrole = {
                id: newId,
                userId: newuserId,
                roleId: newroleId,
            };
            setUserRoles([...userroles, neweserrole]);
            setNewUserId("");
            setNewRoleId("");
            setShowAddModal(false);
        }
    };

    const handleDownload = () => {
        const headers = ["User ID", "Role ID", "Role Name"];

        const rows = userroles.map(role => [
            role.userId,
            role.roleId,
            role.roleName || ""  // optional field handling
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(row => row.map(val => `"${val}"`).join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "userroles.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const filteredCountries = (userroles || []).filter(c =>
        String(c.roleId || "").toLowerCase().includes(searchTerm.toLowerCase())
    );


    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    useEffect(() => {
        axios.get('http://localhost:5269/api/UserRoles')
            .then((res) => {
                console.log("UserRoles API response:", res.data);
                setUserRoles(res.data.data); // Change this if .data.data is incorrect
            })
            .catch((err) => console.error("API Error:", err));
    }, []);


    return (
        <div className="container mt-4">
            <h2 className="text-muted"><i className="bi bi-person-lines-fill me-2 text-success"></i>Add User Roles</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Add UserRole</button>
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
                        <th>User ID</th>
                        <th>Role ID</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCountries.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.userId}</td>
                            <td>{c.roleId}</td>
                        </tr>
                    ))}
                    {paginatedCountries.length === 0 && (
                        <tr>
                            <td colSpan="2" className="text-center">No User Roles Found.</td>
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
                                <h5 className="modal-title">Add User Role</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" placeholder="Enter User Id" value={newuserId} onChange={e => setNewUserId(e.target.value)} />
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" placeholder="Enter Role Id" value={newroleId} onChange={e => setNewRoleId(e.target.value)} />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleAddUserRole}>Assign</button>
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

export default Userroles;