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

    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 mb-7 ">
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
        <h5 style={{ color: result.pourcentageDeSimilarite >= 80 ? 'green' : 'red' }}>
            Matching Percentage: {result.pourcentageDeSimilarite}
          </h5>
        </div>
        <div className="mb-3 text-center">
          <h5 style={{ color: result.estAuthentique ? 'green' : 'red' }}>
            Is Authentic: {result.estAuthentique ? 'Yes' : 'No'}
          </h5>
        </div>
        <div className="mb-3 text-center">
        <h5 className="card-title mt-4">Similarity</h5>
          {result.diffence && (
            <div className="card-text">
            <h5>Province: {result.diffence.region}</h5>
          <h5>Division: {result.diffence.departement}</h5>
          <h5>Subdivision: {result.diffence.arrondissement}</h5>
          <h5>No: {result.diffence.numeroActe}</h5>
          <h5>Child name: {result.diffence.nomEnfant}</h5>
          <h5>Born on: {result.diffence.dateNaissanceEnfant}</h5>
          <h5>Born at: {result.diffence.lieuNaissanceEnfant}</h5>
          <h5>sex: {result.diffence.sexe}</h5>
          <h5>Fathers names: {result.diffence.nomPere}</h5>
          <h5>Fathers birth place: {result.diffence.lieuNaissancePere}</h5>
          <h5>Fathers Resident: {result.diffence.residencePere}</h5>
          <h5>Fathers Professsion: {result.diffence.professionPere}</h5>
          <h5>Mothers names: {result.diffence.nomMere}</h5>
          <h5>Mothers birth place: {result.diffence.lieuNaissanceMere}</h5>
          <h5>Mothers birth date: {result.diffence.dateNaissanceMere}</h5>
          <h5>Mothers Resident: {result.diffence.residenceMere}</h5>
          <h5>Mothers Professsion: {result.diffence.professionMere}</h5>
          <h5>Drawn on the: {result.diffence.dresseLe}</h5>
          <h5>In accordance with the declaration of: {result.diffence.surLaDeclarationDe1}</h5>
          <h5> {result.diffence.surLaDeclarationDe2}</h5>
          <h5>By us: {result.diffence.parNous1}</h5>
          <h5> {result.diffence.parNous2}</h5>
          <h5>Civil status Registrer for: {result.diffence.etatCivilCentreDe}</h5>
          <h5>In the presence of: {result.diffence.assisteDe}</h5>
          <h5>Total: {result.diffence.total}</h5>
            </div>
          )}
        </div> 
        <div className="text-center mt-4">
          <button className="btn btn-secondary" onClick={handleBack}>Back to Authenticate</button>
        </div>
      </div>
    </div>
  );
};

export default Results;