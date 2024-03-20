export default function Certificate(){
    return (
        <div className="px-[5%] mt-8 flex flex-row space-y-8 justify-between xsm:flex-col-reverse xsm:mt-[3%] xsm:gap-3">
            <div className="flex flex-col w-[73%] justify-between xsm:w-[100%] ">
                <div className="flex flex-row bg-[#E2FFF1] p-4 mt-2 w-full rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9] xsm:p-2 xsm:rounded-md">
                    <div className="w-[28%] rounded-2xl">
                        <img className="w-full h-full" src="../img/MCimg1.png"/>
                    </div>
                    <div className="w-[69%] flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="font-pop font-semibold text-[18px] xsm:text-[8px]">AWS Certified solutions Architect</p>
                            <p className="font-pop text-[#555555] text-[13px] xsm:hidden">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="flex flex-row space-x-36 xsm:space-x-10">
                                <div className="flex space-x-2 items-center xsm:space-x-1">
                                    <img className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px]" src="../Icons/RCDesign.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555] xsm:text-[6px]">Design</p>
                                </div>
                                <div className="flex space-x-2 items-center xsm:space-x-1">
                                    <img className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] text-[#555555]" src="../Icons/RCClock.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555] xsm:text-[6px]">3 Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-pop font-medium text-[13px] text-[#555555] xsm:text-[6px]">Add credential to Your Resume </p>
                            <button className="bg-[#1DBF73] py-2 px-6 rounded-full text-white text-[14px] font-nu font-bold xsm:text-[6px] xsm:py-1 xsm:px-3">Get Certification</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row bg-[#E2FFF1] p-4 mt-2 w-full rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9] xsm:p-2 xsm:rounded-md">
                    <div className="w-[28%] rounded-2xl">
                        <img className="w-full h-full" src="../img/MCimg1.png"/>
                    </div>
                    <div className="w-[69%] flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="font-pop font-semibold text-[18px] xsm:text-[8px]">AWS Certified solutions Architect</p>
                            <p className="font-pop text-[#555555] text-[13px] xsm:hidden">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="flex flex-row space-x-36 xsm:space-x-10">
                                <div className="flex space-x-2 items-center xsm:space-x-1">
                                    <img className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px]" src="../Icons/RCDesign.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555] xsm:text-[6px]">Design</p>
                                </div>
                                <div className="flex space-x-2 items-center xsm:space-x-1">
                                    <img className="w-[16px] h-[16px] xsm:w-[8px] xsm:h-[8px] text-[#555555]" src="../Icons/RCClock.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555] xsm:text-[6px]">3 Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-pop font-medium text-[13px] text-[#555555] xsm:text-[6px]">Add credential to Your Resume </p>
                            <button className="bg-[#1DBF73] py-2 px-6 rounded-full text-white text-[14px] font-nu font-bold xsm:text-[6px] xsm:py-1 xsm:px-3">Get Certification</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col Certificate-right gap-y-5 xsm:flex-row xsm:justify-between">
                <p className="font-pop font-semibold text-[18px] xsm:hidden">Explore Certificates By Category</p>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[6px] xsm:py-2 xsm:px-6 xsm:rounded-sm">Professional Certificates</button>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold xsm:text-[6px] xsm:py-2 xsm:px-6 xsm:rounded-sm">Free Certificates</button>
            </div>
        </div>
    );
}