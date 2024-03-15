import Img1 from "../../Assests/Icons/ourfeatures1.svg";
import Img2 from "../../Assests/Icons/ourfeatures2.svg";
import Img3 from "../../Assests/Icons/ourfeatures3.svg";

const FeatureTexts = [
  <>
    <p className="text-[40px] text-[#000000] font-poppins font-semibold">
      A{" "}
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
        user interface
      </span>{" "}
      designed for the classroom
    </p>
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-10 justify-between items-center">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[75px] h-[60px] flex justify-center items-center">
          <img src={Img1} className="w-[24px] h-[24px]" />
        </div>
        <p className="text-[#696984] text-[22px] font-poppins">
          Teachers don’t get lost in the grid view and have a dedicated Podium
          space.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <img src={Img2} className="w-[28px] h-[26px]" />
        </div>
        <p className="text-[#696984] text-[22px] font-poppins">
          TA’s and presenters can be moved to the front of the class.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[65px] h-[60px] flex justify-center items-center">
          <img src={Img3} className="w-[30px] h-[26px]" />
        </div>
        <p className="text-[#696984] text-[22px] font-poppins">
          Teachers can easily see all students and class data at one time.
        </p>
      </div>
    </div>
  </>,
  <>
    <p className="text-[40px] text-[#000000] font-poppins font-semibold">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>Tools</span> For
      Teachers And Learners
    </p>
    <div className="flex flex-col gap-8">
      <p className="text-[#696984] text-[24px] font-poppins leading-10">
        Class has a dynamic set of teaching tools built to be deployed and used
        during class. Teachers can handout assignments in real-time for students
        to complete and submit.
      </p>
    </div>
  </>,
  <>
    <p className="text-[40px] text-[#000000] font-poppins font-semibold">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
        Class Management
      </span>{" "}
      Tools for Educators
    </p>
    <div className="flex flex-col gap-8">
      <p className="text-[#696984] text-[24px] font-poppins leading-10">
        Class provides tools to help run and manage the class such as Class
        Roster, Attendance, and more. With the Gradebook, teachers can review
        and grade tests and quizzes in real-time.
      </p>
    </div>
  </>,
];

export default FeatureTexts;
