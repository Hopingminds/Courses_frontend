import React, { useState } from 'react'
import Overview from '../Overview/Overview'
import Instructor from '../Instructor/Instructor'
import LaunchLab from '../LaunchLab';
import CNAssignment from './CNAssignment';
import CNCertifications from './CNCertifications';
import CNMyStats from './CNMyStats';

const CourseNavigation = ({courseLessons, totalLessons, courseAssignment }) => {
    const[activeComponent, setActiveComponent] = useState('Overview');

    const renderComponent = (componentName) => {
        setActiveComponent(componentName);
    };
    return (
        <div className="w-full min-h-[540px] mt-[20px] xsm:w-full">
            <div className="flex border border-[#EAEAEA] font-nu font-semibold text-[16px] leading-[24px] rounded-t-[20px] xsm:w-full">
                <button className={`btn_corners_first w-[170px] py-[12px]  ${activeComponent === 'Overview' ? 'active' : ''}`} 
                        onClick={() => renderComponent('Overview')}>Overview</button>
                <button className={ `btn_border w-[170px] py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'Instructor' ? 'active' : ''}`}
                        onClick={() => renderComponent('Instructor')}>Instructor</button>
                <button className={`btn_border w-[170px] py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'assignment' ? 'active' : ''}`} 
                        onClick={() => renderComponent('assignment')}>Assignment</button>
                <button className={`btn_border w-[170px] py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'certifications' ? 'active' : ''}`} 
                        onClick={() => renderComponent('certifications')}>Certifications</button>
                <button className={`btn_border w-[170px] py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'mystats' ? 'active' : ''}`}
                        onClick={() => renderComponent('mystats')}>MyStats</button>
                        <button className={`btn_corners_last w-[170px] py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'Launch' ? 'active' : ''}`}
                        onClick={() => renderComponent('Launch')}>Launch Lab</button>
            </div>

            {activeComponent === 'Overview' && <Overview />}
            {activeComponent === 'Instructor' && <Instructor />}
            {activeComponent === 'assignment' && <CNAssignment />}
            {activeComponent === 'certifications' && <CNCertifications />}
            {activeComponent === 'mystats' && <CNMyStats courseLessons={courseLessons} totalLessons={totalLessons} courseAssignment={courseAssignment}/>} 
            {activeComponent === 'Launch' && <LaunchLab />} 
        </div>
    )
}

export default CourseNavigation