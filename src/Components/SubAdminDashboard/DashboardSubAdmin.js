import React, { useEffect, useState } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import FilterSubAdmin from "./FilterSubAdmin";
import DataDashboard from "./DataDashboard";
import DetailTableDashboard from "./DetailTableDashboard";
import NavSubAdmin from "./NavSubAdmin";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

const DashboardSubAdmin = () => {
  const [data, setdata] = useState()
  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/college-login')
    }
  }, [])
  async function FetchData(){
    const data=await fetch(BASE_URL+'/get-college-students',{
      method:'GET',
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
      
    })
    const response=await data.json()
    setdata(response?.data)
    // console.log(response);
  }
  useEffect(() => {
   
    FetchData()
      }, [])

      function Statehandle(temp){
setdata(temp)
      }
  return (
    <>

      <BannarSubAdmin />
        <div className="flex flex-row">
          <FilterSubAdmin data={data}  FetchData={FetchData} Statehandle={Statehandle}/>
          {/* <DataDashboard data={data} /> */}
    
        <DetailTableDashboard data={data} FetchData={FetchData} />
        </div>
    </>
  );
};

export default DashboardSubAdmin;
