import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export default function Mycourse({ courses }) {

    const isXSmallScreen = useMediaQuery({ maxWidth: 480 });
    // console.log(courses)
    return (
        <div className="my-5 mx-[5%] flex flex-wrap justify-between xsm:my-2">

            {
                courses?.map((val, ind) => {
                    return (
                        <Link to={`/course/${val.slug}`} className="w-[29%]  p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm">
                            <div className="w-full h-[50%] bg-black">
                                <img className="w-full h-full xsm:rounded-sm xsm:h-[55px]" src={val?.course?.featured_image} />
                            </div>
                            <div className="space-y-3 mt-2 xsm:space-y-1 xsm:mt-1">
                                <p className="font-pop font-semibold text-[18px] xsm:text-[6px]">{val?.course?.title}</p>
                                <div className=" flex items-center">
                                    <img className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] rounded-full" src="../img/RCimg2.png" />
                                    <p className="font-pop font-medium text-[16px] xsm:text-[6px]"> {val?.course?.instructor.firstName + " " + val?.course?.instructor.lastName}</p>
                                </div>
                                <ProgressBar completed={60} maxCompleted={100}  height={isXSmallScreen ? 2 : 4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2" />

                                <p className="font-pop text-end text-[12px] xsm:text-[6px] ">Lesson 5 of 7</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    );
}