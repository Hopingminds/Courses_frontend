import Coursecontents from "./Coursecontents";
import Assignment1 from "./Assignment1";

export default function AssignmentMeet(){
    return (
        <div className="my-10 mx-[5%] flex justify-between">
            <div className=" w-[65%]">
                <Assignment1/>
            </div>
            <div className="w-[33%]">
                <Coursecontents/>
            </div>
        </div>
    );
}