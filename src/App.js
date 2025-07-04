import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';
import Footer from './Footer';
import Welcome from './Employee/Welcome';
import Myaccount from './Employee/Myaccount';
import Jobmatches from './Employee/Jobmatches';
import Myappliedjob from './Employee/Myappliedjob';
import Myinbox from './Employee/Myinbox';
import Changepassword from './Employee/Changepassword';
import Logout from './Employee/Logout';

function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-dark text-light vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        <h4 className="mb-4">
          <i className="bi bi-grid-fill me-2"></i>
          Navigation
        </h4>
        <ul className="nav nav-pills flex-column gap-2">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}><i className="bi bi-speedometer2 me-2"></i> Dashboard<span className="badge bg-primary ms-auto">New</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/welcome" className={`nav-link d-flex align-items-center ${location.pathname === "/welcome" ? "active" : "text-light"}`}><i className="bi bi-emoji-smile me-2"></i> Welcome<span className="badge bg-success ms-auto">Hot</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/myaccount" className={`nav-link d-flex align-items-center ${location.pathname === "/myaccount" ? "active" : "text-light"}`}><i className="bi bi-person-fill me-2"></i> My Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/jobmatches" className={`nav-link d-flex align-items-center ${location.pathname === "/jobmatches" ? "active" : "text-light"}`}><i className="bi bi-briefcase me-2"></i> Job Matches</Link>
          </li>
          <li className="nav-item">
            <Link to="/myappliedjob" className={`nav-link d-flex align-items-center ${location.pathname === "/myappliedjob" ? "active" : "text-light"}`}><i className="bi bi-file-earmark-check me-2"></i> My Applied Job</Link>
          </li>
          <li className="nav-item">
            <Link to="/myinbox" className={`nav-link d-flex align-items-center ${location.pathname === "/myinbox" ? "active" : "text-light"}`}><i className="bi bi-envelope-fill me-2"></i> My Inbox</Link>
          </li>
          <li className="nav-item">
            <Link to="/changepassword" className={`nav-link d-flex align-items-center ${location.pathname === "/changepassword" ? "active" : "text-light"}`}><i className="bi bi-lock-fill me-2"></i> Change Password</Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className={`nav-link d-flex align-items-center ${location.pathname === "/logout" ? "active" : "text-light"}`}><i className="bi bi-box-arrow-right me-2"></i> Log Out</Link>
          </li>
          <li className="nav-item">
            <Link to="/sample1" className={`nav-link d-flex align-items-center ${location.pathname === "/sample1" ? "active" : "text-light"}`}><i className="bi bi-file-earmark-text me-2"></i> Sample 1</Link>
          </li>
          <li className="nav-item">
            <Link to="/sample2" className={`nav-link d-flex align-items-center ${location.pathname === "/sample2" ? "active" : "text-light" }`}><i className="bi bi-file-earmark-text me-2"></i> Sample 2<span className="badge bg-warning text-dark ms-auto">Updated</span></Link>
          </li>
          <li className="nav-item">
            <Link to="/sample3" className={`nav-link d-flex align-items-center ${location.pathname === "/sample3" ? "active" : "text-light"}`}><i className="bi bi-file-earmark-text me-2"></i> Sample 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/welcome" element={<Welcome />} />            
            <Route path="/myaccount" element={<Myaccount />} /> 
            <Route path="/jobmatches" element={<Jobmatches />} />
            <Route path="/myappliedjob" element={<Myappliedjob />} /> 
            <Route path="/myinbox" element={<Myinbox />} />    
            <Route path="/changepassword" element={<Changepassword />} /> 
            <Route path="/logout" element={<Logout />} />     
            <Route path="/sample1" element={<Sample1 />} />
            <Route path="/sample2" element={<Sample2 />} />
            <Route path="/sample3" element={<Sample3 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
