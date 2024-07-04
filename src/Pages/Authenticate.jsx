import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Authenticate = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://example.com/api/authenticate', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error authenticating the birth certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="text-center mb-4">Authentification of Birth Certificate</h2>
      <form onSubmit={handleSubmit} className="w-50 mb-4">
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">Upload the birth certificate you want to Authenticate</label>
          <input 
            type="file" 
            className="form-control" 
            id="fileInput" 
            accept="application/pdf" 
            onChange={handleFileChange} 
            disabled={loading}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Authenticating...' : 'Authenticate'}
        </button>
      </form>
      {result && (
        <div className="w-75">
          <h3>Results</h3>
          <div className="mb-3">
            <h5>Uploaded Certificate:</h5>
            <embed src={URL.createObjectURL(file)} width="100%" height="500px" type="application/pdf" />
          </div>
          <div className="mb-3">
            <h5>Matched Certificate:</h5>
            <embed src={result.matchedCertificateUrl} width="100%" height="500px" type="application/pdf" />
          </div>
          <div className="mb-3">
            <h5>Matching Percentage:</h5>
            <p>{result.matchingPercentage}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authenticate;
