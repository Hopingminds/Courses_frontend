import React from 'react'
import './success.css';
import { Link } from 'react-router-dom';

function Success() {


    return (
        <div className='thankpage my-5 xsm:mx-2 md:flex md:justify-center md:items-center xsm:flex xsm:justify-center'>
            <div className="thank-you">
                <img width="188" height="188" src="/ok.gif" alt="ok" />
                <h1 className='text-[#1DBF73] font-semibold font-pop'>Payment Successful</h1>
                <h2 className='font-bold mb-2'>Course Purchased Succesfully</h2>
                <p>Order ID: OD429878791602739100
                    Order Date: {Date()}
                    Invoice Date: {Date()}</p>
                <div className="button-container">
                    <Link to={'/learning'}> <button className="view-order">View Course</button></Link>
                    <Link to={'/courses'}>
                        <button className="continue-shopping">Continue Purchasing</button> </Link>
                </div>
            </div>
        </div>
    );
}

export default Success