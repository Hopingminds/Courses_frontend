import React, { useState } from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NotesModal = ({ isOpen, onClose, pdfUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-2 sm:px-4">
      <div
        className={`bg-white rounded-xl shadow-xl p-4 relative transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
          isFullScreen
            ? "w-[98%] h-[95vh] mt-[10vh] pt-10"
            : "w-full sm:w-[95%] md:max-w-[800px] h-[85vh] mt-10 sm:mt-10"
        }`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg sm:text-xl font-bold">Notes</h2>
          <div className="flex items-center gap-2">
            <button
              className="text-xl bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 p-2"
              onClick={() => setIsFullScreen(!isFullScreen)}
            >
              {isFullScreen ? <FiMinimize /> : <FiMaximize />}
            </button>
            <button
              className="hover:text-red-600 text-xl bg-green-600 rounded-full text-white p-2"
              onClick={onClose}
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex-grow overflow-auto rounded border">
          {pdfUrl ? (
            <iframe src={pdfUrl} title="PDF Notes" className="w-full h-full" />
          ) : (
            <p className="text-center text-gray-500 py-4">
              No notes available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesModal;
