import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Appointment.css";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello SmileCare Dental Clinic,%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Preferred Date: ${formData.date}%0A
Service: ${formData.service}`;

    window.open(
      `https://wa.me/919353363341?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="appointment" id="appointment">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Book an Appointment
      </motion.h2>

      <motion.p
        className="appointment-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Fill in the details below and our team will contact you shortly.
      </motion.p>

      <motion.form
        className="appointment-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
        />

        <select
          name="service"
          required
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          <option>Teeth Cleaning</option>
          <option>Root Canal Treatment</option>
          <option>Dental Implants</option>
          <option>Braces & Aligners</option>
          <option>Teeth Whitening</option>
          <option>Child Dental Care</option>
        </select>

        <button type="submit">
          Confirm via WhatsApp
        </button>
      </motion.form>
    </section>
  );
};

export default Appointment;
