import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { checkAndDisable, formatDate } from "../../helpers/helper_function";

const LiveClass = ({ data }) => {
  console.log(data);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    let result = [];
    data.forEach((val) => {
      const temp = checkAndDisable(val);
      console.log(temp);
      result.push(temp);
    });
    setUpdatedData(result);
  }, [data]);

  console.log(updatedData);

  return (
    <>
      <div className="bg-[#FFFFFF] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col gap-3 items-center ">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
          <p className="font-pop font-bold text-center grid">Topic</p>
          <p className="font-pop font-bold text-center">Date</p>
          <p className="font-pop font-bold text-center">Time</p>
          <p className="font-pop font-bold text-center">Action</p>
        </div>
        {data?.map((item, ind) => {
          return (
            <>
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                <p className="font-nu font-semibold text-center">
                  {item?.topic}
                </p>
                <p className="font-nu font-semibold text-center">
                  {formatDate(item?.date)}
                </p>
                <p className="font-nu font-semibold text-center">{item.time}</p>
                {item?.disabled ? (
                  <span className="relative cursor-pointer">
                    <p
                      className={`font-nu font-semibold text-center text-red-500 peer`}
                    >
                      Join
                    </p>
                    <p className="absolute top-8 right-[0px] bg-black text-[0.7rem] text-white w-[8rem] px-2 py-1 opacity-0 peer-hover:opacity-100 rounded-lg text-center">
                      Link is disabled
                    </p>
                  </span>
                ) : (
                  <p className={`font-nu font-semibold text-center`}>
                    <Link target="_blank" to={item.meetingLink}>
                      Join
                    </Link>
                  </p>
                )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default LiveClass;
