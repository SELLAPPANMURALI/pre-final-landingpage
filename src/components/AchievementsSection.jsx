

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="container my-5" ref={ref}>
      <h2 className="mb-4 text-center fw-bold">Our Achievements 🚀</h2>

      <div className="row text-center">

        <div className="col-md-3 mb-4">
          <h1 className="fw-bold text-primary">
            {inView && <CountUp end={5000} duration={3} />}+
          </h1>
          <p className="fs-5">Students Trained</p>
        </div>

        <div className="col-md-3 mb-4">
          <h1 className="fw-bold text-success">
            {inView && <CountUp end={50} duration={3} />}+
          </h1>
          <p className="fs-5">Educational Institutes</p>
        </div>

        <div className="col-md-3 mb-4">
          <h1 className="fw-bold text-warning">
            {inView && <CountUp end={20} duration={3} />}+
          </h1>
          <p className="fs-5">Cubesat Projects</p>
        </div>

        <div className="col-md-3 mb-4">
          <h1 className="fw-bold text-danger">
            {inView && <CountUp end={5} duration={3} />}+
          </h1>
          <p className="fs-5">Years Experience</p>
        </div>

      </div>
    </div>
  );
};

export default AchievementsSection;
