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
  const { setCartSize, cartSize } = useContext(Globalinfo);
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
      setCartSize(cartSize - 1);
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
      <div className="flex justify-between items-start my-10 min-h-[70vh] h-auto  px-[3%] xsm:flex-col xsm:justify-start xsm:h-auto xsm:gap-8 xsm:my-6 md:h-auto md:my-10">
        <div className="w-[70%] md:w-[68%] space-y-10  xl:space-y-4 xsm:w-[100%] xsm:space-y-4 md:space-y-4">
          {Data?.length > 0 ? (
            Data?.map((item, index) => {
              return (
                <>
                  <div className="w-full bg-[#fff] border  border-[#858181] xsm:mx-0  px-6 shadow-xl rounded-xl xsm:p-2 md:p-2 mx-[2rem] py-5">
                    <div
                      className="flex items-center xl:h-[18vh] h-[15vh] rounded-[1.2vw] xsm:h-[250px] 2xl:w-[900px] 2xl:h-[240px] md:h-[10vh]  xsm:flex-col "
                      key={"cour" + index}
                    >
                      <div className="w-[50%] xl:w-[35%] 2xl:w-[600px] md:w-[35%] md:h-[90%] xl:h-[80%] xsm:h-[60%] xsm:w-[100%] ">
                        <img
                          className="w-[100%] h-[100%] rounded-xl object-cover "
                          src={item?.course?.featured_image}
                          alt="FSD-img"
                        ></img>
                      </div>
                      <div className="flex flex-col justify-evenly mx-[1vw] w-[100%] 2xl:h-[100%] xsm:mx-[2vw]">
                        {/* <div>
                                <p className='font-mons text-[0.8vw] 2xl:text-[14px]'><span className='text-[#555555]'>by</span> Determined-instructure</p>
                            </div> */}
                        <div className="flex xsm:flex-col flex-nowrap justify-between items-center font-pop text-[#252641] ">
                          <div className="space-y-2 md:space-y-1 xsm:space-y-0 xsm:flex xsm:justify-between xsm:mt-1 xsm:gap-2 xsm:px-4">
                            <p className="text-[1.5vw] md:text-[14px] font-semibold  2xl:text-[18px] xl:text-[24px] xsm:text-[14px] xsm:font-normal">
                              {item?.course?.title?.slice(0, 60)}..
                            </p>
                            <p className="font-mons text-[1.2vw] font-semibold text-[black] xl:text-[18px] xl:font-normal 2xl:text-[20px] xsm:text-[20px] xl:hidden md:hidden lg:hidden sm:hidden 2xl:hidden xsm:font-normal">
                              ₹{item?.course?.base_price}
                            </p>
                            <p className="text-[#696984] text-md w-[100%] md:text-[10px] xsm:hidden">
                              {item?.course?.overview.slice(0, 60)}..{" "}
                            </p>
                          </div>
                          <div className="xsm:flex xsm:gap-12 xsm:flex-row-reverse xsm:px-0">
                            <p
                              onClick={() => Removecart(item?.course?._id)}
                              className="cursor-pointer text-[1vw] 2xl:text-[16px] xl:text-[17px]  mt-[1vw] xsm:mt-0 xsm:text-[11px] md:text-[12px] "
                            >
                              Remove
                            </p>
                            <p className="text-[#696984] font-pop text-[10px]  hidden xsm:block ">
                              {item?.course?.overview.slice(0, 40)}...{" "}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-nowrap justify-between items-center">
                          <div className="flex gap-6 my-[0.5vw] w-[60%] 2xl:w-full 2xl:text-[11px] xsm:gap-20 xsm:mx-4 ">
                            <div className="flex space-x-2 items-center xsm:space-x-1">
                              <img
                                className="w-[16px] h-[16px] xsm:w-[11px] xsm:h-[11px]  md:h-3 md:w-3"
                                src="../Icons/design.svg"
                                alt="icon"
                              />
                              <p className="font-pop text-[16px] font-medium text-[#696984] xsm:text-[11px] md:text-[9px]">
                                design
                              </p>
                            </div>
                            <div className="flex space-x-2 items-center xsm:space-x-0">
                              <img
                                className="w-[16px] h-[16px] xsm:w-[11px] xsm:h-[11px] md:h-2 md:w-2"
                                src="../Icons/clock2.svg"
                                alt="icon"
                              />
                              <p className="font-pop text-[16px] font-medium text-[#696984] xsm:text-[11px] md:text-[9px]">
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
                            <p className="text-[1vw] 2xl:text-[16px] xl:text-[15px]  text-[#252641] font-normal xsm:text-[7px] cursor-pointer">
                              Save For Later
                            </p>
                          </div> */}
                        </div>
                        {/* <div className="flex justify-end flex-nowrap">
                          <p className="font-mons text-[1vw]  text-[#252641] font-normal 2xl:text-[14px] xl:text-[16px] xsm:text-[7px] cursor-pointer">
                            Move To Wishlist
                          </p>
                        </div> */}
                        <div>
                          <hr className=" border-y-1 border-[#EAEAEA] xsm:hidden" />
                        </div>
                        <div className="flex justify-between mt-[0.8vw] flex-wrap xsm:hidden">
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
                          <div>
                            <p className="font-Inter text-[1.2vw] font-semibold text-[black] xl:text-[18px] xl:font-normal 2xl:text-[20px] xsm:text-[8px] xsm:hidden ">
                              ₹{item?.course?.base_price}
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
          <div className="w-[26%] md:w-[27%]  h-max flex flex-col justify-around space-y-4 font-pop p-6 rounded-xl xsm:w-[100%] xsm:px-3 xsm:space-y-1 md:space-y-[6px] border xl:space-y-2
           border-[#000]">
            <h1 className="font-semibold text-[1.7vw] xl:text-[32px] 2xl:text-[24px] xsm:text-[32px] md:text-[28px] xsm:font-semibold font-pop">
              Summary
            </h1>
            <p className="font-nu font-semibold xl:font-normal text-[2vw] xl:text-[24px] 2xl:text-[24px] xsm:text-[24px] md:text-[18px] xsm:font-normal ">
              Original Price
            </p>
            {/* <div className="flex xsm:flex-col  justify-between"> */}
            {
              Data.map((item,index)=>(
            <div className="flex justify-between items-center space-y-4 font-nu xl:space-y-0 xsm:space-y-0 xsm:px-2  xl:pl-4 xsm:flex xsm:flex-row xsm:justify-between md:space-y-0 " key={index+"c"}>
              <p className="font-mons font-semibold xl:font-normal text-[1.7vw] 2xl:text-[20px] xsm:text-[15px] xsm:font-normal xl:text-[18px] md:text-[9px]">
              {item?.course?.title.slice(0,27)}...
              </p>
              <p className="font-mons font-semibold xl:font-normal text-[1.7vw] 2xl:text-[20px] xsm:text-[19px] xsm:font-normal xl:text-[24px] md:text-[11px]">
              ₹{item?.course?.base_price}
              </p>
            </div>
              ))
            }
            <div>
              <p className=" text-[1vw] text-[#1DBF73] 2xl:text-[16px] xsm:text-[12px] xl:text-[0.9rem] xl:font-normal ">
                Including all the taxes
              </p>
            </div>
            {/* </div> */}
            <div>
              <hr className=" border-y-1 border-[#EAEAEA] " />
            </div>
            {/* <div className="flex xsm:flex-col justify-between"> */}
            <div className="flex justify-between items-center space-y-4 font-nu xl:space-y-2 xsm:space-y-0 xsm:flex xsm:flex-row xsm:justify-between md:space-y-0">
              <p className="xl:font-normal text-[2vw] 2xl:text-[24px] xsm:text-[18px] font-nu xsm:font-noraml xl:text-[24px] md:text-[13px]">
                Total
              </p>
              <p className="font-mons font-semibold xl:font-normal text-[1.7vw] 2xl:text-[20px] xsm:text-[20px] xsm:font-normal xl:text-[24px] md:text-[13px]">
                ₹{total}
              </p>
            </div>
            <div>
              <p className=" text-[1vw] text-[#1DBF73] xsm:font-normal 2xl:text-[16px]  xsm:text-[12px] xl:text-[0.9rem] ">
                By completing your purchase you agree to terms of services
              </p>
            </div>
            {/* </div> */}
            <div className="flex justify-center">
              <Link
                to="/checkout"
                className="mt-[1.6vw] xl:mt-0 font-nu text-[1.7vw] px-[4vw] py-[0.5vw] bg-[#1DBF73] text-[#fff] border-none rounded-full 2xl:text-[24px] capitalize xl:text-[22px] md:text-[15px] md:px-[2vw] xsm:py-2 xsm:px-8 xsm:text-[18px]"
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
      <Toaster position="top-right" />
    </div>
  );
}

export default ShopingCart;
