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
  const checkUserValidation = async () => {
    const isValidUser = await authenticateUser();

    console.log(isValidUser);
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
  function Total(data) {
    let price = 0;
    data.map((item) => {
      price += item.course.base_price;
    });
    settotal(price);
  }

  useEffect(() => {
    async function Fetchdata() {
      //   console.log(query.get('slug'));
      if (login) {
        let slug = query.get("slug");
        let token = jwtDecode(login);
        if (slug) {
          let url = BASE_URL + "/course/" + slug;
          //   console.log(url);
          const data = await fetch(url);
          const response = await data.json();
          // setData(response?.cart)
          // Total(response?.cart)
          // console.log(Array(response?.course));
          setData(Array(response));
          // setcourseId([...courseId],response?.course?._id)

          // setcourseId(temp)
          Total(Array(response));
        } else {
          let url = BASE_URL + "/getcart?email=" + token.email;

          const data = await fetch(url);
          const response = await data.json();
          setData(response?.cart);
          Total(response?.cart);
          //   console.log(response);
        }
      }
    }
    Fetchdata();
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
      // console.log(userDetail);
      // console.log(orderDetails);

      // console.log(courseId);
      setcourseId(temp);
      // console.log(temp);
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
          let response1 = await data1.json();
        }
        // toast.success(response.message);
        setshow(false);
        // setTimeout(() => {
        //   navigate("/success");
        // }, 1000);
      } else {
        toast.error(response.message);
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

  const loadRazorpay = () => {
    if (!country) {
      toast.error("Select country");
    } else if (!state) {
      toast.error("Select state");
    } else if (!address || !zip) {
      toast.error("Every input must be filled");
    } else {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        const options = {
          // key: 'rzp_test_ovrL1ExhTWhDv2',
          key: "rzp_test_jmLsdK6FoWIRSe",
          amount: total * 100, // Amount in paisa
          currency: "INR",
          name: "Hoping minds",
          description: "Product description",
          image: "",
          height: "90vh",
          handler: function (response) {
            handleContinueCheckout();
            // router.push('/profile?tab=booking-history')
            // Handle success
            // alert(response.razorpay_payment_id);
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "8283929792",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      };
    }
  };

  const handlePayment = async () => {
    handleGenerateUrl().then((res) => {
      // console.log(res);
      if (res) {
        handleContinueCheckout();
        window.location.href = res;
      }
    });
  };

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
              className=""
              styleContainer={{ padding: "0px !important" }}
            />

            <StateSelector
              country={country}
              value={state}
              countryPlaceholder="Select state"
              onChange={handleStateChange}
              styleContainer={{ width: "400px !important" }}
            />
          </div>
          <div className="flex space-x-10 grid grid-cols-2 xsm:justify-between xsm:gap-0 xsm:space-x-2">
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Name"
              className="w-full py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 md:text-[14px]"
            />
            <input
              value={gstnumber}
              onChange={(e) => setgstnumber(e.target.value)}
              placeholder="GST No.(optional)"
              className="w-[88%] py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 xsm:w-[95%] md:text-[14px] md:w-[80%]"
            />
          </div>
          <div className="flex space-x-10 grid grid-cols-2 xsm:justify-between xsm:gap-0 xsm:space-x-2">
            <input
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              placeholder="Address"
              className="w-full py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 md:text-[14px]"
            />
            <input
              value={zip}
              onChange={(e) => setzip(e.target.value)}
              onInput={(e) => {
                const value = e.target.value;
                // Only allow digits
                e.target.value = value.replace(/[^0-9]/g, "");
              }}
              type="number"
              placeholder="ZIP Code"
              className="w-[88%] py-[6px] outline-none border rounded pl-2 xsm:text-[10px] xsm:py-1 xsm:w-[95%] md:text-[14px] md:w-[80%]"
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
                  <div className="bg-green-100 h-[200px] p-4 rounded-lg flex items-center card-shadow2 w-full xsm:p-2 xsm:justify-between xsm:h-[100px] md:p-2 md:h-[140px]">
                    <div className="w-[40%] h-full ">
                      <img
                        src={item.course.featured_image}
                        alt="course"
                        className="w-full h-full  rounded-lg xsm:ml-0 xsm:w-full xsm:h-full xsm:object-fit md:ml-0"
                      />
                    </div>
                    <div className="ml-[20px] h-full flex flex-col justify-between my-3 xsm:w-[55%] xsm:my-0 xsm:ml-0 md:ml-2">
                      <div>
                        <h2 className="text-[20px] font-semibold text-[#252641] text-custom-color xsm:text-[10px] md:text-[16px]">
                          {item.course.title}
                        </h2>
                        <p
                          className="mt-1 text-[16px] text-wrap xsm:hidden md:text-[10px]"
                          style={{ color: "#696984" }}
                        >
                          {item.course.overview.slice(0, 63)}..
                        </p>

                        <div className="flex mt-4 gap-6 xsm:mt-2 md:mt-3">
                          <div className="flex gap-1 xsm:justify-center xsm:items-center">
                            <Design className="w-[15px] h-[15px] xsm:h-3 xsm:w-3 md:h-3 md:w-3" />
                            <p
                              className="mt-[-2px] text-[13px] xsm:text-[8px] md:text-[10px]"
                              style={{ color: "#696984" }}
                            >
                              {item.course.category}
                            </p>
                          </div>

                          <div className="flex gap-1 xsm:justify-center xsm:items-center">
                            <Clock className="w-[15px] h-[15px] xsm:h-3 xsm:w-3 md:h-3 md:w-3" />
                            <p
                              className=" mb-2 mt-[-2px] text-[13px] xsm:text-[8px] xsm:mb-0 md:text-[10px]"
                              style={{ color: "#696984" }}
                            >
                              {item.course.duration}
                            </p>
                          </div>
                        </div>
                        <hr className="mt-3" />
                      </div>
                      {/* <img src="src/assets/Group.png" className="w-[590px] h-[1px]" /> */}
                      <div className="flex justify-between items-center">
                        <span className="flex mt-4 md:mt-0">
                          <Star className="xsm:w-3 md:w-4 w-5" />
                          <Star className="xsm:w-3 md:w-4 w-5" />
                          <Star className="xsm:w-3 md:w-4 w-5" />
                          <Star className="xsm:w-3 md:w-4 w-5" />
                          <Star className="xsm:w-3 md:w-4 w-5" />
                        </span>
                        <span className="mt-3 md:mt-0">
                          <p className="flex justify-end mr-4 text-[18px] mt-[-3px] font-semibold xsm:text-[10px] md:text-[14px]">
                            ₹{item.course.base_price}
                          </p>
                        </span>
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
            <h1 className="text-base xsm:text-[10px] md:text-[14px]">
              Original Price:
            </h1>
            <div className="flex justify-between">
              <p className=" green-color text-sm xsm:text-[10px] md:text-[14px]">
                Including all the taxes
              </p>
              <p className="xsm:text-[12px] md:text-[14px]">₹{total}</p>
            </div>
          </div>
          <hr />
          <div className="mt-5 mb-4 xsm:my-0">
            <h1 className="text-base xsm:text-[10px] md:text-[14px]">Total:</h1>
            <div className="flex justify-between">
              <p className=" green-color text-sm xsm:text-[10px] md:text-[14px]">
                Including all the taxes
              </p>
              <p className="xsm:text-[12px] md:text-[14px]">₹{total}</p>
            </div>
          </div>
          <span className="flex justify-center xsm:mt-4 md:mt-4">
            <button
              className="bg-green-color px-12 py-3 rounded-full text-white text-[20px] xsm:text-[12px] md:text-[16px] md:px-8"
              onClick={handlePayment}
            >
              Continue Checkout
            </button>
          </span>
          {/* Summary div end*/}
        </div>
        {/* Summary end */}
      </div>
      <Toaster position="top-center" />
      {/* CheckOut end */}
    </>
  );
};

export default CartCheckout;
