import ReactPlayer from 'react-player';
import Main from '../Main/Main';
import './CDHeader.css';
import { Link, useParams } from 'react-router-dom';
import Overview_content from '../Overview_content';
import { COURSESURL } from '../Confidential';
import { useEffect } from 'react';
import { useState } from 'react';

function CDHeader() {
    const [Data, setData] = useState([])
    const param=useParams()
    // console.log(param);
    let slug=param.slug;
    useEffect(() => {
     async function Fetchdata(){
        let url=COURSESURL+'course/'+slug
        const data = await fetch(url);
        const response=await data.json()
        setData(response.course)
        // console.log(response.course);
     }
     Fetchdata()
    }, [])
    
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
                        <h2>{Data.title}</h2>
                    </div>
                    <div className='Header-content-row2'>
                        <div className='Header-content-row2-clock'>
                            <img src="../Icons/clockfilled.svg" alt="clock"></img>
                            <p> {Data.duration}</p>
                        </div>
                        <div className='Header-content-row2-hat'>
                            <img src="../Icons/hat.svg" alt="hat"></img>
                            <p> {Data.enrollments/1000}k Students</p>
                        </div>
                        <div className='Header-content-row2-level'>
                            <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                            <p> {Data.level}</p>
                        </div>
                        <div className='Header-content-row2-files'>
                            <img src="../Icons/files.svg" alt="files"></img>
                            <p> {Data.total_lessons} Lessons</p>
                        </div>
                        <div className='Header-content-row2-faq'>
                            <img src="../Icons/faq.svg" alt="faq"></img>
                            <p> {Data.total_quiz} Quizzes</p>
                        </div>
                    </div>
                </div>
                <div className='Header-box'>
                    <div className='Header-box-img'>
                        {/* <img src="../img/desktopfsd.png" alt="desktopfsd"></img> */}
                        <ReactPlayer width={293} height={180} className='rounded-t-xl' url={Data.featured_video}/>
                    </div>
                    <div className='Header-box-content'>
                        <div className='Header-box-content-price'>
                            <p><span>₹59.0 </span>₹49.0</p>
                        </div>
                        <div className="Header-box-content-btn">
                            <button type="">Start Now</button>
                        </div>
                    </div>
                </div>
            </div>

           

        </div>
        {/* <Main /> */}
        <Overview_content overview={Data.overview} curriculum={Data.curriculum} instructor={Data} reviews={Data.reviews} faqs={Data.faqs}/>
        </div>
        </> );
}

export default CDHeader;