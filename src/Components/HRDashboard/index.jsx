import React, { useState } from 'react';
import SearchCandidate from './Database/SearchCandidate';
import SaveSearch from './Database/SaveSearch';
import Reports from './Report/Reports';
import Sidebar from './SideBar/Sidebar';
import HRHome from './HRHome/HRHome';
import ReportMain from './Report/ReportMain';
import Applications from './Report/Applications/Applications';
import Results from './Report/Results/Results';
import ViewProfile from './Report/Results/ViewProfile';

const HRDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('home'); // Default component to render

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className='flex justify-between'>
      <div className='w-[25%] bg-[#14242B]'>
        <Sidebar onItemClick={handleSidebarItemClick} selectedComponent={selectedComponent} />
      </div>
      <div className='w-[75%] bg-[#F4F4F4]'>
        {/* Render selected component based on state */}
        {selectedComponent === 'home' && <HRHome />}
        {selectedComponent === 'searchCandidate' && <SearchCandidate />}
        {selectedComponent === 'saveSearch' && <SaveSearch />}
        {selectedComponent === 'reports' && <ReportMain selectedComponent={selectedComponent} onItemClick={handleSidebarItemClick} />}
        {selectedComponent === 'application' && <Applications  onItemClick={handleSidebarItemClick}/>}
        {selectedComponent === 'results' && <Results onItemClick={handleSidebarItemClick} />}
        {selectedComponent === 'viewprofile' && <ViewProfile onItemClick={handleSidebarItemClick} />}
      </div>
    </div>
  );
};

export default HRDashboard;
