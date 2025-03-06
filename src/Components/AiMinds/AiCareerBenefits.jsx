export default function AiCareerBenefits() {
  return (
    <div
      id="benefits"
      className=" px-[5%] py-[4%] pl-[24%] flex flex-col gap-2 AiCareerBenefits-bgimg xsm:px-[2%] xsm:py-[2%] xsm:gap-1"
    >
      <p className="font-mons font-extrabold text-[30px] text-[#169f63] xsm:text-[14px]">
        Career Benefits
      </p>
      <p className="font-mons font-bold text-[21px] text-[#100101] xsm:text-[10px]">
        An AI Expert earns{" "}
        <span className="text-white font-black xsm:font-extrabold">2.5x</span>{" "}
        more than an Average Developer
      </p>
      <img
        className="w-[70%] xsm:w-full"
        src="../img/AiCareerBenefitsimg.png"
        alt=""
      />
    </div>
  );
}
