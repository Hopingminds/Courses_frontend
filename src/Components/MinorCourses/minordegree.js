import { Link } from "react-router-dom";

export default function MinorDegree(){
    return(<>
    <div className="grid grid-cols-4 gap-5 px-[5%]">
            <Link to='/minorCourse?category=Full Stack Development' className="border shadow-2xl">
                <img src="/fsd.jpg" className="h-[25vh] w-full"/>
                <div className="font-bold text-xl text-center my-10">Full Stack Development</div>
            </Link>
            <Link to='/minorCourse?category=Data Science' className="border shadow-2xl">
                <img src="/ds.jpg" className="h-[25vh] w-full"/>
                <div className="font-bold text-xl text-center my-10">Data Science</div>
            </Link>
            <Link to='/minorCourse?category=Management' className="border shadow-2xl">
                <img src="/management.jpg" className="h-[25vh] w-full"/>
                <div className="font-bold text-xl text-center my-10">Management</div>
            </Link>
            <Link to='/minorCourse?category=AI/ML' className="border shadow-2xl">
                <img src="/aiml.png" className="h-[25vh] w-full"/>
                <div className="font-bold text-xl text-center my-10">AI & ML</div>
            </Link>

    </div>
    </>)
}