import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { BASE_URL } from "../../Api/api";
import { toast } from "react-toastify";

const AvtarModal = ({ onClose, updateProfilePicture }) => {
  const avatars = [
    { id: 1, name: "Avatar 1", image: "./Avtars/Avtar-1.png" },
    { id: 2, name: "Avatar 2", image: "./Avtars/Avtar-2.png" },
    { id: 3, name: "Avatar 3", image: "./Avtars/Avtar-3.png" },
    { id: 4, name: "Avatar 4", image: "./Avtars/Avtar-4.png" },
    { id: 5, name: "Avatar 5", image: "./Avtars/Avtar-5.png" },
    { id: 6, name: "Avatar 6", image: "./Avtars/Avtar-6.png" },
    { id: 7, name: "Avatar 7", image: "./Avtars/Avtar-7.png" },
    { id: 8, name: "Avatar 8", image: "./Avtars/Avtar-8.png" },
    { id: 9, name: "Avatar 9", image: "./Avtars/Avtar-9.png" },
    { id: 10, name: "Avatar 10", image: "./Avtars/Avtar-10.png" },
  ];

  const [btnLoader, setBtnLoader] = useState(false);
  const modalRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleEditClick = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleAvatarClick = async (avatar) => {
    setBtnLoader(true);
    try {
      await axios.put(
        `${BASE_URL}/updateuser`,
        { profile: avatar.image },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("COURSES_USER_TOKEN")}`,
          },
        }
      );

      toast.success("Profile picture updated successfully");
      updateProfilePicture(avatar.image);
      setBtnLoader(false);
      onClose();
    } catch (error) {
      toast.error("Failed to update profile picture");
      setBtnLoader(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-5xl" ref={modalRef}>
        <div className="flex justify-end">
          <RxCross1 className="w-4 h-4 cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-4">
          {/* <p>Avatar Modal Content</p> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                onClick={() => handleAvatarClick(avatar)}
                className="cursor-pointer"
              >
                <img
                  src={avatar.image}
                  alt={avatar.name}
                  className="xsm:w-[21rem] w-40 h-40 object-cover rounded-lg"
                />
                <p className="text-center">{avatar.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvtarModal;
