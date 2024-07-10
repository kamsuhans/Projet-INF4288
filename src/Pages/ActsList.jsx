import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActsList = () => {
  const [acts, setActs] = useState([]); // Initialise avec un tableau vide
  const [searchParams, setSearchParams] = useState({
    region: '',
    department: '',
    arrondissement: '',
    nomEnfant: '',
    numeroActe:''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchActs = async (query = '') => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch(`https://projet-inf4288.onrender.com/api/search?${query}`);
      const data = await response.json();
      if (response.ok) {
        setActs(data.actes || []);
      } else {
        setError(data.message || 'Error fetching acts');
      }
    } catch (error) {
      setError('Error fetching acts');
      console.error('Error fetching acts:', error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.keys(searchParams).forEach(key => {
      if (searchParams[key]) {
        params.append(key, searchParams[key]);
      }
    });
    fetchActs(params.toString());
  };

  return (
    <div style={{ marginTop: '7rem' }}>
      <div className="container my-4">
        <h1 className="text-center my-4">Research a Birth Certificate</h1>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <form className="d-flex w-100" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Region" 
              name="region"
              value={searchParams.region} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Department" 
              name="department"
              value={searchParams.department} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Arrondissement" 
              name="arrondissement"
              value={searchParams.arrondissement} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Identification number" 
              name="numeroActe"
              value={searchParams.numeroActe} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Name" 
              name="nomEnfant"
              value={searchParams.nomEnfant} 
              onChange={handleInputChange} 
              disabled={isLoading}
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {acts.length > 0 ? ( // Vérifiez si acts est un tableau non vide avant de mapper
            acts.map((act, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{act.region}</h5>
                    <div className="card-text">
                      <p>Numero Acte: {act.numeroacte}</p>
                      <p>Departement: {act.departement}</p>
                      <p>Arrondissement: {act.arrondissement}</p>
                      <p>Nom Enfant: {act.nomenfant}</p>
                      <p>Date Naissance Enfant: {act.datenaissanceenfant}</p>
                      <p>Lieu Naissance Enfant: {act.lieunaissanceenfant}</p>
                      <p>Sexe: {act.sexe}</p>
                      <p>Nom du pere: {act.nompere}</p>
                      <p>Lieu de naissance du pere: {act.lieunaissancepere}</p>
                      <p>La residence du pere: {act.residencepere}</p>
                      <p>Profession du pere: {act.professionpere}</p>
                      <p>Nom de la mere: {act.nommere}</p>
                      <p>Lieu Naissance de la mere: {act.lieunaissancemere}</p>
                      <p>Date de naissance de la mere: {act.lieunaissancemere}</p>
                      <p>Residence de la mere: {act.residencemere}</p>
                      <p>Proffesion de la mere: {act.professionmere}</p>
                      <p>Dresse le: {act.dressele}</p>
                      <p>Sur la declaration de 1: {act.surladeclarationde1}</p>
                      <p>Sur la declaration de 2: {act.surladeclarationde1}</p>
                      <p>Par nous 1: {act.parnous1}</p>
                      <p> {act.parnous}</p>
                      <p>Etat civil centre de : {act.etatcivilcentrede}</p>
                      <p>Assiste de : {act.assistede}</p>

                      <embed src={act.cheminversacte} width="100%" height="400px" type="application/pdf" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !isLoading && <div className="col-12 text-center">search for a birth Certificate</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActsList;
