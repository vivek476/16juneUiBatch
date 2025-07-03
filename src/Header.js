import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import './App.css';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const [signupRole, setSignupRole] = useState(null); // 'company' or 'employee'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark px-3" style={{ background: 'linear-gradient(to right,rgb(77, 175, 159),rgb(89, 99, 242))' }}>
        <Link className="navbar-brand" to="/">VivS Infotech</Link>

        {isLoggedIn ? (
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link hover-effect" to="/home">Country</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover-effect" to="/about">City</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover-effect" to="/contact">Employee</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-light me-2">Admin</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={() => setIsLoggedIn(false)}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white hover-effect" to="/contact">ContactUs</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-light me-2" onClick={() => {
                  setSignupDropdownOpen(prev => !prev);
                  setSignupRole(null);
                }}>
                  <FaUser /> Sign Up
                </button>

              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light" onClick={() => setShowLogin(true)}><FaSignInAlt /> Login</button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal d-block custom-modal-bg" tabIndex="-1" onClick={() => setShowLogin(false)}>
          <div className="modal-dialog modal-dialog-centered custom-modal-size" onClick={e => e.stopPropagation()}>
            <div className="modal-content custom-modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
              </div>
              <div className="modal-body">
                <form className="custom-login-form">
                  <h4 className="text-center text-success mb-4">Login</h4>
                  <div className="row">
                    <div className="mb-3 col-md-12">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="mb-3 col-md-12">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsLoggedIn(true);
                        setShowLogin(false);
                      }}
                      className="btn btn-success w-100"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      <div  className="d-flex justify-content-end px-3" style={{ position: 'relative', zIndex: 1050 }}>
        <div className="position-relative d-inline-block">
          {/* Signup Button */}
          <button
            className="btn btn-outline-light"
            onClick={() => {
              setSignupDropdownOpen(prev => !prev);
              setSignupRole(null); // Reset form if already opened
            }}
          >
            Sign Up
          </button>

          {/* Dropdown Options */}
          {signupDropdownOpen && !signupRole && (
            <ul
              className="dropdown-menu show"
              style={{
                position: 'absolute',
                top: '10%',
                right: 0,
                minWidth: '200px',
                zIndex: 1060,
              }}
            >
              <li>
                <button className="dropdown-item" onClick={() => setSignupRole('company')}>
                  Sign Up as Company
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setSignupRole('employee')}>
                  Sign Up as Employee
                </button>
              </li>
            </ul>
          )}

          {/* Inline Form Below Dropdown */}
          {signupRole && (
            <div
              className="bg-white border p-3 mt-2"
              style={{ width: '400px', position: 'absolute', top: '100%', left: 0, zIndex: 1000, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', borderRadius: '8px', }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0 text-dark">Sign Up as {signupRole === 'company' ? 'Company' : 'Employee'}</h6>
                <button className="btn-close" onClick={() => { setSignupRole(null); setSignupDropdownOpen(false); }}></button>
              </div>

              {/* Company Signup Form */}
              {signupRole === 'company' && (
                <div
                  className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1050 }}
                  onClick={() => {
                    setSignupRole(null);
                    setSignupDropdownOpen(false);
                  }}
                >
                  <div
                    className="bg-white rounded p-4"
                    style={{ width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-success mb-0">Company Sign Up</h4>
                      <button className="btn-close" onClick={() => {
                        setSignupRole(null);
                        setSignupDropdownOpen(false);
                      }} />
                    </div>

                    {/* Company Signup Form */}
                    <form className="row g-3">
                      {/* Company Name */}
                      <div className="col-md-6">
                        <label className="form-label">Company Name</label>
                        <input type="text" className="form-control" placeholder="Enter company name" />
                      </div>

                      {/* Contact Person */}
                      <div className="col-md-6">
                        <label className="form-label">Contact Person</label>
                        <input type="text" className="form-control" placeholder="Enter contact person" />
                      </div>

                      {/* Address */}
                      <div className="col-md-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                      </div>

                      {/* City */}
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="Enter city" />
                      </div>

                      {/* Pincode */}
                      <div className="col-md-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Enter pincode" />
                      </div>

                      {/* Mobile */}
                      <div className="col-md-6">
                        <label className="form-label">Mobile</label>
                        <input type="text" className="form-control" placeholder="Enter mobile number" />
                      </div>

                      {/* Type */}
                      <div className="col-md-6">
                        <label className="form-label">Type</label>
                        <select className="form-select">
                          <option selected disabled>Select type</option>
                          <option value="IT">IT Company</option>
                          <option value="NonIT">Non-IT Company</option>
                          <option value="Training">Training Institute</option>
                        </select>
                      </div>

                      {/* Detail */}
                      <div className="col-md-12">
                        <label className="form-label">Detail</label>
                        <textarea className="form-control" rows="2" placeholder="Company description or details"></textarea>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                      </div>

                      {/* Password */}
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                      </div>

                      {/* Confirm Password */}
                      <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" />
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-success w-100"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsLoggedIn(true);
                            setSignupRole(null);
                            setSignupDropdownOpen(false);
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}



              {/* Employee Signup Form */}
              {signupRole === 'employee' && (
                <div
                  className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1050,
                  }}
                  onClick={() => {
                    setSignupRole(null);
                    setSignupDropdownOpen(false);
                  }}
                >
                  <div
                    className="bg-white rounded p-4"
                    style={{ width: '90%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-success mb-0">Employee Sign Up</h4>
                      <button className="btn-close" onClick={() => {
                        setSignupRole(null);
                        setSignupDropdownOpen(false);
                      }} />
                    </div>

                    {/* Employee Signup Form */}
                    <form className="row g-3">
                      {/* First Name */}
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" placeholder="Enter first name" />
                      </div>

                      {/* Last Name */}
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter last name" />
                      </div>

                      {/* Address */}
                      <div className="col-md-12">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                      </div>

                      {/* City */}
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="Enter city" />
                      </div>

                      {/* Pincode */}
                      <div className="col-md-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Enter pincode" />
                      </div>

                      {/* Mobile */}
                      <div className="col-md-6">
                        <label className="form-label">Mobile</label>
                        <input type="text" className="form-control" placeholder="Enter mobile number" />
                      </div>

                      {/* Gender */}
                      <div className="col-md-6">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="male" value="Male" />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="other" value="Other" />
                          <label className="form-check-label" htmlFor="other">Other</label>
                        </div>
                      </div>

                      {/* Birth Date */}
                      <div className="col-md-12">
                        <label className="form-label">Birth Date</label>
                        <div className="d-flex gap-2">
                          <select className="form-select">
                            <option>DD</option>
                            {[...Array(31)].map((_, i) => <option key={i + 1}>{i + 1}</option>)}
                          </select>
                          <select className="form-select">
                            <option>MM</option>
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                              <option key={i + 1} value={i + 1}>{m}</option>
                            ))}
                          </select>
                          <select className="form-select">
                            <option>YYYY</option>
                            {[...Array(40)].map((_, i) => {
                              const year = new Date().getFullYear() - i;
                              return <option key={year}>{year}</option>
                            })}
                          </select>
                        </div>
                      </div>

                      {/* Degree */}
                      <div className="col-md-6">
                        <label className="form-label">Degree</label>
                        <select className="form-select">
                          <option selected disabled>Select degree</option>
                          <option value="bca">BCA</option>
                          <option value="btech">B.Tech</option>
                          <option value="mca">MCA</option>
                          <option value="mba">M.Tech</option>
                        </select>
                      </div>

                      {/* Skill */}
                      <div className="col-md-6">
                        <label className="form-label">Skill</label>
                        <select className="form-select">
                          <option selected disabled>Select skill</option>
                          <option value="react">React</option>
                          <option value="node">Node.js</option>
                          <option value="dotnet">.Net Core</option>
                          <option value="sql">SQL / Database</option>
                        </select>
                      </div>

                      {/* Pass Year */}
                      <div className="col-md-6">
                        <label className="form-label">Passing Year</label>
                        <select className="form-select">
                          <option selected disabled>Select year</option>
                          {[...Array(10)].map((_, i) => {
                            const year = new Date().getFullYear() - i;
                            return <option key={year}>{year}</option>
                          })}
                        </select>
                      </div>

                      {/* Experience */}
                      <div className="col-md-6">
                        <label className="form-label">Experience</label>
                        <select className="form-select">
                          <option selected disabled>Select experience</option>
                          <option value="0">Fresher</option>
                          <option value="1">1 Year</option>
                          <option value="2">2 Years</option>
                          <option value="3">3+ Years</option>
                        </select>
                      </div>

                      {/* Detail */}
                      <div className="col-md-12">
                        <label className="form-label">Detail</label>
                        <textarea className="form-control" rows="2" placeholder="Personal details or profile summary"></textarea>
                      </div>

                      {/* Email */}
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                      </div>

                      {/* Password */}
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                      </div>

                      {/* Confirm Password */}
                      <div className="col-md-6">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" />
                      </div>

                      {/* Submit */}
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-success w-100"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsLoggedIn(true);
                            setSignupRole(null);
                            setSignupDropdownOpen(false);
                          }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </div>


    </>
  );
}

export default Header;
