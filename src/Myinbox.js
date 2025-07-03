import React, { useEffect, useState } from 'react';

function Myinbox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">My Inbox</h3>

      {messages.length === 0 ? (
        <div className="alert alert-info text-center">No messages received yet.</div>
      ) : (
        <ul className="list-group shadow">
          {messages.map((msg, index) => (
            <li key={index} className="list-group-item">
              <strong>From:</strong> You<br />
              <strong>To:</strong> {msg.company}<br />
              <strong>Message:</strong> {msg.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Myinbox;
