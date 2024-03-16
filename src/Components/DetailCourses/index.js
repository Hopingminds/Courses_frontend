import './Pageheader.css';
import Commoncard from './Commoncard';
import Main from '../Main/Main';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COURSESURL } from '../confidential';
import { BASE_URL } from '../../Api/api';

export default function DetailCourses() {
    const param = useParams()
    const [Data, setData] = useState()
    let slug = param.slug;
    useEffect(() => {
        async function Fetchdata() {
            try {
                // setshow(true)
                let url = BASE_URL + '/course/' + slug
                const data = await fetch(url);
                const response = await data.json()
                // console.log(response);
                setData(response.course)
                // setshow(false)
            } catch (error) {
                console.log(error);
            }
            // console.log(response.course);
        }
        Fetchdata()
    }, [])

    return (
        <div className="  h-auto min-h-screen overflow-x-visible ">
            <div className=" mx-[5%]">
                <div className='CCDetails-Header-main flex justify-between px-[5%]   w-full'>
                    <div className='CCDetails-Header-content-leftqw '>
                        <div className='CCDetails-Header-content-row1qw'>
                            <h2 className='font-pop '>{Data?.title}</h2>
                        </div>
                        <div className='CCDetails-Header-content-row2 w-[90%]'>
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
                    <Commoncard Data={Data} />
                </div>
                <Main />
                <RecommendedCourses />
            </div>
        </div>
    );
}