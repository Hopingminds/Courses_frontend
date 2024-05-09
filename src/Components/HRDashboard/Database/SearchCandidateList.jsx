import React, { useEffect, useState } from "react";
import ArrowLeft from '../../../Assets/Icons/hrlessthan.svg'
import ArrowRight from '../../../Assets/Icons/hrgreaterthan.svg'

const SearchCandidateList = () => {
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

  const [selectAllChecked, setSelectAllChecked] = useState(false);

  useEffect(() => {
    // Check if all checkboxes are checked across all pages
    const allChecked = checkedMarks.every((pageMarks) =>
      pageMarks.every((mark) => mark)
    );
    setSelectAllChecked(allChecked);
  }, [checkedMarks]);

  function checkHandler(event, pageIndex) {
    const targetIndex = Number(event.target.getAttribute("data-index"));
    const newCheckedMarks = [...checkedMarks];
    newCheckedMarks[pageIndex][targetIndex] = !newCheckedMarks[pageIndex][targetIndex];
    setCheckedMarks(newCheckedMarks);
  }

  function toggleSelectAll() {
    const newCheckedMarks = checkedMarks.map((pageMarks) =>
      pageMarks.map(() => !selectAllChecked)
    );
    setCheckedMarks(newCheckedMarks);
    setSelectAllChecked(!selectAllChecked);
  }


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
              className={`border border-[#808080] w-[25px] h-[25px] rounded-[10px] text-[12px] font-bold md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                currentPage === i + 1 ? "text-[#D9D9D9] bg-[#808080]" : "bg-[#D8D8D8] text-[#808080]"
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
              className={`border border-[#808080] w-[25px] h-[25px] rounded-[10px] text-[12px] font-bold md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px] ${
                currentPage === pageNumber ? "text-[#D9D9D9] bg-[#808080]" : "bg-[#D8D8D8] text-[#808080]"
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
        className={`bg-[#F4F4F4] w-full  ${
          showPopup ? "filter blur-sm" : ""
        }`}
      >
        <div className="bg-white  my-[3%] mx-auto py-[3%] rounded-3xl xsm:rounded-[20px]  border border-[#80808080]">
          {/* HEADING */}
          <div className="flex justify-between px-[3%] pb-[3%]">
            <p className="font-pop font-bold text-[24px] md:text-[20px] xsm:text-[14px] text-[#808080]">
              All student
            </p>
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
            {/* <div className="flex gap-4 xsm:justify-end xsm:gap-2">
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
            </div> */}
          </div>
          {/* Table */}
          {/* Table Heading */}
          <div className="grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.8fr] px-[3%] xsm:gap-1">
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Customer Name
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Field
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Phone Number
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Email
            </p>
            <p className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
              Country
            </p>
            <div className="font-pop font-bold text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px] flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="" id="selectall" checked={selectAllChecked} onChange={toggleSelectAll} />
              <label htmlFor="selectall" className="cursor-pointer">Select All</label>
            </div>
          </div>
          <hr className="mt-4 border- border-[#80808080]" />
          {/* Table Content */}
          <div>
            {currentItems.map((item, index) => (
              <div key={index} className="px-[3%] pt-[2%]">
                <div className="grid grid-cols-[1.2fr,0.9fr,1fr,1.5fr,1fr,0.8fr] place-content-center items-center xsm:gap-1 border-b border-[#80808080] pb-5">
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.name}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.role}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.phone}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.email}
                  </p>
                  <p className="font-pop font-medium text-[#808080] text-[14px] md:text-[13px] xsm:text-[8px]">
                    {item.country}
                  </p>
                  <label className="container items-center">
                    <input
                      type="checkbox"
                      checked={checkedMarks[currentPage - 1][index]}
                      onChange={(event) => checkHandler(event, currentPage - 1)}
                      data-index={index}
                    />
                    <div className="checkmark"></div>
                  </label>
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

            {/* <button
              className="font-pop font-medium text-white bg-[#292D32] px-4 py-1 rounded-full md:text-[14px] xsm:text-[8px] xsm:px-2"
              onClick={handleSendMailClick}
            >
              Send Mail
            </button> */}

            {/* <button className="button-mail" onClick={handleSendMailClick}>
              <span>Send Mail</span>
            </button> */}

            <div className="flex items-center gap-2 xsm:gap-1">
              <button
                className="border border-[#808080] w-[25px] h-[25px] bg-[#D8D8D8] rounded-[10px] flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
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

              <button
                className="border border-[#808080] w-[25px] h-[25px] bg-[#D8D8D8] rounded-[10px] flex justify-center items-center md:text-[14px] md:w-[29px] md:h-[29px] xsm:text-[8px] xsm:w-[20px] xsm:h-[20px]"
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

export default SearchCandidateList;