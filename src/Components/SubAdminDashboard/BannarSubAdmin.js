import React from "react";
import Img1 from "../../Assests/Images/banner-subadmin.png";

const BannarSubAdmin = () => {
  return (
    <div
      className="bg-cover bg-no-repeat w-full h-[30vh] px-[5%] pt-[5%]"
      style={{ backgroundImage: `url(${Img1})` }}
    >
      <p className="text-white text-[60px]">College Dashboard</p>
    </div>
  );
};

export default BannarSubAdmin;
