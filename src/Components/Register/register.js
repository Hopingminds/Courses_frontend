import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import './register.css';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateCollege, validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { AUTH_BASE_URL, BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { ReactComponent as Google } from '../../Assests/Icons/google.svg';
import { ReactComponent as Linkedin } from '../../Assests/Icons/linkedin.svg';
import { jwtDecode } from 'jwt-decode';
import { authenticateUser } from '../../helpers/helperapi';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
const Register = () => {
    const navigate = useNavigate();
    const { getUserDetails } = useContext(Globalinfo);
    const [showPassword, setShowPassword] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const [countrycode, setcountrycode] = useState()
    const [SearchedData, setSearchedData] = useState([])

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const collegeRef = useRef(null);
    const degreeRef = useRef(null);
    const branchRef = useRef(null);
    const passwordRef = useRef(null);

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        degree: "",
        stream: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
            
        });
    };

  async function SearchData(e) {
        let query = e.target.value;
        setUser({
            ...user,
            college:query,
            
        })
        if (query == "") {
          setSearchedData([]);
         
         
        } else {
          try {
            let url1=BASE_URL+'/getcolleges?search='+query
            const data=await fetch(url1)
            const response=await data.json()
            // console.log(response);
            setSearchedData(response)
          } catch (error) {
            console.log(error);
          }
          
        }
      }


    const handleKeyDown = (e, nextRef) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextRef) {
                nextRef.current.focus();
            } else {
                handleRegister();
            }
        }
    };

    const handleRegister = async () => {
        // console.log(user);
        countrycode.replace(/\D/g, '')
        console.log(countrycode.length);
       
    //    console.log( countrycode.replace(/\D/g, ''));
    
        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email');
            return;
        }
        if(!(countrycode.length>8 && countrycode.length<15)){
            toast.error('Enter valid Phone Number');
            return;
        }
        if (!validateCollege(user.college)) {
            toast.error('Enter valid College Name');
            return;
        }

        if (!user.name || !user.degree || !user.password || !user.email || !user.college ) {
            toast.error("Enter Valid Credentials");
            return;
        }
        setBtnLoader(true);
        try {
            const res = await axios.post(`${BASE_URL}/register`, {
                name: user.name,
                email: user.email,
                phone: countrycode,
                college: user.college,
                degree: user.degree,
                stream: user.stream,
                password: user.password,
            });
            getUserDetails();
            localStorage.setItem('COURSES_USER_TOKEN', res.data.token);
            toast.success("Registered Successfully");
            if (res.status) {
                const decoded = jwtDecode(res.data.token);
                try {
                    const res = await axios.get(`${BASE_URL}/user/${decoded.email}`);
                    if (res.data.userDetails.purchased_courses.length > 0) {
                        navigate('/learning');
                    } else {
                        navigate('/course');
                    }
                } catch (error) {
                    console.log(error);
                }
            }



        } catch (error) {
            toast.error(error.response.data.error.error);
        } finally {
            setBtnLoader(false);
        }
    };


    const handleGoogleRegister = () => {
        window.open(
			`${AUTH_BASE_URL}/google/callback`,
			"_self"
		);
    }

    const handleLinkedInRegister = () => {
        window.open(
			`${AUTH_BASE_URL}/linkedin/callback`,
			"_self"
		);
    }

function handleSearch(clg){
    setUser({
        ...user,
        college:clg,
        
    })
    setSearchedData([])
}
    return (
        <>
            <div className='flex overflow-hidden'>
                <div className='w-[40%] flex items-center justify-end relative xsm:hidden '>
                    <img className='w-[75%] object-cover absolute top-10 ' src='../login_bg.png' />
                </div>
                <div className='flex flex-col items-center my-16 w-[60%] gap-4 xsm:w-full md:my-12'>
                    {/* <p className='font-pop text-[14px]'>Welcome to Hoping Minds</p> */}
                    <div className='flex flex-col w-[75%] gap-4 xsm:w-[95%] items-center md:w-[90%]'>
                        <div className='flex justify-between bg-[#e2fff1] rounded-full py-2 mx-16 w-[40%] md:w-[50%] xsm:w-[50%]'>
                            <button className='bg-transparent cursor-pointer Logininactive' onClick={() => navigate('/login')} >Login</button>
                            <button className='bg-transparent cursor-pointer Loginactive' >Register</button>
                        </div>
                        {/* inputs */}
                        <div className='flex flex-col gap-4 grid grid-cols-2 gap-4 xsm:px-[5%]'>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Name</p>
                                <input
                                    ref={nameRef}
                                    className='mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px] md:py-[7px] xsm:text-[12px] xsm:py-[7px]'
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Email</p>
                                <input
                                    ref={emailRef}
                                    className='mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px]'
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop'>Contact Number</p>
                              <PhoneInput
                        className='phonenumbercountrycode mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none'
                        defaultCountry="IN"
                        name="phone"
                        placeholder="Enter phone number"
                        value={countrycode}
                        onChange={setcountrycode}
                        />
                                {/* <input
                                    ref={phoneRef}
                                    className='mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px]'
                                    type="text"
                                    placeholder="Enter Your Contact No."
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, degreeRef)}
                                /> */}
                            </div>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Degree</p>
                                <input
                                    ref={degreeRef}
                                    className='mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px]'
                                    type="text"
                                    placeholder="Enter Your Degree"
                                    name="degree"
                                    value={user.degree}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, collegeRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>College/University</p>
                               <div className='relative'>
    <input
    ref={collegeRef}
    className={`mt-2 w-full  border border-[#1dbf73] rounded-[25px] py-[10px] px-[24px] text-[14px] font-pop font-light outline-none md:text-[12px] md:py-[7px] xsm:text-[12px] xsm:py-[7px] ${SearchedData.length? 'border-b-[0px] rounded-b-none' : 'border-b-[1px]'}`}
    type="text"
    placeholder="Enter Your College/University"
    name="college"
    value={user.college}
    onChange={SearchData}
    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
/>
                                <div className='w-full collegescroll min-h-[0px] max-h-[200px] overflow-y-auto absolute  z-20 bg-[#eafff5]  '>
                                    {
                                        SearchedData.map((it)=>{
                                            return(<>
                                            <div onClick={(e)=> handleSearch(it.college)} className='text-center text-[12px] border py-1 cursor-pointer'>{it.college}</div>
                                            </>)
                                        })
                                    }
                                    {/* <div className='text-center'>dfdasf</div> */}
                                </div>
                               </div> 
                            </div>
                            <div style={{ position: "relative" }}>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Password</p>
                                <input
                                    ref={passwordRef}
                                    className='mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px]'
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, null)}
                                />
                                <span style={{ position: "absolute", bottom: "12px", right: "15px" }}> {
                                    showPassword ? <IoEyeOutline color="#1dbf73" size={18} onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline color='#1dbf73' size={18} onClick={() => setShowPassword((prev) => !prev)} />
                                }
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-4 md:gap-3 xsm:gap-3'>
                            <div className=''>
                                <button className="bg-[#1DBF73] py-2 px-7 rounded-full text-white font-nu font-bold md:text-[14px] md:py-1 xsm:text-[12px] xsm:py-1" onClick={handleRegister}>{btnLoader ? "Loading..." : "Sign Up"}</button>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='font-pop text-[14px] md:text-[10px] xsm:text-[10px]'>Already registered ? </p>
                                {/* Sign up link */}
                                <Link to={'/login'}>  <h5 className='text-[#1dbf73] md:text-[12px] xsm:text-[12px]'>Login</h5></Link>
                                {/* Social media login buttons */}
                            </div>
                            <div className='flex flex-col gap-2 items-center'>


                                <div >

                                    <span onClick={handleGoogleRegister} className='cursor-pointer'><Google /></span>
                                    <span onClick={handleLinkedInRegister} className='cursor-pointer'><Linkedin /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </>
    );
};

export default Register;
