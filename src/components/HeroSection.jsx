
import React from 'react';
import { motion } from 'framer-motion';
import cubesatImage from '../assets/cubesat.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left - Image with animation */}
          <motion.div
            className="col-md-6 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={cubesatImage}
              alt="Cubesat"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px' }}
            />
          </motion.div>

          {/* Right - Content with animation */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="display-5 fw-bold">The Satellite STEM Kit</h1>
            <h4 className="text-muted">Cubesat Kit</h4>
            <p className="lead">
              World’s best Cubesat kit for students with live web UI interface
              to view data like temperature, pressure, altitude, acceleration,
              and many more remotely.
            </p>
            <div className="mb-3">
              <span className="text-warning fs-4">★★★★☆</span>{' '}
              <span className="text-muted">(103 Reviews)</span>
            </div>
            <p>
              <del className="text-danger fs-5 me-2">$249</del>
              <span className="text-success fs-4 fw-bold">$99</span>{' '}
              <span className="text-danger">(15% off)</span>
            </p>
            <p className="text-primary">In Stock • Worldwide Shipment</p>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <a
                href="https://wa.me/918122560012"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-lg"
              >
                Request Call Back
              </a>
              <button className="btn btn-success btn-lg">Buy Now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
