import { Link, useSearchParams } from "react-router-dom";
import BannarSubAdmin from "./BannarSubAdmin";
import DataDashboard from "./DataDashboard";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
export default function StudentSection(){
    const [search,setsearch]=useSearchParams()
    const [data, setdata] = useState([])
    useEffect(() => {
        async function FetchData(){
            try {
                const data=await fetch(BASE_URL+'/user/'+search.get('email'))
                const response=await data.json()
                setdata(response?.userDetails)
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        FetchData()
    }, [])
    
    return(<>
    <BannarSubAdmin/>
    <div className="w-full flex justify-center">
        <Link to="/subadmin-dashboard">    <IoIosArrowBack className="text-3xl font-extrabold"/></Link>
        <div className="w-[80%]">
            <DataDashboard data={data}/>
        </div>
    </div>
    </>)
}