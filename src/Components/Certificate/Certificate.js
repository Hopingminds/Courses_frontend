import './Certificate.css';

export default function Certificate(){
    return (
        <>
            <div className='Certificate-content'>
                <div className='Certificate-content-left'>
                    <div className='Certificate-content-left-box'>
                        <div className='Certificate-content-left-box-img'>
                            <img src='../img/fsdimg.png' alt='FSD-img'></img>
                        </div>
                        <div className='Certificate-content-left-box-content'>
                            <div className='Certificate-content-left-box-row1'>
                                <p><span>by</span> Determined-instructure</p>
                            </div>
                            <div className='Certificate-content-left-box-row2'>
                                <div className='Certificate-content-left-box-row2-left'>
                                    <p>Beginner course for full stack Development</p>
                                </div>
                            </div>
                            <div className='Certificate-content-left-box-row3'>
                                <div className='Certificate-content-left-box-row3-left'>
                                    <div className='Certificate-content-left-box-row3-left-clock'>
                                        <img src="../Icons/clockfilled.svg" alt="clock"></img>
                                        <p> 2Weeks</p>
                                    </div>
                                </div>
                            </div>
                            <div className='Certificate-content-left-box-row4'>
                                <div className='Certificate-content-left-box-row4-left'>
                                    <p>Add credential to Your Resume </p>
                                </div>
                                <div className='Certificate-content-left-box-row4-right'>
                                    <p>Download Certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Certificate-content-right'>
                    <div className='Certificate-content-right-row1'>
                        <p>Explore Certificates By Category</p>
                    </div>
                    <div className='Certificate-content-right-row2'>
                        <button type="">Professional Certificates</button>
                    </div>
                    <div className='Certificate-content-right-row2'>
                        <button type="">Free Certificates</button>
                    </div>
                </div>
            </div>
        </>
    );
}