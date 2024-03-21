import React from 'react'

const LoginSubAdmin = () => {
  return (
    <div className='my-20 w-[55%]'>
      <div className='bg-[#E2FFF1] px-10 py-10 flex flex-col items-center rounded-xl gap-8  shadow-xl'>
        <div>
          <p className='font-pop font-semibold text-[36px]'>Log In</p>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Username</label>
          <div>
            <input className='w-full h-[44px] shadow-lg' type='text'/>
          </div>
        </div>
        <div className='w-[80%]'>
          <label className='font-pop font-semibold text-[16px]'>Password</label>
          <div>
            <input className='w-full h-[44px] shadow-lg' type='password'/>
          </div>
        </div>
        <div>
          <button className='bg-black font-pop font-medium text-white px-20 py-4 rounded-3xl'>LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default LoginSubAdmin