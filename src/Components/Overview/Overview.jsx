import React, { useEffect, useState } from 'react'
import "./Overview.css"
import { BASE_URL } from '../../Api/api';
import { useParams } from 'react-router-dom';

function Overview() {
  const [Data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    async function Fetchdata() {
      let url = BASE_URL + "/course/" + params.slug;
      const data = await fetch(url);
      const response = await data.json();
      console.log(response);
      setData(response.course);
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();
  }, []);
  return (
    <div className='overview bg-[#E2FFF1] flex flex-col ' id='overview'>
      <p className='font-nu  text-[15px] text-balance xsm:text-[8px]'>
{Data?.overview}
      </p>

      <ul>
        {Data?.whatWillILearn.map((item,ind)=>{
          return(<>
                  <li key={ind} className='text-[14px] xsm:text-[8px]'>{item}</li>

          </>)
        })}
       
      </ul>
      
   
    </div>
  )
}

export default Overview
