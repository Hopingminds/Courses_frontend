import React, { useState } from "react";
import ArrowLeft from '../../../../Assets/Icons/hrlessthan.svg'
import ArrowRight from '../../../../Assets/Icons/hrgreaterthan.svg'


const Results = ({onItemClick}) => {
  const sampleData = [
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Sunita",
      role: "Backend",
      phone: "+91-887674782",
      email: "sunita@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Sunita",
      role: "Backend",
      phone: "+91-887674782",
      email: "sunita@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Sunita",
      role: "Backend",
      phone: "+91-887674782",
      email: "sunita@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Sunita",
      role: "Backend",
      phone: "+91-887674782",
      email: "sunita@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Akash Gupta",
      role: "Frontend",
      phone: "+91-987654782",
      email: "akash123@gmail.com",
      country: "India",
    },
    {
      name: "Sunita",
      role: "Backend",
      phone: "+91-887674782",
      email: "sunita@gmail.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
    },
    {
      name: "Raman sharma",
      role: "Designer",
      phone: "+91-987654782",
      email: "raman@dev.com",
      country: "India",
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
    setShowPopup(!showPopup);
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(sampleData.length / itemsPerPage);
    const maxButtonsToShow = 3;

    if (totalPages <= maxButtonsToShow) {
      // Less than or equal to 4 pages, show all page numbers
      return (
        <div className="flex gap-2 xsm:gap-1">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`border border-[#808080] w-[25px] h-[25px] rounded-md text-[12px] font-bold md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                currentPage === i + 1 ? "text-white bg-[#1DBF73]" : "bg-[#FFFFFF] text-[#808080]"
              }`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      );
    } else {
      // More than 4 pages, show dynamic pagination
      const pageNumbers = [];
      const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
      const endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

      if (startPage > 1) {
        pageNumbers.push(1); // Always show first page
        if (startPage > 2) {
          pageNumbers.push("..."); // Show ellipsis if startPage is greater than 2
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push("..."); // Show ellipsis if endPage is less than totalPages - 1
        }
        pageNumbers.push(totalPages); // Always show last page
      }

      return (
        <div className="flex gap-2 xsm:gap-1">
          {pageNumbers.map((pageNumber, index) => (
            <button
              key={index}
              className={`border border-[#808080] w-[25px] h-[25px] rounded-md text-[12px] font-bold md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                currentPage === pageNumber ? "text-white bg-[#1DBF73]" : "bg-[#FFFFFF] text-[#808080]"
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      );
    }
  };


  return (
    <div className="relative ">
      <div
        className={`bg-[#F4F4F4] w-full px-[4%] my-[3%]  ${
          showPopup ? "filter blur-sm" : ""
        }`}
      >
        <div className="flex gap-3 font-pop font-semibold text-[#808080]">
          <button onClick={() => onItemClick('reports')}>Reports</button>
          <img className="w-2" src={ArrowRight} alt="" />
          <button className="text-[#1DBF73]">Results</button>
        </div>

        <div className="bg-white mt-[3%] mx-auto py-[3%] rounded-3xl xsm:rounded-[20px]  border border-[#80808080]">
          {/* HEADING */}
          <div className="flex justify-between px-[3%] pb-[5%]">
            <p className="font-pop font-bold text-[24px] md:text-[20px] xsm:text-[14px] text-[#808080]">
              All student
            </p>
            {/* <div className="flex gap-12">
              <div className="flex bg-white px-2 py-2 border border-[#808080] rounded-lg gap-x-2 md:py-1 md:px-3 xsm:py-1 xsm:px-2 xsm:w-[50%] hover:drop-shadow-sm">
                <img
                  className="w-5 md:w-6 xsm:w-4"
                  src="../Icons/hiresearch.svg"
                  alt=""
                />
                <input
                  className=" bg-white placeholder:font-bold placeholder:text-[#808080] text-[14px] outline-none md:text-[14px] xsm:text-[10px] xsm:w-[80%]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                />
              </div>
              <button onClick={handleSendMailClick} className="flex bg-white px-6 py-2 border border-[#808080] font-bold text-[#808080] text-[14px] outline-none rounded-lg gap-x-2 md:py-1 md:px-3 xsm:py-1 xsm:px-2 xsm:w-[50%] hover:drop-shadow-sm">
                Send email
              </button>
            </div> */}
          </div>
          {/* Table */}
          {/* Table Heading */}
          <div className="grid grid-cols-[0.6fr,0.6fr,1fr,0.5fr] place-content-center justify-items-center  px-[3%] xsm:gap-1">
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Customer Name
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Phone Number
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Email
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              View Result
            </p>
          </div>
          <hr className="mt-4 border- border-[#80808080]" />
          {/* Table Content */}
          <div>
            {currentItems.map((item, index) => (
              <div key={index} className="px-[3%] pt-[2%]">
                <div className="grid grid-cols-[0.6fr,0.6fr,1fr,0.5fr] place-content-center justify-items-center xsm:gap-1 border-b border-[#80808080] pb-5">
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.name}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.phone}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.email}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px] cursor-pointer" onClick={() => onItemClick('viewprofile')}>
                    View
                  </p>
                </div>
                {/* <hr className="mt-6 border-[0.5px] " /> */}
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="flex justify-between items-center px-[3%] pt-[3%]">
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[11px] xsm:text-[6px] xsm:w-[25%] text-wrap">
              Showing data {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfFirstItem + itemsPerPage, sampleData.length)} of{" "}
              {sampleData.length} entries
            </p>

            <div className="flex items-center gap-2 xsm:gap-1">
              <button
                className="border border-[#808080] w-[25px] h-[25px] bg-[#FFFFFF] rounded-md flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img
                  src={ArrowLeft}
                  alt=""
                  className="xsm:w-2"
                />
              </button>
              {renderPaginationButtons()}
              {/* {sampleData.length > itemsPerPage && (
                <div className="flex gap-2 xsm:gap-1">
                  {Array(Math.ceil(sampleData.length / itemsPerPage))
                    .fill()
                    .map((_, i) => (
                      <button
                        key={i}
                        className={`border border-[#808080] w-[25px] h-[25px] rounded-md text-[12px] font-bold md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                          currentPage === i + 1
                            ? "text-white bg-[#1DBF73]"
                            : "bg-[#FFFFFF] text-[#808080]"
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
              )} */}

              <button
                className="border border-[#808080] w-[25px] h-[25px] bg-[#FFFFFF] rounded-md flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(sampleData.length / itemsPerPage)
                }
              >
                <img
                  src={ArrowRight}
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
            Please Login first
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;