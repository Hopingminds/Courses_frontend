import { Link, useSearchParams } from "react-router-dom";
import BannarSubAdmin from "./BannarSubAdmin";
import DataDashboard from "./DataDashboard";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";

export default function StudentSection() {
    const [search, setSearch] = useSearchParams();
    const [data, setData] = useState([]);

    async function FetchData() {
        const id = search.get("id");
        if (!id) return;
        try {
            const data = await fetch(BASE_URL + `/getSingleCollegeStudent?userID=${id}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            const response = await data.json();
            console.log("response=", response);
            setData(response?.data);
        } catch (error) {
            console.error("API Error:", error);
            setData([]);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <>
            <BannarSubAdmin />
            <div className="w-full flex justify-center">
                <Link to="/college-dashboard">
                    <IoIosArrowBack className="text-3xl font-extrabold" />
                </Link>
                <div className="w-[80%]">
                    <DataDashboard data={data} />
                </div>
            </div>
        </>
    );
}
