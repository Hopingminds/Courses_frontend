import React, { useContext, useRef, useState } from "react";
import Banner from "../../Assests/Images/profileedit-banner.png";
import User from "../../Assests/Images/profile-user.png";
import Edit from "../../Assests/Icons/edit.svg";
import { Globalinfo } from "../../App";
import { useNavigate } from "react-router-dom";

const ProfilEdit = () => {
  const navigate = useNavigate();

  const { cartData, GetCart, wishListData, GetWishList, userDetail, getUserDetails, clearCart, clearWishList } = useContext(Globalinfo)

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSaveClick = () => {
    console.log("Selected Image:", selectedImage);
  };
  const handleLogOut = () => {
    localStorage.removeItem('COURSES_USER_TOKEN')
    navigate('/')

    getUserDetails();
    clearCart();
    clearWishList();
  };

  return (
    <>
      <div className="flex flex-col gap-14 pb-60">

        <div className="relative flex justify-center h-[36vh]">
          <img src={Banner} className="w-full h-[200px] object-fit" />

          <div className="absolute top-4 right-16 flex justify-center pt-6">
            <button className="text-[#FFFFFF] text-[18px] font-Nunito Sans bg-[#1DBF73] rounded-full px-10 py-1"
              onClick={handleLogOut}>
              Log Out {" "}
            </button>
          </div>
          <div className="absolute w-[244px] h-[244px] rounded-full top-20">
            <img
              src={selectedImage ? URL.createObjectURL(selectedImage) : User}
              className="w-[244px] h-[244px] rounded-full object-fit "
            />
            <div className="absolute w-[70px] h-[70px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-[65%] right-[0%] flex justify-center items-center cursor-pointer">
              <img
                src={Edit}
                className="w-[35px] h-[35px]"
                onClick={handleEditClick}
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 ">
          <div className="grid grid-cols-2 justify-between gap-x-40 gap-y-8  w-[80%]">
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="email"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <select className="outline-none w-full bg-transparent placeholder-[#000000]">
                <option value="" disabled selected hidden>
                  State
                </option>
                <option value="PB">Punjab</option>
                <option value="HR">Haryana</option>
                <option value="CHD">Chandigarh(U.T)</option>
              </select>
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <select className="outline-none w-full bg-transparent placeholder-[#000000]">
                <option value="" disabled selected hidden>
                  Country
                </option>
                <option value="IND">India</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Position"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="University/College Name"
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <select className="outline-none w-full bg-transparent placeholder-[#000000]">
                <option value="" disabled selected hidden>
                  Language
                </option>
                <option value="">Hindi</option>
                <option value="">English</option>
                <option value="">Punjabi</option>
              </select>
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] px-6 h-[50px]">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Biography"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6">
          <button className="text-[#FFFFFF] text-[22px] font-Nunito Sans bg-[#1DBF73] rounded-full px-12 py-1"
            onClick={handleSaveClick}>
            Save{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilEdit;
