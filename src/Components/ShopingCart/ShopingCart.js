// import './ShopingCart.css';

function ShopingCart(){
    return (
        <div className='SC-container'>
            <div className='bg-black w-[100%] h-[6vw] flex flex-row items-center'>
                <div className='inline-block ml-[1vw]'>
                    <button className='bg-white border border-[#EAEAEA] rounded-2xl px-[7px] h-[2vw] mx-[7px] cursor-pointer' type='submit' >
                        <img className='w-[1vw]' src="../Icons/leftsidearrow.svg" alt="left-arrow"></img>
                    </button>
                </div>
                <div className=' ml-[1vw]'>
                    <h2 className='font-outfit text-[#fff] font-semibold text-3xl'>Shopping Cart</h2>
                </div>
            </div>
            <div className='flex justify-evenly items-start mt-[10px] lg:flex-col lg:items-center h-[600px]'>
                <div>
                    <div className='flex border border-[#EAEAEA] h-[17vw] rounded-[1.2vw] 2xl:w-[900px] 2xl:h-[240px]'>
                        <div className='w-[50%] 2xl:w-[600px]'>
                            <img className='w-[100%] h-[100%]' src='../img/fsdimg.png' alt='FSD-img'></img>
                        </div>
                        <div className='flex flex-col justify-evenly mx-[1vw] w-[100%] 2xl:h-[100%]'>
                            <div>
                                <p className='font-mons text-[0.8vw] 2xl:text-[14px]'><span className='text-[#555555]'>by</span> Determined-instructure</p>
                            </div>
                            <div className='flex flex-nowrap justify-between items-center'>
                                <div>
                                    <p className='font-mons text-[1.2vw] font-semibold mt-[0.7vw] 2xl:text-[18px]'>Beginner course for full stack Development</p>
                                </div>
                                <div>
                                    <p className='font-mons text-[1vw] 2xl:text-[16px] font-[400] mt-[0.6vw] text-[#1DBF73]'>Remove</p>
                                </div>
                            </div>
                            <div className='flex flex-nowrap justify-between'>
                                <div className='flex gap-3 my-[0.5vw] w-[60%] 2xl:w-[75%] 2xl:text-[11px]'>
                                    <div className='flex items-center'>
                                        <img className='w-[1.3vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/clockfilled.svg" alt="clock"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 2Weeks</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-[1.6vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/hat.svg" alt="hat"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 156 Students</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-[1.1vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> All levels</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <img className='w-[1.2vw] mr-[0.1vw] 2xl:w-[13px]' src="../Icons/files.svg" alt="files"></img>
                                        <p className='font-mons text-[0.8vw] 2xl:text-[14px] font-normal text-[#555555]'> 20 Lessons</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-mons text-[1vw] 2xl:text-[16px] font-[400] mt-[0.6vw] text-[#1DBF73]'>Save For Later</p>
                                </div>
                            </div>
                            <div className='flex justify-end flex-nowrap'>
                                <p className='font-mons text-[1vw] font-[400] mt-[0.6vw] text-[#1DBF73] 2xl:text-[16px]'>View More</p>
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
                                    <p className='font-Inter text-[1.2vw] font-semibold text-[#555555] 2xl:text-[20px]'>₹4999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] h-max flex flex-col justify-around space-y-4'>
                        <div>
                            <p className='font-outfit font-semibold text-[2vw] 2xl:text-[24px]'>Total :</p>
                        </div>
                        <div >
                            <p className='font-Inter font-semibold text-[1.7vw] 2xl:text-[20px]'>₹4999</p>
                        </div>
                        <div>
                            <p className='font-mons font-normal text-[1vw] text-[#1DBF73] 2xl:text-[16px]'>Including all the taxes</p>
                        </div>
                        <div>
                            <button className='mt-[1.6vw] font-[jost] text-[1.7vw] px-[4vw] py-[0.5vw] bg-[#1D2026] text-[#fff] border-none rounded-full 2xl:text-[24px]' type="">CHECKOUT</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ShopingCart;