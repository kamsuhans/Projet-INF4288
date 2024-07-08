import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a birth certificate file.');
      return;
    }
    setLoading(true);

    const formData = new FormData();
    formData.append('acte', file);

    try {
      const response = await fetch('https://projet-inf4288.onrender.com/api/authenticate/', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      navigate('/results', { state: { file, result: data } });
    } catch (error) {
      console.error('Error authenticating the birth certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="text-center mb-4">Authentication  of Birth Certificate</h2>
      <form onSubmit={handleSubmit} className="w-50 mb-4">
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">Upload the birth certificate you want to Authenticate</label>
          <input 
            name='acte'
            type="file" 
            className="form-control" 
            id="fileInput" 
            accept="application/pdf" 
            onChange={handleFileChange} 
            disabled={loading}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={loading || !file}>
          {loading ? 'Authenticating...' : 'Authenticate'}
        </button>
      </form>
    </div>
  );
};

export default Authenticate;
