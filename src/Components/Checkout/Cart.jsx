import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Clock } from "../../Assets/Icons/clock2.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design2.svg";
import { ReactComponent as Star } from "../../Assets/Icons/Star.svg";
import { AUTH_BASE_URL, BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import {
  CountrySelector,
  StateSelector,
  CitySelector,
} from "volkeno-react-country-state-city";

import "volkeno-react-country-state-city/dist/index.css";
import toast, { Toaster } from "react-hot-toast";
import { authenticateUser } from "../../helpers/helperapi";
import { useContext } from "react";
import { Globalinfo } from "../../App";
import Spinner from "../Spinner";
import { handleGenerateUrl } from "../../helpers/paymentHelpers";
import axios from "axios";
import { data } from "@tensorflow/tfjs";

const CartCheckout = () => {
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const { userDetail } = useContext(Globalinfo);
  const [query, setquery] = useSearchParams();
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [zip, setzip] = useState("");
  const [gstnumber, setgstnumber] = useState("");
  const [Payment, setPayment] = useState();
  const [courseId, setcourseId] = useState();
  const [Data, setData] = useState([]);
  const [total, settotal] = useState(0);
  const [show, setshow] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [gst, setGst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [city, setCity] = useState("");
  const [coupon, setcoupon] = useState()
  const [applied, setapplied] = useState(false)
  const [inputData, setinputData] = useState({
    name,
    address,
    zip,
    gstnumber
  })
  // console.log(userDetail);
  const [warnings, setwarnings] = useState({
    name:false,
    country:false,
    state:false,
    address:false,
    zip:false
  })

  const handleInputchange=(e)=>{
let {name,value}=e.target;
setwarnings((prevWarnings) => ({
  ...prevWarnings,
  [name]: false
}));
setinputData((prev) => ({
  ...prev,
  [name]: value
}));
  }
  const checkUserValidation = async () => {
    const isValidUser = await authenticateUser();

    // console.log(isValidUser);
    if (isValidUser !== 200) {
      localStorage.removeItem("COURSES_USER_TOKEN");
      toast.error("You have been Logged Out");
      window.open(`${AUTH_BASE_URL}/logout`, "_self");
    }
  };

  useLayoutEffect(() => {
    checkUserValidation();
  }, []);

  let login = localStorage.getItem("COURSES_USER_TOKEN");
  let temp = [];

  function calculateTotals(data) {
    let price = 0;
    let disprice = 0;

    data.forEach((item) => {
      let basePrice = item.course.base_price;
      let discountPercentage = item.course.discount_percentage;
      let discountedPrice = basePrice * (1 - (discountPercentage / 100));
      price += basePrice;
      disprice += (basePrice - discountedPrice);
    });

    settotal(price);
    setDiscountPrice(disprice);

    let priceAfterGST = (price - disprice) * 1.18;
    let gstAmount = priceAfterGST - (price - disprice);

    setSgst(gstAmount / 2);
    setGst(gstAmount / 2);
    setFinalPrice((price-disprice));
  }


  

  useEffect(() => {
    async function fetchData() {
      if (login) {
        let slug = query.get("slug");
        let token = jwtDecode(login);
        let url = slug ? `${BASE_URL}/course/${slug}` : `${BASE_URL}/getcart?email=${token.email}`;

        const response = await fetch(url);
        const data = await response.json();

        if (slug) {
          setData([data]);
          calculateTotals([data]);
        } else {
          setData(data.cart);
          calculateTotals(data.cart);
        }
      }
    }
    fetchData();
  }, []);
  const handleCountryChange = (e) => {
    setcountry(e);
  };

  const handleStateChange = (e) => {
    setstate(e);
  };

  // Navigate page
  const navigate = useNavigate();

  const handleContinueCheckout = async () => {
    try {
      setshow(true);
      let url = BASE_URL + "/purchasecourse";
      let url1 = BASE_URL + "/deletecart";
      let orderDetails = {
        name: userDetail.name,
        zip,
        gstnumber,
        country: country.capital,
        state: state.label,
        address,
      };
     
      setcourseId(temp);
      let data = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + login,
        },
        body: JSON.stringify({ courses: temp, orderDetails: orderDetails }),
      });
      let response = await data.json();
      // console.log(response);
      if (response.success) {
        if (!query.get("slug")) {
          let data1 = await fetch(url1, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + login,
            },
            body: JSON.stringify({ email: userDetail.email }),
          });
          // let response1 = await data1.json();
        }
        // toast.success(response.message);
        setshow(false);
        // setTimeout(() => {
        //   navigate("/success");
        // }, 1000);
      } else {
        // toast.error(response.message);
      }
      //   if (response.success) {
      //     toast.success(response.message);
      //     setTimeout(() => {
      //       navigate("/success");
      //     }, 1000);
      //   } else {
      //     toast.error(response.message);
      //   }
      // } else {
      //   toast.error(response.message);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // const loadRazorpay = () => {
  //   if (!country) {
  //     toast.error("Select country");
  //   } else if (!state) {
  //     toast.error("Select state");
  //   } else if (!address || !zip) {
  //     toast.error("Every input must be filled");
  //   } else {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //     script.onload = () => {
  //       const options = {
  //         // key: 'rzp_test_ovrL1ExhTWhDv2',
  //         key: "rzp_test_jmLsdK6FoWIRSe",
  //         amount: total * 100, // Amount in paisa
  //         currency: "INR",
  //         name: "Hoping minds",
  //         description: "Product description",
  //         image: "",
  //         height: "90vh",
  //         handler: function (response) {
  //           handleContinueCheckout();
  //           // router.push('/profile?tab=booking-history')
  //           // Handle success
  //           // alert(response.razorpay_payment_id);
  //         },
  //         prefill: {
  //           name: "Customer Name",
  //           email: "customer@example.com",
  //           contact: "8283929792",
  //         },
  //         theme: {
  //           color: "#3399cc",
  //         },
  //       };
  //       const rzp = new window.Razorpay(options);
  //       rzp.open();
  //     };
  //   }
  // };

  // console.log(total)
  const handlePayment = async () => {
    const userData = jwtDecode(localStorage.getItem("COURSES_USER_TOKEN"));
  
    // Validate inputs
    let hasErrors = false;
    let updatedWarnings = {};

    // Check for missing address
    if (!inputData.address) {
      updatedWarnings.address = true;
      hasErrors = true;
    }

    // Check for missing zip
    if (!inputData.zip) {
      updatedWarnings.zip = true;
      hasErrors = true;
    }

    // Check for missing state
    if (!city) {
      updatedWarnings.city = true;
      toast.error("Select City");
      hasErrors = true;
    }

    // Check for missing state
    if (!state) {
      updatedWarnings.state = true;
      toast.error("Select State");
      hasErrors = true;
    }

    // Check for missing country
    if (!country) {
      updatedWarnings.country = true;
      toast.error("Select country");
      hasErrors = true;
    }

    // If there are any errors, update warnings and return early
    if (hasErrors) {
      setwarnings(prevWarnings => ({ ...prevWarnings, ...updatedWarnings }));
      return;
    }

    
    function getLast10Digits(number) {
        // Using modulus to get the last 10 digits
        return number % 10000000000;
    }

    if (inputData?.gstnumber && inputData?.gstnumber.length !== 15) {
      toast.error("GST number should be 15 digits long and alphanumeric");
      return; // Early return on incorrect length
    }
    
    // Check alphanumeric with regex
    if (inputData?.gstnumber && !/^[A-Z0-9]+$/.test(inputData.gstnumber)) {
      toast.error("GST number should be alphanumeric");
      return; // Early return on non-alphanumeric characters
    }
  
    let number = userDetail?.phone;
    let last10Digits = getLast10Digits(number);


    const paymentUrl = `https://payme.hopingminds.com/api/v1/make-payment?userID=${userData?.userID}&email=${userDetail?.email}&phone=${last10Digits || "0000000000"}&name=${userDetail?.name?.replace(/\s/g,"%20")}&address=${inputData.address.replace(/\s/g,"%20")}&zip=${inputData.zip}&country=${country?.name?.replace(/\s/g,"%20")}&state=${state?.name.replace(/\s/g,"%20")}&gstNumber=${inputData?.gstnumber || "000"}&promoCode=${coupon}`;
    // console.log(paymentUrl)
    async function handlePaymentUrl(){
      try {
        const res = await axios.get(paymentUrl);
    
        if (res.status === 200) {
          toast.success("Please confirm your purchase")
          setPaymentLink(res.data.payment_link);
          setShowModal(true);
        } else {
          toast.error("Unexpected response status.");
          setPaymentLink(null);
        }
      } catch (error) {
        setPaymentLink(null);
        if (error.response) {
          // Server responded with a status other than 200
          if (error.response.status === 429) {
            toast.error("Too many requests. Please try again later.");
          } else {
            toast.error(`Error: ${error.response.status} - ${error.response.data.message}`);
          }
        } else if (error.request) {
          // Request was made but no response was received
          toast.error("Network error. Please check your internet connection.");
        } else {
          // Something happened in setting up the request
          toast.error(`Error: ${error.message}`);
        }
      }    
    }
    handlePaymentUrl();
    // else {
    //   const Linksend = `https://payme.hopingminds.com/api/v1/make-payment?userID=${
    //     userData?.userID
    //   }&email=${userDetail?.email}&phone=${
    //     userDetail?.phone
    //   }&name=${userDetail?.name?.replace(
    //     /\s/g,
    //     "%20"
    //   )}&address=${inputData.address.replace(/\s/g, "%20")}&zip=${
    //     inputData.zip
    //   }&country=${country?.name?.replace(
    //     /\s/g,
    //     "%20"
    //   )}&state=${state?.name.replace(/\s/g, "%20")}&gstNumber=${
    //     inputData?.gstnumber
    //   }`;
  };

  const handleConfirm = () =>{
    if(paymentLink){
      setShowModal(false);
      window.location.href = paymentLink;
    }else{
      toast.error("Too many requests. Please try again later.");
    }
  }
  const closeConfirm = () => {
    setShowModal(false);
  }
async function handlecoupon(){
try {
  const data=await fetch(BASE_URL+'/ispromocodevalid/'+coupon,{
    method:'GET',
    headers:{
      'Content-type':'application/json',
      'Authorization':`Bearer ${localStorage.getItem('COURSES_USER_TOKEN')}`
    }
  })
  const response=await data.json()
  if(response?.success){
    toast.success("Coupon applied successfully")
   setDiscountPrice(total*(response?.data?.discountPercentage/100))
   setapplied(true)
  }
  else{
    toast.error(response?.message)
  }
 
} catch (error) {
  console.log(error);
}
}
  return (
    <>
      {show ? (
        <div className="w-full h-screen z-20 fixed top-0 left-0 bg-[#b4cca1] opacity-80">
          <Spinner className="" />
        </div>
      ) : (
        ""
      )}
      {/* CheckOut start */}
      <div className="card-checkout mx-14 my-5 flex  gap-20 xsm:flex-col xsm:mx-0 xsm:px-[5%] xsm:gap-8 px-[2%] md:mx-[2%]">
        {/* Billing address start */}
        <div className="w-[65%] min-h-[100vh] xsm:w-[100%] space-y-5 xsm:space-y-2 xsm:min-h-full">
          <span className="text-xl font-bold xsm:text-[12px] md:text-[18px]">
            Billing Address
          </span>

          {/* Dropdown buttons start */}
          <div className="flex space-x-10 grid grid-cols-2 xsm:justify-between xsm:gap-0 xsm:space-x-2">
            <CountrySelector
              onChange={handleCountryChange}
              name="country"
              placeholder="Select a country"
              value={country}
              className={warnings.country?'border border-red-500':''}
              styleContainer={{ padding: "0px !important" , border:`${warnings.country ?'1px solid red' : ''}`}}

            />

            <StateSelector
              country={country}
              value={state}
              countryPlaceholder="Select state"
              onChange={handleStateChange}
              className={warnings.state?'border border-red-500':''}
              styleContainer={{ width: "400px !important",border:`${warnings.state ?'1px solid red' : ''}` }}
            />
          </div>
          <div className=" space-x-10 grid grid-cols-2 xsm:justify-between xsm:gap-0 xsm:space-x-2">
            <CitySelector
              country={country}
              state={state}
              value={city}
              onChange={setCity}
              statePlaceholder='Select city'
              styleContainer={{ padding: "0px !important" }}
            />
            <input
              value={inputData.gstnumber}
              name="gstnumber"
              onChange={handleInputchange}
              placeholder="GST No.(optional)"
              className="w-[88%] py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 xsm:w-[95%] md:text-[14px] md:w-[80%]"
            />
          </div>
          <div className="flex space-x-10 grid grid-cols-2 xsm:justify-between xsm:gap-0 xsm:space-x-2">
            <input
             value={inputData.address}
              name="address"
              onChange={handleInputchange}
              placeholder="Address"
              required
              className={`w-full py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 md:text-[14px] ${warnings.address ? 'border border-red-500' : ''}`}
            />
            <input
              value={inputData.zip}
              name="zip"
              required
              onChange={handleInputchange}
              onInput={(e) => {
                const value = e.target.value;
                // Only allow digits
                e.target.value = value.replace(/[^0-9]/g, "");
              }}
              type="number"
              placeholder="ZIP Code"
              className={`w-[88%] py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 xsm:w-[95%] md:text-[14px] md:w-[80%] ${warnings.zip ? 'border border-red-500' : ''}`}
            />
          </div>

          <div className="h-auto space-y-7 xsm:space-y-3">
            <h1 className="text-xl font-bold mt-6 mb-3 xsm:text-[12px] xsm:mb-0 xsm:mt-4 md:text-[18px]">
              Order Details
            </h1>
            {Data?.map((item) => {
              temp.push(item?.course?._id);
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
                            <p className="font-mons text-[1.5vw] font-semibold  2xl:text-[18px] xsm:text-[10px]" title={typeof item?.course?.title === 'string' ? item.course.title : 'Title'}>
                              {item?.course?.title?.slice(0,60)}..
                            </p>
                            <p className="text-[#696984] text-md w-[100%] xsm:hidden md:text-[10px]">
                              {item?.course?.overview.slice(0, 60)}..{" "}
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
                          </div>
                          
                        </div>
                        
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
            })}
          </div>

          {/* Order Details end*/}
        </div>
        {/* Billing address end */}

        {/* Summary start */}
        <div className="h-[100vh] w-[30%] xsm:w-full">
          <span className=" text-xl font-bold xsm:text-[12px] md:text-[18px]">
            Summary
          </span>

          {/* Summary div start*/}
          <div className="mt-5 mb-4 xsm:my-0">
            <div className="flex justify-between">
            <h1 className="text-base font-semibold xsm:text-[10px] md:text-[14px]">
              Original Price:
            </h1>
              <p className="xsm:text-[12px] md:text-[14px] font-semibold">₹{total}</p>
            </div>
          </div>
          <hr />
          <div className="mt-5 mb-4 xsm:my-0">
            <div className="flex justify-between">
            <input value={coupon} onChange={(e)=>setcoupon(e.target.value)} placeholder="Coupon (optional)" className="px-2 focus:outline-none border-b"/>
            {!applied ? <p onClick={handlecoupon} className="xsm:text-[12px] md:text-[14px] font-semibold green-color cursor-pointer">Apply</p>:<p  className="xsm:text-[12px] md:text-[14px] font-semibold opacity-50 cursor-not-allowed">Applied</p>}
            </div>
          </div>
          <div className="mt-5 mb-4 xsm:my-0">
            <div className="flex justify-between">
              <p className=" green-color text-sm xsm:text-[10px] md:text-[14px]">
                Discount Added 
              </p>
              <p className="xsm:text-[12px] md:text-[14px]">-₹{discountPrice}</p>
            </div>
          </div>
          <div className="mt-5 mb-4 xsm:my-0">
            <h1 className="text-base xsm:text-[10px] md:text-[14px] font-semibold">Total:</h1>
            <div className="flex justify-between">
              <p className=" green-color text-sm xsm:text-[10px] md:text-[14px]">
                Including all the taxes
              </p>
              <p className="xsm:text-[12px] md:text-[14px] font-semibold">₹{total-discountPrice}</p>
            </div>
          </div>
          <span className="flex justify-center xsm:mt-4 md:mt-4">
            <button
              className="bg-green-color px-12 py-3 rounded-full text-white text-[20px] xsm:text-[12px] md:text-[16px] md:px-8"
              onClick={handlePayment}
            
            >
              Continue Checkout
            </button>
            {/* <a href={`${paymentLink}`}>
              confirm Payment
            </a> */}
          </span>
          {/* Summary div end*/}
        </div>
        {/* Summary end */}
      </div>
      {showModal &&
        <div id="modelConfirm" className="fixed  z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
            <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">

                <div className="flex justify-end p-2">
                    <button onClick={closeConfirm} type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div className="p-6 pt-0 text-center">
                    <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Please confirm your purchase</h3>
                    <a href="#"  onClick={handleConfirm}
                        className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                        Yes, I'm sure
                    </a>
                    <a href="#" onClick={closeConfirm}
                        className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                        data-modal-toggle="delete-user-modal">
                        No, cancel
                    </a>
                </div>

            </div>
        </div>
      }
      
      <Toaster toastOptions={{
         duration: 500,
      }} position="top-center" />
      {/* CheckOut end */}
    </>
  );
};

export default CartCheckout;