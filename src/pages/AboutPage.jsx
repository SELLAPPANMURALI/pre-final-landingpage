import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/space-bg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '60px 20px',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.h1
          className="mb-5 text-center fw-bold"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
        >
          About Space Zone India
        </motion.h1>

        <motion.div
          className="mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="fw-semibold mb-3">Who We Are</h3>
          <p>
            Space Zone India is a leading organization in the field of space education, satellite technology, and research-based learning.
            We empower students, researchers, and institutions to explore the world of space science through real-world, hands-on experience.
          </p>
        </motion.div>

        <motion.div
          className="mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="fw-semibold mb-3">Our Mission</h3>
          <p>
            Our mission is to break the barriers of space technology by simplifying complex concepts and making space education accessible to all.
            We strongly believe that space is for everyone, and we help build future scientists and engineers through practical learning models.
          </p>
        </motion.div>

        <motion.div
          className="mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="fw-semibold mb-3">What We Offer</h3>
          <p className="fs-5">
            At Space Zone India, we provide hands-on Cubesat kits that allow students to build, program, and test their own miniature satellites, fostering experiential learning. Our satellite launch training equips participants with the knowledge and skills needed to understand launch operations and payload integration.
          </p>
          <p className="fs-5">
            We also offer real-time web dashboards that visualize satellite sensor data, making telemetry accessible and meaningful for analysis. Our satellite telemetry and tracking services ensure continuous and accurate communication between satellites and ground control, essential for any successful mission.
          </p>
          <p className="fs-5">
            Our research programs are tailored for students and colleges, providing a platform to innovate and collaborate on space technology projects. Additionally, we host interactive workshops, seminars, and conferences to spread awareness, share knowledge, and inspire the next generation of space explorers.
          </p>
        </motion.div>

        <motion.div
          className="mb-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="fw-semibold mb-3">Our Vision</h3>
          <p>
            To create a globally recognized platform where students and institutions can explore, innovate, and contribute to the future of space research.
            We aim to make India a global hub for student satellite development and space science education.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="fw-bold">
            "Space is no longer the future — it is the present. Join us and be part of India’s Space Revolution 🚀"
          </h4>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
