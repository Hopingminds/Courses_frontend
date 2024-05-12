import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const FilterSubAdmin = () => {
    const [selectedDegrees, setSelectedDegrees] = useState([]);

    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      if (selectedDegrees.includes(value)) {
        setSelectedDegrees(selectedDegrees.filter((degree) => degree !== value));
      } else {
        setSelectedDegrees([...selectedDegrees, value]);
      }
    };
    function ClickSection(id) {
      let inner = document.getElementById(id);
      let arrow = document.getElementById(`arrow${id}`);
      if (inner.style.display=="flex") {
        arrow.style.transform = "rotate(0deg)";
        inner.style.display = "none";
      } else {
        arrow.style.transform = "rotate(180deg)";
        inner.style.display = "flex";
      }
    }

  return (
    <div className="bg-white flex flex-col gap-8 w-[20%] ml-5 h-auto py-3">
          <div className="">
             <div className="font-semibold text-xl flex justify-between items-center"  onClick={()=>ClickSection(1)}>
              <p>Degree</p>
              <MdOutlineKeyboardArrowDown id="arrow1" className="h-8 w-8"/>
             </div>
             <div className="flex flex-col pl-5 gap-2 mt-2" id={1}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="engineering" className="h-8 w-8 text-xl"/>
                  <p>Engineering</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="bca" className="h-8 w-8 text-xl"/>
                  <p>BCA</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="mca" className="h-8 w-8 text-xl"/>
                  <p>MCA</p>
                </div>
             </div>
          </div>
          <div className="" >
             <div className="font-semibold text-xl flex justify-between items-center"  onClick={()=>ClickSection(2)}>
              <p>Batch</p>
              <MdOutlineKeyboardArrowDown id="arrow2" className="h-8 w-8"/>
             </div>
             <div className="flex flex-col pl-5 gap-2 mt-2" id={2}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="engineering" className="h-8 w-8 text-xl"/>
                  <p>Engineering</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="bca" className="h-8 w-8 text-xl"/>
                  <p>BCA</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="mca" className="h-8 w-8 text-xl"/>
                  <p>MCA</p>
                </div>
             </div>
          </div>
          <div className="">
             <div className="font-semibold text-xl flex justify-between items-center" onClick={()=>ClickSection(3)}>
              <p>Branch</p>
              <MdOutlineKeyboardArrowDown id="arrow3" className="h-8 w-8"/>
             </div>
             <div className="flex flex-col pl-5 gap-2 mt-2"  id={3}>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="engineering" className="h-8 w-8 text-xl"/>
                  <p>Engineering</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="bca" className="h-8 w-8 text-xl"/>
                  <p>BCA</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="mca" className="h-8 w-8 text-xl"/>
                  <p>MCA</p>
                </div>
             </div>
          </div>
    </div>
  );
};

export default FilterSubAdmin;
