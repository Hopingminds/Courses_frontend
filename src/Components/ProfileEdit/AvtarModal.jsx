import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const AvtarModal = ({ onClose }) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    // Example: Fetch avatars from an API endpoint
    const fetchAvatars = async () => {
      try {
        const response = await fetch("https://api.example.com/avatars");
        if (!response.ok) {
          throw new Error("Failed to fetch avatars");
        }
        const data = await response.json();
        setAvatars(data.avatars); // Assuming the API response contains an array of avatars
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };

    fetchAvatars();
  }, []); 

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex justify-end">
          <RxCross1
            className="w-4 h-4 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="p-4">
          <p>Avtar Modal Content</p>
          <ul>
            {avatars.map((avatar, index) => (
              <li key={index}>{avatar.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvtarModal;
