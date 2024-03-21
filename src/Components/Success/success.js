import React from 'react'
import './success.css';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div className='thankpage'>
            <div className="thank-you">
                <img width="188" height="188" src="/ok.png" alt="ok" />
                <h1>Thank you for purchasing!</h1>
                <h2>Course Placed Succesfully</h2>
                <p>Order ID: OD429878791602739100
                    Order Date: {Date()}
                    Invoice Date: {Date()}</p>
                <div className="button-container">
                    <Link to={'/learning'}> <button className="view-order">VIEW COURSE</button></Link>
                    <Link to={'/course'}>
                        <button className="continue-shopping">CONTINUE PURCHASING</button> </Link>
                </div>
            </div>
        </div>
    );
}

export default Success