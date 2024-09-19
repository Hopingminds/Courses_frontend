import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../Api/api";

const QuestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/sendEnquiry`, {
        email: formData.email,
        name: formData.name,
        number: formData.number,
        message: formData.message,
      });

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        // Clear the form fields after successful submission
        setFormData({ name: "", number: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="xsm:pb-3">
      <h1 className="text-[40px] flex flex-row justify-center items-center font-pop font-semibold py-4 xsm:text-[30px] sm:text-[30px]  text-green-600">
        How can we assist you?
      </h1>
      <div className="min-h-[40vh] flex justify-center xsm:p-0 xsm:w-full py-9">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="max-w-[80vw] w-full flex flex-row lg:flex-row bg-[#E2FFF1] shadow-lg rounded-lg p-6 xsm:w-full xsm:p-0 xsm:max-h-screen">
          {/* Left side: Input Form */}
          <div className="lg:w-1/3 w-full flex flex-col justify-center p-4 bg-white rounded-xl xsm:w-full xsm:p-0">
            <form onSubmit={handleSubmit} className="space-y-4 p-4 xsm:p-0">
              <div>
                <label className="block text-lg mb-2">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Contact:</label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                {!loading ? "Enquiry" : "Enquiring..."}
              </button>
            </form>
          </div>

          {/* Right side: Some text */}
          <div className="lg:w-1/2 w-full flex flex-col justify-center p-4 xsm:hidden">
            <h2 className="text-2xl font-bold mb-6 text-center font-pop">
              Have A Question For Us?
            </h2>
            <p className="text-lg text-center font-pop">
              Teachers don’t get lost in the grid view and have a dedicated
              Podium space.
            </p>
            <div className="flex flex-row py-5 mt-4 gap-3 p-4 items-center">
              <FaPhoneAlt />
              <p className="text-lg">+91 9193100050</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
