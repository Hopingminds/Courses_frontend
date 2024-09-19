import React from 'react';
import { FaTimes } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 

const Modal = ({ isOpen, onClose, slug }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleBuy = () => {
    navigate(`/detailcourse/${slug}`);
    onClose(); 
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick} 
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} /> 
        </button>

        <h2 className="text-xl font-semibold mb-4">Buy This Course</h2>
        <p className="mb-6">
          Don't miss out on this amazing opportunity to learn and grow. Purchase
          this course now to get started!
        </p>

        <button
          onClick={handleBuy} 
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Modal;
