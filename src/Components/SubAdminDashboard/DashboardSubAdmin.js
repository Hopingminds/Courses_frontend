import React, { useEffect, useState } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import FilterSubAdmin from "./FilterSubAdmin";
import DetailTableDashboard from "./DetailTableDashboard";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

const DashboardSubAdmin = () => {
  const [data, setdata] = useState()
  const [Filters, setFilters] = useState()
    const [showspinner, setshowspinner] = useState(false)
  
  let navigate = useNavigate()
    const [filtersData, setFiltersData] = useState({ degrees: [], streams: [] });
  
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
  // async function Fetchfilters(){
  //   const data=await fetch(BASE_URL+'/getAllEducationFields',{
  //     method:'GET',
  //     headers:{
  //       'Authorization':'Bearer '+localStorage.getItem('token')
  //     }
      
  //   })
  //   const response=await data.json()
  //   setFilters(response?.data)
  //   // console.log(response);
    
  //   // setdata(response?.data)
  //   // console.log(response);
  // }
  useEffect(() => {
   
    FetchData()
    fetchFiltersData()
    // Fetchfilters()
      }, [])

      function Statehandle(temp){
setdata(temp)
      }
      
      const fetchFiltersData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/getAllEducationFields`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const data = await response.json();
          setFiltersData({
            degrees: [...new Set(data?.data?.map((item) => item.degree))],
            streams: data?.data?.map((item) => ({
              name: item.stream,
              degree: item.degree,
            })),
          });
        } catch (error) {
          console.error("Error fetching filters data:", error);
        }
      };
  return (
    <>
      <BannarSubAdmin />
        <div className="grid grid-cols-[1fr_6.2fr] px-[4vw] my-[5vh]">
          <FilterSubAdmin showspinner={showspinner} setshowspinner={setshowspinner} data={data} Filters={Filters} FetchData={FetchData} Statehandle={Statehandle} fetchFiltersData={fetchFiltersData} filtersData={filtersData} setFiltersData={setFiltersData}/>
          {/* <DataDashboard data={data} /> */}
    
        <DetailTableDashboard showspinner={showspinner} setshowspinner={setshowspinner} data={data} FetchData={FetchData} fetchFiltersData={fetchFiltersData}/>
        </div>
    </>
  );
};

export default DashboardSubAdmin;
