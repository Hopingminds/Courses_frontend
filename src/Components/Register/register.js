import React, { useContext, useState, useRef, useEffect } from 'react';
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
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import OTPVerificationModal from './otp';
const Register = () => {
    const navigate = useNavigate();
    const { getUserDetails, cartData } = useContext(Globalinfo);
    const [showPassword, setShowPassword] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const [countrycode, setcountrycode] = useState('')
    const [SearchedData, setSearchedData] = useState([])
    const [verified, setverified] = useState(false)

    // console.log("cardatata",cartData);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = async() => {
    countrycode.replace(/\D/g, '')

    try {
        const check=await fetch(BASE_URL+'/validatevalues',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({email:user.email,phone:countrycode})
        })
        const checkresponse=await check.json()
        console.log(checkresponse)
        if(!checkresponse.success){
            if(checkresponse?.errors?.email && checkresponse?.errors?.phone){
                toast.error("Both Email and Phone are already existing")
                return;
            }
            else if(checkresponse?.errors?.email){
                toast.error(checkresponse?.errors?.email)
                return;
            }
            else if(checkresponse?.errors?.phone){
                toast.error(checkresponse?.errors?.phone)
                return;
            }
        }
      
        const data=await fetch(BASE_URL+'/sendmobileotp',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({mobileNo:countrycode})
        })
        const response=await data.json();
        // console.log(response);
        if(response?.success){
            toast.success("OTP sent successfully on your phone number");
            setIsModalOpen(true);
        }
        else{
            toast.error(response?.message)
        }
    } catch (error) {
        console.log(error);
    }
    // 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleVerify = async(otp) => {
    // console.log('OTP:', otp);
    let response={}
    try {
        const data=await fetch(BASE_URL+'/verfiynumberotp',{
            method:'POST',
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({mobileNo:countrycode,otp:otp})
        })
       response=await data.json()
        console.log(response);
        if(response.success){
            toast.success(response.message)
            closeModal()
        }
        else if(response.success === false && response.validotp === false ){
            toast.error(response.message)
        }
        else if(response.success === false && response.expiredotp === true ){
            toast.error(response.message)
        }
    } catch (error) {
        console.log(error);
    }
    if(response.success){
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
            
            if (res.status==200 || res.status==201) {
                toast.success("Registered Successfully");
                const decoded = jwtDecode(res.data.token);
                try {
                    const res = await axios.get(`${BASE_URL}/user/${decoded.email}`);
                    if (res?.data?.userDetails?.purchased_courses.length > 0) {
                        navigate('/learning');
                    } else {
                        navigate('/courses');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            else{
                toast.error(res?.error?.error)
            }
        }
        catch{

        }
    }


    //     } catch (error) {
    //         toast.error(error.response.data.error.error);
    //     } finally {
    //         setBtnLoader(false);
    //     }
    // }
    // else{
    //     toast.error("Verify your phone number")
    // }
    // Add your OTP verification logic here
    // closeModal();
  };

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
        password: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        college: false,
        degree: false,
        password: false,
    });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isNumValid, setIsNumValid] = useState(false);
    useEffect(() => {
        setUser({ ...user, phone: countrycode })
    }, [countrycode])

    function validateUserEmail(email) {
        // Regular expression for validating an email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        // Test the email against the pattern
        return emailPattern.test(email);
    }
    function validateAlphabets(input) {
        const regex = /^[a-zA-Z\s.]*$/; // Regular expression to match alphabets, spaces, and dots
        return regex.test(input);
    }
    
    const handleNumChange = (number) => {
        setcountrycode(number);
        if (number && number.length >=9 && number.length <= 14) {
            setIsNumValid(false);
        } else {
            setIsNumValid(true);
        }
        setUser({
            ...user,
            phone: number,

        });
    };
    
    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!regex.test(password)) {
        //   return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    }
        return true;
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => {
            const updatedUser = {
                ...prevState,
                [name]: value,
            };

            // If the field being updated is the email, call validateEmail
            if (name === "email") {
                if(!validateUserEmail(updatedUser.email)){
                    setIsEmailValid(true);
                    // console.log('asdfgdsfgh')
                }

                else{
                    setIsEmailValid(false);
                }
            }

            return updatedUser;
        });
    };

    async function SearchData(e) {
        let query = e.target.value;
        setUser({
            ...user,
            college: query,

        })
        if (query == "") {
            setSearchedData([]);


        } else {
            try {
                let url1 = BASE_URL + '/getcolleges?search=' + query
                const data = await fetch(url1)
                const response = await data.json()
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

        let hasErrors = false;
        const newErrors = {};
        // console.log(user)

        for (const key in user) {
            if (user[key].trim() == '') {
                newErrors[key] = true;
                hasErrors = true;
            } else {
                newErrors[key] = false;
            }
        }
        setErrors(newErrors);
        // console.log(newErrors)

        if (hasErrors) {
            const firstErrorInput = Object.keys(newErrors)[0];
            // console.log(firstErrorInput)
            const errorElement = document.getElementById(firstErrorInput)
            const errorRect = errorElement.getBoundingClientRect();
            // console.log(errorRect)
            const middleY = errorRect.height;

            window.scrollTo({
                top: middleY,
                behavior: 'smooth'
            });
            return;
        }

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email');
            return;
        }
        
        if(!validatePassword(user.password)){
            toast.error('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }
        if (!((countrycode.length > 8 && countrycode.length < 15) || countrycode === '0000000000')) {
            toast.error('Enter valid Phone Number');
            return;
        }
        if (!validateCollege(user.college)) {
            toast.error('Enter valid College Name');
            return;
        }
        if(!validateAlphabets(user.degree)){
            toast.error("Degree must contains only alphabets")
            return;
        }
        if(!validateAlphabets(user.name)){
            toast.error("Name must contains only alphabets")
            return;
        }

        if (!user.name || !user.degree || !user.password || !user.email || !user.college) {
            toast.error("Enter Valid Credentials");
            return;
        }
        countrycode.replace(/\D/g, '')
        openModal()
        // setBtnLoader(true);
       
        
    };


    const handleGoogleRegister = () => {
        let current=localStorage.getItem('current')
        if(current){
            if(current=='/college-login' || current=='/college-dashboard'){
                window.open(`${AUTH_BASE_URL}/google?redirect=/}`, "_self");

            }
            else{
                window.open(`${AUTH_BASE_URL}/google?redirect=${current}`, "_self");

            }
          }
          else{
            window.open(`${AUTH_BASE_URL}/google?redirect=/courses`, "_self");
          } 
    }

    const handleLinkedInRegister = () => {
        let current=localStorage.getItem('current')
        if(current){
            if(current=='/college-login' || current=='/college-dashboard'){
                window.open(`${AUTH_BASE_URL}/linkedin?redirect=/}`, "_self");

            }
            else{
                window.open(`${AUTH_BASE_URL}/linkedin?redirect=${current}`, "_self");

            }
          }
          else{
            window.open(`${AUTH_BASE_URL}/linkedin?redirect=/courses`, "_self");
          } 
    }

    function handleSearch(clg) {
        setUser({
            ...user,
            college: clg,

        })
        setSearchedData([])
    }
    const handleBlur = (e) => {
        setTimeout(() => {
            if (e.target.name === "college") {
                setSearchedData([]);
            }
        }, 200)
    };
    return (
        <>
        <OTPVerificationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onVerify={handleVerify}
        openModal={openModal}
      />
            <div className='flex overflow-hidden'>
                <div className='xl:h-[75vh]  w-[40%] flex items-center justify-end relative xsm:hidden '>
                    <img className='w-[75%]  object-cover absolute top-10 ' src='../login_bg.png' alt='' />
                </div>
                <div className='flex flex-col items-center my-16 w-[60%] gap-4 xl:my-[9rem] xsm:w-full md:my-12'>
                    {/* <p className='font-pop text-[14px]'>Welcome to Hoping Minds</p> */}
                    <div className='flex flex-col w-[75%] gap-4 xsm:w-[95%] items-center md:w-[90%]'>
                        <div className='flex justify-between bg-[#e2fff1] rounded-full py-2 mx-16 w-[40%] md:w-[50%] xsm:w-[50%] xl:w-[35%]'>
                            <button className='bg-transparent cursor-pointer Logininactive' onClick={() => navigate('/login-2')} >Login</button>
                            <button className='bg-transparent cursor-pointer Loginactive' >Register</button>
                        </div>
                        {/* inputs */}
                        <div className='flex flex-col gap-4 grid grid-cols-2  xsm:px-[5%]'>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Name  <span className='text-red-500'>*</span></p>
                                <input
                                    ref={nameRef}
                                    className={`mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px] md:py-[7px] xsm:text-[12px] xsm:py-[7px] ${errors.name ? 'error_input' : ""}`}
                                    type="text"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, emailRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Email  <span className='text-red-500'>*</span></p>
                                <input
                                    ref={emailRef}
                                    className={`mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px] ${errors.email ? 'error_input' : ""} ${isEmailValid && 'border-red-500'}`}
                                    type="text"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    id={"email"}
                                    value={user.email}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop'>Contact Number <span className='text-red-500'>*</span></p>
                                <PhoneInput
                                    className={`phonenumbercountrycode mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none ${errors.phone ? 'error_input' : ""} ${isNumValid && 'border-red-500'}`}
                                    defaultCountry="IN"
                                    name="phone"
                                    id={"phone"}
                                    maxlength={11}
                                    placeholder="Enter phone number"
                                    value={countrycode}
                                    onChange={handleNumChange}
                                    ref={phoneRef}
                                    onKeyDown={(e) => handleKeyDown(e, degreeRef)}
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
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Degree <span className='text-red-500'>*</span></p>
                                <input
                                    ref={degreeRef}
                                    className={`mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px] ${errors.degree ? 'error_input' : ""}`}
                                    type="text"
                                    id={"degree"}
                                    placeholder="Enter Your Degree"
                                    name="degree"
                                    value={user.degree}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, collegeRef)}
                                />
                            </div>
                            <div>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>College/University <span className='text-red-500'>*</span></p>
                                <div className='relative'>
                                <input
    ref={collegeRef}
    className={`mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none ${SearchedData.length ? 'border-b-[0px] rounded-b-none' : 'border-b-[1px]'} ${errors.college ? ' error_input' : ""}`}
    type="text"
    placeholder="Enter Your College/University"
    name="college"
    id={"college"}
    value={user.college}
    onChange={SearchData}
    onBlur={handleBlur}
    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
    autoComplete="off"
/>
                                    <div className='w-full collegescroll min-h-[0px] max-h-[200px] overflow-y-auto absolute  z-20 bg-[#eafff5]  '>
                                        {
                                            SearchedData.map((it) => {
                                                return (<>
                                                    <div onClick={(e) => handleSearch(it.college)} className='text-center text-[12px] border py-1 cursor-pointer'>{it.college}</div>
                                                </>)
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <p className='text-[14px] font-pop md:text-[12px] xsm:text-[12px]'>Password <span className='text-red-500'>*</span></p>
                                <input
                                    ref={passwordRef}
                                    className={`mt-2 w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none md:text-[12px]  md:py-[7px] xsm:text-[12px] xsm:py-[7px] ${errors.password ? 'error_input' : ""}`}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter Your Password"
                                    name="password"
                                    id={"password"}
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
                                <Link to={'/login-2'}>  <h5 className='text-[#1dbf73] md:text-[12px] xsm:text-[12px]'>Login</h5></Link>
                                {/* Social media login buttons */}
                            </div>
                            <div className='flex flex-col gap-2 items-center'>


                                <div className="flex gap-4 items-center">

                                    <span onClick={handleGoogleRegister} className='cursor-pointer'><Google /></span>
                                    <span onClick={handleLinkedInRegister} className='cursor-pointer'><Linkedin /></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster    toastOptions={{
        duration: 500,
      }} position="top-center" />
        </>
    );
};

export default Register;
