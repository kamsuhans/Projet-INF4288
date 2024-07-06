import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActsList = () => {
  const [acts, setActs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredActs, setFilteredActs] = useState([]);

  useEffect(() => {
    // Fetch acts from API
    const fetchActs = async () => {
      try {
        const response = await fetch('https://example.com/api/acts');
        const data = await response.json();
        setActs(data);
        setFilteredActs(data);
      } catch (error) {
        console.error('Error fetching acts:', error);
      }
    };
    fetchActs();
  }, []);

  useEffect(() => {
    setFilteredActs(
      acts.filter(act => 
        act.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, acts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ marginTop: '7rem' }}>
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Birth Certificate</h1>
          <input 
            type="text" 
            className="form-control w-25" 
            placeholder="Search acts..." 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
        </div>
        <div className="row">
          {filteredActs.map(act => (
            <div className="col-md-4 mb-4" key={act.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{act.title}</h5>
                  <p className="card-text">{act.description}</p>
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
