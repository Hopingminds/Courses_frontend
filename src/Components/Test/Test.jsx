export default function Test(){
    return (
        <div className="bg-[#F0F0F0] flex justify-center py-[5%]">
            <div className="bg-white w-[50%] px-[3%] py-[2%] flex flex-col gap-8">
                <div className="flex justify-center">
                    <p className="font-pop font-semibold text-[26px] text-[#1DBF73]">Please Fill Your Form</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[48%] border border-[#1DBF73] rounded-lg px-4 py-2 flex">
                        <div className="w-[95%] flex flex-col justify-between">
                            <img className="w-20" src="../img/Testimg.png" alt="" />
                            <p className="font-nu font-bold text-[18px]">Take Your Test</p>
                        </div>
                        <div>
                            <input className="w-6 h-6 accent-[#1DBF73]" type="radio" name="test" id="" />
                        </div>
                    </div>
                    <div className="w-[48%] border border-[#1DBF73] rounded-lg px-4 py-2 flex">
                        <div className="w-[95%] flex flex-col justify-between">
                            <input className="w-max" type="date" name="" id="" />
                            <p className="font-nu font-bold text-[18px]">Schedule Your Test</p>
                        </div>
                        <div>
                            <input className="w-6 h-6 accent-[#1DBF73]" type="radio" name="test" id="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="font-pop font-semibold text-white text-[20px] px-4 py-1 rounded-lg bg-[#1DBF73]" type="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}