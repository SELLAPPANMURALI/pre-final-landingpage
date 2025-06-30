


import React from 'react';
import '../styles/CapabilitiesSection.css';
import { motion } from 'framer-motion';

const capabilities = [
  { icon: '💧', title: 'Humidity', desc: 'Track humidity of the atmosphere in high resolution with sensors onboard.' },
  { icon: '🌡️', title: 'Temperature', desc: 'Track temperature of the atmosphere in high resolution with sensors onboard.' },
  { icon: '🟢', title: 'Altitude', desc: 'Track altitude conditions in high resolution with sensors onboard.' },
  { icon: '⚡', title: 'Acceleration', desc: 'Real-time acceleration data for motion analysis and control.' },
  { icon: '🧭', title: 'Gyrometer', desc: 'Real-time gyro data transmission for precise attitude control.' },
  { icon: '🛰️', title: 'GPS', desc: 'Real-time GPS data for accurate positioning and navigation.' },
  { icon: '📶', title: 'RF 433Mhz', desc: 'RF 433MHz data transmission for reliable mission communication.' },
  { icon: '🔆', title: 'Light Intensity', desc: 'Measures ambient light in lux.' },
  { icon: '☀️', title: 'UV Radiation', desc: 'Monitors UV-A and UV-B exposure.' },
  { icon: '💨', title: 'Gas Detector', desc: 'Detects air composition (CO₂, NH₃, etc.) using .' },
  { icon: '🧲', title: 'Magnetometer', desc: 'Tracks Earth’s magnetic field for orientation.' },
  { icon: '📉', title: 'Baro. Pressure', desc: 'Track barometric pressure of the atmosphere with high resolution sensors.' },
];

const CapabilitiesSection = () => {
  return (
    <section className="capabilities-section py-5 px-3">
      <h2 className="text-center fw-bold mb-4">Cubesat Capabilities</h2>
      <div className="capabilities-grid">
        {capabilities.map((cap, index) => (
          <motion.div
            className="capability-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="cap-icon">{cap.icon}</div>
            <h5 className="fw-bold">{cap.title}</h5>
            <p>{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
