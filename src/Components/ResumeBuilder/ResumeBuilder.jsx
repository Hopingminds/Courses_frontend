import React, { useState } from 'react'
import Basic from './Basic';
import Education from './Education';
import OtherInfo from './OtherInfo';
import Technical from './Technical';
import './ResumeBuilder.css';

const ResumeBuilder = () => {

    const[activeComponent, setActiveComponent] = useState('basic');

    const renderComponent = (componentName) => {
      setActiveComponent(componentName);
    };

    function MoveCompo(val){
        setActiveComponent(val);
    }

    return (
        <div className='w-[60vw] bg-white rounded-xl'>
            <div className='grid grid-cols-4'>
                <button className={`border border-[#EAEAEA] rounded-t-2xl rounded-e-none py-2 font-pop font-semibold text-[18px] ${activeComponent === 'basic' ? 'resumebutton' : ''}`} onClick={() => renderComponent('basic')}>Basic</button>
                <button className={`border border-[#EAEAEA] py-2 font-pop font-semibold text-[18px] ${activeComponent === 'education' ? 'resumebutton' : ''}`} onClick={() => renderComponent('education')}>Education</button>
                <button className={`border border-[#EAEAEA] py-2 font-pop font-semibold text-[18px] ${activeComponent === 'technical' ? 'resumebutton' : ''}`} onClick={() => renderComponent('technical')}>Technical</button>
                <button className={`border border-[#EAEAEA] rounded-e-2xl rounded-b-none py-2 font-pop font-semibold text-[18px] ${activeComponent === 'otherinfo' ? 'resumebutton' : ''}`} onClick={() => renderComponent('otherinfo')}>Other Info</button>
            </div>
            <div className='px-10 py-6 border border-[#EAEAEA] rounded-b-xl '>
                {activeComponent === 'basic' && <Basic fun={MoveCompo}/>}
                {activeComponent === 'education' && <Education fun={MoveCompo}/>}
                {activeComponent === 'technical' && <Technical fun={MoveCompo}/>}
                {activeComponent === 'otherinfo' && <OtherInfo fun={MoveCompo}/>}
            </div>
        </div>
  )
}

export default ResumeBuilder