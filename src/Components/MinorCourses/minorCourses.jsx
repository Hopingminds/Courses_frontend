import React, { useEffect, useState } from "react";
import "./minorCourse.css";
import complete_bg from "../../Assets/Images/completion_bg.png";
import CourseCard from "../Courses_Home/CourseCard";
import { BASE_URL } from "../../Api/api";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MinorCourse = () => {
  const [allCourses, setAllCourses] = useState([])
  const [params,setparams]=useSearchParams()
  useEffect(() => {
   async function Fetchdata(){
    let category=params.get('category')
    category = category.replace(/%20/g, " ");
    const res = await axios.get(`${BASE_URL}/courses?minordegree=true&category=${category}`);
        // console.log(res);


        setAllCourses(res?.data?.courses);
   }
Fetchdata()
  }, [])
  
  return (<>
    <div className="bg_clippath h-[60vh] w-full grid place-items-center ">
      <div className="flex px-[5vw] w-full gap-5">
        <h3 className="text-white text-[20px]">Lorem Ipsum Nav ran </h3>
        <div className="relative">
          {" "}
          <img src={complete_bg} alt="" className="h-8" />
          <h3 className="absolute top-0 left-2">75% Completed</h3>
        </div>
      </div>
      <div className="text-[16px] px-[5vw] pb-8 text-white">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          neque quidem deleniti quaerat voluptatem hic odit illum, optio
          assumenda dolore officia obcaecati cum vero laudantium labore
          similique? Quis tempore quaerat repellendus reiciendis, enim ipsam
          sapiente iusto possimus esse recusandae, ipsum in? Qui accusantium
          amet eos eligendi quisquam harum, vitae a deserunt et. Dolor at itaque
          illum sint qui amet veniam. Perferendis quos qui quo accusamus
          voluptates porro maxime aperiam omnis quidem quisquam autem tempora
          facilis architecto necessitatibus temporibus ut quis incidunt nemo,
          harum repellat cupiditate nisi vero? Cum eaque ratione tempore saepe
          fuga explicabo ipsam praesentium, ducimus quam quia eum.
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
        // Pass category to CourseCard component
        />
      );
    })}
  </div>
  </>);
};

export default MinorCourse;
