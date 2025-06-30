import React from 'react';

const icons = {
  Accelerometer: "⚡",
  Gyroscope: "🧭",
  "UV Sensor": "🌞",
  "Pressure Sensor": "🏔️",
  "Temperature Sensor": "🌡️",
  Magnetometer: "🧲",
  "Light Sensor": "💡",
  "Cosmic Ray Sensor": "☢️",
  "LoRa Module": "📶",
  "GPS Module": "📡",
  "Thermal IR Sensor": "🌡️",
  "Humidity Sensor": "💧",
  "Gas Detector": "🌫️",
  "Custom Payload": "🛰️",
  "Telemetry": "📡",
  Default: "🔬"
};

const SatelliteCapabilitiesGrid = ({ capabilities }) => (
  <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center satellite-capabilities-grid">
    {capabilities.map((cap, i) => (
      <div className="col" key={i}>
        <div className="capability-card text-center p-3 h-100" style={{background: "#232946", borderRadius: "16px", minHeight: 140}}>
          <div style={{fontSize: "2.1em", marginBottom: "0.3em"}}>{icons[cap.icon] || icons.Default}</div>
          <div className="fw-bold">{cap.title}</div>
          <div style={{fontSize: "0.98em", marginTop: 6, color: "#b3bed7"}}>{cap.description}</div>
        </div>
      </div>
    ))}
  </div>
);

export default SatelliteCapabilitiesGrid;
