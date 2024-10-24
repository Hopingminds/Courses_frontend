import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { AiTwotoneDelete } from "react-icons/ai";

export default function WishList() {
  const [Data, setData] = useState([]);
  const [show, setshow] = useState(false);
  const [internships, setinternships] = useState([])
  let login = localStorage.getItem("COURSES_USER_TOKEN");

  useEffect(() => {
    async function Fetchdata() {
      try {
        if (login) {
          setshow(true);
          let token = jwtDecode(login);
          let url = BASE_URL + "/getwishlist?email=" + token.email;
          //   console.log(url);
          const data = await fetch(url);
          const response = await data.json();
          setData(response?.wishlist?.courses);
          setinternships(response?.wishlist?.internships)
          // console.log(response?.wishlist);
          setshow(false);
        }
      } catch (error) {
        console.log(error);
      }

      //   console.log(response);
    }
    Fetchdata();
  }, []);
  return (
    <>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      {!Data?.length ? (
        <div className="flex justify-center  w-full mt-10">
          <div className="text-center font-semibold text-2xl w-full ">
            {" "}
            No Course Found
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="my-[4%] mx-[5%] grid grid-cols-3 sm:grid-cols-2 gap-10 xsm:mt-3 xsm:gap-3 xsm:grid-cols-3">
        {Data?.map((item) => {
          return (
            <>
              <Link
                to={`/detailcourse/${item?.course?.slug}`}
                className=" px-4 py-4 mt-2 h-[380px] rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:rounded-md xsm:p-2 xsm:h-full md:p-3 md:h-full"
              >
                <div className="h-[55%] xsm:h-[45%] md:h-[40%]  ">
                  <img alt=""
                    className="w-full h-full rounded-lg z-0"
                    src={item?.course?.featured_image}
                  />
                  {/* <AiTwotoneDelete className="absolute top-0 right-0 text-4xl bg-white rounded-full p-2 z-50"/> */}
                </div>
                <div className="flex flex-col gap-3 justify-between h-[45%]">
                <div className="space-y-2 mt-2 xsm:mt-0 xsm:space-y-1">
                  <div className="flex justify-between mt-3 min-h-[30%] xsm:mt-1 md:mt-0 items-center">
                    <div className="flex items-center space-x-3 max-w-[80%] xsm:space-x-1 md:space-x-1">
                      <img alt=""
                        className="w-[32px] h-[32px] rounded-full xsm:w-4 xsm:h-4 md:w-5 md:h-5 sm:w-[25px] sm:h-[25px]"
                        src={item?.course?.instructor?.profile}
                      />
                      <p className="font-pop font-medium text-[14px] flex flex-wrap xsm:text-[5px] md:text-[10px] sm:text-[12px]">
                        {item?.course?.instructor?.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-pop font-bold text-[#49BBBD] text-[18px] xsm:text-[5px] md:text-[10px] sm:text-[12px]">
                        ₹{item?.course?.base_price}
                      </p>
                    </div>
                  </div>
                    <p className="font-pop font-semibold text-[18px] text-[#252641] xsm:text-[8px] md:text-[14px] sm:text-[14px]  line-clamp-2">
                    {item?.course?.title}
                  </p>
                  </div>
                  <div className=" flex flex-row items-center justify-between">
                    <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <img alt=""
                        className="w-[16px] h-[16px] xsm:w-2 xsm:h-2 md:w-3 md:h-3"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[8px]">
                        {item.course?.category}
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <img alt=""
                        className="w-[16px] h-[16px] text-[#555555] xsm:w-2 xsm:h-2 md:w-3 md:h-3"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[8px]">
                        {item.course?.duration} hours
                      </p>
                    </div>
                    {/* <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <p className="font-pop text-[16px] font-medium text-[#555555] xsm:text-[8px] md:text-[12px]">
                        <RiDeleteBin6Line/>
                      </p>
                    </div> */}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
        {internships?.map((item) => {
          return (
            <>
              <Link
                to={`/detailcourse/${item?.internship?.slug}`}
                className=" px-4 py-4 mt-2 h-[380px] rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:rounded-md xsm:p-2 xsm:h-full md:p-3 md:h-full"
              >
                <div className="h-[55%] xsm:h-[45%] md:h-[40%]  ">
                  <img alt=""
                    className="w-full h-full rounded-lg z-0"
                    src={item?.internship?.featured_image}
                  />
                  {/* <AiTwotoneDelete className="absolute top-0 right-0 text-4xl bg-white rounded-full p-2 z-50"/> */}
                </div>
                <div className="flex flex-col gap-3 justify-between h-[45%]">
                <div className="space-y-2 mt-2 xsm:mt-0 xsm:space-y-1">
                  <div className="flex justify-between mt-3 min-h-[30%] xsm:mt-1 md:mt-0 items-center">
                    <div className="flex items-center space-x-3 max-w-[80%] xsm:space-x-1 md:space-x-1">
                      <img alt=""
                        className="w-[32px] h-[32px] rounded-full xsm:w-4 xsm:h-4 md:w-5 md:h-5 sm:w-[25px] sm:h-[25px]"
                        src={item?.internship?.instructor?.profile}
                      />
                      <p className="font-pop font-medium text-[14px] flex flex-wrap xsm:text-[5px] md:text-[10px] sm:text-[12px]">
                        {item?.internship?.instructor?.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-pop font-bold text-[#49BBBD] text-[18px] xsm:text-[5px] md:text-[10px] sm:text-[12px]">
                        ₹{item?.internship?.base_price}
                      </p>
                    </div>
                  </div>
                    <p className="font-pop font-semibold text-[18px] text-[#252641] xsm:text-[8px] md:text-[14px] sm:text-[14px]  line-clamp-2">
                    {item?.internship?.title}
                  </p>
                  </div>
                  <div className=" flex flex-row items-center justify-between">
                    <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <img alt=""
                        className="w-[16px] h-[16px] xsm:w-2 xsm:h-2 md:w-3 md:h-3"
                        src="../Icons/RCDesign.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[8px]">
                        {item.internship?.category}
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <img alt=""
                        className="w-[16px] h-[16px] text-[#555555] xsm:w-2 xsm:h-2 md:w-3 md:h-3"
                        src="../Icons/RCClock.svg"
                      />
                      <p className="font-pop text-[12px] font-medium text-[#555555] xsm:text-[5px] md:text-[8px]">
                        {item.internship?.duration} hours
                      </p>
                    </div>
                    {/* <div className="flex space-x-2 items-center xsm:space-x-0 md:space-x-1">
                      <p className="font-pop text-[16px] font-medium text-[#555555] xsm:text-[8px] md:text-[12px]">
                        <RiDeleteBin6Line/>
                      </p>
                    </div> */}
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
