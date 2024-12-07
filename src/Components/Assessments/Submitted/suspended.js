import React from 'react'
import { Link } from 'react-router-dom';

function Suspendedassessment() {
    return (
        <div className='thankpage my-5 xsm:mx-2 md:flex md:justify-center md:items-center xsm:flex xsm:justify-center'>
            <div className="thank-you">
                <img width="188" height="188" src="/suspended.png" alt="suspended" />
                <h1 className='text-red-600 font-semibold font-pop'>Assessment Suspended</h1>
                <div className='text-center px-20'>Thank you for participating in enrollment assessment test. You will be receiving your test results via email in 24 Hrs.</div>
                <div className="button-container mt-5">
                    <Link href={'/learning'}> <button className="view-order">Back to learning</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Suspendedassessment;