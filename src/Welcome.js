import React, { useState } from 'react';

function Welcome() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); // base64 URL
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Welcome</h3>

      <div className="row">
        <div className="col-md-4">
          {/* Profile Preview */}
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Profile"
              className="img-thumbnail mb-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          ) : (
            <div className="border border-secondary rounded mb-3 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', backgroundColor: '#f0f0f0' }}>
              <span className="text-muted">No Image</span>
            </div>
          )}

          {/* Choose File */}
          <input type="file" accept="image/*" className="form-control mb-2" onChange={handleFileChange} />

          {/* Upload Button */}
          <button className="btn btn-success w-100" onClick={handleUpload}>
            Upload Photo
          </button>
        </div>

        <div className="col-md-8">
          <h4>Hello, User!</h4>
          <p>Welcome to your dashboard. You can update your profile photo on the left.</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
