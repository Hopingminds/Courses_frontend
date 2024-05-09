import React, { useState } from 'react';
import BagWhite from '../../../Assets/Icons/hrfilterbag.svg';
import BagGray from '../../../Assets/Icons/hrfilterbaggray.svg';
import DatabaseWhite from '../../../Assets/Icons/hrfilterdatabase.svg';
import DatabaseGray from '../../../Assets/Icons/hrfilterdatabasegray.svg';
import ReportWhite from '../../../Assets/Icons/hrfilterreportgray.svg';
import ReportGray from '../../../Assets/Icons/hrfilterreport.svg';
import Dropdown from '../../../Assets/Icons/hrfilterdropdown.svg';

const Sidebar = ({ onItemClick, selectedComponent }) => {

    const [showDatabaseOptions, setShowDatabaseOptions] = useState(false);

    const handleDatabaseClick = () => {
        setShowDatabaseOptions(!showDatabaseOptions);
        onItemClick('searchCandidate')
    };

    return (
        <div className='font-pop text-[21px] font-medium text-[#808080] py-[10%]'>
            <div className='pl-[23%] pr-[5%] flex flex-col gap-6'>
                {/* Jobs Section */}
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => onItemClick('home')}>
                {selectedComponent==='home'? <img src={BagWhite} alt='' /> : <img src={BagGray} alt='' />}
                <p className={`${ selectedComponent==='home'?'text-white underline':''}`}>Jobs</p>
                </div>

                {/* Database Section */}
                <div className='flex-col flex gap-6'>
                <div className='flex items-center justify-between cursor-pointer' onClick={handleDatabaseClick}>
                    <div className='flex items-center gap-2'>
                    <img src={DatabaseWhite} alt='' />
                    <p className={`${ showDatabaseOptions?'text-white underline':''}`}>Database</p>
                    </div>
                    <div>
                    <img className={`${showDatabaseOptions?'rotate-180':'rotate-0'}`} src={Dropdown} alt='' />
                    </div>
                </div>
                {showDatabaseOptions && (
                    <div className='pl-[13.5%] flex flex-col gap-6' >
                        <p  onClick={() => onItemClick('searchCandidate')} className={`cursor-pointer ${ selectedComponent==='searchCandidate'?'text-white underline':''}`}>Search candidate</p>
                        <p onClick={() => onItemClick('saveSearch')} className={`cursor-pointer ${ selectedComponent==='saveSearch'?'text-white underline':''}`}>Save Search</p>
                    </div>
                )}
                </div>

                {/* Reports Section */}
                <div className='flex items-center gap-2' onClick={() => onItemClick('reports')}>
                    {selectedComponent==='reports' || selectedComponent==='application' || selectedComponent==='results' ? <img src={ReportWhite} alt='' /> : <img src={ReportGray} alt='' />}
                    <p className={`cursor-pointer ${ selectedComponent==='reports' || selectedComponent==='application' || selectedComponent==='results' ?'text-white underline':''}`}>Reports</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
