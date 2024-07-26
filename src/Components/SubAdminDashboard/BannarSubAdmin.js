import React, { useEffect, useState } from "react";
import Img1 from "../../Assests/Images/banner-subadmin.png";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";

const BannarSubAdmin = () => {
  const [Data, setData] = useState()
  useEffect(() => {
    async function Fetchdata(){
      let token=localStorage.getItem('token')
      if(token){
        try {
          let email=jwtDecode(token)?.email
          const data=await fetch(BASE_URL+'/collegeUser?email='+email)
          const response=await data.json();
          setData(response?.data)
        } catch (error) {
          console.log(error);
        }
      }
      
    }
    Fetchdata()
  }, [])
  
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[30vh] px-[5%]  flex items-center gap-2"
      style={{ backgroundImage: `url(${Img1})` }}
    >
      {localStorage?.getItem('token') ? <img className="h-[120px] w-[120px] rounded-full" src={Data?.profile}/> : ''}
      <p className="text-white text-[60px]">College Dashboard</p>
    </div>
  );
};

export default BannarSubAdmin;
