import ProgressBar from "@ramonak/react-progress-bar";
import './wishlistContent.css'

export default function Mycourses(){
    return(<>
    <div className="px-16 mt-10">
        <div className="flex space-x-7 ">
            <select className="w-[140px] h-10 px-2 font-mons border rounded">
                <option>Categories</option>
            </select>
            <select className="w-[140px] h-10 px-2 font-mons border rounded">
                <option>Progress</option>
            </select>
            <select className="w-[140px] h-10 px-2 font-mons border rounded">
                <option>Instructor</option>
            </select>
        </div>
        <div className="flex  mt-16 font-mons flex-wrap justify-between ">
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
            <div className="h-[350px] w-[370px] border rounded-xl mb-16">
                <img src="/fsdcard.png" className="h-[230px] w-full"/>
                <div className="text-sm px-2 mt-2">by Determined-Instructors</div>
                <div className="text-[15px] font-semibold px-2 mt-2">Beginner Guide For full Stack Development</div>
                <ProgressBar completed={60} maxCompleted={100} height={4} bgColor='#1DBF73' isLabelVisible={false} className="mt-2"/>
                <div className="text-center font-semibold mt-2">25% Complete</div>
            </div>
        </div>
    </div>
    <div className='wishlist-pages'>
                <button type='submit' >
                    <img src="../Icons/leftarrow.svg" alt="left-arrow"></img>
                </button>
                <button type='submit' >
                    1
                </button>
                <button type='submit' >
                    2
                </button>
                <button type='submit' >
                    3
                </button>
                <button type='submit' >
                    <img src="../Icons/rightarrow.svg" alt="right-arrow"></img>
                </button>
            </div>
    </>)
}