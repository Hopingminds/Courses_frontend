export default function AiOverview(){
    return (
        <div id="overview" className=" px-[5%] py-[4%] pl-[24%] bg-[#F4F5F7] flex flex-col gap-2">
            <p className="font-mons font-extrabold text-[30px] text-[#169f63]">Program Overview</p>
            <p className="font-mons font-extrabold text-[20px] text-[#100101]">Key Highlights</p>
            <div className="grid grid-cols-2 mt-2">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon1.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">8hrs weekly Live Classes/Projects</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon2.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Mock Interviews/Resume Preparations</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon3.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Aptitude Sessions (Competitive Advantage)</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon4.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">1-1 Mentoring Sessions</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon5.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">1 Foreign Language</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon6.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Industry Exposure</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon7.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Freelance Opportunities</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon8.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Gamified Experience</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon9.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Access to 200+ Hiring Partners</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon10.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">Program Fee ₹65000 only</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon11.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">International Exchange/Internship Opportunities</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="w-[5%] h-full" src="../Icons/aioverviewicon12.svg" alt="" />
                        <p className="font-mons font-medium text-[16px] text-[#54595f]">NSDC + International Certification</p>
                    </div>
                </div>
            </div>
        </div>
    );
}