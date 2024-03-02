import React, { useState } from 'react';
import Overview from "../Overview/Overview";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Faqs from "../Faqs/Faqs";
import Reviews from "../Reviews/Reviews";
import "./Main.css";
import "@fontsource/montserrat";
import "@fontsource/jost";


function Main() {

  const[activeComponent, setActiveComponent] = useState('Overview');

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="container1">

        <div className="nav-buttons">
            <button className={`btn_corners_first ${activeComponent === 'Overview' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Overview')}>Overview</button>
            <button className={`btn_border ${activeComponent === 'Curriculum' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Curriculum')}>Curriculum</button>
            <button className={activeComponent === 'Instructor' ? 'active' : ''}
                    onClick={() => renderComponent('Instructor')}>Instructor</button>
            <button className={`btn_border ${activeComponent === 'Faqs' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Faqs')}>FAQs</button>
            <button className={`btn_corners_last ${activeComponent === 'Reviews' ? 'active' : ''}`}
                    onClick={() => renderComponent('Reviews')}>Reviews</button>
        </div>

        {/* <div className="component"> */}
            {activeComponent === 'Overview' && <Overview />}
            {activeComponent === 'Curriculum' && <Curriculum />}
            {activeComponent === 'Instructor' && <Instructor />}
            {activeComponent === 'Faqs' && <Faqs />}
            {activeComponent === 'Reviews' && <Reviews />} 
        {/* </div> */}
 </div>
  )
}

export default Main
