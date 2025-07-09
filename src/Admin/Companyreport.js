import { useState } from "react";

function Companyreport() {
    const [ereports] = useState([
        { id: 1, name: "Shiwansh Solutions", type: "IT Company", contact: "Mr. Anil Kumar Sah", city: "Mohali", address: "121, New Market, mohali", email: "info@shiwansh.com", mobile: "9876543210", description: "Leading IT solutions provider specializing in web and mobile app development." },
        { id: 2, name: "Tech Innovators", type: "Software Development", contact: "Ms. Priya Singh", city: "Bangalore", address: "456, Tech Park, Bangalore", email: "info@techinnovator.com", mobile: "9876543211", description: "Innovative software solutions for businesses of all sizes." },
        { id: 3, name: "GreenTech Solutions", type: "Environmental Services", contact: "Mr. Rajesh Kumar", city: "Delhi", address: "789, Green Street, Delhi", email: "info@greenech.com", mobile: "9876543212", description: "Providing eco-friendly solutions for a sustainable future." },
        { id: 4, name: "EduTech Hub", type: "Education Technology", contact: "Ms. Neha Gupta", city: "Mumbai", address: "321, Learning Lane, Mumbai", email: "info@edutech.com", mobile: "9876543213", description: "Revolutionizing education through technology and innovation." },
        { id: 5, name: "HealthCare Innovations", type: "Healthcare Services", contact: "Dr. Suresh Verma", city: "Chennai", address: "654, Health Street, Chennai", email: "info@healthcareinnovation.com", mobile: "9876543214", description: "Innovative healthcare solutions for better patient care." }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const filteredReports = ereports.filter(cmp =>
        cmp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedReports = filteredReports.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredReports.length / pageSize);

    const handleDownload = () => {
        const header = "ID,Name,Email,Degree,Skill,Experience\n";
        const rows = filteredReports.map(cmp =>
            `${cmp.id},${cmp.name},${cmp.type},${cmp.contact},${cmp.city},${cmp.address},${cmp.email},${cmp.mobile},${cmp.description}`
        ).join("\n");

        const blob = new Blob([header + rows], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "employee_report.csv";
        link.click();
    };

    return (
        <div className="container mt-4">
            <h2 className="text-muted">
                <i className="bi bi-buildings me-2 text-info"></i>
                Company Report
            </h2>

            <div className="row g-2 mb-3 align-items-center">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by email..."
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                <div className="col-md-4">
                    <button className="btn btn-success" onClick={handleDownload}>
                        <i className="bi bi-download me-1"></i>Export
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
                        <th>Type</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedReports.length > 0 ? (
                        paginatedReports.map(cmp => (
                            <tr key={cmp.id}>
                                <td>{cmp.id}</td>
                                <td>{cmp.name}</td>
                                <td>{cmp.type}</td>
                                <td>{cmp.contact}</td>
                                <td>{cmp.city}</td>
                                <td>{cmp.address}</td>
                                <td>{cmp.email}</td>
                                <td>{cmp.mobile}</td>
                                <td>{cmp.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No Company Found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(page)}>
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Companyreport;