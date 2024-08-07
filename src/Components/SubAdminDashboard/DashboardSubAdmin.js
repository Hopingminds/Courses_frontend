import React, { useEffect, useState } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import FilterSubAdmin from "./FilterSubAdmin";
import DetailTableDashboard from "./DetailTableDashboard";
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
        <div className="grid grid-cols-[1fr_3.2fr] px-[8vw] my-[5vh]">
          <FilterSubAdmin data={data}  FetchData={FetchData} Statehandle={Statehandle}/>
          {/* <DataDashboard data={data} /> */}
    
        <DetailTableDashboard data={data} FetchData={FetchData} />
        </div>
    </>
  );
};

export default DashboardSubAdmin;
