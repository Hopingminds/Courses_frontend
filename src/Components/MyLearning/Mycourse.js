import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

export default function Mycourse({ courses }) {

    console.log(courses)
    return (
        <div className="my-10 mx-[5%] flex flex-wrap justify-between">

            {
                courses?.map((val, ind) => {
                    return (
                        <Link to={`/course/${val.slug}`} className="w-[29%] px-4 py-6 mt-2 rounded-xl shadow-xl shadow-[#D9D9D9]">
                            <div>
                                <img className="w-full h-full" src={val?.featured_image} />
                            </div>
                            <div className="space-y-3 mt-2">
                                <p className="font-pop font-semibold text-[18px]">{val?.title}</p>
                                <div className=" flex items-center">
                                    <img className="w-[32px] h-[32px]" src="../img/RCimg2.png" />
                                    <p className="font-pop font-medium text-[16px]"> {val.instructor.firstName + " " + val.instructor.lastName}</p>
                                </div>
                                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2" />

                                <p className="font-pop text-end text-[12px]">Lesson 5 of 7</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    );
}