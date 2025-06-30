// src/data/satelliteCapabilities.js

export const picoSatCapabilities = [
  {
    icon: "Accelerometer",
    title: "Accelerometer & Gyroscope",
    description: "Tracks motion and orientation using MPU6050 (I2C)."
  },
  {
    icon: "UV Sensor",
    title: "UV Sensor",
    description: "Measures ultraviolet radiation with LTR-390UV-01."
  },
  {
    icon: "Pressure Sensor",
    title: "Pressure Sensor",
    description: "Monitors barometric pressure with BMP280."
  },
  {
    icon: "Temperature Sensor",
    title: "Temperature Sensor",
    description: "Tracks temperature variations using BMP280."
  }
];

export const canSatCapabilities = [
  {
    icon: "Accelerometer",
    title: "Accelerometer & Gyroscope",
    description: "Measures linear acceleration and angular velocity using MPU6050."
  },
  {
    icon: "Magnetometer",
    title: "Magnetometer",
    description: "Detects magnetic field strength with HMC5883L."
  },
  {
    icon: "Pressure Sensor",
    title: "Pressure & Temperature",
    description: "Reads atmospheric pressure and temperature with BMP280."
  },
  {
    icon: "Light Sensor",
    title: "Ambient Light Sensor",
    description: "Measures light intensity in lux using BH1750."
  }
];

export const navigationSatCapabilities = [
  {
    icon: "GPS Module",
    title: "GPS Module",
    description: "Real-time latitude, longitude, and altitude with Neo-8M."
  },
  {
    icon: "LoRa Module",
    title: "LoRa Communication",
    description: "Transmits data to ground stations using RA-02 module."
  }
];

export const chipSatCapabilities = [
  {
    icon: "Accelerometer",
    title: "Accelerometer & Gyroscope",
    description: "Motion and orientation tracking (MPU6050)."
  },
  {
    icon: "Thermal IR Sensor",
    title: "Thermal IR Array",
    description: "8×8 pixel thermal mapping with AMG8833."
  },
  {
    icon: "UV Sensor",
    title: "UV & Light Sensor",
    description: "Detects UV and ambient light (LTR-390UV-01)."
  },
  {
    icon: "LoRa Module",
    title: "LoRa Communication",
    description: "Long-range wireless telemetry with RA-02."
  }
];

export const radiationSatCapabilities = [
  {
    icon: "Cosmic Ray Sensor",
    title: "Cosmic Ray Sensor",
    description: "Detects cosmic rays using GSM30 sensor."
  },
  {
    icon: "Cosmic Ray Sensor",
    title: "SBM-20 Tube",
    description: "High-sensitivity cosmic ray detection and counting."
  },
  {
    icon: "LoRa Module",
    title: "ESP32 Data Logging",
    description: "Logs and transmits radiation data onboard."
  }
];

export const weatherSatCapabilities = [
  {
    icon: "Temperature Sensor",
    title: "Temperature Sensor",
    description: "Monitors temperature variations in the atmosphere."
  },
  {
    icon: "Humidity Sensor",
    title: "Humidity Sensor",
    description: "Tracks atmospheric humidity for weather studies."
  },
  {
    icon: "Pressure Sensor",
    title: "Pressure Sensor",
    description: "Measures barometric pressure in real time."
  }
];

export const demoSatCapabilities = [
  {
    icon: "Custom Payload",
    title: "Custom Payload Support",
    description: "Supports experimental payloads for student research."
  },
  {
    icon: "Telemetry",
    title: "Telemetry Module",
    description: "Collects and transmits mission data for analysis."
  }
];
