import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        MEENA DENTAL CARE
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#branches">Branches</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctor">Doctor</a></li>
        <li><a href="#appointment">Appointment</a></li>
      </ul>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;
