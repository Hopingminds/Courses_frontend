import React from "react";
import { Link } from "react-router-dom";

const LiveClass = () => {
  const Data = [
    {
      topic: "React",
      Date: "30 Jun 2014",
      time: "11:30 AM",
      meetLink: "https://meet.google.com/wjr-evsu-pdb",
    },
  ];

  return (
    <>
      <div className="bg-[#FFFFFF] min-h-[425px] rounded-b-[20px] px-[30px] py-[24px]  flex flex-col gap-3 items-center ">
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
          <p className="font-pop font-bold text-center grid">Topic</p>
          <p className="font-pop font-bold text-center">Date</p>
          <p className="font-pop font-bold text-center">Time</p>
          <p className="font-pop font-bold text-center">Action</p>
        </div>
        {Data?.map((item, ind) => {
          return (
            <>
              <div className="grid grid-cols-[1fr,1fr,1fr,1fr] w-full bg-[#E2FFF1] py-4 rounded-md xsm:text-[6px] xsm:py-1 xsm:px-1 xsm:rounded-sm md:text-[12px] md:p-3">
                <p className="font-nu font-semibold text-center">
                  {item?.topic}
                </p>
                <p className="font-nu font-semibold text-center">
                  {item?.Date}
                </p>
                <p className="font-nu font-semibold text-center">{item.time}</p>
                <p className="font-nu font-semibold text-center">
                  <Link target="_blank" to={item.meetLink}>
                    Join
                  </Link>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default LiveClass;
