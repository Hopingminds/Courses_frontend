import { useEffect, useState } from "react";
import "./MLheader.css";
import { jwtDecode } from "jwt-decode";
import { BASE_URL } from "../../Api/api";

export default function Assignment({ courses }) {
  // console.log();
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
          console.log(response);
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
  return (
    <div className="px-[5%] my-6 mb-24 xsm:my-4">
      <div className="flex flex-col w-full space-y-1">
        <div className="grid grid-cols-[1fr,1.5fr,3fr,2fr,2fr] w-full bg-[#E2FFF1] py-4 px-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
          <p className="font-pop font-bold text-center grid">Section</p>
          <p className="font-pop font-bold text-center">Assignment No</p>
          <p className="font-pop font-bold text-center">Course</p>
          <p className="font-pop font-bold text-center">Lesson Name</p>
          {/* <p className="font-pop font-semibold text-center">Deadline</p> */}
          <p className="font-pop font-bold text-center">Status</p>
        </div>
        {!Data?.length?<div className="flex justify-center  w-full mt-10"><div className="text-center font-semibold text-2xl w-full "> No Assignment Found</div></div>:''}

        {Data?.map((item, ind) => {
          return (
            <>
              <div className="grid grid-cols-[1fr,1.5fr,3fr,2fr,2fr] w-full bg-[#E2FFF1] py-4 px-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                <p className="font-nu font-semibold text-center">{ind + 1}</p>
                <p className="font-nu font-semibold text-center">{ind + 1}</p>
                <p className="font-nu font-semibold text-center">
                  {item.chapter_name}
                </p>
                <p className="font-nu font-semibold text-center">
                  {item.lesson_name}
                </p>
                {/* <p className="font-nu font-semibold text-center">{item.deadline.split('T')[0]}</p> */}
                {item.iscompleted ? (
                  <p className="font-nu font-semibold text-center text-[#1DBF73]">
                    Success
                  </p>
                ) : (
                  <p className="font-nu font-semibold text-center text-[red]">
                    Pending
                  </p>
                )}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
