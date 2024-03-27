import React, { useState } from 'react';
import Overview from "../Overview/Overview";
import Curriculum from "../Curriculum/Curriculum";
import Instructor from "../Instructor/Instructor";
import Faqs from "../Faqs/Faqs";
import Reviews from "../Reviews/Reviews";
import "./Main.css";


function Main() {

  const[activeComponent, setActiveComponent] = useState('Overview');

  const renderComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="container1 xsm:w-full">

        <div className="nav-buttons xsm:w-full">
            <button className={`btn_corners_first font-nu text-[14px] xsm:text-[2px] ${activeComponent === 'Overview' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Overview')}>Overview</button>
            <button className={`btn_border font-nu text-[14px] xsm:text-[2px] ${activeComponent === 'Curriculum' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Curriculum')}>Curriculum</button>
            <button className={ `btn_border font-nu text-[14px] xsm:text-[2px] ${activeComponent === 'Instructor' ? 'active' : ''}`}
                    onClick={() => renderComponent('Instructor')}>Instructor</button>
            <button className={`btn_border font-nu text-[14px] xsm:text-[2px] ${activeComponent === 'Faqs' ? 'active' : ''}`} 
                    onClick={() => renderComponent('Faqs')}>FAQs</button>
            <button className={`btn_corners_last font-nu text-[14px] xsm:text-[2px] ${activeComponent === 'Reviews' ? 'active' : ''}`}
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

export default Main;
