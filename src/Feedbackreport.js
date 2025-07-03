import React, { useState } from 'react';

function Feedbackreport() {
  const [selectedEmail, setSelectedEmail] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Sample feedback data
  const feedbackData = [
    {
      email: 'vivek@vivs.com',
      name: 'Vivek Solanki',
      comment: 'Great experience with the company!',
      rating: 5
    },
    {
      email: 'neha@shiwansh.com',
      name: 'Neha Verma',
      comment: 'Very supportive team and good culture.',
      rating: 4
    },
    {
      email: 'piyush@infotech.com',
      name: 'Piyush Sharma',
      comment: 'Had some issues initially but resolved quickly.',
      rating: 3
    }
  ];

  const handleSelect = (e) => {
    const selected = e.target.value;
    setSelectedEmail(selected);
    const userFeedback = feedbackData.find(f => f.email === selected);
    setFeedback(userFeedback || null);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '500px' }}>
        <h4 className="text-center mb-4">Feedback Report</h4>

        <div className="mb-3">
          <label className="form-label">Select Email</label>
          <select
            className="form-select"
            value={selectedEmail}
            onChange={handleSelect}
          >
            <option value="">-- Select Email --</option>
            {feedbackData.map((user, index) => (
              <option key={index} value={user.email}>{user.email}</option>
            ))}
          </select>
        </div>

        {feedback && (
          <div className="mt-4 border-top pt-3">
            <p><strong>Name:</strong> {feedback.name}</p>
            <p><strong>Email:</strong> {feedback.email}</p>
            <p><strong>Comment:</strong> {feedback.comment}</p>
            <p><strong>Rating:</strong> {feedback.rating} ⭐</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Feedbackreport;
