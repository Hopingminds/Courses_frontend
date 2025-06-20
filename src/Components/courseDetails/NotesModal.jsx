import React, { useState } from "react";

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
              className="text-gray-600 hover:text-blue-600 text-sm border px-2 py-1 rounded"
              onClick={() => setIsFullScreen(!isFullScreen)}
            >
              {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
            <button
              className="text-gray-500 hover:text-red-600 text-xl"
              onClick={onClose}
            >
              ×
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
