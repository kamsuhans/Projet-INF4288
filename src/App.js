import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Digitize from './Pages/Digitize';
import Authenticate from './Pages/Authenticate';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Logup from './Pages/Logup'
import ActsList from './Pages/ActsList';
import Results from './Pages/Results';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logup" element={<Logup />} />
            <Route path="/digitize" element={<Digitize />} />
            <Route path="/authenticate" element={<Authenticate />} />
            <Route path="/results" element={<Results />} />
            <Route path="/actslist" element={<ActsList/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
