export default function AiProject(){
    return (
        <div id="project" className=" px-[5%] py-[4%] pl-[24%] flex flex-col gap-2 ">
            <p className="font-mons font-extrabold text-[30px] text-[#169f63]">Project Power House</p>
            <div className="flex h-[366px] gap-1">
                {/* 1 */}
                <div className="w-[25%] relative overflow-hidden spreaddiv">
                    <img className='h-full' src="../img/aiprojectimg1.png" alt="" />
                    <div className="spreaddiv-text">
                        <p className="font-mons font-bold text-[28px] text-white">Crime Prevention and Community Safety</p>
                        <div className="bg-[#169F63B3] px-[20px] py-[15px]">
                            <p className="font-mons text-[15px]">Create a gamified app using data science to promote community safety and prevent crime through challenges</p>
                        </div>
                    </div>
                </div>
                
                {/* 2 */}
                <div className="w-[25%] relative overflow-hidden spreaddiv">
                    <img className='h-full' src="../img/aiprojectimg2.png" alt="" />
                    <div className="spreaddiv-text">
                        <p className="font-mons font-bold text-[28px] text-white">Eye For the Blind</p>
                        <div className="bg-[#169F63B3] px-[20px] py-[15px]">
                            <p className="font-mons text-[15px]">Develop a deep learning model to verbally describe images for the visually impaired.</p>
                        </div>
                    </div>
                </div>
                
                {/* 3 */}
                <div className="w-[25%] relative overflow-hidden spreaddiv">
                    <img className='h-full' src="../img/aiprojectimg3.png" alt="" />
                    <div className="spreaddiv-text">
                        <p className="font-mons font-bold text-[28px] text-white">Accident Prevention Software</p>
                        <div className="bg-[#169F63B3] px-[20px] py-[15px]">
                            <p className="font-mons text-[15px]">Analyze Tesla autopilot accident data to gauge its impact on road safety.</p>
                        </div>
                    </div>
                </div>
                
                {/* 4 */}
                <div className="w-[25%] relative overflow-hidden spreaddiv">
                    <img className='h-full' src="../img/aiprojectimg4.png" alt="" />
                    <div className="spreaddiv-text">
                        <p className="font-mons font-bold text-[28px] text-white">Predict Health Issues using Facial Recognition</p>
                        <div className="bg-[#169F63B3] px-[20px] py-[15px]">
                            <p className="font-mons text-[15px]">Create a facial recognition system for genetic disorder diagnosis using deep learning algorithms.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}