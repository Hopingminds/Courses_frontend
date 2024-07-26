import toast, { Toaster } from "react-hot-toast";
import "./ShopingCart.css";
import { BASE_URL } from "../../Api/api";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { Globalinfo } from "../../App";

function ShopingCart() {
  const [Data, setData] = useState([]);
  const [total, settotal] = useState(0);
  const [show, setshow] = useState(false);
  let token = jwtDecode(localStorage.getItem("COURSES_USER_TOKEN"));
  const { setCartSize,cartSize } = useContext(Globalinfo);
  function Total(data) {
    let price = 0;
    data?.map((item) => {
      price += item?.course?.base_price;
    });
    settotal(price);
  }
  async function Removecart(courseid) {
    setshow(true);
    let url = BASE_URL + "/removefromcart";
    let data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: token.email, courseid }),
    });
    let response = await data.json();
    // console.log(response);
    if (response.success) {
      setData(response.data);
      Total(response.data);
      toast.success(response.message);
      setCartSize(cartSize-1);
      setshow(false);
    } else {
      toast.error(response.message);
    }
    // console.log(response);
  }
  useEffect(() => {
    async function Fetchdata() {
      // console.log(token);
      setshow(true);
      let url = BASE_URL + "/getcart?email=" + token.email;
      // console.log(url);
      const data = await fetch(url);
      const response = await data.json();
      setData(response?.cart);
      Total(response?.cart);
      setshow(false);
      // console.log(response);
    }
    Fetchdata();
  }, []);

  return (
    <div className="SC-container font-pop">
      <div className=" w-[100%] h-[20vh] flex flex-row items-center  px-[4%] cartbg xsm:h-[12vh] md:h-[14vh]">
        <div className="">
          <h2 className="font-outfit font-semibold text-4xl text-white xsm:text-[14px]">
            My Cart
          </h2>
        </div>
      </div>
      <div className="flex justify-between  items-start gap-4 my-10 min-h-[70vh] h-auto  px-[3%] xsm:flex-col xsm:justify-start xsm:h-auto xsm:gap-8 xsm:my-6 md:h-auto md:my-10">
        <div className="w-[75%] space-y-10  xsm:w-[100%] xsm:space-y-4 md:space-y-8">
          {Data?.length > 0 ? (
            Data?.map((item) => {
              return (
                <>
                  <div className="w-full bg-white border p-3 shadow-xl rounded-xl xsm:p-2 md:p-2">
                    <div className="flex  h-[15vw] rounded-[1.2vw] xsm:h-[80px] 2xl:w-[900px] 2xl:h-[240px]">
                      <div className="w-[50%] 2xl:w-[600px]">
                        <img
                          className="w-[100%] h-[100%] rounded-xl"
                          src={item?.course?.featured_image}
                          alt="FSD-img"
                        ></img>
                      </div>
                      <div className="flex flex-col justify-evenly mx-[1vw] w-[100%] 2xl:h-[100%] xsm:mx-[2vw]">
                        {/* <div>
                                <p className='font-mons text-[0.8vw] 2xl:text-[14px]'><span className='text-[#555555]'>by</span> Determined-instructure</p>
                            </div> */}
                        <div className="flex flex-nowrap justify-between items-center">
                          <div className="space-y-2 md:space-y-1">
                            <p className="font-mons text-[1.5vw] font-semibold  2xl:text-[18px] xsm:text-[10px]">
                              {item?.course?.title?.slice(0,60)}..
                            </p>
                            <p className="text-[#696984] text-md w-[100%] xsm:hidden md:text-[10px]">
                              {item?.course?.overview.slice(0, 60)}..{" "}
                            </p>
                          </div>
                          <div>
                            <p
                              onClick={() => Removecart(item?.course?._id)}
                              className="cursor-pointer font-mons text-[1vw] 2xl:text-[16px]  mt-[1vw] text-black font-semibold xsm:text-[7px]"
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-nowrap justify-between items-center">
                          <div className="flex gap-6 my-[0.5vw] w-[80%] 2xl:w-full 2xl:text-[11px] xsm:gap-2">
                            <div className="flex space-x-2 items-center xsm:space-x-1">
                              <img
                                className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] md:h-3 md:w-3"
                                src="../Icons/design.svg"
                              />
                              <p className="font-pop text-[16px] font-medium text-[#696984] xsm:text-[5px] md:text-[6px]">
                                {item?.course?.category}
                              </p>
                            </div>
                            <div className="flex space-x-2 items-center xsm:space-x-0">
                              <img
                                className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] md:h-2 md:w-2"
                                src="../Icons/clock2.svg"
                              />
                              <p className="font-pop text-[16px] font-medium text-[#696984] xsm:text-[5px] md:text-[6px]">
                                45 Hours
                              </p>
                            </div>
                            {/* <div className='flex items-center'>
                                                    <img className='w-[1.3vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/clockfilled.svg" alt="clock"></img>
                                                    <p className='font-mons text-[14px] 2xl:text-[14px] font-normal text-[#555555] xsm:text-[6px]'> {item?.course?.duration}</p>
                                                </div> */}
                            {/* <div className='flex items-center'>
                                                    <img className='w-[1.6vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/hat.svg" alt="hat"></img>
                                                    <p className='font-mons text-[14px] 2xl:text-[14px] font-normal text-[#555555] xsm:text-[6px]'> {item?.course?.enrollments / 1000}k Students</p>
                                                </div> */}
                            {/* <div className='flex items-center'>
                                        <img className='w-[1.1vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> All levels</p>
                                    </div> */}
                            {/* <div className='flex items-center'>
                                                    <img className='w-[1.2vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/files.svg" alt="files"></img>
                                                    <p className='font-mons text-[14px] 2xl:text-[14px] font-normal text-[#555555] xsm:text-[6px]'> {item?.course?.total_lessons} Lessons</p>
                                                </div> */}
                          </div>
                          {/* <div>
                            <p className="font-mons text-[1vw] 2xl:text-[16px]   text-black font-semibold xsm:text-[7px]">
                              Save For Later
                            </p>
                          </div> */}
                        </div>
                        {/* <div className="flex justify-end flex-nowrap">
                          <p className="font-mons text-[1vw]  mt-[0.6vw] text-black font-semibold 2xl:text-[16px] xsm:text-[7px]">
                            Move To Wishlist
                          </p>
                        </div> */}
                        <div>
                          <hr className="mt-[0.9vw] border-y-1 border-[#EAEAEA] " />
                        </div>
                        <div className="flex justify-between mt-[0.8vw] flex-wrap">
                          <div>
                            <div className="flex">
                              <img
                                className="w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]"
                                src="../Icons/Star.svg"
                                alt="star"
                              ></img>
                              <img
                                className="w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]"
                                src="../Icons/Star.svg"
                                alt="star"
                              ></img>
                              <img
                                className="w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]"
                                src="../Icons/Star.svg"
                                alt="star"
                              ></img>
                              <img
                                className="w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]"
                                src="../Icons/Star.svg"
                                alt="star"
                              ></img>
                              <img
                                className="w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]"
                                src="../Icons/Star.svg"
                                alt="star"
                              ></img>
                            </div>
                          </div>
                          <div className="flex items-center">
                          { item?.course?.discount_percentage ? <strike className="font-pop font-semibold text-gray-400 italic text-[14px] xsm:text-[11px] sm:text-[8px] md:text-[8px]">
                {item?.course?.base_price == 0 ? "Free" : "₹" + item?.course?.base_price}
              </strike>:""}
                            <p className="font-Inter text-[1.2vw] font-semibold text-[black] 2xl:text-[20px] xsm:text-[8px]">
                              ₹{parseFloat(item?.course?.base_price-(item?.course?.base_price*(item?.course?.discount_percentage/100)))}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="text-2xl w-[95vw] text-center mt-20 font-semibold">
              Your Cart is Empty
            </div>
          )}
        </div>

        {Data?.length > 0 && (
          <div className="w-[26%] md:w-[27%]  h-max flex flex-col justify-around space-y-4 font-pop p-6 rounded-xl xsm:w-[100%] sm:w-[100%] sm:mt-4 xsm:px-3 xsm:space-y-1 lg:space-y-2 md:space-y-1 border xl:space-y-2
           border-[#000]">
            <h1 className="font-semibold text-[1.7vw] xl:text-[32px] 2xl:text-[24px] xsm:text-[32px] lg:text-[28px] md:text-[22px] sm:font-semibold sm:text-[32px] xsm:font-semibold font-pop">
              Summary
            </h1>
            <p className="font-nu font-semibold xl:font-normal text-[2vw] xl:text-[24px] 2xl:text-[24px] lg:text-[20px] sm:text-[24px] xsm:text-[24px] md:text-[15px] xsm:font-normal ">
              Original Price
            </p>
            {/* <div className="flex xsm:flex-col  justify-between"> */}
            {
              Data.map((item,index)=>(
            <div className="flex justify-between items-center space-y-4 font-nu xl:space-y-0 xsm:space-y-0 sm:space-y-0 lg:space-y-1 xsm:px-2 md:pl-2  xl:pl-4 xsm:flex lg:pl-2 xsm:flex-row xsm:justify-between md:space-y-0 sm:px-4 " key={index+"c"}>
              <p className="font-mons font-semibold xl:font-normal text-[1.7vw] 2xl:text-[20px] xsm:text-[15px] sm:text-[15px] xsm:font-normal xl:text-[18px] lg:text-[15px] md:text-[9px]">
              {item?.course?.title.slice(0,20)}...
              </p>
              <p className="font-mons font-normal xl:font-normal text-[1.7vw] 2xl:text-[20px] lg:font-normal xsm:text-[19px] sm:text-[19px] xsm:font-normal xl:text-[24px] lg:text-[15px] md:text-[11px]">
              ₹{item?.course?.base_price}
              </p>
            </div>
              ))
            }
            <div>
              <p className=" text-[1vw] text-[#1DBF73] 2xl:text-[16px] sm:text-[12px] xsm:text-[12px] xl:text-[0.9rem] xl:font-normal ">
                Including all the taxes
              </p>
            </div>
            {/* </div> */}
            <div>
              <hr className=" border-y-1 border-[#EAEAEA] " />
            </div>
            {/* <div className="flex xsm:flex-col justify-between"> */}
            <div className="flex justify-between items-center space-y-4 font-nu xl:space-y-2 xsm:space-y-0 xsm:flex xsm:flex-row xsm:justify-between md:space-y-0">
              <p className=" xl:font-normal text-[2vw] 2xl:text-[24px] sm:text-[18px] xsm:text-[18px] font-nu xsm:font-noraml lg:text-[20px] xl:text-[24px] md:text-[15px]">
                Total
              </p>
              <p className="font-mons font-semibold xl:font-normal text-[1.7vw] 2xl:text-[20px] xsm:text-[20px] sm:text-[20px] lg:text-[20px] xsm:font-normal xl:text-[24px] md:text-[13px]">
                ₹{total}
              </p>
            </div>
            <div>
              <p className=" text-[1vw] text-[#1DBF73] xsm:font-normal 2xl:text-[16px]  xsm:text-[12px] sm:text-[12px] xl:text-[0.9rem] ">
                By completing your purchase you agree to terms of services
              </p>
            </div>
            {/* </div> */}
            <div className="flex justify-center">
              <Link
                to="/checkout"
                className="mt-[1.6vw] xl:mt-0 font-nu text-[1.7vw] px-[4vw] py-[0.5vw] bg-[#1DBF73] text-[#fff] border-none rounded-full 2xl:text-[24px] capitalize xl:text-[22px] md:text-[13px] md:px-[2vw] xsm:py-2 xsm:px-8 xsm:text-[18px] sm:text-[18px]"
                type=""
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      {show ? (
        <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      <Toaster toastOptions={{
         duration: 500,
      }}  position="top-right" />
    </div>
  );
}

export default ShopingCart;