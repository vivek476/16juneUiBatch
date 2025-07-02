import React from 'react';

function Profilematch() {
  // Static matched profiles (UI only)
  const matchedProfiles = [
    { name: 'Vivek Solanki', degree: 'MCA', skill: '.Net Core' },
    { name: 'Rizwan Ahmad', degree: 'MCA', skill: '.Net Core' },
    { name: 'Piyush Sharma', degree: 'MCA', skill: '.Net Core' }
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Profile Match</h3>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Degree</th>
            <th>Skill</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {matchedProfiles.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.degree}</td>
              <td>{user.skill}</td>
              <td>
                <button className="btn btn-sm btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profilematch;
