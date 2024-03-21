import React, { useState } from "react";

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

  return (
    <div className="bg-white pl-[4%] pr-8 py-[2%] flex flex-col gap-8 w-[37%]">
      <select
        id="degree"
        name="degree"
        placeholder="Degree"
        className="w-full outline-none font-medium text-[18px]"
      > 
        <option value="degree" hidden >Degree</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        id="degree"
        name="degree"
        className="w-full outline-none font-medium text-[18px]"
        style={{ paddingRight: "7rem" }}
      >
        <option value="Batch" hidden>Batch</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        id="degree"
        name="degree"
        className="w-full outline-none font-medium text-[18px]"
      >
        <option value="Branch" hidden>Branch</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        id="degree"
        name="degree"
        className="w-full outline-none font-medium text-[18px]"
      >
        <option value="Semester" hidden>Semester</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        id="degree"
        name="degree"
        className="w-full outline-none font-medium text-[18px]"
      >
        <option value="Field of Study" hidden>Field of Study</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>

      <select
        id="degree"
        name="degree"
        className="w-full outline-none font-medium text-[18px]"
      >
        <option value="Status" hidden>Status</option>
        <option value="Engineering">Engineering</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
      </select>
    </div>
  );
};

export default FilterSubAdmin;
