import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActsList = () => {
  const [acts, setActs] = useState([]);
  const [searchParams, setSearchParams] = useState({
    region: '',
    department: '',
    arrondissement: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const fetchActs = async (query = '') => {
    setIsLoading(true); // Set loading to true when starting the fetch
    try {
      const response = await fetch(`https://projet-inf4288.onrender.com/api/search?${query}`);
      const data = await response.json();
      setActs(data.actes);
    } catch (error) {
      console.error('Error fetching acts:', error);
    }
    setIsLoading(false); // Set loading to false after the fetch is complete
  };

  useEffect(() => {
    fetchActs();
  }, []);

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
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Region" 
              name="region"
              value={searchParams.region} 
              onChange={handleInputChange} 
              disabled={isLoading} // Disable input while loading
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Department" 
              name="department"
              value={searchParams.department} 
              onChange={handleInputChange} 
              disabled={isLoading} // Disable input while loading
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Arrondissement" 
              name="arrondissement"
              value={searchParams.arrondissement} 
              onChange={handleInputChange} 
              disabled={isLoading} // Disable input while loading
            />
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Name" 
              name="name"
              value={searchParams.name} 
              onChange={handleInputChange} 
              disabled={isLoading} // Disable input while loading
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
        <div className="row">
          {acts.map((act, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  {/* <h5 className="card-title">{act.region}</h5> */}
                  <div className="card-text">
                    <embed src={act.cheminVersActe} width="100%" height="400px" type="application/pdf" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActsList;
