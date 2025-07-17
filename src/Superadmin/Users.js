import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newFullName, setNewFullName] = useState("");
    const [newMobile, setNewMobile] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const handleAddUser = async () => {
        if (
            newFullName.trim() !== "" &&
            newMobile.trim() !== "" &&
            newEmail.trim() !== "" &&
            newPassword.trim() !== ""
        ) {
            const newUser = {
                fullName: newFullName,
                mobile: newMobile,
                email: newEmail,
                password: newPassword,
            };

            try {
                const response = await axios.post("http://localhost:5269/api/Users/signup", newUser);

                if (response.data.status === "201") {
                    // Refresh users from DB
                    const res = await axios.get("http://localhost:5269/api/Users");
                    setUsers(res.data.data);

                    // Reset form & close modal
                    setNewFullName("");
                    setNewEmail("");
                    setNewMobile("");
                    setNewPassword("");
                    setShowAddModal(false);
                } else {
                    alert("Signup failed.");
                }
            } catch (error) {
                console.error("Error adding user:", error);
                alert("Error: " + (error.response?.data || error.message));
            }
        } else {
            alert("Please fill all fields.");
        }
    };


    const handleDownload = () => {
        const headers = ["ID", "Full Name", "Mobile", "Email", "Password"];

        const rows = users.map(user => [
            user.id,
            user.fullName,
            user.mobile,
            user.email,
            user.password
        ]);

        const csvContent = [
            headers.join(","), // header row
            ...rows.map(row => row.map(value => `"${value}"`).join(",")) // each row quoted
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.setAttribute("download", "users.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    const filteredCountries = users.filter(c =>
        c.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedCountries = filteredCountries.slice(
        startIndex,
        startIndex + pageSize
    );

    const totalPages = Math.ceil(filteredCountries.length / pageSize);

    useEffect(() => {
        axios.get('http://localhost:5269/api/Users')
            .then((res) => {
                console.log("User API Response:", res.data);  // Log this
                setUsers(res.data.data);  // ✅ Make sure to access `.data`
            })
            .catch(err => console.error("User Fetch Error:", err));
    }, []);


    return (
        <>
            <div className="container mt-4">
                <h2 className="text-muted"><i className="bi bi-person-plus me-2 text-success"></i>Add Users</h2>
                <button className="btn btn-primary mb-3" onClick={() => setShowAddModal(true)}>Add User</button>
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
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedCountries.map(c => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.fullName}</td>
                                <td>{c.mobile}</td>
                                <td>{c.email}</td>
                                <td>{c.password}</td>
                            </tr>
                        ))}
                        {paginatedCountries.length === 0 && (
                            <tr>
                                <td colSpan="2" className="text-center">No Users Found.</td>
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
                                    <h5 className="modal-title">Add User</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" placeholder="Enter FullName" value={newFullName} onChange={(e) => setNewFullName(e.target.value)} />
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" placeholder="Enter Mobile" value={newMobile} onChange={(e) => setNewMobile(e.target.value)} />
                                </div>
                                <div className="modal-body">
                                    <input type="email" className="form-control" placeholder="Enter Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                                </div>
                                <div className="modal-body">
                                    <input type="password" className="form-control" placeholder="Enter Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                    <button className="btn btn-primary" onClick={handleAddUser}>Add</button>
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
        </>
    );
}

export default Users;
