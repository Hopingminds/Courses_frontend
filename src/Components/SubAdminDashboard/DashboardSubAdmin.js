import React, { useEffect } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import FilterSubAdmin from "./FilterSubAdmin";
import DataDashboard from "./DataDashboard";
import DetailTableDashboard from "./DetailTableDashboard";
import NavSubAdmin from "./NavSubAdmin";
import { useNavigate } from "react-router-dom";

const DashboardSubAdmin = () => {
  let navigate=useNavigate()
useEffect(() => {
  if(!localStorage.getItem('token')){
    navigate('/subadmin-login')
      }
}, [])

  return (
    <>

      <BannarSubAdmin />
      <div className="flex flex-col gap-14 pb-20 bg-[#FCF8F8]">
        <div className="flex flex-row">
          <FilterSubAdmin />
          <DataDashboard />
        </div>
        <DetailTableDashboard />
      </div>
    </>
  );
};

export default DashboardSubAdmin;
