import React, { useEffect, useState } from "react";
import "./Overview.css";
import { BASE_URL } from "../../Api/api";
import { useParams } from "react-router-dom";

function Overview() {
  const [Data, setData] = useState();
  const params = useParams();
  useEffect(() => {
    async function Fetchdata() {
      let url = BASE_URL + "/course/" + params.slug;
      const data = await fetch(url);
      const response = await data.json();
      console.log("This is overview page", Data);
      setData(response.course);
      // console.log(response.course.curriculum);
      // setVideoUrl(response?.course?.curriculum[0]?.lessons[0]?.video);
    }
    Fetchdata();
  }, []);
  return (
    <div className="overview bg-[#FFFFFF] flex flex-col border" id="overview">
      <p className="font-nu text-[15px] xsm:text-[8px] md:text-[12px]">
        {Data?.overview}
      </p>

      <ul className="ml-4">
        {Data?.whatWillILearn.map((item, ind) => {
          return (
            <>
              <li
                key={ind}
                className="font-nu text-[14px] xsm:text-[8px] list-disc md:text-[12px]"
              >
                {item}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Overview;
