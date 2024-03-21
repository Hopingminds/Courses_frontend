import React, { useEffect, useState } from "react";
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Clock } from "../../Assets/Icons/clock.svg";
import { ReactComponent as Design } from "../../Assets/Icons/design.svg";
import { ReactComponent as Star } from "../../Assets/Icons/Star.svg";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
const CartCheckout = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    const countries = ["Country 1", "Country 2", "Country 3"];
    const states = ["State 1", "State 2", "State 3"];

    const [Data, setData] = useState([])
    const [total, settotal] = useState(0)
    let token=jwtDecode(localStorage.getItem('COURSES_USER_TOKEN'))

    function Total(data){
        let price=0;
        data.map((item)=>{
price+=item.course.base_price
        })
        settotal(price)
    }

    useEffect(() => {
        async function Fetchdata(){
          // console.log(token);
          let url=BASE_URL+'/getcart?email='+token.email;
        //   console.log(url);
          const data=await fetch(url)
          const response=await data.json()
          setData(response?.cart)
          Total(response?.cart)
          console.log(response);
        }
        Fetchdata()
  
      }, [])
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    // Navigate page
    const navigate = useNavigate();

    const handleContinueCheckout = () => {
        navigate('/success');
    }

    return (
        <>
            {/* CheckOut start */}
            <div className="card-checkout mx-14 my-5 flex gap-40">
                {/* Billing address start */}
                <div className="w-[55%] min-h-[100vh]">
                    <span className="text-xl font-bold ">Billing Address</span>

                    {/* Dropdown buttons start */}
                    <div className="flex gap-14">
                        <div className="relative">
                            <select
                                className="w-[308px] mt-3 px-5 py-3 border rounded-md focus:outline-none appearance-none bg-green-100 card-shadow border-none outline-none"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                            >
                                <option value="">Country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0  left-[250px] top-3 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="h-[29px] w-[29px] text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="relative ">
                            <select
                                className="w-[308px] px-5 py-3 mt-3 p-2 border rounded-md focus:outline-none appearance-none bg-green-100 card-shadow border-none outline-none"
                                value={selectedState}
                                onChange={handleStateChange}
                            >
                                <option value="">State</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 left-[250px] top-3 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="h-[29px] w-[29px] text-black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Dropdown buttons end */}


                    {/* Payment Method */}
                    <div>
                        <h1 className="text-xl font-bold mt-6 mb-3">Payment Method</h1>
                        <div className="bg-green-100 rounded-md p-4 card-shadow">
                            <p className="text-base green-color pb-4">Select payment method</p>
                            <div className="space-y-2">
                                <div className="py-1">
                                    <input type="radio" id="creditDebitCard" name="paymentMethod" value="creditDebitCard" className="mr-2" />
                                    <label htmlFor="creditDebitCard"> Credit/ Debit card</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" id="upi" name="paymentMethod" value="upi" className="mr-2" />
                                    <label htmlFor="upi"> UPI</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" id="netBanking" name="paymentMethod" value="netBanking" className="mr-2" />
                                    <label htmlFor="netBanking"> Net banking</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" className="mr-2" />
                                    <label htmlFor="cashOnDelivery"> Cash on Delivery</label>
                                </div>
                                <div className="py-1">
                                    <input type="radio" id="emi" name="paymentMethod" value="emi" className="mr-2" />
                                    <label htmlFor="emi"> EMI</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Order Details start*/}

                    {/* <div>
                        <h1 className="text-xl font-bold mt-6 mb-3">Order Details</h1>
                        <div className="bg-green-100 rounded-lg flex flex-col md:flex-row items-center card-shadow2">
                            <img src="src/assets/images/Rectangle 32.png" alt="course" className="w-[230px] h-[140px] object-cover rounded-lg mt-4 md:mt-0 md:ml-4" />
                            <div className="ml-4 my-3 md:ml-0">
                                <h2 className="text-md font-semibold text-#252641 text-custom-color">AWS Certified Solutions Architect</h2>
                                <p className="mt-1 text-sm md:text-base" style={{ color: "#696984" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nostrum!</p>

                                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-4 md:mt-8">
                                    <div className="flex items-center">
                                        <img src="src/assets/Group 260.png" className="w-5 h-5" />
                                        <p className="ml-2 text-sm md:text-base" style={{ color: "#696984" }}>Design</p>
                                    </div>

                                    <div className="flex items-center mt-1 md:mt-0">
                                        <img src="src/assets/.png" className="w-5 h-5" />
                                        <p className="ml-2 text-sm md:text-base" style={{ color: "#696984" }}>3 months</p>
                                    </div>
                                </div>
                                <img src="src/assets/Group.png" className="w-full h-1 mt-4" />
                                <div className="flex justify-between items-center mt-4">
                                    <span className="flex items-center">
                                        <Star className="w-5 h-5" />
                                        <Star className="w-5 h-5" />
                                        <Star className="w-5 h-5" />
                                        <Star className="w-5 h-5" />
                                        <Star className="w-5 h-5" />
                                    </span>
                                    <p className="ml-auto text-sm md:text-base font-bold">₹2000</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="h-auto space-y-7">
                            <h1 className="text-xl font-bold mt-6 mb-3 ">Order Details</h1>
                            {Data?.map((item)=>{
                                return(<>
                                  <div className="bg-green-100 rounded-lg flex items-center card-shadow2 w-[100%]">
                                <img src={item.course.featured_image} alt="course" className="w-[230px] h-[140px]  object-cover rounded-lg mt-[-4px] ml-4" />
                                <div className="ml-[20px] my-3">
                                    <h2 className="text-md font-semibold text-[#252641] text-custom-color ">{item.course.title}</h2>
                                    <p className="mt-1 text-[13px] text-wrap " style={{ color: "#696984" }}>
                                    {item.course.overview.slice(0,110)}.. 
                                    </p>

                                    <div className="flex mt-8 gap-6">
                                        <div className="flex gap-1">
                                            <Design className="w-[15px] h-[15px] " /><p className="mt-[-2px] text-[13px] " style={{ color: "#696984" }}>{item.course.category}</p>
                                        </div>

                                        <div className="flex gap-1">
                                            <Clock className="w-[15px] h-[15px] " /><p className=" mb-2 mt-[-2px] text-[13px] " style={{ color: "#696984" }}>{item.course.duration}</p>
                                        </div>
                                    </div>
                                    {/* <img src="src/assets/Group.png" className="w-[590px] h-[1px]" /> */}
                                    <div className="flex justify-between items-center">
                                        <span className="flex mt-4"><Star  />
                                            <Star  /><Star /><Star  /><Star /></span>
                                        <span className="mt-3">
                                            <p className="flex justify-end mr-4 text-[18px] mt-[-3px] font-semibold" >₹{item.course.base_price}</p>

                                        </span>
                                    </div>
                                </div>

                            </div>
                                </>)
                            })}
                          
                         
                       
                        </div>


                    {/* Order Details end*/}

                </div>
                {/* Billing address end */}

                {/* Summary start */}
                <div className="h-[100vh] w-full">
                    <span className=" text-xl font-bold">Summary</span>

                    {/* Summary div start*/}
                    <div className="mt-5 mb-4">
                        <h1 className="text-base">Original Price:</h1>
                        <div className="flex justify-between">
                            <p className=" green-color text-sm">Including all the taxes</p>
                            <p>₹{total}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-5 mb-4">
                        <h1 className="text-base">Total:</h1>
                        <div className="flex justify-between">
                            <p className=" green-color text-sm">Including all the taxes</p>
                            <p>₹{total}</p>
                        </div>
                    </div>
                    <span className="flex justify-center">
                        <button className="bg-green-color px-12 py-3 rounded-full text-white text-[20px]" onClick={handleContinueCheckout}>Continue Checkout</button>
                    </span>
                    {/* Summary div end*/}
                </div>
                {/* Summary end */}
            </div>
            {/* CheckOut end */}
        </>
    )
}

export default CartCheckout;