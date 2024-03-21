import './ShopingCart.css';

function ShopingCart(){
    return (
        <div className='SC-container font-pop'>
            <div className=' w-[100%] h-[20vh] flex flex-row items-center cartbg px-[4%] xsm:h-[10vh]'>
                {/* <div className='inline-block ml-[1vw]'>
                    <button className='bg-white border border-[#EAEAEA] rounded-2xl px-[7px] h-[2vw] mx-[7px] cursor-pointer' type='submit' >
                        <img className='w-[1vw]' src="../Icons/leftsidearrow.svg" alt="left-arrow"></img>
                    </button>
                </div> */}
                <div className=''>
                    <h2 className='font-outfit font-semibold text-4xl text-white xsm:text-[18px]'>My Cart</h2>
                </div>
            </div>
            <div className='flex justify-between items-start mt-[10px] lg:flex-col lg:items-center h-[600px] px-[3%] xsm:flex-col xsm:justify-start xsm:gap-8'>
                <div className="w-[75%] bg-[#E2FFF1] p-3 shadow-xl rounded-xl xsm:w-[100%] xsm:p-1 xsm:rounded-md">
                    <div className='flex  h-[15vw] rounded-[1.2vw] 2xl:w-[900px] 2xl:h-[240px] xsm:h-[13vh]'>
                        <div className='w-[50%] 2xl:w-[600px]'>
                            <img className='w-[100%] h-[100%] rounded-xl xsm:rounded-md' src='../img/fsdimg.png' alt='FSD-img'></img>
                        </div>
                        <div className='flex flex-col justify-evenly mx-[1vw] w-[100%] 2xl:h-[100%] xsm:mx-[2vw]'>
                            {/* <div>
                                <p className='font-mons text-[0.8vw] 2xl:text-[14px]'><span className='text-[#555555]'>by</span> Determined-instructure</p>
                            </div> */}
                            <div className='flex flex-nowrap justify-between items-center'>
                                <div className='space-y-2'>
                                    <p className='font-mons text-[1.5vw] font-semibold  2xl:text-[18px]'>Beginner course for full stack Development</p>
                                    <p className='text-[#696984] text-sm xsm:hidden'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod </p>

                                </div>
                                <div>
                                    <p className='font-mons text-[1vw] 2xl:text-[16px]  mt-[1vw] text-black font-semibold'>Remove</p>
                                </div>
                            </div>
                            <div className='flex flex-nowrap justify-between'>
                                <div className='flex gap-6 my-[0.5vw] w-[60%] 2xl:w-[75%] 2xl:text-[11px]'>
                                    <div className='flex items-center'>
                                        <img className='w-[1.3vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/clockfilled.svg" alt="clock"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 2Weeks</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-[1.6vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/hat.svg" alt="hat"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 156 Students</p>
                                    </div>
                                    {/* <div className='flex items-center'>
                                        <img className='w-[1.1vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> All levels</p>
                                    </div> */}
                                    <div className='flex items-center'>
                                        <img className='w-[1.2vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/files.svg" alt="files"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 20 Lessons</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-mons text-[1vw] 2xl:text-[16px]   text-black font-semibold'>Save For Later</p>
                                </div>
                            </div>
                            <div className='flex justify-end flex-nowrap'>
                                <p className='font-mons text-[1vw]  mt-[0.6vw] text-black font-semibold 2xl:text-[16px]'>Move To Wishlist</p>
                            </div>
                            <div><hr className='mt-[0.9vw] border-y-1 border-[#EAEAEA] '/></div>
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
                                    <p className='font-Inter text-[1.2vw] font-semibold text-[black] 2xl:text-[20px]'>₹4999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] h-max flex flex-col justify-around space-y-4 font-pop xsm:justify-start xsm:space-y-1 xsm:pl-2'>
                        <div>
                            <p className='font-outfit font-semibold text-[2vw] 2xl:text-[24px]'>Total :</p>
                        </div>
                        <div >
                            <p className='font-Inter font-semibold text-[1.7vw] 2xl:text-[20px]'>₹4999</p>
                        </div>
                        <div>
                            <p className='font-mons text-[1vw] text-[#1DBF73] font-semibold 2xl:text-[16px]'>Including all the taxes</p>
                        </div>
                        <div>
                            <button className='mt-[1.6vw] font-[jost] text-[1.7vw] px-[4vw] py-[0.5vw] bg-[#1DBF73] text-[#fff] border-none rounded-full 2xl:text-[24px]' type="">CHECKOUT</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ShopingCart;