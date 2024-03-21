import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";

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
        <div className="my-6 mx-[5%] grid grid-cols-4 gap-y-6 gap-x-[20px]">
            {
                Data?.map((item)=>{
                    return(<>
                    <div className=" px-4 py-6 mt-2 h-[350px] rounded-xl shadow-xl shadow-[#D9D9D9]">
                <div className="h-[55%]">
                    <img className="w-full h-full" src={item.course.featured_image}/>
                </div>
                <div className="space-y-2 mt-2 ">
                    <div className="flex justify-between mt-6">
                        <div className="flex space-x-2 items-center">
                            <img className="w-[16px] h-[16px]" src="../Icons/RCDesign.svg"/>
                            <p className="font-pop text-[12px] font-medium text-[#555555]">{item.course.category}</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <img className="w-[16px] h-[16px] text-[#555555]" src="../Icons/RCClock.svg"/>
                            <p className="font-pop text-[12px] font-medium text-[#555555]">{item.course.duration}</p>
                        </div>
                    </div>
                    <p className="font-pop font-semibold text-[18px] text-[#252641]">{item.course.title}</p>
                    <div className=" flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img className="w-[32px] h-[32px]" src="../img/RCimg2.png"/>
                            <p className="font-pop font-medium text-[14px]">{item.course.instructor.firstName} {item.course.instructor.lastName}</p>
                        </div>
                        <div>
                            <p className="font-pop font-bold text-[#49BBBD] text-[18px]">₹{item.course.base_price}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
                    
                    </>)
                })
            }
      
        </div>
    )
}