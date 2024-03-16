import React, { useContext, useState } from 'react';
import styles from './register.module.css';
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
    const [showPassword, setShowPassword] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

    const [user, setuser] = useState({
        username: "",
        college: "",
        stream: "",
        email: "",
        yearofpass: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser({
            ...user,
            [name]: value,
        });
    };

    const handleRegister = async () => {
        console.log(user)
        if (!user.username || !user.password || !user.email || !user.college || !user.stream || !user.yearofpass) {
            toast.error("Enter Valid Credentials")
            return;
        }
        setBtnLoader(true);
        try {
            const res = await axios.post(`${BASE_URL}/register`, {
                username: user.username,
                password: user.password,
                email: user.email,
                college: user.college,
                stream: user.stream,
                yearofpass: user.yearofpass

            })

            console.log(res);

            toast.success("Register Successfull")

            setTimeout(() => {
                navigate('/login')
            }, 1000);


        } catch (error) {
            console.log(error);
            toast.error("Some Error Occured while Login")
        } finally {
            setBtnLoader(false)
        }

    };



    return (
        <>
            <head>
                <title>
                    Register | HopingMinds
                </title>
            </head>
            <div className={styles.register_container}>
                <div className={styles.register_box_main}>

                    {/* Main heading */}
                    <h1>Welcome to Hoping Minds</h1>
                    <div className={styles.input_main}>
                        {/* Switch button for email or mobile number */}
                        <div className={styles.switch_btn}>
                            <button className={styles.inactive} onClick={() => navigate('/login')}>Login</button>
                            <button className={styles.active} >Register</button>
                        </div>
                        {/* Input fields */}
                        <div className={styles.inputs}>


                            <div>
                                {/* Email input */}
                                <p>Email</p>
                                <input type="text" placeholder="Enter Your Username" name="username" value={user.username} onChange={handleChange} />
                            </div>
                            <div>
                                {/* Email input */}
                                <p>Email</p>
                                <input type="text" placeholder="Enter Your Email" name="email" value={user.email} onChange={handleChange} />
                            </div>
                            <div>

                                <p>College</p>
                                <input type="text" placeholder="Enter Your College" name="college" value={user.college} onChange={handleChange} />
                            </div>
                            <div>

                                <p>Stream</p>
                                <input type="text" placeholder="Enter Your Stream" name="stream" value={user.stream} onChange={handleChange} />
                            </div>
                            <div>

                                <p>Year Of pass</p>
                                <input type="text" placeholder="Enter Your Year Of Passing" name="yearofpass" value={user.yearofpass} onChange={handleChange} />
                            </div>

                            <div>
                                <p>Password</p>
                                <input type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={handleChange} />
                            </div>
                            {/* Forgot password link */}
                            <h6>Forgot password?</h6>
                        </div>
                        {/* Action buttons */}
                        <div className={styles.action_button}>
                            {/* Sign in button */}
                            <div className={styles.submit}>
                                <button onClick={handleRegister}>{btnLoader ? "Loading..." : "Sign Up"}</button>
                            </div>

                            <div className={styles.login_options}>
                                <span>
                                    <p>Already registered ?</p>
                                    {/* Sign up link */}
                                    <Link to={'/login'}>  <h5>Login</h5></Link>
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
