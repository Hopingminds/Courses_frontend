import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';



const Login = () => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart, GetWishList } = useContext(Globalinfo)
    const [btnLoader, setBtnLoader] = useState(false);
    const [switchBtn, setSwitchBtn] = useState(1);
    const [user, setUser] = useState({

        email: "",
        password: ""

    });
    // console.log(userDetail)

    const handleLogin = async () => {
        console.log(user)
        setBtnLoader(true);

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email  Address')
            setBtnLoader(false)
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
                // GetCart()
                // GetWishList()
                // getUserDetails()
                localStorage.setItem('COURSES_USER_TOKEN', res.data.token)
                setTimeout(() => {
                    if (res.data.role === 'subadmin') {
                        navigate('/subadmin-dashboard')
                    }
                    else {

                        navigate('/')
                    }
                }, 1000);

            } catch (error) {
                console.log(error);
                toast.error("Some Error Occured while Login")
            } finally {
                setBtnLoader(false)
            }
        }
    }



    return (
        <>
            <head>
                <title>
                    Login | HopingMinds
                </title>
            </head>
            <div className={styles.register_container}>
                <div className={styles.register_box_main}>

                    {/* Main heading */}
                    <h1>Welcome to Hoping Minds</h1>
                    <div className={styles.input_main}>
                        {/* Switch button for email or mobile number */}
                        <div className={styles.switch_btn}>
                            <button className={styles.active} >Login</button>
                            <button className={styles.inactive} onClick={() => navigate('/register')}>Register</button>
                        </div>
                        {/* Input fields */}
                        <div className={styles.inputs}>

                            <div className='flex flex-col gap-2'>
                                {/* Email input */}
                                <p className='text-[14px]'>Username/Email</p>
                                <input className='w-full' type="text" placeholder="Enter Your Username/Email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                            </div>


                            {/* Password input */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-[14px]'>Password</p>
                                <input className='w-full' type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                            </div>
                            {/* Forgot password link */}
                            <div className='flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <input className='' type="checkbox" />
                                    <p className='text-[14px]'>Rememeber me</p>
                                </div>
                                <h6>Forgot password?</h6>
                            </div>
                        </div>
                        {/* Action buttons */}
                        <div className={styles.action_button}>
                            {/* Sign in button */}
                            <div className={styles.submit}>
                                <button onClick={handleLogin}>{btnLoader ? "Loading..." : "Login"}</button>
                            </div>

                            <div className={styles.login_options}>
                                <span>
                                    <p>New Here ?</p>
                                    {/* Sign up link */}
                                    <Link to={'/register'}>  <h5 className='text-[#1dbf73]'>Sign Up</h5></Link>
                                </span>
                                {/* Social media login buttons */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Login;
