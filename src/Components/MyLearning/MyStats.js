export default function MyStats(){
    return (
        <div className="px-[8%] mt-20 mb-24">
            <div>
                <div>
                    <p className="font-nu font-semibold text-[20px] text-[#243465]">TOTAL COURSES</p>
                    <div className="w-[40%]">
                        <div className="flex justify-evenly py-6">
                            <div className="w-[20%] ">
                                <img className="rounded-full" src="../img/RCimg1.png"/>
                            </div>
                            <div className="flex items-center justify-between w-[60%]">
                                <div>
                                    <p className="font-nu font-semibold text-[#243465] text-[22px]">UI & UX</p>
                                    <p className="font-nu text-[#848A9C] text-[18px]">Nabung jang imah dekah </p>
                                </div>
                                <div>
                                    <img className="w-[16px] h-[16px]" src="../Icons/MSarrow.svg" alt="arrow"/>
                                </div>
                            </div>
                        </div>
                        <hr className="border-dashed"/>
                        <button className="bg-[#F2F6F8] w-full py-4 font-nu font-semibold text-[22px] text-[#243465] rounded-lg">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}