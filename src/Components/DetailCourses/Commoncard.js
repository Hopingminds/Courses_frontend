import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Globalinfo } from "../../App";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";

export default function Commoncard(props) {
    let { Data } = props;
    // console.log(Data);
    let login=localStorage.getItem('COURSES_USER_TOKEN')
    // const [Show, setShow] = useState(false)
    async function Addtocart(courseid){
        try {
            if(login){
                let token=jwtDecode()
                let email=token.email;
                let quantity=1;
                let url=BASE_URL+'/addtocart'
                let data=await fetch(url,{
                    method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({email,courseid,quantity})
                })
                let response=await data.json()
                console.log(response);
                if(response.success){
                    toast.success(response.msg)
                }
                else{
                    toast.error(response.msg)
                }
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async function Addtowishlist(courseid){
        try {
           if(login){
            let token=jwtDecode(login)
            let email=token.email;
            let url=BASE_URL+'/addtowishlist'
            let data=await fetch(url,{
                method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({email,courseid})
            })
            let response=await data.json()
            // console.log(response);
            if(response.success){
                toast.success(response.msg)
            }
            else{
                toast.error(response.msg)
            }
           }
        } catch (error) {
            console.log(error);
        }
    }

    const { userDetail } = useContext(Globalinfo)


    let purchasedCourses = [];
    if (Data) {
        userDetail?.purchased_courses?.forEach((val) => {
            purchasedCourses.push(val?.course?._id)
        })

    }
    console.log(Data)
    console.log(purchasedCourses)
    return (
        <div className="bg-[#E2FFF1] w-[33%] h-max mt-20 p-6 rounded-xl flex flex-col  top-14 xsm:mt-4 xsm:p-1 xsm:rounded-lg">
            <div className="h-[225px] xsm:h-[65px]">
                <img className="w-full h-full rounded-xl xsm:rounded-md" src={Data?.featured_image} />
            </div>
            <div className="flex flex-col gap-4 mt-6 xsm:mt-2 xsm:gap-1">
                <p className="font-pop font-semibold xsm:text-[8px]">{Data?.title}</p>
                <div className="flex justify-between items-center xsm:pb-1">
                    <p className="font-nu text-[16px] font-semibold xsm:text-[8px]">₹{Data?.base_price}</p>
                 
                    <div className="space-x-4 flex items-center xsm:space-x-0 xsm:gap-1">
                           {
                        !purchasedCourses.includes(Data?._id)?<div className="space-x-4 flex items-center">
                            <button className="xsm:w-1 hidden">
                        <CiHeart size={'25'} onClick={()=>Addtowishlist(Data?._id)}/>
                    </button>
                    <button className="xsm:w-1 hidden">
                        <CiShoppingCart onClick={()=>Addtocart(Data?._id)} size={'25'} />
                    </button>
                        </div>:''
                    }
                        
                        {purchasedCourses.includes(Data?._id) ? <Link to={'/course/' + Data?.slug} className="bg-[#1DBF73] py-2 px-7 rounded-full text-white font-nu font-bold xsm:px-1 xsm:py-1 xsm:text-[12px]">View Course</Link> : <Link to={'/login'} className="bg-[#1DBF73] py-2 px-10 rounded-full text-white font-nu font-bold xsm:px-[5px] xsm:py-[2px] xsm:text-[7px]">Join Now</Link>}
                    </div>
                </div>
                <div className="flex flex-col gap-6 my-6 xsm:hidden">
                    <div className="space-y-4">
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
                        <hr />
                    </div>
                    
                    <div className="space-y-4">
                        <p className="font-pop font-semibold">Training 5 Or More People</p>
                        <p className="font-pop text-[#555555] text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <hr />
                    </div>
                    <div className="space-y-4">
                        <p className="font-pop font-semibold">Share this course</p>
                        <div className="flex space-x-4">
                            <img className="w-[12px]" src="../Icons/facebook.svg" />
                            <img className="w-[20px]" src="../Icons/instagram.svg" />
                            <img className="w-[24px]" src="../Icons/youtube12.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    );
}