import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Postnewjob() {
  const [list, setList] = useState([]);

  const [id, setId] = useState(0);
  const [jobtitle, setJobtitle] = useState("");
  const [degree, setDegree] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [detail, setDetail] = useState("");

  const [addUpdateModal, setAddUpdateModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const apiUrl = "http://localhost:5269/api/Postjobs";

  const clearForm = () => {
    setId(0);
    setJobtitle("");
    setDegree("");
    setSkill("");
    setExperience("");
    setSalary("");
    setVacancy("");
    setDetail("");
  };

  const handleAddUpdate = async () => {
    const customer = { id, jobtitle, degree, skill, experience, salary, vacancy, detail };
    try {
      if (id === 0) {
        await axios.post(apiUrl, customer);
        Swal.fire("Success", "Job posted successfully!", "success");
      } else {
        await axios.put(apiUrl, customer);
        Swal.fire("Success", "Job updated successfully!", "success");
      }
      setAddUpdateModal(false);
      clearForm();
      fetchData(); // refresh data
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      Swal.fire("Deleted!", "Job deleted successfully!", "success");
      fetchData(); // refresh data
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to delete!", "error");
    }
  };

  const handleEdit = (obj) => {
    setId(obj.id);
    setJobtitle(obj.jobtitle);
    setDegree(obj.degree);
    setSkill(obj.skill);
    setExperience(obj.experience);
    setSalary(obj.salary);
    setVacancy(obj.vacancy);
    setDetail(obj.detail);
    setAddUpdateModal(true);
  };

  const handleView = (obj) => {
    setId(obj.id);
    setJobtitle(obj.jobtitle);
    setDegree(obj.degree);
    setSkill(obj.skill);
    setExperience(obj.experience);
    setSalary(obj.salary);
    setVacancy(obj.vacancy);
    setDetail(obj.detail);
    setViewModal(true);
  };

  const handleDownload = () => {
    const csvContent =
      "Id,Name,Address,Mobile,Email,Password\n" +
      list.map(c => `${c.id},${c.jobtitle},${c.degree},${c.skill},${c.experience},${c.salary},${c.vacancy},${c.detail}`).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Postjobs.csv";
    link.click();
  };

  const fetchData = () => {
    axios.get(apiUrl).then(res => setList(res.data)).catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredList = list.filter(c =>
    c.jobtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedList = filteredList.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filteredList.length / pageSize);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-2 gap-2">
        <h4><i className="bi bi-people-fill me-2 text-primary fs-2"></i> Manage Jobs</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => { clearForm(); setAddUpdateModal(true); }}>
            <i className="bi bi-plus-lg"></i> Post New Job
          </button>
          <button className="btn btn-success" onClick={handleDownload}>📥 Export CSV</button>
        </div>
      </div>

      <div className="d-flex justify-content-between mb-3 gap-2">
        <input type="text" className="form-control" placeholder="🔍 Search by name..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} style={{ maxWidth: "250px" }} />
        <div>
          <label className="me-2">Items per page:</label>
          <select className="form-select d-inline-block w-auto" value={pageSize} onChange={(e) => { setPageSize(parseInt(e.target.value)); setCurrentPage(1); }}>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Id</th><th>Job Title</th><th>Degree</th><th>Skill</th><th>Experience</th><th>Salary</th><th>Vacancy</th><th>Detail</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedList.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.jobtitle}</td>
              <td>{c.degree}</td>
              <td>{c.skill}</td>
              <td>{c.experience}</td>
              <td>{c.salary}</td>
              <td>{c.vacancy}</td>
              <td>{c.detail}</td>
              <td>
                <button className="border-0 bg-transparent me-2" title="Edit" onClick={() => handleEdit(c)}><i className="bi bi-pencil-fill text-primary fs-5"></i></button>
                <button className="border-0 bg-transparent me-2" title="Delete" onClick={() => handleDelete(c.id)}><i className="bi bi-trash-fill text-danger fs-5"></i></button>
                <button className="border-0 bg-transparent" title="View" onClick={() => handleView(c)}><i className="bi bi-eye-fill text-success fs-5"></i></button>
              </td>
            </tr>
          ))}
          {paginatedList.length === 0 && (
            <tr><td colSpan="6" className="text-center">No data found.</td></tr>
          )}
        </tbody>
      </table>

      <nav>
        <ul className="pagination pagination-sm justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Add/Edit Modal */}
      {addUpdateModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title">{id === 0 ? "Post" : "Update"} Job Details</h5>
                  <button type="button" className="btn-close" onClick={() => setAddUpdateModal(false)}></button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control mb-2" placeholder="Job Title" value={jobtitle} onChange={(e) => setJobtitle(e.target.value)} />
                  <select style={{ padding: '8px', borderRadius: '4px', width: '100%' }} value={degree} onChange={(e) => setDegree(e.target.value)}>
                    <option value="">Select Degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="BSC">BSC</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Tech">M.Tech</option>
                  </select>

                  <select style={{ padding: '8px', borderRadius: '4px', width: '100%' }} value={skill} onChange={(e) => setSkill(e.target.value)}>
                    <option value="">Select Skill</option>
                    <option value="React.js">React.js</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Node.js</option>
                    <option value=".NET Core">.NET Core</option>
                    <option value="AWS">AWS</option>
                  </select>

                  <select style={{ padding: '8px', borderRadius: '4px', width: '100%' }} value={experience} onChange={(e) => setExperience(e.target.value)}>
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Year">0-1 Year</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>

                  <input type="text" className="form-control mb-2" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
                  <input type="text" className="form-control mb-2" placeholder="Vacancy" value={vacancy} onChange={(e) => setVacancy(e.target.value)} />
                  <input type="text" className="form-control mb-2" placeholder="Detail" value={detail} onChange={(e) => setDetail(e.target.value)} />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setAddUpdateModal(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleAddUpdate}>Post</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {/* View Modal */}
      {viewModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-info text-white">
                  <h5 className="modal-title">Posted Job</h5>
                  <button type="button" className="btn-close" onClick={() => setViewModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>Id:</strong> {id}</p>
                  <p><strong>Job Title:</strong> {jobtitle}</p>
                  <p><strong>Degree:</strong> {degree}</p>
                  <p><strong>Skill:</strong> {skill}</p>
                  <p><strong>Experience:</strong> {experience}</p>
                  <p><strong>Salary:</strong> {salary}</p>
                  <p><strong>Vacancy:</strong> {vacancy}</p>
                  <p><strong>Detail:</strong> {detail}</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setViewModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export default Postnewjob;