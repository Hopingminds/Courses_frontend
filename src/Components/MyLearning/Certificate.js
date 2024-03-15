export default function Certificate(){
    return (
        <div className="px-[5%] mt-8 flex space-y-8 justify-between">
            <div className="flex flex-col w-[73%] justify-between ">
                <div className="flex flex-row bg-[#E2FFF1] p-4 mt-2 w-full rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9]">
                    <div className="w-[28%] rounded-2xl">
                        <img className="w-full h-full" src="../img/MCimg1.png"/>
                    </div>
                    <div className="w-[69%] flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="font-pop font-semibold text-[18px]">AWS Certified solutions Architect</p>
                            <p className="font-pop text-[#555555] text-[13px]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="flex space-x-36 ">
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px]" src="../Icons/RCDesign.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">Design</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px] text-[#555555]" src="../Icons/RCClock.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">3 Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-pop font-medium text-[13px] text-[#555555]">Add credential to Your Resume </p>
                            <button className="bg-[#1DBF73] py-2 px-6 rounded-full text-white text-[14px] font-nu font-bold">Get Certification</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row bg-[#E2FFF1] p-4 mt-2 w-full rounded-2xl justify-between shadow-2xl shadow-[#D9D9D9]">
                    <div className="w-[28%] rounded-2xl">
                        <img className="w-full h-full" src="../img/MCimg1.png"/>
                    </div>
                    <div className="w-[69%] flex flex-col justify-between">
                        <div className="space-y-2">
                            <p className="font-pop font-semibold text-[18px]">AWS Certified solutions Architect</p>
                            <p className="font-pop text-[#555555] text-[13px]">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <div className="flex space-x-36 ">
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px]" src="../Icons/RCDesign.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">Design</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <img className="w-[16px] h-[16px] text-[#555555]" src="../Icons/RCClock.svg"/>
                                    <p className="font-pop text-[11px] font-medium text-[#555555]">3 Month</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-pop font-medium text-[13px] text-[#555555]">Add credential to Your Resume </p>
                            <button className="bg-[#1DBF73] py-2 px-6 rounded-full text-white text-[14px] font-nu font-bold">Get Certification</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col Certificate-right gap-y-5">
                <p className="font-pop font-semibold text-[18px]">Explore Certificates By Category</p>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold">Professional Certificates</button>
                <button className="bg-[#E2FFF1] py-3 px-10 rounded-lg font-nu font-semibold">Free Certificates</button>
            </div>
        </div>
    );
}