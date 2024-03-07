import { useState } from 'react';
import './CCDetails.css';
import ReactPlayer from 'react-player';
import ChatBot from '../chatbot/chatbot';
import { useSearchParams } from 'react-router-dom';

export default function CDDetails(){
    const [clicked, setclicked] = useState(false)
    const [slug,setslug]=useSearchParams()
    console.log(slug);
    // useEffect(() => {
    //     ClickSection();
    // }, [])

    function ClickSection(id){
        if(!clicked){
            setclicked(true);
            let inner = document.getElementById(id);
            // console.log(inner);
            inner.style.display='none';
        }
        else{
            setclicked(false)
            let inner = document.getElementById(id);

            // console.log(inner);
            inner.style.display='block';
        }
    }

    return (
        <>
            <div className='CCD-container'>
                <div className='CCD-content'>
                    <div className='CCD-content-left 2xl:w-[60%]'>
                        <ReactPlayer height='100%' width='100%' playing={false} url='https://www.youtube.com/watch?v=XewspIh58Qg'/>
                    </div>
                    <div className=' p-3'>
                        {/* <ChatBot/> */}
                    </div>
                    
                </div>
            </div>
            <div className='h-full'>
                <div className='CCD-Header-container flex justify-evenly'>
                    <div className='w-full'>
                        <div className='CCDetails-Header-main bg-black'>
                            <div className='CCDetails-Header-content-left'>
                                <div className='CCDetails-Header-content-row1'>
                                    <h2>The Ultimate Guide to the best Full Stack Development</h2>
                                </div>
                                <div className='CCDetails-Header-content-row2'>
                                    <div className='CCDetails-Header-content-row2-clock'>
                                        <img src="../Icons/clockfilled.svg" alt="clock"></img>
                                        <p> 2Weeks</p>
                                    </div>
                                    <div className='CCDetails-Header-content-row2-hat'>
                                        <img src="../Icons/hat.svg" alt="hat"></img>
                                        <p> 156 Students</p>
                                    </div>
                                    <div className='CCDetails-Header-content-row2-level'>
                                        <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                        <p> All levels</p>
                                    </div>
                                    <div className='CCDetails-Header-content-row2-files'>
                                        <img src="../Icons/files.svg" alt="files"></img>
                                        <p> 20 Lessons</p>
                                    </div>
                                    <div className='CCDetails-Header-content-row2-faq'>
                                        <img src="../Icons/faq.svg" alt="faq"></img>
                                        <p> 3 Quizzes</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='CCD-Main-container'>
                            <div className='CCD-Main-container-content'>
                                <p>Learn how to effortlessly build responsive and dynamic web applications using JavaScript, React, and Node under the mentorship of our experienced faculty. Our tried-and-true methods are tailored to your learning pace to ensure the best results. A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets</p>
                            </div>
                            <div className='CCD-Main-container-btn'>
                                <button>
                                    <p>Get Your Certification</p>
                                    <img src="../Icons/download.svg" alt="download"></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[59%]'>
                        <div className='CCDetails-Header-content-right'>
                            <div className='CCDetails-Header-content-right-list'>
                                <div className='CCDetails-Header-content-right-list-heading'>
                                    <p>Course Content</p>
                                </div>
                                <div onClick={()=>ClickSection(1)}  className='CCDetails-Header-content-right-list-course'>
                                    <div className='CCDetails-Header-content-right-list-course-left'>
                                        <div className='CCDetails-Header-content-right-list-course-left-row1'>
                                            <p>Section 1 : Getting Started</p>
                                        </div>
                                        <div className='CCDetails-Header-content-right-list-course-left-row2'>
                                            <p>5 Lessons</p>
                                            <p>45 Mins</p>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-right'>
                                        <button>
                                            <img src="../Icons/dropdownarrow.svg" alt="dropdownarrow"></img>
                                        </button>
                                    </div>
                                </div>
                                <div className='outer-wrapper' id={1}>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list-assign'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>Assignment  1 : Class project 01 - Create your  own brief </label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-assign-row2'>
                                                <button>
                                                    <p>Download</p>
                                                </button>
                                               <div className='relative'>
                                               <input style={{visibility:'hidden'}} className='w-16 absolute top-3 left-8 '
                                     id="contained-button-file" type='file'/>
                                                <label htmlFor="contained-button-file">
                                                <p className='upload cursor-pointer'>
                                                    Upload                                               
                                                </p>
                                                </label>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={()=>ClickSection(2)}  className='CCDetails-Header-content-right-list-course'>
                                    <div className='CCDetails-Header-content-right-list-course-left'>
                                        <div className='CCDetails-Header-content-right-list-course-left-row1'>
                                            <p>Section 1 : Getting Started</p>
                                        </div>
                                        <div className='CCDetails-Header-content-right-list-course-left-row2'>
                                            <p>5 Lessons</p>
                                            <p>45 Mins</p>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-right'>
                                        <button>
                                            <img src="../Icons/dropdownarrow.svg" alt="dropdownarrow"></img>
                                        </button>
                                    </div>
                                </div>
                                <div className='outer-wrapper' id={2}>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>1. Introduction to Figma Essentials training course</label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row2'>
                                                <img src='../Icons/youtube.svg'/>
                                                <p>5 min</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='CCDetails-Header-content-right-list-course-list-assign'>
                                        <div className='CCDetails-Header-content-right-list-course-list-video1'>
                                            <div className='CCDetails-Header-content-right-list-course-list-video1-row1'>
                                                <input value='asnisaf' type='checkbox'/>
                                                <label>Assignment  1 : Class project 01 - Create your  own brief </label>
                                            </div>
                                            <div className='CCDetails-Header-content-right-list-course-list-assign-row2'>
                                                <button>
                                                    <p>Download</p>
                                                </button>
                                               <div className='relative'>
                                               <input style={{visibility:'hidden'}} className='w-16 absolute top-3 left-8 '
                                     id="contained-button-file" type='file'/>
                                                <label htmlFor="contained-button-file">
                                                <p className='upload cursor-pointer'>
                                                    Upload                                               
                                                </p>
                                                </label>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}