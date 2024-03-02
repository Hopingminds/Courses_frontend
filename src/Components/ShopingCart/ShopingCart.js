import './ShopingCart.css';

function ShopingCart(){
    return (
        <div className='SC-container'>
            <div className='SC-Header'>
                <div className='SC-Header-btn'>
                    <button type='submit' >
                        <img src="../Icons/leftsidearrow.svg" alt="left-arrow"></img>
                    </button>
                </div>
                <div className='SC-Header-content'>
                    <h2>Shopping Cart</h2>
                </div>
            </div>
            <div className='SC-content'>
                <div className='SC-content-left'>  
                    <div className='SC-content-left-box'>
                        <div className='SC-content-left-box-img'>
                            <img src='../img/fsdimg.png' alt='FSD-img'></img>
                        </div>
                        <div className='SC-content-left-box-content'>
                            <div className='SC-content-left-box-row1'>
                                <p><span>by</span> Determined-instructure</p>
                            </div>
                            <div className='SC-content-left-box-row2'>
                                <div className='SC-content-left-box-row2-left'>
                                    <p>Beginner course for full stack Development</p>
                                </div>
                                <div className='SC-content-left-box-row2-right'>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div className='SC-content-left-box-row3'>
                                <div className='SC-content-left-box-row3-left'>
                                    <div className='SC-content-left-box-row3-left-clock'>
                                        <img src="../Icons/clockfilled.svg" alt="clock"></img>
                                        <p> 2Weeks</p>
                                    </div>
                                    <div className='SC-content-left-box-row3-left-hat'>
                                        <img src="../Icons/hat.svg" alt="hat"></img>
                                        <p> 156 Students</p>
                                    </div>
                                    <div className='SC-content-left-box-row3-left-level'>
                                        <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p> All levels</p>
                                    </div>
                                    <div className='SC-content-left-box-row3-left-files'>
                                        <img src="../Icons/files.svg" alt="files"></img>
                                        <p> 20 Lessons</p>
                                    </div>
                                </div>
                                <div className='SC-content-left-box-row3-right'>
                                    <p>Save For Later</p>
                                </div>
                            </div>
                            <div className='SC-content-left-box-row4'>
                                <p>View More</p>
                            </div>
                            <div className='SC-hr-line'><hr/></div>
                            <div className='SC-content-left-box-row5'>
                                <div className='SC-content-left-box-row5-rating'>
                                    <div className='SC-content-left-box-row5-rating-star'>
                                        <img src="../Icons/Star.svg" alt="star"></img>
                                        <img src="../Icons/Star.svg" alt="star"></img>
                                        <img src="../Icons/Star.svg" alt="star"></img>
                                        <img src="../Icons/Star.svg" alt="star"></img>
                                        <img src="../Icons/Star.svg" alt="star"></img>
                                    </div>
                                </div>
                                <div className='SC-content-left-box-row5-price'>
                                    <p>₹4999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SC-content-right'>
                        <div className='SC-content-right-row1'>
                            <p>Total :</p>
                        </div>
                        <div className='SC-content-right-row2'>
                            <p>₹4999</p>
                        </div>
                        <div className='SC-content-right-row3'>
                            <p>Including all the taxes</p>
                        </div>
                        <div className='SC-content-right-row4'>
                            <button type="">CHECKOUT</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ShopingCart;