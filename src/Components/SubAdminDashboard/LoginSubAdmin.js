import React, { useContext, useState, useRef } from 'react';
import { validateEmail } from '../../helpers';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { useNavigate } from 'react-router-dom';

const LoginSubAdmin = () => {
  const navigate = useNavigate();
  const { Getadmindetails } = useContext(Globalinfo);

  const [btnLoader, setBtnLoader] = useState(false);
  const [Admin, setAdmin] = useState({
    email: "",
    password: ""
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const loginButtonRef = useRef(null);

  const handleLogin = async () => {
    setBtnLoader(true);
    if (!validateEmail(Admin.email)) {
      toast.error('Enter valid Username');
      setBtnLoader(false);
    } else {
      try {
        const res = await axios.post(`${BASE_URL}/loginCollegeUserWithEmail`, {
          email: Admin.email,
          password: Admin.password,
        });

        if (res?.data?.success) {
          localStorage.setItem('token', res?.data?.token);
          Getadmindetails();
          toast.success(res?.data?.msg);
          setTimeout(() => {
            navigate('/college-dashboard');
          }, 1000);
        } else {
          toast.error(res?.data?.msg);
        }
      } catch (error) {
        toast.error("Some Error Occurred while Login");
      } finally {
        setBtnLoader(false);
      }
    }
  };

  const handleKeyDown = (e, ref) => {
    if (e.key === 'Enter') {
      ref.current.focus();
    }
  };

  return (
    <div className='my-20 w-[55%]'>
      <div className='bg-[#E2FFF1] px-10 py-10 flex flex-col items-center rounded-xl gap-8 shadow-xl'>
        <div>
          <p className='font-pop font-semibold text-[36px]'>Log In</p>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Username</label>
          <div>
            <input
              className='w-full h-[44px] rounded shadow-lg p-2'
              type='email'
              name='username'
              value={Admin.email}
              onChange={(e) => setAdmin({ ...Admin, email: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, passwordInputRef)}
              ref={emailInputRef}
            />
          </div>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Password</label>
          <div>
            <input
              className='w-full h-[44px] rounded shadow-lg p-2'
              type='password'
              name='password'
              value={Admin.password}
              onChange={(e) => setAdmin({ ...Admin, password: e.target.value })}
              onKeyDown={(e) => handleKeyDown(e, loginButtonRef)}
              ref={passwordInputRef}
            />
          </div>
        </div>
        <div>
          <button
            onClick={handleLogin}
            ref={loginButtonRef}
            disabled={btnLoader}
            className='bg-black font-pop font-medium text-white px-20 py-4 rounded-3xl'
          >
            {btnLoader ? "Loading..." : "LogIn"}
          </button>
        </div>
      </div>
     <Toaster    toastOptions={{
         duration: 500,
      }} position="top-center" />
    </div>
  );
};

export default LoginSubAdmin;

