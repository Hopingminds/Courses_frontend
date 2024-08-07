import React, { useState } from 'react'
import Basic from './Basic';
import Education from './Education';
import OtherInfo from './OtherInfo';
import Technical from './Technical';
import './ResumeBuilder.css';
import { useLocation } from 'react-router-dom';

const ResumeBuilder = () => {
    const location = useLocation();
    const[activeComponent, setActiveComponent] = useState('basic');
    const[finalData, setFinalData] = useState(null);

    const renderComponent = (componentName) => {
      setActiveComponent(componentName);
    };

    function changeComponent(val){
        setActiveComponent(val);
    }

    return (
        <div className={`w-[60vw] bg-white rounded-xl my-10 xsm:w-[70vw] ${location.pathname === '/resumebuilder' ?"mx-auto":""}`}>
            <div className='grid grid-cols-4'>
                <button className={`border border-[#EAEAEA] rounded-tl-2xl rounded-r-none py-2 font-pop font-semibold text-[18px] md:text-[16px] xsm:text-[12px] ${activeComponent === 'basic' ? 'resumebutton' : ''}`} onClick={() => renderComponent('basic')}>Basic</button>
                <button className={`border border-[#EAEAEA] py-2 font-pop font-semibold text-[18px] md:text-[16px] xsm:text-[12px] ${activeComponent === 'education' ? 'resumebutton' : ''}`} onClick={() => renderComponent('education')}>Education</button>
                <button className={`border border-[#EAEAEA] py-2 font-pop font-semibold text-[18px] md:text-[16px] xsm:text-[12px] ${activeComponent === 'technical' ? 'resumebutton' : ''}`} onClick={() => renderComponent('technical')}>Technical</button>
                <button className={`border border-[#EAEAEA] rounded-r-2xl rounded-br-none py-2 font-pop font-semibold text-[18px] md:text-[16px] xsm:text-[12px] ${activeComponent === 'otherinfo' ? 'resumebutton' : ''}`} onClick={() => renderComponent('otherinfo')}>Other Info</button>
            </div>
            <div className='px-10 py-6 border border-[#EAEAEA] rounded-b-xl xsm:px-5'>
                {activeComponent === 'basic' && <Basic changeComponent={changeComponent} setFinalData={setFinalData}/>}
                {activeComponent === 'education' && <Education changeComponent={changeComponent} setFinalData={setFinalData} />}
                {activeComponent === 'technical' && <Technical changeComponent={changeComponent} setFinalData={setFinalData}/>}
                {activeComponent === 'otherinfo' && <OtherInfo finalData={finalData} setFinalData={setFinalData} changeComponent={changeComponent}/>}
            </div>
        </div>
  )
}

export default ResumeBuilder