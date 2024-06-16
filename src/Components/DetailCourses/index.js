import './Pageheader.css';
import Commoncard from './Commoncard';
import Main from '../Main/Main';
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COURSESURL } from '../confidential';
import { BASE_URL } from '../../Api/api';
import { jwtDecode } from 'jwt-decode';
import Spinner from '../Spinner';
import { TiTick } from 'react-icons/ti';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export default function DetailCourses() {
    const param = useParams()
    const [Data, setData] = useState()
    let slug = param.slug;
    const [show, setshow] = useState(false)


    useEffect(() => {
        async function Fetchdata() {
            try {
                setshow(true)
                let url = BASE_URL + '/course/' + slug
                const data = await fetch(url);
                const response = await data.json()
                console.log(response);
                setData(response?.course)
                setshow(false)
            } catch (error) {
                console.log(error);
            }
            // console.log(response.course);
        }
        Fetchdata()
    }, [])

    return (
        <div className="h-auto min-h-screen overflow-x-visible ">
            <div className=" px-[5%] mb-5 xsm:mx-0 ">
                <div className='CCDetails-Header-main flex justify-between px-[5%] w-full xsm:mb-[4.5rem]' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${Data?.featured_image})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}>
                    <div className='CCDetails-Header-content-leftqw xsm:text-[10px]'>
                        <div className='CCDetails-Header-content-row1qw xsm:text-[10px]'>
                            <h2 className='font-pop  xsm:text-[10px]'>{Data?.title}</h2>
                        </div>
                        <div className='text-white flex gap-2 items-center text-[14px] font-pop mt-4 xsm:text-[8px] xsm:mt-2'>
                            <p>4.7</p>
                            <div className='flex gap-1 items-center text-yellow-400'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p>Based on feedback received from 250+ learners</p>
                        </div>
                        <div className='text-white mt-4 font-pop text-[14px] grid grid-cols-2 gap-2 xsm:hidden'>
                            {Data?.whatWillILearn?.map((item, index) => (
                                <div key={index} className='flex gap-1 items-center'>
                                    <TiTick className='w-5 h-5' />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <Commoncard Data={Data} />
                </div>
                <Main />
            </div>
            {show ? <div className='w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
            <RecommendedCourses />
        </div>
    );
}