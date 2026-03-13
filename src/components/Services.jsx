import { motion } from "framer-motion";
import services from "../data/services";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Dental Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
