import './AiMinds.css';

export default function AiBenefits(){
    return (
        <div id="hm"  className="px-[5%] py-[4%] pl-[24%] bg-[#F4F4F4]">
            <p className="font-mons font-extrabold text-[30px] text-[#169f63]">Benefits With Hoping Minds</p>
            <p className="font-mons text-[14px] text-[#100101] mt-4">360° Career Support services, Personalised Mentorship from Industry Experts, Hands-on Projects & Hackathons, Peer Networking opportunities & a whole lot more to help you master Machine Learning & AI.</p>
            <div className='flex justify-between mt-20 mx-[10%] w-[80%]'>
                <div className='w-[50%]'>
                    <div className='relative'>
                        <div className='flex flex-col items-center absolute left-[21%] top-[-13%]'>
                            <div className='rounded-full bg-[#167D1B] w-[90px] h-[90px] flex justify-center items-center'>
                                <img className='w-[90%]' src="../Icons/aibenefiticon1.svg" alt="" />
                            </div>
                            <p>Job opportunities</p>
                        </div>
                        <div className='flex flex-col items-center absolute left-[-33%] top-[36%]'>
                            <div className='rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center'>
                                <img className='w-[70%]' src="../Icons/aibenefiticon2.svg" alt="" />
                            </div>
                            <p className='w-[70%] text-center'>Practical Learning and Networking</p>
                        </div>
                        <div className='flex flex-col items-center absolute left-[22%] top-[84%]'>
                            <div className='rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center'>
                                <img className='w-[60%]' src="../Icons/aibenefiticon3.svg" alt="" />
                            </div>
                            <p className='text-center'>Learning Support</p>
                        </div>
                        <div className='flex flex-col items-center absolute left-[59%] top-[36%]'>
                            <div className='rounded-full bg-white w-[90px] h-[90px] flex justify-center items-center'>
                                <img className='w-[60%]' src="../Icons/aibenefiticon4.svg" alt="" />
                            </div>
                            <p className='text-center'>Learning Support</p>
                        </div>
                        <div className='border-4 border-dotted rounded-full w-[300px] h-[300px] mb-20'></div>
                    </div>
                </div>
                <div className='w-[35%] mt-16'>
                    <p className='font-mons font-semibold text-[26px] text-[#167d1b]'>Job opportunities</p>
                    <ul className='text-left ml-6'>
                        <li className='font-outfit font-semibold'>Exclusive Access to Job Opportunities Portal</li>
                        <li className='font-outfit font-semibold'>Stay Ahead with Early Vacancy Notifications</li>
                        <li className='font-outfit font-semibold'>Discover Ideal Job Matches</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}