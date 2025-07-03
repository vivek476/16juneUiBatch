import React, { useState } from 'react';

function Companyreport() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [companyInfo, setCompanyInfo] = useState(null);

  const companies = [
    {
      name: 'VivS Infotech',
      type: 'Non-IT Company',
      contact: 'Mr. Vivek Solanki',
      city: 'Indore',
      address: '123 MG Road, Indore',
      email: 'vivek@vivs.com',
      mobile: '+91-9876543210',
      description: 'Business consulting and marketing solutions.',
    },
    {
      name: 'Shiwansh Solutions',
      type: 'IT Company',
      contact: 'Mr. Anil Kumar Sah',
      city: 'Mohali',
      address: '45 New Market, Mohali',
      email: 'info@shiwansh.com',
      mobile: '+91-9123456789',
      description: 'Software development and training services.',
    },
    {
      name: 'Intellect Tech',
      type: 'IT Company',
      contact: 'Ms. Neha Verma',
      city: 'Bhopal',
      address: '45 New Market, Bhopal',
      email: 'info@intellect.com',
      mobile: '+91-8547963210',
      description: 'Software development and IT solutions.',
    },
  ];

  const handleCompanyChange = (e) => {
    const name = e.target.value;
    setSelectedCompany(name);
    const selected = companies.find(comp => comp.name === name);
    setCompanyInfo(selected || null);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '550px' }}>
        <h4 className="mb-4 text-center">Company Report</h4>

        {/* Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Company</label>
          <select
            className="form-select"
            value={selectedCompany}
            onChange={handleCompanyChange}
          >
            <option value="">-- Choose Company --</option>
            {companies.map((company, index) => (
              <option key={index} value={company.name}>{company.name}</option>
            ))}
          </select>
        </div>

        {/* Report Info */}
        {companyInfo && (
          <div className="border-top pt-3 mt-3">
            <p><strong>Name:</strong> {companyInfo.name}</p>
            <p><strong>Type:</strong> {companyInfo.type}</p>
            <p><strong>Contact:</strong> {companyInfo.contact}</p>
            <p><strong>City:</strong> {companyInfo.city}</p>
            <p><strong>Address:</strong> {companyInfo.address}</p>
            <p><strong>Email:</strong> {companyInfo.email}</p>
            <p><strong>Mobile:</strong> {companyInfo.mobile}</p>
            <p><strong>Description:</strong> {companyInfo.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Companyreport;
