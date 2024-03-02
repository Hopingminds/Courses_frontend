import React from 'react'
import './checkout.css'


const Checkout = () => {
    return (

        <div className="checkout-page font-mons">
            <div className="checkout-ribbon">
                <a href="/"> <button className="back-button" ></button></a>
                <h2>Checkout</h2>
            </div>

            <div className="Billing-section checkout-section">
                <h2>Billing Address</h2>
                <div className="address-dropdowns">
                    <select className="country-dropdown">
                        <option value="">India</option>
                        <option value="">Australia</option>
                        <option value="">UK</option>
                        <option value="">U.S.A</option>

                    </select>
                    <select className="state-dropdown">
                        <option value="">Punjab</option>
                        <option value="">Rajasthan</option>
                        <option value="">New Delhi</option>
                        <option value="">Gujarat</option>
                        <option value="">Maharashtra</option>
                    </select>
                </div>
            </div>

            <div className="Summary-section checkout-section">
                <h2>Summary</h2>
                <div className="summary" style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    <div className="summary-item1">
                        <span className="label">Original Price</span>
                        <p className="price">Rs. 499</p>
                    </div>
                    <div className="summary-item2">
                        <span className="label">Discount</span>
                        <p className="price">Rs. 50</p>
                    </div>
                    <div className="summary-item2">
                        <span className="label">Total</span>
                        <p className="price">Rs. 449</p>
                    </div>
                    <button className="checkout-btn"><h4>COMPLETE CHECKOUT</h4></button>
                </div>
            </div>
            <div className="Payment-section checkout-section">
                <h2>Payment Method</h2>
                <div className="methods">
                    <h4>Select payment method</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">Credit/Debit card</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">Net Banking</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">UPI</label>
                        </span>
                        <span>
                            <input type="radio" id="choose" />
                            <label for="choose">EMI</label>
                        </span>

                    </div>
                </div>
            </div>

            <div className="Details-section checkout-section">
                <h2>Order Details</h2>
                <div className="detail">
                    <div className='box' style={{ display: "flex", gap: "10px" }}>
                        <div className='img'>
                            <img className='img1' src='../img/desktopfsd.png' alt='person-with-laptop'></img>
                        </div>
                        <div className='content_checkout'>
                            <div>
                                <p>by Determined-instructure</p>
                                <h4>Beginner course for full stack Development</h4>
                            </div>
                            <div> Rs.499</div>
                            <div></div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Checkout