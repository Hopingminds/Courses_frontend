import './Pageheader.css';
import Commoncard from './Commoncard';
import Main from '../Main/Main';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';

export default function DetailCourses(){
    return (
        <div className="  h-auto min-h-screen overflow-x-visible ">
            <div className=" mx-[5%]">
                <div className='CCDetails-Header-main flex justify-evenly w-full'>
                    <div className='CCDetails-Header-content-left '>
                        <div className='CCDetails-Header-content-row1'>
                            <h2 className='font-pop'>The Ultimate Guide to the best Full Stack Development</h2>
                        </div>
                        <div className='CCDetails-Header-content-row2'>
                            <div className='CCDetails-Header-content-row2-clock'>
                                <img src="../Icons/clockfilled.svg" alt="clock"></img>
                                <p className='font-nu'> 2Weeks</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-hat'>
                                <img src="../Icons/hat.svg" alt="hat"></img>
                                <p className='font-nu'> 156 Students</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-level'>
                                <img src="../Icons/barchartgreen.svg" alt="bar-chart"></img>
                                <p className='font-nu'> All levels</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-files'>
                                <img src="../Icons/files.svg" alt="files"></img>
                                <p className='font-nu'> 20 Lessons</p>
                            </div>
                            <div className='CCDetails-Header-content-row2-faq'>
                                <img src="../Icons/faq.svg" alt="faq"></img>
                                <p className='font-nu'> 3 Quizzes</p>
                            </div>
                        </div>
                    </div>
                    <Commoncard /> 
                </div>
                <Main/>
                <RecommendedCourses/>
            </div>
        </div>
    );
}