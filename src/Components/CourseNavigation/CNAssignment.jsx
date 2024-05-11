import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../Api/api';
import Img from "../../Assets/Images/nocoursefound.png"

const CNAssignment = ({courseAssignment}) => {
    const [Data, setData] = useState([]);
    let login = localStorage.getItem("COURSES_USER_TOKEN");

    useEffect(() => {
        async function Fetchdata() {
          // console.log(token);
          //   console.log(url);
    
          try {
            if (login) {
              let token = jwtDecode(login);
              let url = BASE_URL + "/getusercompletedassignemnts/" + token.email;
              //   console.log(url);
              const data = await fetch(url);
              const response = await data.json();
              console.log("Assignment Data",response);
              setData(response?.data);
              // console.log(response.userDetails);
            }
          } catch (error) {
            console.log(error);
          }
          //   setData(response?.wishlist)
          //   console.log(response);
        }
        Fetchdata();
    }, []);

    console.log("Assignments",courseAssignment)

    return (
        <div className='bg-[#E2FFF1] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col items-center '>
            {!Data?.length? 
                <div className="flex flex-col items-center gap-10 w-full ">
                    <p className="text-center font-semibold text-2xl w-full "> No Assignment Found</p>
                    <div className='w-full flex justify-center'>
                        <img className='w-[40%]' src={Img} />
                    </div>
                </div>:
                (<>
                    <div className="grid grid-cols-[1fr,1.8fr,3.3fr,2fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                        <p className="font-pop font-bold text-center grid">Section</p>
                        <p className="font-pop font-bold text-center">Assignment No</p>
                        <p className="font-pop font-bold text-center">Course</p>
                        <p className="font-pop font-bold text-center">Lesson Name</p>
                        <p className="font-pop font-bold text-center">Status</p>
                    </div>
                    {Data?.map((item, ind) => {
                        return (
                            <>
                                <div className="grid grid-cols-[1fr,1.8fr,3.3fr,2fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                                    <p className="font-nu font-semibold text-center">{ind + 1}</p>
                                    <p className="font-nu font-semibold text-center">{ind + 1}</p>
                                    <p className="font-nu font-semibold text-center">{item.chapter_name}</p>
                                    <p className="font-nu font-semibold text-center">{item.lesson_name}</p>
                                    {item.iscompleted ? (
                                        <p className="font-nu font-semibold text-center text-[#1DBF73]">Success</p>
                                    ) : (
                                        <p className="font-nu font-semibold text-center text-[red]">Pending</p>
                                    )}
                                </div>
                            </>
                        );
                    })}
                </>)
            }
        </div>
  )
}

export default CNAssignment