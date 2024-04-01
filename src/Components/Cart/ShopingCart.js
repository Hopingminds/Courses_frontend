import toast, { Toaster } from 'react-hot-toast';
import './ShopingCart.css';
import { BASE_URL } from '../../Api/api';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

function ShopingCart() {
    const [Data, setData] = useState([])
    const [total, settotal] = useState(0)
const [show, setshow] = useState(false)
    let token = jwtDecode(localStorage.getItem('COURSES_USER_TOKEN'))

    function Total(data) {
        let price = 0;
        data.map((item) => {
            price += item.course.base_price
        })
        settotal(price)
    }
    async function Removecart(courseid) {
        setshow(true)
        let url = BASE_URL + '/removefromcart'
        let data = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: token.email, courseid })
        })
        let response = await data.json()
        // console.log(response);
        if (response.success) {
            setData(response.data)
            Total(response.data)
            toast.success(response.message)
            setshow(false)

        }
        else {
            toast.error(response.message)
        }
        // console.log(response);
    }
    useEffect(() => {
        async function Fetchdata() {
            // console.log(token);
            setshow(true)
            let url = BASE_URL + '/getcart?email=' + token.email;
            // console.log(url);
            const data = await fetch(url)
            const response = await data.json()
            setData(response?.cart)
            Total(response?.cart)
            setshow(false)
            // console.log(response);
        }
        Fetchdata()

    }, [])

    return (
        <div className='SC-container font-pop'>
            <div className=' w-[100%] h-[20vh] flex flex-row items-center  px-[4%] cartbg'>
                {/* <div className='inline-block ml-[1vw]'>
                    <button className='bg-white border border-[#EAEAEA] rounded-2xl px-[7px] h-[2vw] mx-[7px] cursor-pointer' type='submit' >
                        <img className='w-[1vw]' src="../Icons/leftsidearrow.svg" alt="left-arrow"></img>
                    </button>
                </div> */}
                <div className=''>
                    <h2 className='font-outfit font-semibold text-4xl text-white xsm:text-[18px]'>My Cart</h2>
                </div>
            </div>
            <div className='flex justify-between items-start mt-[10px] lg:flex-col lg:items-center h-[600px]  px-[3%]'>
                <div className='w-[75%] space-y-10'>

                    {Data?.length > 0 ? Data?.map((item) => {
                        return (<>
                            <div className="w-full bg-[#E2FFF1] p-3 shadow-xl rounded-xl">
                                <div className='flex  h-[15vw] rounded-[1.2vw] 2xl:w-[900px] 2xl:h-[240px]'>
                                    <div className='w-[50%] 2xl:w-[600px]'>
                                        <img className='w-[100%] h-[100%] rounded-xl' src={item.course.featured_image} alt='FSD-img'></img>
                                    </div>
                                    <div className='flex flex-col justify-evenly mx-[1vw] w-[100%] 2xl:h-[100%] xsm:mx-[2vw]'>
                                        {/* <div>
                                <p className='font-mons text-[0.8vw] 2xl:text-[14px]'><span className='text-[#555555]'>by</span> Determined-instructure</p>
                            </div> */}
                                        <div className='flex flex-nowrap justify-between items-center'>
                                            <div className='space-y-2'>
                                                <p className='font-mons text-[1.5vw] font-semibold  2xl:text-[18px]'>{item.course.title}</p>
                                                <p className='text-[#696984] text-sm'>{item.course.overview.slice(0, 70)}.. </p>

                                            </div>
                                            <div>
                                                <p onClick={() => Removecart(item.course._id)} className='cursor-pointer font-mons text-[1vw] 2xl:text-[16px]  mt-[1vw] text-black font-semibold'>Remove</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-nowrap justify-between'>
                                            <div className='flex gap-6 my-[0.5vw] w-[60%] 2xl:w-full 2xl:text-[11px]'>
                                                <div className='flex items-center'>
                                                    <img className='w-[1.3vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/clockfilled.svg" alt="clock"></img>
                                                    <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> {item.course.duration}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <img className='w-[1.6vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/hat.svg" alt="hat"></img>
                                                    <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> {item.course.enrollments / 1000}k Students</p>
                                                </div>
                                                {/* <div className='flex items-center'>
                                        <img className='w-[1.1vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> All levels</p>
                                    </div> */}
                                                <div className='flex items-center'>
                                                    <img className='w-[1.2vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/files.svg" alt="files"></img>
                                                    <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> {item.course.total_lessons} Lessons</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='font-mons text-[1vw] 2xl:text-[16px]   text-black font-semibold'>Save For Later</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-end flex-nowrap'>
                                            <p className='font-mons text-[1vw]  mt-[0.6vw] text-black font-semibold 2xl:text-[16px]'>Move To Wishlist</p>
                                        </div>
                                        <div><hr className='mt-[0.9vw] border-y-1 border-[#EAEAEA] ' /></div>
                                        <div className='flex justify-between mt-[0.8vw] flex-wrap'>
                                            <div>
                                                <div className='flex'>
                                                    <img className='w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]' src="../Icons/Star.svg" alt="star"></img>
                                                    <img className='w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]' src="../Icons/Star.svg" alt="star"></img>
                                                    <img className='w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]' src="../Icons/Star.svg" alt="star"></img>
                                                    <img className='w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]' src="../Icons/Star.svg" alt="star"></img>
                                                    <img className='w-[1.4vw] pr-[0.1vw] 2xl:w-[20px]' src="../Icons/Star.svg" alt="star"></img>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='font-Inter text-[1.2vw] font-semibold text-[black] 2xl:text-[20px]'>₹{item.course.base_price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    }) : <div className='text-center mt-20 font-semibold'>No course found</div>
                    }
                </div>


                <div className='w-[20%] h-max flex flex-col justify-around space-y-4 font-pop'>
                    <div>
                        <p className='font-outfit font-semibold text-[2vw] 2xl:text-[24px]'>Total :</p>
                    </div>
                    <div >
                        <p className='font-Inter font-semibold text-[1.7vw] 2xl:text-[20px]'>₹{total}</p>
                    </div>
                    <div>
                        <p className='font-mons text-[1vw] text-[#1DBF73] font-semibold 2xl:text-[16px]'>Including all the taxes</p>
                    </div>
                    <div>
                        <Link to='/checkout' className='mt-[1.6vw] font-[jost] text-[1.7vw] px-[4vw] py-[0.5vw] bg-[#1DBF73] text-[#fff] border-none rounded-full 2xl:text-[24px]' type="">CHECKOUT</Link>
                    </div>
                </div>
            </div>
            {show ? <div className='w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
            <Toaster position="top-right" />
        </div>


    );
}

export default ShopingCart;