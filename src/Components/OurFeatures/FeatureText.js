import Img1 from "../../Assests/Icons/ourfeatures1.svg";
import Img2 from "../../Assests/Icons/ourfeatures2.svg";
import Img3 from "../../Assests/Icons/ourfeatures3.svg";

const FeatureTexts = [
  <>
    <p className="text-[36px] text-white font-pop font-semibold xsm:text-[8px] md:text-[20px]">
            <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
            MNC
      </span>{" "}
      collaborations for Upskilling students
    </p>
    <div className="flex flex-col gap-4 mt-2 xsm:gap-1 xsm:mt-0">
      <div className="flex flex-row gap-10 justify-between items-center xsm:gap-2 md:gap-5">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[90px] h-[50px] flex justify-center items-center xsm:w-[40px] xsm:h-[16px] md:w-[52px] md:h-[24px]">
          <img src={Img1} className="w-[26px] h-[26px] xsm:w-[8px] xsm:h-[8px] md:w-[12px] md:h-[12px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px] md:text-[10px]">
        Our partnerships with leading MNC's provide students with access to world-class training programs and resources.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center xsm:gap-2 md:gap-5">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[70px] h-[50px] flex justify-center items-center xsm:w-[44px] xsm:h-[16px] md:w-[54px] md:h-[24px]">
          <img src={Img2} className="w-[28px] h-[26px] xsm:w-[8px] xsm:h-[8px] md:w-[12px] md:h-[12px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px] md:text-[10px]">
        Connect with industry leaders, gain insider insights, and stay ahead of the competition with our MNC-led upskilling initiatives.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center xsm:gap-2 md:gap-5">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[75px] h-[50px] flex justify-center items-center xsm:w-[40px] xsm:h-[16px] md:w-[52px] md:h-[24px]">
          <img src={Img3} className="w-[30px] h-[26px] xsm:w-[8px] xsm:h-[8px] md:w-[12px] md:h-[12px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px] md:text-[10px]">
        Experience transformative learning designed to prepare you for success in today's competitive job market.
        </p>
      </div>
      <div className="flex flex-row gap-10 items-center xsm:gap-2 md:gap-5">
        <div className="bg-[#ffffff] shadow-xl rounded-full w-[75px] h-[50px] flex justify-center items-center xsm:w-[35px] xsm:h-[16px] md:w-[46px] md:h-[24px]">
          <img src={Img3} className="w-[30px] h-[26px] xsm:w-[8px] xsm:h-[8px] md:w-[12px] md:h-[12px]" />
        </div>
        <p className="text-white text-[20px] font-pop xsm:text-[6px] md:text-[10px]">
        Unparalleled opportunities for upskilling with exclusive collaborations with top-tier MNC's
        </p>
      </div>
    </div>
  </>,
  <>
    <p className="text-[36px] text-white font-pop font-semibold xsm:text-[10px] md:text-[20px]">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>Industry Oriented </span> Curriculum
    </p>
    <div className="flex flex-col gap-4 xsm:gap-1 md:gap-2">
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3 md:text-[12px] md:leading-5">
      Experience hands-on learning with our industry-oriented curriculum designed to bridge the gap between academia and real-world applications.
      </p>
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3 md:text-[12px] md:leading-5">
      Curriculum emphasizes industry-relevant skills, project-based learning and internships, allowing students to build a strong foundation for their future careers.
      </p>
    </div>
  </>,
  <>
    <p className="text-[36px] text-white font-pop font-semibold xsm:text-[10px] md:text-[20px]">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
      Placement
      </span>{" "}
      Assistance
    </p>
    <div className="flex flex-col gap-4">
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3 md:text-[12px] md:leading-5">
      Personalized guidance and advice to students on career paths, job market trends, resume building, and interview preparation. Offering one-on-one sessions with career counsellors to address individual needs and aspirations.
      </p>
    </div>
  </>,
    <>
    <p className="text-[34px] text-white font-pop font-semibold xsm:text-[10px] md:text-[20px]">
      <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
      MOUs
      </span>{" "}
      with renowned universities
    </p>
    <div className="flex flex-col gap-4">
      <p className="text-white text-[20px] font-pop leading-8 xsm:text-[6px] xsm:leading-3 md:text-[12px] md:leading-5">
      Our MOUs with renowned universities offer students unparalleled opportunities for academic enrichment, skill development, and career advancement.
      </p>
    </div>
  </>,
];

export default FeatureTexts;
