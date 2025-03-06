import React from "react";

const SensitiveContent = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Example of blurring content */}
      <div className="relative p-8 border-2 border-gray-300">
        <p className="filter blur-sm">This is blurred sensitive content.</p>
      </div>

      {/* Example of overlaying with a privacy icon */}
      <div className="relative p-8 border-2 border-gray-300 bg-gray-100">
        <img
          src="/lock-icon.png"
          alt="Privacy Icon"
          className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        />
        <p>This is sensitive content with a privacy icon overlay.</p>
      </div>

      {/* Example of marking with a "Confidential" label */}
      <div className="p-8 border-2 border-red-500 bg-red-100 font-bold text-lg text-black">
        <p>Confidential</p>
        <p>Important private information is displayed here.</p>
      </div>
    </div>
  );
};

export default SensitiveContent;
