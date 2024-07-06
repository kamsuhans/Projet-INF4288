import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    closeDropdown();
  };

  return (
    <div id="header" className={`header d-flex align-items-center fixed-top ${isMobileMenuOpen ? 'mobile-nav-active' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1 className="sitename">DAB</h1>
          <span>.</span>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><HashLink smooth to="/#hero" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>Home</HashLink></li>
            <li><HashLink smooth to="/#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>About</HashLink></li>
            <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
              <a href="#services" onClick={toggleDropdown}>
                <span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul className={isDropdownOpen ? 'active' : ''}>
                <li><Link to="/digitize" onClick={closeDropdown}>Digitalise</Link></li>
                <li><Link to="/authenticate" onClick={closeDropdown}>Authentificate</Link></li>
                <li><Link to="/ActsList" onClick={closeDropdown}>Birth certificates</Link></li>

              </ul>
            </li>
            <li><HashLink smooth to="/#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>Contact</HashLink></li>
            <li><HashLink smooth to="/#portfolio" className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>Portfolio</HashLink></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileMenu}></i>
        </nav>

        <Link to="/login" className="btn-getstarted">Get Started</Link>
      </div>
    </div>
  );
}

export default Navbar;
