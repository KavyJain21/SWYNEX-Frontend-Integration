
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Wanderlust<span>.</span></h2>
          <p>Find your place. Make memories.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <p>Popular destinations</p>
            <p>Unique stays</p>
            <p>Travel inspiration</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Help Centre</p>
            <p>Contact us</p>
            <p>FAQs</p>
          </div>

          <div>
            <h4>About</h4>
            <p>Our story</p>
            <p>Privacy policy</p>
            <p>Terms of service</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Wanderlust. All rights reserved.</p>

        <div className="social-links">
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
