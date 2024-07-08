import React, { useState,useEffect } from 'react';
import { IoFilterOutline, IoSearchOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const ManageJobsFilter = ({ allJobsData, selectedFilters, setSelectedFilters }) => {
    const [jobStatus, setJobStatus] = useState(true);
  
    const handleFilterClick = (filter) => {
      const isSelected = selectedFilters.includes(filter);
      const updatedFilters = isSelected
        ? selectedFilters.filter((f) => f !== filter)
        : [...selectedFilters, filter];
      setSelectedFilters(updatedFilters);
    };
  
    const isFilterSelected = (filter) => {
      return selectedFilters.includes(filter);
    };
  
    const handleCheckboxChange = (filter) => {
      if (isFilterSelected(filter)) {
        const updatedFilters = selectedFilters.filter((f) => f !== filter);
        setSelectedFilters(updatedFilters);
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    };
  
    const getJobCount = (status) => {
      return allJobsData.filter(job => job.publishStatus === status).length;
    };
    
    return (
        <div className="sticky top-0">
            <div className="flex items-center gap-4 border-b py-2">
                <IoFilterOutline fontSize={'1.5rem'} className="text-gray-500" />
                <p className="font-pop text-gray-700 font-medium">Filters</p>
            </div>
            {selectedFilters.length > 0 && (
                <div className="w-full py-6 border-b">
                    <div className="flex items-center justify-between xsm:flex-col">
                        <p className="font-pop text-gray-700 font-medium text-[14px] xsm:text-[12px]">Jobs filtered by</p>
                        <p
                            className="font-pop text-blue-600 text-[12px] cursor-pointer"
                            onClick={() => setSelectedFilters([])}
                        >
                            Clear all
                        </p>
                    </div>
                    <div className="flex flex-wrap py-2">
                        {selectedFilters.map((filter) => (


                            <div
                                key={filter}
                                className="flex items-center gap-1 bg-[#f2faff] border border-[#d9eefc] rounded-full w-max px-2 py-1 m-1"
                            >
                                <p className="font-pop text-gray-700 font-medium text-[12px] xsm:text-[11px]">{filter}</p>
                                <RxCross2
                                    fontSize={'1rem'}
                                    className="text-gray-500 cursor-pointer"
                                    onClick={() => handleFilterClick(filter)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Job Status Section */}
            <div className="w-full py-6 border-b">
                <div
                    onClick={() => setJobStatus(!jobStatus)}
                    className="flex items-center justify-between cursor-pointer"
                >
                    <p className="font-pop text-gray-700 font-medium text-[14px] xsm:text-[13px]">Job status</p>
                    {jobStatus ? (
                        <FaChevronDown fontSize={'1rem'} className="text-gray-500 cursor-pointer rotate-180" />
                    ) : (
                        <FaChevronDown fontSize={'1rem'} className="text-gray-500 cursor-pointer" />
                    )}
                </div>
                {jobStatus && (
                    <div className="flex flex-col py-2">
                        <label htmlFor="activejobs" className="flex justify-between py-2">
                            <div className="flex items-center gap-x-2">
                                <input
                                    className="w-4 h-4 xsm:w-3 xsm:h-3"
                                    type="checkbox"
                                    id="activejobs"
                                    checked={isFilterSelected('Active Jobs')}
                                    onChange={() => handleCheckboxChange('Active Jobs')}
                                />
                                <label htmlFor="activejobs" className="select-none text-[13px] text-gray-600 xsm:text-[11px]">
                                    Active Jobs
                                </label>
                            </div>
                            <div>
                                <p className="select-none text-[13px] text-gray-600">{getJobCount('active')}</p>
                            </div>
                        </label>
                        <label htmlFor="closedjobs" className="flex justify-between py-2">
                            <div className="flex items-center gap-x-2">
                                <input
                                    className="w-4 h-4 xsm:w-3 xsm:h-3"
                                    type="checkbox"
                                    id="closedjobs"
                                    checked={isFilterSelected('Closed Jobs')}
                                    onChange={() => handleCheckboxChange('Closed Jobs')}
                                />
                                <label htmlFor="closedjobs" className="select-none text-[13px] text-gray-600 xsm:text-[11px]">
                                    Closed Jobs
                                </label>
                            </div>
                            <div>
                                <p className="select-none text-[13px] text-gray-600">{getJobCount('closed')}</p>
                            </div>
                        </label>
                        {/* <label htmlFor="expiredjobs" className="flex justify-between py-2">
                            <div className="flex items-center gap-x-2">
                                <input
                                    className="w-4 h-4"
                                    type="checkbox"
                                    id="expiredjobs"
                                    checked={isFilterSelected('Expired Jobs')}
                                    onChange={() => handleCheckboxChange('Expired Jobs')}
                                />
                                <label htmlFor="expiredjobs" className="select-none text-[13px] text-gray-600">
                                    Expired Jobs
                                </label>
                            </div>
                            <div>
                                <p className="select-none text-[13px] text-gray-600">1</p>
                            </div>
                        </label> */}
                        {/* Add similar sections for other job statuses */}
                    </div>
                )}
            </div>
            {/* Job Posted By Section */}
            {/* <div className="w-full py-6 border-b">
                <div
                    onClick={() => setPostedBy(!postedBy)}
                    className="flex items-center justify-between cursor-pointer"
                >
                    <p className="font-pop text-gray-700 font-medium text-[14px]">Job posted by</p>
                    {postedBy ? (
                        <FaChevronDown fontSize={'1rem'} className="text-gray-500 cursor-pointer rotate-180" />
                    ) : (
                        <FaChevronDown fontSize={'1rem'} className="text-gray-500 cursor-pointer" />
                    )}
                </div>
                {postedBy && (
                    <div>
                        <div className="py-4">
                            <div className="flex items-center bg-white px-3 py-2 border rounded-md">
                                <input
                                    className="w-full outline-none text-[14px]"
                                    type="text"
                                    placeholder="Search by Username"
                                />
                                <IoSearchOutline fontSize={'1.4rem'} />
                            </div>
                        </div>
                        <div className="flex flex-col py-2">
                            <label htmlFor="me" className="flex justify-between py-2">
                                <div className="flex items-center gap-x-2">
                                    <input
                                        className="w-4 h-4"
                                        type="checkbox"
                                        id="me"
                                        checked={isFilterSelected('Me')}
                                        onChange={() => handleCheckboxChange('Me')}
                                    />
                                    <label htmlFor="me" className="select-none text-[13px] text-gray-600">
                                        Me
                                    </label>
                                </div>
                                <div>
                                    <p className="select-none text-[13px] text-gray-600">12</p>
                                </div>
                            </label>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default ManageJobsFilter;
