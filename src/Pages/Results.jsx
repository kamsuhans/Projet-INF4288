import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = () => {
  const location = useLocation();
  const { file, result } = location.state;
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/authenticate');
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 mb-7">
      <h2 className="text-center mb-7">Authentication Results</h2>
      <div className="w-75">
        <h3>Results</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <h5>Uploaded Certificate:</h5>
              <embed src={URL.createObjectURL(file)} width="100%" height="500px" type="application/pdf" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <h5>Numerized Certificate:</h5>
              <embed src={result.cheminVersFichierNumeriser} width="100%" height="500px" type="application/pdf" />
            </div>
          </div>
        </div>
        <div className="mb-3 text-center">
          <h5 style={{ color: result.pourcentageDeSimilarite > 80 ? 'green' : 'red' }}>
            Matching Percentage: {result.pourcentageDeSimilarite}
          </h5>
        </div>
        <div className="mb-3 text-center">
          <h5 style={{ color: result.estAuthentique ? 'green' : 'red' }}>
            Is Authentic: {result.estAuthentique ? 'Yes' : 'No'}
          </h5>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={handleBack}>Back to Authenticate</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
