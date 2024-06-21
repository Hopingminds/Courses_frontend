import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import 'react-phone-number-input/style.css'

const Basic = ({changeComponent,setFinalData}) => {
    const [num, setNum] = useState('');
    const [basicFormData, setBasicFormData] = useState({fname:"", lname:"",email:"", address:"", city:"", state:"", objective:""});

    function formHandler(e){
        setBasicFormData(prev =>(
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
      }

    function handleSubmit(){
        const finalBasicData ={
            ...basicFormData,
            num
        }
        console.log(finalBasicData);
        
        if(basicFormData.fname === "" || basicFormData.lname === "" || basicFormData.email === "" || basicFormData.num === "" || basicFormData.address === "" || basicFormData.city === "" || basicFormData.state === "" || basicFormData.objective === "" ){
            toast.error("Fill all the field");
        }else{
            setFinalData(prevData => ({...prevData, finalBasicData}));
            changeComponent('education');
            toast.success("Submitted Successfully")
        }

    }
    return (
        <div className='flex flex-col justify-between min-h-[70vh] md:min-h-[60vh] xsm:min-h-[50vh]'>
            <div className='flex flex-col gap-4 px-4 py-2'>
                {/* <div className='grid grid-cols-2  gap-8'>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="fname" className='font-nu font-semibold '>First Name</label>
                        <input onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" value={basicFormData.fname} name='fname' />
                    </div>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="lname" className='font-nu font-semibold '>Last Name</label>
                        <input onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" value={basicFormData.lname} name='lname' />
                    </div>
                </div> */}
                {/* <div className='grid grid-cols-2  gap-8'>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="email" className='font-nu font-semibold '>Email</label>
                        <input onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="email" value={basicFormData.email} name='email'/>
                    </div>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="number" className='font-nu font-semibold '>Contact Number</label>
                        <PhoneInput
                            required
                            className='resumephoneinput'
                            defaultCountry="IN"
                            placeholder="Enter phone number"
                            value={num}
                            onChange={setNum}
                            />
                    </div>
                </div> */}
                <div className=''>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="address" className='font-nu font-semibold '>Address</label>
                        <textarea onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" value={basicFormData.address} name='address'  />
                    </div>
                </div>
                <div className='grid grid-cols-2  gap-8'>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="city" className='font-nu font-semibold '>City</label>
                        <input onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="email" value={basicFormData.city} name='city'/>  {/* make it select*/}
                    </div>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="number" className='font-nu font-semibold '>State</label>
                        <input onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md' type="text" value={basicFormData.state} name='state'/>   {/* make it select*/}
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                        <label htmlFor="address" className='font-nu font-semibold '>Objective</label>
                        <textarea onChange={formHandler} required className='outline-none bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md font-nu font-light' type="text" placeholder='Tell about Yourself' value={basicFormData.objective} name='objective' />
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div onClick={handleSubmit} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <button  className=" text-white font-pop font-medium text-[18px]  xsm:text-[10px] xsm:py-1 xsm:px-4 md:text-[14px]">Submit</button>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    )
}

export default Basic