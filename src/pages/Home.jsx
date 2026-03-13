import { motion } from "framer-motion";
import "../styles/Home.css";
import Services from "../components/Services";
import heroDoctor from "../assets/hero-doctor.jpeg";
import logo from "../assets/logo.jpeg";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-wrapper">
          {/* LEFT */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logo}
              alt="SmileCare Dental Clinic Logo"
              className="hero-logo"
            />

            <h1>Advanced Dental Care for Your Perfect Smile</h1>

            <p>
              SmileCare Dental Clinic provides modern, safe, and gentle dental
              treatments across multiple locations.
            </p>

            <div className="hero-buttons">
              <a href="#appointment" className="primary-btn">
                Book Appointment
              </a>
              <a
                href="https://wa.me/919353363341"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={heroDoctor} alt="Dental Clinic Doctor" />
          </motion.div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="branches">
        <h2>Our Clinic Branches</h2>

        <div className="branches-grid">
          <div className="branch-card">
            <h3> MEENA DENTAL CARE– Main Branch</h3>
            <p>📍Kodicamp BH Road near mayura Hotel Tarikere , Karnataka</p>
            <p>📞 +91 99999 11111</p>
            <p>🕘 Mon – Sat: 9:00 AM – 8:00 PM</p>
          </div>

          <div className="branch-card">
            <h3>MEENA DENTAL CARE – City Branch</h3>
            <p>📍 Bukkambudhi Ajampura , Karantaka</p>
            <p>📞 +91 99999 22222</p>
            <p>🕘 Mon – Sat: 9:00 AM – 8:00 PM</p>
          </div>
        </div>
      </section>

      <Services />
    </>
  );
};

export default Home;
