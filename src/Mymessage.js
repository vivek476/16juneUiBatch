import React, { useState } from 'react';

function Mymessage() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (selectedCompany && message.trim() !== '') {
      const newMessage = { company: selectedCompany, message };
      
      // Save message to localStorage
      const stored = JSON.parse(localStorage.getItem("messages")) || [];
      localStorage.setItem("messages", JSON.stringify([...stored, newMessage]));

      // Reset fields
      setSelectedCompany('');
      setMessage('');
      alert('Message sent successfully!');
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h5 className="mb-3 text-center">Send Message to Company</h5>
        <form onSubmit={handleSend}>
          <div className="mb-3">
            <label className="form-label">Select Company</label>
            <select
              className="form-select"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              required
            >
              <option value="" disabled>Select a company</option>
              <option value="VivS Infotech">VivS Infotech</option>
              <option value="Tech Solutions">Tech Solutions</option>
              <option value="CodeCraft Pvt Ltd">CodeCraft Pvt Ltd</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
              required
            />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mymessage;
