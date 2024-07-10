import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  
  return (
    <div id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">SANDO</span>
              </a>
              <div className="footer-contact pt-3">
                <p>University of</p>
                <p>Yaounde, 1</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+237 690 729 455</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Footer</a></li>
                <li><i className="bi bi-chevron-right"></i> <HashLink smooth to="/#about" >About</HashLink></li>
                <li><i className="bi bi-chevron-right"></i> <HashLink smooth to="/#services" >Services</HashLink></li>
                <li><i className="bi bi-chevron-right"></i> <HashLink smooth to="/#contact" >Contact</HashLink></li>
                <li><i className="bi bi-chevron-right"></i> <HashLink smooth to="/#portfolio" >Portolio</HashLink></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/digitize">Digitalise</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/authenticate" >Authentificate</Link></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Research</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form>
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">SANDO</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you've purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
