import "./AiMinds.css";

export default function AiBenefits() {
  return (
    <div
      id="hm"
      className="px-[5%] py-[4%] pl-[24%] bg-[#F4F4F4] xsm:px-[2%] xsm:py-[2%] xsm:gap-1"
    >
      <p className="font-mons font-extrabold text-[30px] text-[#169f63]  xsm:text-[14px]">
        Benefits With Hoping Minds
      </p>
      <p className="font-mons text-[14px] text-[#100101] mt-4  xsm:text-[8px] xsm:mt-1">
        360° Career Support services, Personalised Mentorship from Industry
        Experts, Hands-on Projects & Hackathons, Peer Networking opportunities &
        a whole lot more to help you master Machine Learning & AI.
      </p>
      <div className="flex justify-between mt-20 mx-[10%] w-[80%] xsm:mx-[5%] xsm:mt-8">
        <div className="w-[50%]">
          <div className="relative">
            <div className="flex flex-col items-center absolute left-[21%] top-[-13%] ">
              <div className="rounded-full bg-[#167D1B] w-[90px] h-[90px] flex justify-center items-center xsm:w-[45px] xsm:h-[45px]">
                <img
                  className="w-[90%]"
                  src="../Icons/aibenefiticon1.svg"
                  alt=""
                />
              </div>
              <p className="xsm:text-[8px]">Job opportunities</p>
            </div>
            <div className="flex flex-col items-center absolute left-[-33%] top-[36%] xsm:left-[-40%]">
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center xsm:w-[45px] xsm:h-[45px]">
                <img
                  className="w-[70%]"
                  src="../Icons/aibenefiticon2.svg"
                  alt=""
                />
              </div>
              <p className="w-[50%] text-center xsm:text-[8px]">
                Practical Learning and Networking
              </p>
            </div>
            <div className="flex flex-col items-center absolute left-[22%] top-[84%] hidden">
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center">
                <img
                  className="w-[60%]"
                  src="../Icons/aibenefiticon3.svg"
                  alt=""
                />
              </div>
              <p className="text-center">Learning Support</p>
            </div>
            <div className="flex flex-col items-center absolute left-[59%] top-[36%] hidden">
              <div className="rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center">
                <img
                  className="w-[60%]"
                  src="../Icons/aibenefiticon4.svg"
                  alt=""
                />
              </div>
              <p className="text-center">Learning Support</p>
            </div>
            <div className="border-4 border-dotted rounded-full w-[300px] h-[300px] mb-20 xsm:w-[140px] xsm:h-[140px] xsm:border-2"></div>
          </div>
        </div>
        <div className="w-[35%] mt-16 xsm:w-[40%] xsm:mt-8">
          <p className="font-mons font-semibold text-[26px] text-[#167d1b] xsm:text-[12px]">
            Job opportunities
          </p>
          <ul className="text-left ml-6 xsm:ml-3">
            <li className="font-outfit font-semibold xsm:text-[8px]">
              Exclusive Access to Job Opportunities Portal
            </li>
            <li className="font-outfit font-semibold xsm:text-[8px]">
              Stay Ahead with Early Vacancy Notifications
            </li>
            <li className="font-outfit font-semibold xsm:text-[8px]">
              Discover Ideal Job Matches
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
