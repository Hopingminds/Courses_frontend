import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Api/api";
import CourseCard from "../Courses_Home/CourseCard";

export default function RecommendedCourses() {

    const [Data, setData] = useState([])
    let login = localStorage.getItem('COURSES_USER_TOKEN')

    useEffect(() => {
        async function Fetchdata() {

            let url = BASE_URL + '/recommendedcourses';

            const data = await fetch(url)
            const response = await data.json()
            console.log(response);
            setData(response?.recommendedCourses)

        }
        Fetchdata()
    }, [])
    return (
        <div className="px-[5%] bg-[#E2FFF1] py-12 xsm:px-[2%] md:pt-2">
            <div className="my-6 pb-1 xsm:my-0 xsm:px-[2%] md:my-4">
                <p className="font-pop font-semibold text-[30px] xsm:text-[18px] md:text-[20px]">Recommended Courses</p>
            </div>
            <div className="grid grid-cols-4  space-x-5 justify-between mt-2 flex-wrap 2xl:gap-10 xsm:grid xsm:grid-cols-2 pb-5 xsm:space-x-0 xsm:gap-3 xsm:px-[2%] md:space-x-2"> {/* Changed flex to flex-wrap */}
                {Data?.map((val, ind) => (
                    <CourseCard
                        key={val?.title}
                        title={val?.title}
                        featured_video={val?.featured_video}
                        price={val?.base_price}
                        name={val?.instructor?.name}
                        duration={val?.duration}
                        image={val?.featured_image}
                        profile={val?.instructor?.profile}
                        email={val?.instructor?.email}
                        experience={val?.instructor?.experience}
                        bio={val?.instructor?.bio}
                        slug={val?.slug}
                        phone={val?.instructor?.phone}
                        category={val?.category}
                        description={val?.overview}
                        ind={ind}
                        _id={val?._id}
                        display={val?.display}
                        IsMinorDegreeCourse={val?.IsMinorDegreeCourse}
                        credits={val?.credits}
                        courseCategory={val?.courseCategory}
                    // Pass category to CourseCard component
                    />
                ))
                }
            </div>
        </div>
    );
}
