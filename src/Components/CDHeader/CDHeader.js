import ReactPlayer from 'react-player';
import Main from '../Main/Main';
import './CDHeader.css';
import { Link } from 'react-router-dom';

function CDHeader() {
    return (<>
    <div className='min-h-[1000px]'>
        <div className='cd-Header-container'>
            <div className=' ml-14 pt-5'>
                <Link to='/'  >
                    <img className='w-8 h-8 rounded-full bg-white p-2' src="../Icons/leftsidearrow.svg" alt="left-arrow"></img>
                </Link>
            </div>
            <div className='Header-main'>
                <div className='Header-content'>
                    <div className='Header-content-row1'>
                        <h2>The Ultimate Guide to the best Full Stack Development</h2>
                    </div>
                    <div className='Header-content-row2'>
                        <div className='Header-content-row2-clock'>
                            <img src="../Icons/clockfilled.svg" alt="clock"></img>
                            <p> 2Weeks</p>
                        </div>
                        <div className='Header-content-row2-hat'>
                            <img src="../Icons/hat.svg" alt="hat"></img>
                            <p> 156 Students</p>
                        </div>
                        <div className='Header-content-row2-level'>
                            <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                            <p> All levels</p>
                        </div>
                        <div className='Header-content-row2-files'>
                            <img src="../Icons/files.svg" alt="files"></img>
                            <p> 20 Lessons</p>
                        </div>
                        <div className='Header-content-row2-faq'>
                            <img src="../Icons/faq.svg" alt="faq"></img>
                            <p> 3 Quizzes</p>
                        </div>
                    </div>
                </div>
                <div className='Header-box'>
                    <div className='Header-box-img'>
                        {/* <img src="../img/desktopfsd.png" alt="desktopfsd"></img> */}
                        <ReactPlayer width={293} height={180} className='rounded-t-xl' url='https://www.youtube.com/watch?v=hg0RqLCBe9I'/>
                    </div>
                    <div className='Header-box-content'>
                        <div className='Header-box-content-price'>
                            <p><span>$59.0 </span>$49.0</p>
                        </div>
                        <div className="Header-box-content-btn">
                            <button type="">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
        <Main />
        </div>
        </> );
}

export default CDHeader;