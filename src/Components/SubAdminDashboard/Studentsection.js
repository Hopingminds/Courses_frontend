import { Link } from "react-router-dom";
import BannarSubAdmin from "./BannarSubAdmin";
import DataDashboard from "./DataDashboard";
import { IoIosArrowBack } from "react-icons/io";
export default function StudentSection(){
    return(<>
    <BannarSubAdmin/>
    <div className="w-full flex justify-center">
        <Link to="/subadmin-dashboard">    <IoIosArrowBack className="text-3xl font-extrabold"/></Link>
        <div className="w-[80%]">
            <DataDashboard/>
        </div>
    </div>
    </>)
}