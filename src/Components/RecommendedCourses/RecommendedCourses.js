import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import CourseCard from "../Courses_Home/CourseCard";

export default function RecommendedCourses(){

    const [Data, setData] = useState([])
    let login=localStorage.getItem('COURSES_USER_TOKEN')
   
    useEffect(() => {
        async function Fetchdata(){       
       
            let url=BASE_URL+'/recommendedcourses';
         
              const data=await fetch(url)
              const response=await data.json()
              console.log(response);
              setData(response?.recommendedCourses)
          
        }
        Fetchdata()
      }, [])
    return (
        <div className="my-6 px-[5%] bg-[#E2FFF1] py-5 xsm:px-[2%]">
            <div className="my-6 xsm:mt-0 xsm:">
                <p className="font-pop font-semibold text-[30px] xsm:text-[18px]">For Minor Degree</p>
            </div>
            <div className="grid grid-cols-4  space-x-5 justify-between mt-2 flex-wrap 2xl:gap-10 xsm:grid xsm:grid-cols-2 pb-5 xsm:space-x-0 xsm:gap-2"> {/* Changed flex to flex-wrap */}
                    {Data?.map(course => (
                        <CourseCard
                            key={course.title}
                            title={course.title}
                            price={course.base_price}
                            firstName={course.instructor.firstName}
                            lastName={course.instructor.lastName}
                            duration={course.duration}
                            image={course.featured_image}
                            slug={course.slug}
                            category={course.category}
                            description={course.whatWillILearn}
                        // Pass category to CourseCard component
                        />
                    ))
                    }
                    </div>
        </div>
    );
}
