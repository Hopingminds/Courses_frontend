import React, { useState } from "react";
import "./hirefromus.css";

const HireTable = () => {
  const sampleData = [
    {
      name: "Jane Cooper",
      role: "Frontend",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
    },
    {
      name: "John Doe",
      role: "Backend",
      phone: "(225) 555-0123",
      email: "john@microsoft.com",
      country: "Canada",
    },
    {
      name: "Alice Smith",
      role: "Designer",
      phone: "(225) 555-0456",
      email: "alice@microsoft.com",
      country: "United Kingdom",
    },
    {
      name: "Cooper",
      role: "Frontend",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
    },
    {
      name: "Doe",
      role: "Backend",
      phone: "(225) 555-0123",
      email: "john@microsoft.com",
      country: "Canada",
    },
    {
      name: "Smith",
      role: "Designer",
      phone: "(225) 555-0456",
      email: "alice@microsoft.com",
      country: "United Kingdom",
    },
    {
      name: "Alice Smith",
      role: "Designer",
      phone: "(225) 555-0456",
      email: "alice@microsoft.com",
      country: "United Kingdom",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [showPopup, setShowPopup] = useState(false);
  const [checkedMarks, setCheckedMarks] = useState(
    Array(Math.ceil(sampleData.length / itemsPerPage))
      .fill()
      .map(() => Array(itemsPerPage).fill(false))
  );

  function checkHandler(event, pageIndex) {
    const targetIndex = Number(event.target.getAttribute("data-index"));
    const newCheckedMarks = [...checkedMarks];
    newCheckedMarks[pageIndex][targetIndex] =
      !newCheckedMarks[pageIndex][targetIndex];
    setCheckedMarks(newCheckedMarks);
    console.log(newCheckedMarks);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSendMailClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="relative">
      <div
        className={`bg-[#E2FFF1] py-[1%] w-full  ${
          showPopup ? "filter blur-sm" : ""
        }`}
      >
        <div className="bg-white w-[90%] my-[3%] mx-auto py-[3%] rounded-[30px] xsm:rounded-[20px]">
          {/* HEADING */}
          <div className="flex justify-between px-[3%] pb-[3%]">
            <p className="font-pop font-semibold text-[28px] md:text-[20px] xsm:text-[14px]">
              All student
            </p>
            <div className="flex gap-4 xsm:justify-end xsm:gap-2">
              <div className="flex bg-[#F9FBFF] px-4 py-2 rounded-xl gap-x-2 md:py-1 md:px-3 xsm:py-1 xsm:px-2 xsm:w-[50%] hover:drop-shadow-sm">
                <img
                  className="w-7 md:w-6 xsm:w-4"
                  src="../Icons/hiresearch.svg"
                  alt=""
                />
                <input
                  className=" bg-[#F9FBFF] outline-none md:text-[14px] xsm:text-[10px] xsm:w-[80%]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
              </div>
              <div className="bg-[#F9FBFF] text-[#7E7E7E] rounded-xl overflow-hidden px-4 xsm:px-2 hover:drop-shadow-sm">
                <select
                  name=""
                  id=""
                  className="flex bg-[#F9FBFF] font-pop font-medium text-[18px] outline-none py-2 md:text-[14px] xsm:text-[10px] xsm:py-1"
                >
                  <option value="">FILTER</option>
                  <option value="">Field/Skills</option>
                  <option value="">Experience</option>
                  <option value="">Location</option>
                </select>
              </div>
            </div>
          </div>
          {/* Table */}
          {/* Table Heading */}
          <div className="grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] px-[3%] xsm:gap-1">
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Customer Name
            </p>
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Field
            </p>
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Phone Number
            </p>
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Email
            </p>
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Location
            </p>
            <p className="font-pop font-medium text-[#B5B7C0] text-[17px] md:text-[13px] xsm:text-[8px]">
              Status
            </p>
          </div>
          <hr className="mt-4 border-[1.1px] border-[#EEEEEE]" />
          {/* Table Content */}
          <div>
            {currentItems.map((item, index) => (
              <div key={index} className="px-[3%] pt-[2%]">
                <div className="grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.5fr] place-content-center items-center xsm:gap-1">
                  <p className="font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]">
                    {item.name}
                  </p>
                  <p className="font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]">
                    {item.role}
                  </p>
                  <p className="font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]">
                    {item.phone}
                  </p>
                  <p className="font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]">
                    {item.email}
                  </p>
                  <p className="font-pop font-medium text-[#292D32] text-[17px] md:text-[13px] xsm:text-[8px]">
                    {item.country}
                  </p>
                  <label className="container">
                    <input
                      type="checkbox"
                      checked={checkedMarks[currentPage - 1][index]}
                      onChange={(event) => checkHandler(event, currentPage - 1)}
                      data-index={index}
                    />
                    <div className="checkmark"></div>
                  </label>
                </div>
                <hr className="mt-6 border-[1.1px] border-[#EEEEEE]" />
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="flex justify-between px-[3%] pt-[3%]">
            <p className="font-pop font-medium text-[#B5B7C0] text-[15px] md:text-[11px] xsm:text-[6px] xsm:w-[25%] text-wrap">
              Showing data {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfFirstItem + itemsPerPage, sampleData.length)} of{" "}
              {sampleData.length} entries
            </p>

            {/* <button
              className="font-pop font-medium text-white bg-[#292D32] px-4 py-1 rounded-full md:text-[14px] xsm:text-[8px] xsm:px-2"
              onClick={handleSendMailClick}
            >
              Send Mail
            </button> */}

            <button className="button-mail" onClick={handleSendMailClick}>
              <span>Send Mail</span>
            </button>

            <div className="flex gap-2 xsm:gap-1">
              <button
                className="border border-[#EEEEEE] w-[35px] h-[35px] bg-[#F5F5F5] rounded-md flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img
                  src="../Icons/hirelessthan.svg"
                  alt=""
                  className="xsm:w-2"
                />
              </button>

              {sampleData.length > itemsPerPage && (
                <div className="flex gap-2 xsm:gap-1">
                  {Array(Math.ceil(sampleData.length / itemsPerPage))
                    .fill()
                    .map((_, i) => (
                      <button
                        key={i}
                        className={`border border-[#EEEEEE] w-[35px] h-[35px] rounded-md md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                          currentPage === i + 1
                            ? "bg-[#DDD] !important"
                            : "bg-[#F5F5F5]"
                        }`}
                        onClick={() => {
                          console.log("currentPage:", currentPage);
                          console.log("i + 1:", i + 1);
                          paginate(i + 1);
                        }}
                      >
                        {i + 1}
                      </button>
                    ))}
                </div>
              )}

              <button
                className="border border-[#EEEEEE] w-[35px] h-[35px] bg-[#F5F5F5] rounded-md flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(sampleData.length / itemsPerPage)
                }
              >
                <img
                  src="../Icons/greaterthan.svg"
                  alt=""
                  className="xsm:w-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="w-[50%] h-[50%] bg-blue-50 fixed z-[99999] flex top-[50%] left-[50%] justify-center items-center transform -translate-x-1/2 -translate-y-1/2 rounded-lg drop-shadow-xl">
          <button className="" onClick={() => setShowPopup(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default HireTable;
