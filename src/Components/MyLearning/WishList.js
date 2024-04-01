import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

export default function WishList(){
    const [Data, setData] = useState([])
    let login=localStorage.getItem('COURSES_USER_TOKEN')

    useEffect(() => {
        async function Fetchdata(){
         try {
            if(login){
                let token=jwtDecode(login)
                let url=BASE_URL+'/getwishlist?email='+token.email;
                //   console.log(url);
                  const data=await fetch(url)
                  const response=await data.json()
                  setData(response?.wishlist)
             }
         } catch (error) {
            console.log(error);
         }
         
        //   console.log(response);
        }
        Fetchdata()
  
      }, [])
    return (
        <div className="my-6 mx-[5%] grid grid-cols-4 gap-y-6 gap-x-[20px] xsm:mt-3 xsm:gap-3 xsm:grid-cols-3">
            {
                Data?.map((item)=>{
                    return(<>
                    <Link to={`/detailcourse/${item?.course?.slug}`} className=" px-4 py-6 mt-2 h-[350px] rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:rounded-md xsm:p-2 xsm:h-full">
                <div className="h-[55%] xsm:h-[45%]">
                    <img className="w-full h-full rounded-lg" src={item.course.featured_image}/>
                </div>
                <div className="space-y-2 mt-2 xsm:mt-0">
                    <div className="flex justify-between mt-6 xsm:mt-2">
                        <div className="flex space-x-2 items-center xsm:space-x-0">
                            <img className="w-[16px] h-[16px] xsm:w-2 xsm:h-2" src="../Icons/RCDesign.svg"/>
                            <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">{item.course.category}</p>
                        </div>
                        <div className="flex space-x-2 items-center xsm:space-x-0">
                            <img className="w-[16px] h-[16px] text-[#555555] xsm:w-2 xsm:h-2" src="../Icons/RCClock.svg"/>
                            <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px]">{item.course.duration}</p>
                        </div>
                    </div>
                    <p className="font-pop font-semibold text-[18px] text-[#252641] xsm:text-[8px]">{item.course.title}</p>
                    <div className=" flex flex-row items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img className="w-[32px] h-[32px] xsm:w-5 xsm:h-5" src="../img/RCimg2.png"/>
                            <p className="font-pop font-medium text-[14px] xsm:text-[5px]">{item.course.instructor.firstName} {item.course.instructor.lastName}</p>
                        </div>
                        <div>
                            <p className="font-pop font-bold text-[#49BBBD] text-[18px] xsm:text-[5px]">₹{item.course.base_price}</p>
                        </div>
                    </div>
                    
                </div>
            </Link>
                    
                    </>)
                })
            }
      
        </div>
    )
}