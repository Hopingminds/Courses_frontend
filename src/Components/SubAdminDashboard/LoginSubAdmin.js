import React, { useContext, useState } from 'react'
import { validateEmail } from '../../helpers';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { BASE_URL } from '../../Api/api';
import { Globalinfo } from '../../App';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginSubAdmin = () => {

  const navigate = useNavigate();
  const {Getadmindetails } = useContext(Globalinfo)

  const [btnLoader, setBtnLoader] = useState(false);
  const [Admin, setAdmin] = useState({
    email:"",
    password:""
  });

  const handlelogin = async() => {
    setBtnLoader(true);
    if(!validateEmail(Admin
      .email)){
      toast.error('Enter valid Username');
      setBtnLoader(false);
    }
    else{
      try{
        const res = await axios.post(`${BASE_URL}/loginCollegeUserWithEmail`, {
          email: Admin.email,
          password: Admin.password,
        })
        // console.log(res);
        // getAdminDetails();
        if(res?.data?.success){   
          console.log("dfadsfds");
           localStorage.setItem('token',res?.data?.token)
          Getadmindetails()
          toast.success(res?.data?.msg)
          setTimeout(() => {
            navigate('/subadmin-dashboard')
          }, 1000);
         

        }
        else{
          toast.error(res?.data?.msg)
        }
       
    
      } catch(error){
        // console.log(error);
        toast.error("Some Error Occured while Login")
      } finally{
        setBtnLoader(false);
      }
    }
  }

  return (
    <div className='my-20 w-[55%]'>
      <div className='bg-[#E2FFF1] px-10 py-10 flex flex-col items-center rounded-xl gap-8  shadow-xl'>
        <div>
          <p className='font-pop font-semibold text-[36px]'>Log In</p>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Username</label>
          <div>
            <input className='w-full h-[44px] shadow-lg' type='email' name='username' value={Admin.email} onChange={(e) => setAdmin({...Admin,email:e.target.value})}/>
          </div>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Password</label>
          <div>
            <input className='w-full h-[44px] shadow-lg' type='password' name='password' value={Admin.password} onChange={(e) => setAdmin({...Admin,password:e.target.value})}/>
          </div>
        </div>
        <div>
          <button onClick={handlelogin} className='bg-black font-pop font-medium text-white px-20 py-4 rounded-3xl'>{btnLoader ? "Loading..." : "LogIn"}</button>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default LoginSubAdmin