import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Digitize = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your digitization logic here (e.g., API call)
    console.log(file);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="text-center mb-4">Digitize Birth Certificate</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">Upload the birth certificate you want to numerate</label>
          <input 
            type="file" 
            className="form-control" 
            id="fileInput" 
            accept="application/pdf" 
            onChange={handleFileChange} 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Digitize</button>
        
      </form>
    </div>
  );
};

export default Digitize;
