import React, { useEffect, useState } from "react";
import "./minorCourse.css";
import complete_bg from "../../Assets/Images/completion_bg.png";
import CourseCard from "../Courses_Home/CourseCard";
import { BASE_URL } from "../../Api/api";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MinorCourse = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [params, setparams] = useSearchParams();
  useEffect(() => {
    async function Fetchdata() {
      let category = params.get("category");
      category = category.replace(/%20/g, " ");
      const res = await axios.get(
        `${BASE_URL}/courses?minordegree=true&category=${category}`
      );
      // console.log(res);

      setAllCourses(res?.data?.courses);
    }
    Fetchdata();
  }, []);

  return (
    <>
      <div className="bg_clippath h-[60vh] w-full flex flex-col gap-14 pt-[4%] md:pt-[6%] md:gap-12 md:h-[55vh] xsm:pt-[12%] xsm:gap-8">
        <div className="flex px-[6vw] w-full md:px-[7vw] xsm:px-[8vw]">
          <ul className="list-disc text-white text-[18px] md:text-[14px] xsm:text-[10px]">
            <li>20 Credits that counts towards your degree</li>
            <li>Delivered by Industry Experts</li>
            <li>Exclusive Placement Opportunities</li>
          </ul>
        </div>
        <div className="text-[16px] px-[5vw] text-white flex flex-col gap-3 md:text-[12px] xsm:text-[8px]">
          <p>
          A specialised academic path with our industry tailored micro credential programs to help you master specific skillsets in just 20 credits. These also include a capstone project where you apply your skills to real-world challenges culminating in a showcase of your accomplishments and award of a minor degree at a prestigious Graduation Ceremony held at one of our partner Campuses. As a valued member of our community, you'll enjoy access to our extensive placement network with exclusive opportunities, industry events and 1-1 mentorship sessions.
          </p>
          <p>
          Your credits will be securely stored in the Academic Bank of Credit, aligning with national and international educational standards, including NEP, NCrF, UGC, and NCVET guidelines, thus empowering you with a globally recognized qualification that opens doors to boundless possibilities.
          </p>
        </div>
      </div>
      <div className="my-5 mx-[5%] grid grid-cols-4 gap-6 xsm:grid-cols-3 xsm:gap-3 xsm:my-[4%] md:my-[2%] ">
        {allCourses?.map((val, ind) => {
          return (
            <CourseCard
              key={val.title}
              title={val.title}
              featured_video={val.featured_video}
              price={val.base_price}
              firstName={val.instructor.firstName}
              lastName={val.instructor.lastName}
              duration={val.duration}
              image={val.featured_image}
              slug={val.slug}
              category={val.category}
              description={val.overview}
              ind={ind}
              _id={val._id}
              display={val.display}
              IsMinorDegreeCourse={val.IsMinorDegreeCourse}
              credits={val.credits}
              // Pass category to CourseCard component
            />
          );
        })}
      </div>
    </>
  );
};

export default MinorCourse;
