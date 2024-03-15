import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cartbody = () => {
  //Navigate page
  const navigate = useNavigate();

  const handleContinueCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div
        className=" h-[25vh] w-[61vw] ml-[5%] rounded-lg shadow-md flex items-center mt-7"
        style={{ background: "#E2FFF1" }}
      >
        <img
          src="src/assets/images/Rectangle 32.png"
          alt="Your Image"
          className="w-[250px] h-[160px] ml-3 object-cover rounded-lg"
        />
        <div className="ml-[20px] mb-[20px]">
          <h2 className="text-[18px] mt-[15px]">
            AWS Certified Solutions Architect
          </h2>
          <p className="mt-2 text-[13px]" style={{ color: "#696984" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <p
            className="justify-end ml-[550px] mt-[-30px] text-[13px]"
            style={{ color: "#696984" }}
          >
            Remove
          </p>

          <div className="flex mt-8 ">
            <img
              src="src/assets/images/Group 260.png"
              className="w-[15px] h-[15px] "
            />
            <p
              className=" ml-2 mt-[-2px] text-[13px] "
              style={{ color: "#696984" }}
            >
              Design
            </p>
            <img
              src="src/assets/images/.png"
              className="w-[15px] h-[15px] ml-[130px]  "
            />
            <p
              className=" ml-2 mt-[-2px] text-[13px] "
              style={{ color: "#696984" }}
            >
              3 months
            </p>
          </div>
          <p
            className="justify-end ml-[520px] mt-[-25px] text-[13px]"
            style={{ color: "#696984" }}
          >
            Save for later
          </p>
          <p
            className="justify-end ml-[500px] mt-[25px] text-[13px]"
            style={{ color: "#696984" }}
          >
            Move to wishlist
          </p>
          <img
            src="src/assets/images/Rectangle 1608.png"
            className="w-[590px] h-[1px] mb-[10px] ml-[7px]"
          />
          <span className="flex">
            <img
              src="src/assets/images/Star 1.png"
              className="w-[10px] h-[10px] mb-[10px] ml-[7px]"
            />
            <img
              src="src/assets/images/Star 1.png"
              className="w-[10px] h-[10px] mb-[10px] ml-[7px]"
            />
            <img
              src="src/assets/images/Star 1.png"
              className="w-[10px] h-[10px] mb-[10px] ml-[7px]"
            />
            <img
              src="src/assets/images/Star 1.png"
              className="w-[10px] h-[10px] mb-[10px] ml-[7px]"
            />
            <img
              src="src/assets/images/Star 1.png"
              className="w-[10px] h-[10px] mb-[10px] ml-[7px]"
            />
          </span>

          <p className="justify-end ml-[540px] mt-[-25px] text-[20px]">₹2000</p>
        </div>
      </div>

      <div className="h-[230px] w-[890px] ml-[1050px] mt-[-200px]">
        {" "}
        <p>total:</p>
        <h2 className="text-[30px]">₹4999</h2>
        <p className="text-[14px] mt-4" style={{ color: "#1DBF73" }}>
          including all the taxes{" "}
        </p>
        <p
          className="text-[23px] mt-10 h-[50px] w-[280px] flex items-center justify-center"
          onClick={handleContinueCheckout}
          style={{
            backgroundColor: "#1DBF73",
            color: "white",
            padding: "5px",
            borderRadius: "25px",
          }}
        >
          Checkout
        </p>
      </div>
    </>
  );
};
export default Cartbody;
