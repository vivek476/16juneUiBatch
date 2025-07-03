import React, { useState } from 'react';

function Employeereport() {
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Dummy employee data
  const employeeData = [
    {
      email: 'vivek@123.com',
      name: 'Vivek Solanki',
      degree: 'MCA',
      skill: '.Net Core',
      experience: '2 Years',
    },
    {
      email: 'rizwan@123.com',
      name: 'Rizwan Ahmad',
      degree: 'MCA',
      skill: 'React',
      experience: '1 Year',
    },
    {
      email: 'piyush@123.com',
      name: 'Piyush Sharma',
      degree: 'MCA',
      skill: 'Node.js',
      experience: 'Fresher',
    },
  ];

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setSelectedEmail(email);
    const employee = employeeData.find(emp => emp.email === email);
    setSelectedEmployee(employee || null);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <h4 className="mb-3 text-center">Employee Report</h4>

        {/* Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Employee by Email</label>
          <select
            className="form-select"
            value={selectedEmail}
            onChange={handleEmailChange}
          >
            <option value="">-- Select Email --</option>
            {employeeData.map((emp, idx) => (
              <option key={idx} value={emp.email}>{emp.email}</option>
            ))}
          </select>
        </div>

        {/* Employee Report */}
        {selectedEmployee && (
          <div className="mt-3 border-top pt-3">
            <p><strong>Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
            <p><strong>Degree:</strong> {selectedEmployee.degree}</p>
            <p><strong>Skill:</strong> {selectedEmployee.skill}</p>
            <p><strong>Experience:</strong> {selectedEmployee.experience}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Employeereport;
