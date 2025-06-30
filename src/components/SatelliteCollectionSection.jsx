// import React, { useState } from 'react';
// import '../styles/SatelliteCollectionSection.css';
// import SatelliteCapabilitiesGrid from './SatelliteCapabilitiesGrid';

// import {
//   canSatCapabilities,
//   picoSatCapabilities,
//   navigationSatCapabilities,
//   chipSatCapabilities,
//   radiationSatCapabilities,
//   weatherSatCapabilities,
//   demoSatCapabilities
// } from '../components/data/satelliteCapabilities';

// const satellites = [
//   {
//     name: "Pico Satellite",
//     image: "../src/assets/picosat.jpg",
//     details: "Ultra-compact, solar-powered satellite for environmental monitoring and experimentation.",
//     capabilityKey: "Pico Satellite"
//   },
//   {
//     name: "Can Sat",
//     image: "../src/assets/cansat.jpg",
//     details: "Miniature, can-shaped satellite for atmospheric and environmental data collection.",
//     capabilityKey: "Can Sat"
//   },
//   {
//     name: "Navigation Sat",
//     image: "../src/assets/navigation_sat.jpg",
//     details: "Compact stack-based satellite for GPS location tracking and LoRa telemetry.",
//     capabilityKey: "Navigation Sat"
//   },
//   {
//     name: "CHIP Sat",
//     image: "../src/assets/chip_sat.jpg",
//     details: "Miniature satellite with a high-performance sensor suite and LoRa communication.",
//     capabilityKey: "CHIP Sat"
//   },
//   {
//     name: "Radiation Sat",
//     image: "../src/assets/radiation_sat.jpg",
//     details: "Dedicated platform for detecting atmospheric and cosmic ionizing radiation.",
//     capabilityKey: "Radiation Sat"
//   },
//   {
//     name: "Weather Sat",
//     image: "../src/assets/weather_sat.jpg",
//     details: "Satellite prototype for weather and atmospheric research.",
//     capabilityKey: "Weather Sat"
//   },
//   {
//     name: "Demo Research Sat",
//     image: "../src/assets/demo_sat.jpg",
//     details: "R&D prototype for advanced student research (details to be updated).",
//     capabilityKey: "Demo Research Sat"
//   }
// ];

// // Map the satellite's name to the capability array
// const capabilityMap = {
//   "Pico Satellite": picoSatCapabilities,
//   "Can Sat": canSatCapabilities,
//   "Navigation Sat": navigationSatCapabilities,
//   "CHIP Sat": chipSatCapabilities,
//   "Radiation Sat": radiationSatCapabilities,
//   "Weather Sat": weatherSatCapabilities,
//   "Demo Research Sat": demoSatCapabilities
// };

// const SatelliteCollectionSection = () => {
//   const [selected, setSelected] = useState(null);

//   // Show close/collapse button only if a satellite is selected
//   return (
//     <section className="satellite-collection-section container py-5 mb-4">
//       <h2 className="text-center fw-bold mb-4" style={{ color: "#38b6ff" }}>
//         Explore more from our collection
//       </h2>
//       <div className="row g-4 justify-content-center">
//         {satellites.map((sat, i) => (
//           <div className="col-6 col-md-3" key={i}>
//             <div
//               className={`sat-card ${selected === sat.name ? 'sat-selected' : ''}`}
//               onClick={() => setSelected(sat.name)}
//               style={{ cursor: "pointer" }}
//             >
//               <img src={sat.image} alt={sat.name} className="sat-img" />
//               <div className="sat-overlay">
//                 <h5 className="fw-bold">{sat.name}</h5>
//                 <p style={{ fontSize: "0.95em" }}>{sat.details}</p>
//                 <div className="text-info small text-center" style={{ opacity: 0.7 }}>
//                   Click to view capabilities
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selected && (
//         <div className="mt-5">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h3 className="fw-bold" style={{ color: "#38b6ff" }}>
//               {selected} Capabilities
//             </h3>
//             <button
//               className="btn btn-outline-primary"
//               style={{ fontSize: "0.93em" }}
//               onClick={() => setSelected(null)}
//             >
//               Close
//             </button>
//           </div>
//           <SatelliteCapabilitiesGrid capabilities={capabilityMap[selected]} />
//         </div>
//       )}
//     </section>
//   );
// };

// export default SatelliteCollectionSection; ../components/data/satelliteCapabilities
























import React, { useState } from 'react';
import '../styles/SatelliteCollectionSection.css';
import SatelliteCapabilitiesGrid from './SatelliteCapabilitiesGrid';

import {
  canSatCapabilities,
  picoSatCapabilities,
  navigationSatCapabilities,
  chipSatCapabilities,
  radiationSatCapabilities,
  weatherSatCapabilities,
  demoSatCapabilities
} from '../components/data/satelliteCapabilities';

const satellites = [
  {
    name: "Pico Satellite",
    image: "/assets/picosat.jpg",
    details: "Ultra-compact, solar-powered satellite for environmental monitoring and experimentation.",
    capabilityKey: "Pico Satellite"
  },
  {
    name: "Can Sat",
    image: "/assets/cansat.jpg",
    details: "Miniature, can-shaped satellite for atmospheric and environmental data collection.",
    capabilityKey: "Can Sat"
  },
  {
    name: "Navigation Sat",
    image: "/assets/navigation_sat.jpg",
    details: "Compact stack-based satellite for GPS location tracking and LoRa telemetry.",
    capabilityKey: "Navigation Sat"
  },
  {
    name: "CHIP Sat",
    image: "/assets/chip_sat.jpg",
    details: "Miniature satellite with a high-performance sensor suite and LoRa communication.",
    capabilityKey: "CHIP Sat"
  },
  {
    name: "Radiation Sat",
    image: "/assets/radiation_sat.jpg",
    details: "Dedicated platform for detecting atmospheric and cosmic ionizing radiation.",
    capabilityKey: "Radiation Sat"
  },
  {
    name: "Weather Sat",
    image: "/assets/weather_sat.jpg",
    details: "Satellite prototype for weather and atmospheric research.",
    capabilityKey: "Weather Sat"
  },
  {
    name: "Demo Research Sat",
    image: "/assets/demo_sat.jpg",
    details: "R&D prototype for advanced student research (details to be updated).",
    capabilityKey: "Demo Research Sat"
  }
];

const capabilityMap = {
  "Pico Satellite": picoSatCapabilities,
  "Can Sat": canSatCapabilities,
  "Navigation Sat": navigationSatCapabilities,
  "CHIP Sat": chipSatCapabilities,
  "Radiation Sat": radiationSatCapabilities,
  "Weather Sat": weatherSatCapabilities,
  "Demo Research Sat": demoSatCapabilities
};

const CARDS_PER_ROW = 4;

const SatelliteCollectionSection = () => {
  const [hovered, setHovered] = useState(null);

  // Split the satellites into rows
  const rows = [];
  for (let i = 0; i < satellites.length; i += CARDS_PER_ROW) {
    rows.push(satellites.slice(i, i + CARDS_PER_ROW));
  }

  return (
    <section className="satellite-collection-section container py-5 mb-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#38b6ff" }}>
        Explore more from our collection
      </h2>
      <div>
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="row g-4 justify-content-center">
              {row.map((sat, colIdx) => (
                <div
                  className="col-12 col-sm-6 col-md-3"
                  key={sat.name}
                  onMouseEnter={() => setHovered(sat.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="sat-card"
                    style={{
                      cursor: "pointer",
                      height: 320,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      position: "relative",
                      //marginBottom:"0px"
                    
                    }}
                  >
                    <div style={{ width: "100%", flex: "0 0 auto" }}>
                      <img src={sat.image} alt={sat.name} className="sat-img" />
                    </div>
                    <div
                      className="sat-name text-center fw-bold"
                      style={{
                        color: "#fff",
                        fontSize: "1.12em",
                        letterSpacing: "0.5px",
                        marginTop: "50px",
                        marginBottom: "8px"
                      }}
                    >
                      {sat.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Show capabilities grid directly under the hovered card, for this row */}
            {row.some((sat) => hovered === sat.name) && (
              <div
                className="capabilities-expand animated-expand"
                style={{
                  overflow: "hidden",
                  transition: "max-height 0.5s cubic-bezier(.47,1.64,.41,.8)",
                  maxHeight: 600,
                  margin: "0 0 20px 0",
                  background: "#232946",
                  borderRadius: "18px",
                  boxShadow: "0 2px 14px 0 #12172622",
                  padding: "28px 18px"
                }}
              >
                {row.map((sat) =>
                  hovered === sat.name ? (
                    <div key={sat.name}>
                      <div className="fw-bold mb-3" style={{ color: "#38b6ff", fontSize: "1.15em" }}>
                        {sat.name} Capabilities
                      </div>
                      <div>
                        <SatelliteCapabilitiesGrid capabilities={capabilityMap[sat.capabilityKey]} />
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default SatelliteCollectionSection;













