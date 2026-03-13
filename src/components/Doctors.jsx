import { motion } from "framer-motion";
import doctorImg from "../assets/doctors/doctor1.jpeg";
import "../styles/Doctors.css";

const Doctors = () => {
  return (
    <section className="doctors" id="doctor">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Doctor
      </motion.h2>

      <motion.p
        className="doctors-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        One experienced doctor serving all SmileCare Dental Clinic branches.
      </motion.p>

      <motion.div
        className="doctor-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="doctor-card framed"
          whileHover={{ y: -12, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {/* IMAGE */}
          <motion.img
            src={doctorImg}
            alt="Dr. Ananya Rao"
            className="doctor-img"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* CONTENT */}
          <h3>Dr. Sanjay</h3>
          <p>BDS</p>
          <span>2+ Years of Clinical Experience</span>

          <div className="doctor-branches">
            <strong>Available at:</strong>
            <br />
            • Tarikere Branch
            <br />
            • Bukkambudhi Branch
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Doctors;
