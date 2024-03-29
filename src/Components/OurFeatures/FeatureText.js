import Img1 from "../../Assests/Icons/ourfeatures1.svg";
import Img2 from "../../Assests/Icons/ourfeatures2.svg";
import Img3 from "../../Assests/Icons/ourfeatures3.svg";

const FeatureTexts = [
  <>
    <p className="text-[34px] text-white font-pop font-semibold xsm:text-[8px]">
      A{" "}
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
        user interface
      </span>{" "}
      designed for the classroom
    </p>
    <div className="flex flex-col gap-4 mt-2 xsm:gap-2 xsm:mt-0">
      <div className="flex flex-row gap-10 justify-between items-center xsm:gap-2">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[90px] h-[50px] flex justify-center items-center xsm:w-[40px] xsm:h-[18px]">
          <img src={Img1} className="w-[26px] h-[26px] xsm:w-[10px] xsm:h-[10px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px]">
          Teachers don’t get lost in the grid view and have a dedicated Podium
          space.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center xsm:gap-2">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[70px] h-[50px] flex justify-center items-center xsm:w-[30px] xsm:h-[18px]">
          <img src={Img2} className="w-[28px] h-[26px] xsm:w-[10px] xsm:h-[10px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px]">
          TA’s and presenters can be moved to the front of the class.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center xsm:gap-2">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[75px] h-[50px] flex justify-center items-center xsm:w-[35px] xsm:h-[18px]">
          <img src={Img3} className="w-[30px] h-[26px] xsm:w-[10px] xsm:h-[10px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px]">
          Teachers can easily see all students and class data at one time.
        </p>
      </div>
    </div>
  </>,
  <>
    <p className="text-[34px] text-white font-pop font-semibold xsm:text-[10px]">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>Tools</span> For
      Teachers And Learners
    </p>
    <div className="flex flex-col gap-4">
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3">
        Class has a dynamic set of teaching tools built to be deployed and used
        during class. Teachers can handout assignments in real-time for students
        to complete and submit.
      </p>
    </div>
  </>,
  <>
    <p className="text-[34px] text-white font-pop font-semibold xsm:text-[10px]">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
        Class Management
      </span>{" "}
      Tools for Educators
    </p>
    <div className="flex flex-col gap-4">
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3">
        Class provides tools to help run and manage the class such as Class
        Roster, Attendance, and more. With the Gradebook, teachers can review
        and grade tests and quizzes in real-time.
      </p>
    </div>
  </>,
];

export default FeatureTexts;
