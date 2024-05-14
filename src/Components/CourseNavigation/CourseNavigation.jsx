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
            <div className="grid grid-cols-4 border w-full overflow-hidden border-[#EAEAEA] font-nu font-semibold text-[16px] leading-[24px] rounded-t-[20px] xsm:w-full">
                <button className={`btn_corners_first py-[12px]  ${activeComponent === 'Overview' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`} 
                        onClick={() => renderComponent('Overview')}>Overview</button>
                <button className={ `btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'Instructor' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`}
                        onClick={() => renderComponent('Instructor')}>Instructor</button>
                <button className={`btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'assignment' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`} 
                        onClick={() => renderComponent('assignment')}>Assignment</button>
                {/* <button className={`btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'certifications' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`} 
                        onClick={() => renderComponent('certifications')}>Certifications</button> */}
                <button className={`btn_border py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'mystats' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`}
                        onClick={() => renderComponent('mystats')}>MyStats</button>
                        {/* <button className={`btn_corners_last py-[12px] border-l border-[#EAEAEA] ${activeComponent === 'Launch' ? 'bg-[#E2FFF1] text-[#1FC074]' : ''}`}
                        onClick={() => renderComponent('Launch')}>Launch Lab</button> */}
            </div>

            {activeComponent === 'Overview' && <Overview />}
            {activeComponent === 'Instructor' && <Instructor />}
            {activeComponent === 'assignment' && <CNAssignment courseAssignment={courseAssignment} />}
            {/* {activeComponent === 'certifications' && <CNCertifications />} */}
            {activeComponent === 'mystats' && <CNMyStats courseLessons={courseLessons} totalLessons={totalLessons} courseAssignment={courseAssignment}/>} 
            {/* {activeComponent === 'Launch' && <LaunchLab />}  */}
        </div>
    )
}

export default CourseNavigation