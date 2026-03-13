import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* CLINIC INFO */}
        <div className="footer-section">
          <h3>SmileCare Dental Clinic</h3>
          <p>
            Providing safe, modern, and gentle dental care across multiple
            branches with experienced professionals.
          </p>

          <p className="footer-timing">
            <strong>Clinic Timings</strong><br />
            Mon – Sat: 9:00 AM – 8:00 PM<br />
            Sunday: Closed
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 +91 99999 99999</p>
          <p>✉️ smilecaredental@gmail.com</p>

          <p>
            📍{" "}
            <a
              href="https://maps.app.goo.gl/qiKbhM6mtJfW4EyX9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#b2dfdb", textDecoration: "underline" }}
            >
              View Clinic Location on Google Maps
            </a>
          </p>
        </div>

        {/* GOOGLE MAP */}
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
