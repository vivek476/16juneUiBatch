import axios from "axios";
import { useEffect, useState } from "react";

function Userroles() {
    const [userroles, setUserRoles] = useState([]);
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newuserId, setNewUserId] = useState("");
    const [newroleId, setNewRoleId] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleAddUserRole = async () => {
        if (newuserId && newroleId) {
            const payload = {
                userId: parseInt(newuserId),
                roleId: parseInt(newroleId),
            };

            try {
                const res = await axios.post("http://localhost:5269/api/UserRoles", payload);

                if (res.data.status === "201" || res.status === 201) {
                    const updatedRes = await axios.get("http://localhost:5269/api/UserRoles");
                    setUserRoles(updatedRes.data.data || updatedRes.data);
                    setNewUserId("");
                    setNewRoleId("");
                    setShowAddModal(false);
                } else {
                    alert("Failed to assign role. Try again.");
                }
            } catch (error) {
                console.error("Error assigning user role:", error);
                alert("Error assigning user role: " + (error.response?.data || error.message));
            }
        } else {
            alert("Please select both user and role.");
        }
    };

    const handleDownload = () => {
        const headers = ["User ID", "Full Name", "Role ID", "Role Name"];
        const rows = userroles.map(role => [
            role.userId,
            role.fullName,
            role.roleId,
            role.roleName || ""
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

    const filtered = (userroles || []).filter(c =>
        String(c.roleId || "").toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);

    useEffect(() => {
        axios.get('http://localhost:5269/api/UserRoles')
            .then(res => setUserRoles(res.data.data))
            .catch(err => console.error("UserRoles error:", err));

        axios.get('http://localhost:5269/api/Users')
            .then(res => setUsers(res.data.data || res.data)) // ✅ handles both wrapped and plain array
            .catch(err => console.error("Users error:", err));

        axios.get('http://localhost:5269/api/Roles')
            .then(res => setRoles(res.data.data || res.data)) // ✅ same here
            .catch(err => console.error("Roles error:", err));
    }, []);


    const closeModal = () => {
        setShowAddModal(false);
        setNewUserId("");
        setNewRoleId("");
    };

    return (
        <div className="container mt-4">
            <h2 className="text-muted"><i className="bi bi-person-lines-fill me-2 text-success"></i>Add User Roles</h2>
            <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Add UserRole</button>
            <div className="row g-2 mb-3 align-items-center">
                <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Search..." value={searchTerm} onChange={e => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }} />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success" onClick={handleDownload}><i className="bi bi-download"></i> Export</button>
                </div>
                <div className="col-md-4 text-md-end">
                    <label className="form-label me-2 mb-0">Items per page:</label>
                    <select className="form-select d-inline-block w-auto" value={pageSize} onChange={e => {
                        setPageSize(parseInt(e.target.value));
                        setCurrentPage(1);
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
                        <th>User Name</th>
                        <th>Role ID</th>
                        <th>Role Name</th>
                    </tr>
                </thead>
                <tbody>
                    {paginated.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.userId}</td>
                            <td>{c.fullName}</td>
                            <td>{c.roleId}</td>
                            <td>{c.roleName}</td>
                        </tr>
                    ))}
                    {paginated.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center">No User Roles Found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

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
                                <h5 className="modal-title">Assign Role to User</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <label className="form-label">Select User</label>
                                <select className="form-select" value={newuserId} onChange={e => setNewUserId(e.target.value)}>
                                    <option value="">-- Select User --</option>
                                    {users.map(user => (
                                        <option key={user.id} value={user.id}>
                                            {user.fullName} (ID: {user.id})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-body">
                                <label className="form-label">Select Role</label>
                                <select className="form-select" value={newroleId} onChange={e => setNewRoleId(e.target.value)}>
                                    <option value="">-- Select Role --</option>
                                    {roles.map(role => (
                                        <option key={role.id} value={role.id}>
                                            {role.name} (ID: {role.id})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                                <button className="btn btn-primary" onClick={handleAddUserRole}>Assign</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showAddModal && (
                <div className="modal-backdrop fade show" onClick={closeModal}></div>
            )}
        </div>
    );
}

export default Userroles;
