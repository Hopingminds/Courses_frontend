import React from 'react';
import BannarSubAdmin from './BannarSubAdmin';
import FilterSubAdmin from './FilterSubAdmin';
import DataDashboard from './DataDashboard';

const DashboardSubAdmin = () => {
  return (
    <>
        <BannarSubAdmin />
    <div className='flex flex-col gap-6 bg-[#FCF8F8]'>
        <div className='flex flex-row'>
            <FilterSubAdmin />
            <DataDashboard />
        </div>
    </div>
    </>
  )
}

export default DashboardSubAdmin