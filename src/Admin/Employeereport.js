import { useState } from "react";

function Employeereport() {
    const [ereports] = useState([
        { id: 1, name: "Vivek Solanki", email: "vivek123@gmail.com", degree: "MCA", skill: ".NET Core", experience: "2 years" },
        { id: 2, name: "Rizwan Ahmad", email: "rizzu123@gmail.com", degree: "B.Tech", skill: "React.js", experience: "1 year" },
        { id: 3, name: "Piyush Sharma", email: "piyush123@gmail.com", degree: "BCA", skill: "Node.js", experience: "1 year" },
        { id: 4, name: "Avijit Gorai", email: "avijit123@gmail.com", degree: "MCA", skill: ".NET Core", experience: "3 years" }
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const filteredReports = ereports.filter(emp =>
        emp.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedReports = filteredReports.slice(startIndex, startIndex + pageSize);
    const totalPages = Math.ceil(filteredReports.length / pageSize);

    const handleDownload = () => {
        const header = "ID,Name,Email,Degree,Skill,Experience\n";
        const rows = filteredReports.map(emp =>
            `${emp.id},${emp.name},${emp.email},${emp.degree},${emp.skill},${emp.experience}`
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
                <i className="bi bi-people-fill me-2 text-primary"></i>
                Employee Report
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
                        <th>Email</th>
                        <th>Degree</th>
                        <th>Skill</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedReports.length > 0 ? (
                        paginatedReports.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.degree}</td>
                                <td>{emp.skill}</td>
                                <td>{emp.experience}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No Employee Found.</td>
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

export default Employeereport;
