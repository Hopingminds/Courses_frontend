import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure to bind modal to your app element (for accessibility reasons)

const OTPVerificationModal = ({ isOpen, onRequestClose, onVerify, onResend,openModal }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let interval;
    if (isOpen) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setTimer(60);
      setIsResendDisabled(true);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp.join(''));
  };

  const handleResend = () => {
    setTimer(60);
    setIsResendDisabled(true);
    onResend();
  };
async function Resend(){

}

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="OTP Verification"
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2 justify-center">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:border-[#1DBF73] focus:ring focus:ring-blue-200 transition"
                required
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#1DBF73] text-white px-4 py-2 w-full rounded hover:bg-[#3aac77] transition"
            >
              Verify
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
            {timer > 0 ? <span className="text-gray-600">Resend OTP in {timer}s</span> : ''}
            <div
              onClick={openModal}
              disabled={isResendDisabled}
              className={`text-[#1DBF73] z-50 ${isResendDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              Resend OTP
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default OTPVerificationModal;
