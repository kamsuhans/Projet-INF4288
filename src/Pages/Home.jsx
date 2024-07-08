import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="main">

{/* <!-- Hero Section --> */}
<section id="hero" class="hero section dark-background">

  <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

  <div class="container">

    <div class="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
      <div class="col-xl-6 col-lg-8">
        <h2>Your Saftey Our Responsibility<span>.</span></h2>
        <p>We are team of talented digital engineer</p>
      </div>
    </div>

    <div class="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
      <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div class="icon-box">
          <i class="bi bi-binoculars"></i>
          <h3><a href="">Authentification</a></h3>
        </div>
      </div>
      <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
        <div class="icon-box">
          <i class="bi bi-bullseye"></i>
          <h3><a href="">Accessibility</a></h3>
        </div>
      </div>
      <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
        <div class="icon-box">
          <i class="bi bi-fullscreen-exit"></i>
          <h3><a href="">Reduced Fraud</a></h3>
        </div>
      </div>
      <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
        <div class="icon-box">
          <i class="bi bi-card-list"></i>
          <h3><a href="">Digitization</a></h3>
        </div>
      </div>
      {/* <div class="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
        <div class="icon-box">
          <i class="bi bi-gem"></i>
          <h3><a href="">Nemos Enimade</a></h3>
        </div>
      </div> */}
    </div>

  </div>

</section>
{/* <!-- /Hero Section --> */}

{/* <!-- About Section --> */}
<section id="about" class="about section">

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="row gy-4">
      <div class="col-lg-6 order-1 order-lg-2">
        <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
      </div>
      <div class="col-lg-6 order-2 order-lg-1 content">
        <h3>Digitization and Authentication of birth certificates</h3>
        <p class="fst-italic">
        This platform aims to streamline the process of converting physical birth records into digital formats while ensuring their authenticity through advanced verification methods. By digitizing birth certificates, we enable easier access and management of vital records, enhancing efficiency in administrative processes and facilitating secure online transactions related to identity verification and legal purposes.        </p>
        <ul>
          <li><i class="bi bi-check2-all"></i> <span> Digitizing birth certificates makes them readily accessible anytime and anywhere, reducing the dependency on physical copies that can be lost or damaged.</span></li>
          <li><i class="bi bi-check2-all"></i> <span> Authentication mechanisms ensure the integrity and authenticity of digital birth certificates, mitigating risks associated with counterfeit documents and unauthorized alterations.</span></li>
        </ul>
        <p>
        The digitization and authentication of birth certificates not only modernize record-keeping practices but also enhance security and accessibility for individuals and organizations alike. By leveraging digital technologies, we can ensure that vital records are both conveniently accessible and highly secure, meeting the demands of a rapidly evolving digital age.       </p>
      </div>
    </div>

  </div>

</section>
{/* <!-- /About Section --> */}



{/* <!-- Features Section --> */}
<section id="features" class="features section">

  <div class="container">

    <div class="row gy-4">
      <div class="features-image col-lg-6" data-aos="fade-up" data-aos-delay="100"><img src="assets/img/features-bg.jpg" alt=""/></div>
      <div class="col-lg-6">

        <div class="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
          <i class="bi bi-archive flex-shrink-0"></i>
          <div>
            <h4>Accessibility for Remote Access:</h4>
            <p>Enables access from remote locations, facilitating global services.</p>
          </div>
        </div>
        {/* <!-- End Features Item--> */}

        <div class="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
          <i class="bi bi-basket flex-shrink-0"></i>
          <div>
            <h4>Enhanced Data Integrity: </h4>
            <p> Minimizes errors and discrepancies through digital record management systems.</p>
          </div>
        </div>
        {/* <!-- End Features Item--> */}

        <div class="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
          <i class="bi bi-broadcast flex-shrink-0"></i>
          <div>
            <h4>Reduced Fraud</h4>
            <p>Minimizes the risk of fraudulent activities related to document tampering.</p>
          </div>
        </div>
        {/* <!-- End Features Item--> */}

        <div class="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="500">
          <i class="bi bi-camera-reels flex-shrink-0"></i>
          <div>
            <h4>Cost Savings: </h4>
            <p> Reduces costs associated with physical storage and document handling.</p>
          </div>
        </div>
        {/* <!-- End Features Item--> */}

      </div>
    </div>

  </div>

</section>
{/* <!-- /Features Section --> */}

{/* <!-- Services Section --> */}
<section id="services" class="services section">

  {/* <!-- Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Services</h2>
    <p>Check our Services</p>
  </div>
  {/* <!-- End Section Title --> */}

  <div class="container">

    <div class="row gy-4">

      {/* <!-- End Service Item --> */}

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div class="service-item position-relative">
          <div class="icon">
            <i class="bi bi-easel"></i>
          </div>
          <Link to="/digitize" class="stretched-link">
            <h3>Digitization</h3>
          </Link>
          <p>Digitization involves converting physical birth certificates into electronic formats, facilitating easier access and storage.</p>
        </div>
      </div>
      {/* <!-- End Service Item --> */}

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        {/* <div class="service-item position-relative">
          <div class="icon">
            <i class="bi bi-bounding-box-circles"></i>
          </div>
          <a href="service-details.html" class="stretched-link">
            <h3>Asperiores Commodit</h3>
          </a>
          <p>Authentication ensures the validity and integrity of digital birth certificates through secure verification methods, safeguarding against fraud and unauthorized alterations.</p>
          <a href="service-details.html" class="stretched-link"></a>
        </div> */}
      </div>
      {/* <!-- End Service Item --> */}

      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div class="service-item position-relative">
          <div class="icon">
            <i class="bi bi-calendar4-week"></i>
          </div>
          <Link to="/authenticate" class="stretched-link">
            <h3>Authentication</h3>
          </Link>
          <p>Authentication ensures the validity and integrity of digital birth certificates through secure verification methods, safeguarding against fraud and unauthorized alterations.</p>
          <a href="service-details.html" class="stretched-link"></a>
        </div>
      </div>
      {/* <!-- End Service Item --> */}
    </div>
  </div>
</section>
{/* <!-- /Services Section --> */}

{/* <!-- Call To Action Section --> */}
<section id="call-to-action" class="call-to-action section dark-background">

  <img src="assets/img/cta-bg.jpg" alt=""/>

  <div class="container">
    <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
      <div class="col-xl-10">
        <div class="text-center">
          <h3>Call To Action</h3>
          <p>Experience the convenience and security of digitized and authenticated birth certificates today—transforming how you manage vital records online.</p>
          <a class="cta-btn" href="#">Call To Action</a>
        </div>
      </div>
    </div>
  </div>

</section>
{/* <!-- /Call To Action Section --> */}

{/* <!-- Portfolio Section --> */}
<section id="portfolio" class="portfolio section">

  {/* <!-- Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Portfolio</h2>
    <p>Check our Portfolio</p>
  </div>
  {/* <!-- End Section Title --> */}
  <div class="container">

    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

      <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="assets/img/masonry-portfolio/copiebirthcert.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Copie</h4>
            <p>Birth certificate copie</p>
            <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Digitize birth certificate</h4>
            <p>Digitize birth certificate</p>
            <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Digitize birth certificate</h4>
            <p>Digitize birth certificate</p>
            <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}

        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="assets/img/masonry-portfolio/secure.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>secure</h4>
            <p>Reduce the risk of forgery and fraudulent use.</p>
            <a href="assets/img/masonry-portfolio/secure.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
          <img src="assets/img/masonry-portfolio/service.jpg" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>Increased accessibility:</h4>
            <p>Secure and convenient access to birth certificates online.</p>
            <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        {/* <!-- End Portfolio Item --> */}
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
          <img src="assets/img/masonry-portfolio/improvee.png" class="img-fluid" alt=""/>
          <div class="portfolio-info">
            <h4>birht certificate</h4>
            <p>Birth certificate</p>
            <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
            <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
 
        {/* <!-- End Portfolio Item --> */}
      </div>
      {/* <!-- End Portfolio Container --> */}
    </div>

  </div>

</section>
{/* <!-- /Portfolio Section --> */}

{/* <!-- /Stats Section --> */}
{/* <!-- Testimonials Section --> */}
<section id="testimonials" class="testimonials section dark-background">

  <img src="assets/img/testimonials-bg.jpg" class="testimonials-bg" alt=""/>

  <div class="container" data-aos="fade-up" data-aos-delay="100">

    <div class="swiper init-swiper">
      <div class="swiper-wrapper">
      <div class="swiper-slide">
          <div class="testimonial-item">
            <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <div class="stars">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </div>
            <p>
              <i class="bi bi-quote quote-icon-left"></i>
              <span>Secure your birth certificates and make them easier to access. SANDO combats fraud and offers you convenient and secure online management.</span>
              <i class="bi bi-quote quote-icon-right"></i>
            </p>
          </div>
        </div>
        {/* <!-- End testimonial item --> */}
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>

</section>
{/* <!-- /Testimonials Section --> */}

{/* <!-- Team Section --> */}
<section id="team" class="team section">

  {/* <!-- Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Team</h2>
    <p>our Team</p>
  </div>
  {/* <!-- End Section Title --> */}
<div class="container">
    <div class="row gy-4">
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        <div class="team-member">
          <div class="member-img">
            <img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""/>
            <div class="social">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="member-info">
            <h4>Kamsu hans</h4>
            <span>Security Architect</span>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
        <div class="team-member">
          <div class="member-img">
            <img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""/>
            <div class="social">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="member-info">
            <h4>Nango Junior</h4>
            <span>Security Developer</span>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300" >
        <div class="team-member">
          <div class="member-img" style={{ height: '21rem' }} >
            <img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""/>
            <div class="social">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="member-info">
            <h4>Kaldadak Adama</h4>
            <span>Security Analysts</span>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
        <div class="team-member">
          <div class="member-img">
            <img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""/>
            <div class="social">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="member-info">
            <h4>Che Swansen</h4>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}
    </div>

  </div>
</section>
{/* <!-- /Team Section --> */}
{/* <!-- Contact Section --> */}
<section id="contact" class="contact section">
  {/* <!-- Section Title --> */}
  <div class="container section-title" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Contact Us</p>
  </div>
  {/* <!-- End Section Title --> */}
  <div class="container" data-aos="fade-up" data-aos-delay="100">
    {/* <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
      <iframe style="border:0; width: 100%; height: 270px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> */}
    {/* <!-- End Google Maps --> */}
    <div class="row gy-4">
      <div class="col-lg-4">
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
          <i class="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Address</h3>
            <p>University of Yaounde, 1</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
          <i class="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call Us</h3>
            <p>+237 690 729 455</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}
        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
          <i class="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>
        {/* <!-- End Info Item --> */}
      </div>

      <div class="col-lg-8">
        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">

            <div class="col-md-6">
              <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
            </div>

            <div class="col-md-6 ">
              <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
            </div>

            <div class="col-md-12">
              <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                 {/* <!-- End Contact Form --> */}
          </div>

            <div class="col-md-12">
              <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>
      </div>
      {/* <!-- End Contact Form --> */}
    </div>
  </div>
</section>
{/* <!-- /Contact Section --> */}
    </div>
  );
};

export default Home;
