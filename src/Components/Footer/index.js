import React from "react";
import { ReactComponent as Hm } from "../../Assets/Icons/hm.svg";
import { ReactComponent as Facebook } from "../../Assets/Icons/facebook.svg";
import { ReactComponent as Pintrest } from "../../Assets/Icons/pintrest.svg";
import { ReactComponent as Twitter } from "../../Assets/Icons/twitter.svg";
import { ReactComponent as Instagram } from "../../Assets/Icons/instagram.svg";
import { ReactComponent as Youtube } from "../../Assets/Icons/youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-row justify-between px-24 py-28">
      <div className="flex flex-col gap-2 w-[341px]">
        <Hm className="w-[154.88px] h-[59.86px]" />
        <p className="text-[#555555] text-[18px] font-Montserrat w-[341px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-col gap-5 w-[110px]">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">
          GET HELP
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Contact Us
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Latest Articles
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">FAQ</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[187px]">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">
          PROGRAMS
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Data Science
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Full Stack Development
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">AI/ML</p>
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Cyber Security
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Electric Vehicle Design
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[410px]">
        <p className="text-[#333333] text-[20px] font-Montserrat font-semibold">
          CONTACT US
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Address: E-2999 Industrial Area , Sector 75 Sahibzada Ajit Singh
            nagar , Punjab 160055
          </p>
          <p className="text-[#555555] text-[18px] font-Montserrat">
            Tel: + 9779886900 Mail: Support@Hopingminds.com
          </p>
          <div className="flex flex-row gap-1">
            <Facebook className="w-[34px] h-[34px]" />
            <Pintrest className="w-[34px] h-[34px]" />
            <Twitter className="w-[34px] h-[34px]" />
            <Instagram className="w-[34px] h-[34px]" />
            {/* <img className="w-[45px] h-[45px]" src="/youtube.png"/> */}
            <Youtube className="w-[34px] h-[34px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
