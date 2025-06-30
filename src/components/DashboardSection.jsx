

import React from 'react';
import dashboardImage from '../assets/tem.gif';
import bgImage from '../assets/bg.avif';

const DashboardSection = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '600px', overflow: 'hidden' }}>
      
      {/* Actual Background Image as img tag */}
      <img 
        src={bgImage} 
        alt="Background" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />

      {/* Optional overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
         backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      ></div>

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '60px 20px', color: '#fff' }} className="container">
        <h2 className="mb-4 text-center fw-bold">Live User Interface</h2>

        <div className="row align-items-center g-4">

          <div className="col-md-6">
            <p>
              Unlike any other kit, ours comes with a dedicated, web-based dashboard that's all yours.
              Imagine the excitement of seeing live data stream in, including:
            </p>
            <ul>
              <li>GPS Position</li>
              <li>Altitude</li>
              <li>Pressure</li>
              <li>Acceleration</li>
              <li>Orientation</li>
              <li>And More!</li>
            </ul>
            <p>This real-time visualization platform transforms data collection into an engaging and interactive experience.</p>
          </div>

          <div className="col-md-6 text-center">
            <img 
              src={dashboardImage} 
              alt="Live Dashboard" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
