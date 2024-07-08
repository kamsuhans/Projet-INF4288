import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActsList = () => {
  const [acts, setActs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActs, setFilteredActs] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const fetchActs = async (searchParams = '') => {
    setIsLoading(true); // Set loading to true when starting the fetch
    try {
      const response = await fetch(`https://projet-inf4288.onrender.com/api/search?${searchParams}`);
      const data = await response.json();
      setActs(data.actes);
      setFilteredActs(data.actes);
    } catch (error) {
      console.error('Error fetching acts:', error);
    }
    setIsLoading(false); // Set loading to false after the fetch is complete
  };

  useEffect(() => {
    fetchActs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm) {
      params.append('searchTerm', searchTerm);
    }
    fetchActs(params.toString());
  };

  return (
    <div style={{ marginTop: '7rem' }}>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Research a Birth Certificate</h1>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              className="form-control me-2" 
              placeholder="Search acts..." 
              value={searchTerm} 
              onChange={handleSearchChange} 
              disabled={isLoading} // Disable input while loading
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>
        <div className="row">
          {filteredActs.map((act, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{act.region}</h5>
                  <p className="card-text">{act.cheminVersActe}</p>
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
