import React, { useContext, useEffect, useState } from 'react';
import styles from './forgotPassword.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { validateEmail } from '../../helpers';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const Forgotpassword = () => {
    const navigate = useNavigate();
    const { userDetail, getUserDetails, GetCart, GetWishList } = useContext(Globalinfo);
    const [btnLoader, setBtnLoader] = useState(false);
    const [show, setShow] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [timer, setTimer] = useState(60); // Timer for 3 minutes (180 seconds)
    const [isResendEnabled, setIsResendEnabled] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            const message = 'Are you sure you want to leave? Changes you made may not be saved.';
            e.preventDefault();
            e.returnValue = message; // Standard for most browsers
            return message; // For some older browsers
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    useEffect(() => {
        if (show === 2 && timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else if (timer === 0) {
            setIsResendEnabled(true);
        }
    }, [timer, show]);

    const [user, setUser] = useState({
        email: "",
        password: "",
        otp: "",
        confirmPassword: "",
    });

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(password);
    };

    const handleReset = async () => {
        setBtnLoader(true);

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email  Address');
            setBtnLoader(false);
            return;
        } else if (user.password !== user.confirmPassword) {
            toast.error("Both passwords should be the same");
            setBtnLoader(false);
            return;
        } else if (!validatePassword(user.password)) {
            toast.error('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
            setBtnLoader(false);
            return;
        } else {
            try {
                const res = await axios.put(`${BASE_URL}/resetPassword`, {
                    email: user.email,
                    password: user.password,
                });

                getUserDetails();
                toast.success("Password reset Successful");

                setTimeout(() => {
                    navigate(localStorage.getItem("current"));
                }, 1000);

            } catch (error) {
                console.log(error);
                toast.error("Some Error Occurred while resetting password");
                setBtnLoader(false);
            } finally {
                setBtnLoader(false);
            }
        }
    };

    const handleSendOTP = async () => {
        setBtnLoader(true);

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email  Address');
            setBtnLoader(false);
        } else {
            try {
                const res = await axios.get(`${BASE_URL}/generateOTP?email=${user.email}`);

                if (res?.status) {
                    toast.success("OTP is Generated");
                    setShow(2);
                    setTimer(60); // Reset the timer to 3 minutes
                    setIsResendEnabled(false);
                }

            } catch (error) {
                console.log(error);
                toast.error("Unable to Generate OTP");
                setBtnLoader(false);
            } finally {
                setBtnLoader(false);
            }
        }
    };

    const handleVerifyOTP = async () => {
        setBtnLoader(true);

        if (!validateEmail(user.email)) {
            toast.error('Enter valid Email  Address');
            setBtnLoader(false);
        } else {
            try {
                const res = await axios.get(`${BASE_URL}/verifyOTP?code=${user.otp}`);

                if (res?.status === 201) {
                    setShow(3);
                    toast.success("OTP is valid");
                }

            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.error);
                setBtnLoader(false);
            } finally {
                setBtnLoader(false);
            }
        }
    };

    const handleResendOTP = async () => {
        if (isResendEnabled) {
            await handleSendOTP();
        }
    };

    return (
        <>
        <Toaster toastOptions={{
         duration: 1000,
      }} />
            <head>
                <title>Reset Password | HopingMinds</title>
            </head>
            <div className={styles.register_container}>
                <div className={styles.register_box_main}>
                    {show === 1 ? <>
                        <h1>Forgot Password</h1>
                        <div className={styles.input_main}>
                            <div className={styles.inputs}>
                                <div>
                                    <p>Email <span className='text-red-500'>*</span></p>
                                    <input type="text" placeholder="Enter Your Email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </div>
                            </div>
                            <div className={styles.action_button}>
                                <div className={styles.submit}>
                                    <button onClick={handleSendOTP}>{btnLoader ? "Loading..." : "Send OTP"}</button>
                                </div>
                            </div>
                        </div>
                    </> : show === 2 ? <>
                        <h1>Verify OTP Here</h1>
                        <h6>We have sent an OTP to *******{user?.email?.slice(user.email.length - 14, user.email.length)}</h6>
                        <div className={styles.input_main}>
                            <div className={styles.inputs}>
                                <div>
                                    <p>Enter OTP</p>
                                    <input type="number" placeholder="Enter Your OTP" name="otp" value={user.otp} onChange={(e) => setUser({ ...user, otp: e.target.value })} />
                                </div>
                            </div>
                            <div className={styles.action_button}>
                                <div className={styles.submit}>
                                    <button onClick={handleVerifyOTP}>{btnLoader ? "Loading..." : "Verify OTP"}</button>
                                </div>
                                <div className="text-[#1dbf73]">
                                    <button  onClick={handleResendOTP} disabled={!isResendEnabled}>
                                        {isResendEnabled ? "Resend OTP" : `Resend OTP in ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <h1>Reset Your Password</h1>
                        <div className={styles.input_main}>
                            <div className={styles.inputs}>
                                <div style={{ position: "relative" }}>
                                    <p>Enter New Password <span className='text-red-500'>*</span></p>
                                    <input type={showPassword ? "text" : "password"} placeholder="Enter Your New Password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                                    <span style={{ position: "absolute", bottom: "12px", right: "15px" }}>
                                        {showPassword ? <IoEyeOutline color="#1dbf73" size={18} onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline color='#1dbf73' size={18} onClick={() => setShowPassword((prev) => !prev)} />}
                                    </span>
                                </div>
                                <div style={{ position: "relative" }}>
                                    <p>Confirm New Password <span className='text-red-500'>*</span></p>
                                    <input type={showPassword ? "text" : "password"} placeholder="Confirm New Password" name="confirmPassword" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                                    <span style={{ position: "absolute", bottom: "12px", right: "15px" }}>
                                        {showPassword ? <IoEyeOutline color="#1dbf73" size={18} onClick={() => setShowPassword((prev) => !prev)} /> : <IoEyeOffOutline color='#1dbf73' size={18} onClick={() => setShowPassword((prev) => !prev)} />}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.action_button}>
                                <div className={styles.submit}>
                                    <button onClick={handleReset}>{btnLoader ? "Loading..." : "Reset Password"}</button>
                                </div>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
        </>
    );
};

export default Forgotpassword;
