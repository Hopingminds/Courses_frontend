import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';

export default function Mycourse({ courses }) {

    return (
        <div className="my-5 mx-[5%] grid grid-cols-3 gap-16 gap-y-8 xsm:my-3 xsm:gap-4">

            {
                courses?.map((val, ind) => {
                    let totallessons = 0
                    val?.course?.curriculum.map((it) => {
                        totallessons += it?.lessons?.length
                    })
                    return (
                        <Link to={`/course/${val?.course?.slug}`} className="w-full flex flex-col justify-between p-4  mt-2 rounded-xl shadow-xl shadow-[#D9D9D9] xsm:mt-0 xsm:py-1 xsm:px-1 xsm:rounded-sm">
                            <div className="w-full h-[50%]">
                                <img className="w-full h-full xsm:rounded-md xsm:h-[55px]" src={val?.course?.featured_image} />
                            </div>
                            <div className="h-[45%] flex flex-col justify-between mt-2 xsm:space-y-1 xsm:mt-1">
                                <p className="font-pop font-semibold text-[18px] xsm:text-[6px]">{val?.course?.title}</p>
                                <div className=" flex items-center">
                                    <img className="w-[32px] h-[32px] xsm:w-[10px] xsm:h-[10px] rounded-full" src="../img/RCimg2.png" />
                                    <p className="font-pop font-medium text-[16px] xsm:text-[6px]"> {val?.course?.instructor.firstName + " " + val?.course?.instructor.lastName}</p>
                                </div>
                                <ProgressBar completed={val?.completed_lessons.length} maxCompleted={totallessons} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2" />

                                <p className="font-pop text-end text-[12px] xsm:text-[6px] ">Lesson {val?.completed_lessons.length} of {totallessons}</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    );
}