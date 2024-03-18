import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Globalinfo } from "../../App";

export default function Commoncard(props) {
    let { Data } = props;
    console.log(Data);
    const { userDetail } = useContext(Globalinfo)


    let purchasedCourses = [];
    if (Data) {
        userDetail?.purchased_courses.forEach((val) => {
            purchasedCourses.push(val._id)
        })

    }
    console.log(purchasedCourses)
    return (
        <div className="bg-[#E2FFF1] w-[33%] h-max mt-20 p-6 rounded-xl flex flex-col  top-14 ">
            <div>
                <img src={Data?.featured_image} />
            </div>
            <div className="flex flex-col mt space-y-4 mt-6">
                <p className="font-pop font-semibold">{Data?.title}</p>
                <div className="flex justify-between items-center">
                    <p className="font-nu text-[16px] font-semibold">₹{Data?.base_price}</p>
                    <div className="space-x-4 flex items-center">
                        <button className="">
                            <CiHeart size={'25'} />
                        </button>
                        <button className="">
                            <CiShoppingCart size={'25'} />
                        </button>
                        {purchasedCourses.includes(Data?._id) ? <Link to={'/course/' + Data?.slug} className="bg-[#1DBF73] py-2 px-7 rounded-full text-white font-nu font-bold">View Course</Link> : <Link to={'/login'} className="bg-[#1DBF73] py-2 px-10 rounded-full text-white font-nu font-bold">Join Now</Link>}
                    </div>
                </div>
                <hr />
                <div className="space-y-2">
                    <p className="font-pop font-semibold">This Course Includes</p>
                    <div className="flex items-center space-x-4">
                        <img className="w-[16px]" src="../Icons/certificate.svg" />
                        <p className="font-nu text-[#555555] text-[12px]">Certifications Of completion</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-[16px]" src="../Icons/graph.svg" />
                        <p className="font-nu text-[#555555] text-[12px]">32 modules</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img className="w-[16px]" src="../Icons/camera.svg" />
                        <p className="font-nu text-[#555555] text-[12px]">Access on all device</p>
                    </div>
                </div>
                <hr />
                <div className="space-y-2">
                    <p className="font-pop font-semibold">Training 5 Or More People</p>
                    <p className="font-pop text-[#555555] text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <hr />
                <div className="space-y-2">
                    <p className="font-pop font-semibold">Share this course</p>
                    <div className="flex space-x-4">
                        <img className="w-[12px]" src="../Icons/facebook.svg" />
                        <img className="w-[20px]" src="../Icons/instagram.svg" />
                        <img className="w-[24px]" src="../Icons/youtube12.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}