import React, { useContext, useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { jwtDecode } from 'jwt-decode';



const Login = () => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart, GetWishList } = useContext(Globalinfo)
    const [btnLoader, setBtnLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({

        email: "",
        password: ""

    });
    // console.log(userDetail)

    const handleLogin = async (e) => {

        console.log(user)
        setBtnLoader(true);

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email  Address')
            setBtnLoader(false)
            return;
        }
        else if (!user.password) {
            toast.error("Enter Your Password")
            setBtnLoader(false)
            return;
        }
        else {
            try {
                const res = await axios.post(`${BASE_URL}/login`, {
                    email: user.email,
                    password: user.password,
                })

                console.log(res);
                getUserDetails()
                toast.success("Login Successfull")
                console.log(userDetail)
                localStorage.setItem('COURSES_USER_TOKEN', res.data.token)
                if (res.status) {
                    const decoded = jwtDecode(res.data.token);
                    console.log(decoded)
                    try {
                        const res = await axios.get(`${BASE_URL}/user/${decoded.email}`)
                        console.log(res.data.userDetails)
                        if (res.data.userDetails.purchased_courses.length > 0) {
                            navigate('/learning')
                        }
                        else {
                            navigate('/')
                        }

                    } catch (error) {
                        console.log(error)
                    }
                }


            } catch (error) {
                console.log(error.response.data.error);
                toast.error(error.response.data.error)
            } finally {
                setBtnLoader(false)
            }
        }
    }

    const handleKeyDown = (e) => {
        console.log(e.key)
        if (e.key == 'Enter') {
            handleLogin()
        }
    }



    return (
        <>
            <div className='flex overflow-hidden pb-6'>
                <div className='w-[50%] flex justify-center relative xsm:hidden'>
                    <img className='w-[60%] object-cover absolute top-10' src='../login_bg.png' />
                </div>
                <div className='flex flex-col items-center my-16 w-[45%] gap-4 xsm:w-full'>
                    <p className='font-pop text-[14px]'>Welcome to Hoping Minds</p>
                    <div className='flex flex-col w-[65%] gap-4 xsm:w-[95%]'>
                        <div className='flex justify-between bg-[#e2fff1] rounded-full py-2 mx-16 '>
                            <button className='bg-transparent cursor-pointer Loginactive' >Login</button>
                            <button className='bg-transparent cursor-pointer Logininactive' onClick={() => navigate('/register')}>Register</button>
                        </div>
                        {/* inputs */}
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-[14px] font-pop'>Username/Email</p>
                                <input className='w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none' type="text" placeholder="Enter Your Username/Email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} onKeyDown={handleKeyDown} />
                            </div>
                            <div style={{ position: "relative" }}>
                                <p className='text-[14px] font-pop'>Password</p>
                                <input className='w-full border-[1px] border-[#1dbf73] py-[10px] px-[24px] text-[14px] font-pop font-light rounded-full outline-none' type={showPassword ? "text" : "password"} placeholder="Enter Your Password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} onKeyDown={handleKeyDown} />
                                <span style={{ position: "absolute", bottom: "12px", right: "15px" }}> {
                                    showPassword ? <IoEyeOutline color="#1dbf73" size={18} onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline color='#1dbf73' size={18} onClick={() => setShowPassword((prev) => !prev)} />
                                }
                                </span>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <input className='' type="checkbox" />
                                    <p className='text-[12px]'>Rememeber me</p>
                                </div>
                                <Link to={'/forgot-password'}><h6>Forgot password?</h6></Link>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <div className=''>
                                <button className="bg-[#1DBF73] py-2 px-7 rounded-full text-white font-nu font-bold" onClick={handleLogin} >{btnLoader ? "Loading..." : "Login"}</button>
                            </div>
                            <div className='flex items-center '>
                                <p className='font-pop text-[14px]'>New Here ?</p>
                                {/* Sign up link */}
                                <Link to={'/register'}>  <h5 className='text-[#1dbf73]'>Sign Up</h5></Link>
                                {/* Social media login buttons */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </>
    );
};

export default Login;
