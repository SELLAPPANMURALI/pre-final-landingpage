import React from 'react';
import HeroSection from '../components/HeroSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import DashboardSection from '../components/DashboardSection';
import AchievementsSection from '../components/AchievementsSection';
import SatelliteCollectionSection from '../components/SatelliteCollectionSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CapabilitiesSection />
      <DashboardSection />
      <SatelliteCollectionSection />
      <AchievementsSection />

    </div>
  );
};

export default HomePage;
