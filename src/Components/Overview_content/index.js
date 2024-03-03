import Comment from "../Comment/Comment";
import Curriculum from "../Curriculum/Curriculum";
import Faqs from "../Faqs/Faqs";
import Instructor from "../Instructor/Instructor";
import Overview from "../Overview/Overview";
import Reviews from "../Reviews/Reviews";
import { HashLink as Link } from "react-router-hash-link";

export default function Overview_content(){
    
   return(<>
    <div className="w-full flex justify-center  mt-28 h-auto">
        <div className="w-[80%] flex justify-around ">
                <div className="flex flex-col space-y-3 bg-[#FAFAFA] h-fit w-40 px-6 py-6 mt-20 ">
                    <Link smooth  to="#overview" className="w-28 h-10 bg-white  flex items-center justify-center font-semibold">Overview</Link>
                    <Link smooth  to="#curriculum" className="w-28 h-10 bg-white flex items-center justify-center font-semibold">Curriculum</Link>
                    <Link smooth  to="#Instructor" className="w-28 h-10 bg-white flex items-center justify-center font-semibold">Instructor</Link>
                    <Link smooth  to="#Reviews" className="w-28 h-10 bg-white flex items-center justify-center font-semibold">Reviews</Link>
                    <Link smooth  to="#FAQ's" className="w-28 h-10 bg-white flex items-center justify-center font-semibold">FAQ's</Link>
                </div>
                <div className="flex flex-col w-[700px] overflow-y-scroll overflow-x-hidden scroll-smooth">
                    <Overview />
                    <Curriculum/>
                    <Instructor/>

                    <Reviews/>
                    <Faqs/>
                    <Comment />
                </div>
        </div>
    </div>
   </>)
}