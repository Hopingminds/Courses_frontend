import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import "./CourseMedia.css";
import Loader from "../Loader/Loader";
import { IoSearchOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../../Api/api";

const Media = ({ onImageSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("images");
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("teachertoken");
    if (storedToken) {
      fetchData(storedToken);
    } else {
      toast.error("No authentication token found. Please login again.");
    }
  }, []);

  const fetchData = async (token) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/getinsmedia`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
        
      });
      console.log(response);

      setIsLoading(false);
      if (response.data.success) {
        const mediaData = response.data.mediaFiles;
        setMediaData(mediaData);
        const imageFiles = mediaData.filter(
          (media) =>
            media.url.endsWith(".jpg") ||
            media.url.endsWith(".jpeg") ||
            media.url.endsWith(".png")
        );
        const videoFiles = mediaData.filter((media) =>
          media.url.endsWith(".mp4")
        );
        const pdfFiles = mediaData.filter((media) =>
          media.url.endsWith(".pdf")
        );
        setImages(imageFiles);
        setVideos(videoFiles);
        setPdfs(pdfFiles);
      } else {
        toast.error("Error fetching media.");
        console.error("Error fetching media:", response.data);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Error fetching data.");
      console.error("Error fetching data:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const uploadFiles = async () => {
    if (!selectedFiles || selectedFiles.length === 0) {
      toast.error("No files selected for upload.");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('file', selectedFiles[i]);
      await funcToUploadFile(formData);
    }
  };

  const funcToUploadFile = async (fileData) => {
    try {
      setIsLoading(true);
      const storedToken = localStorage.getItem("teachertoken");
      const response = await axios.post(`${BASE_URL}/uploadinsmediatoaws`, fileData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${storedToken}`
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        }
      });
      console.log(response);

      setIsLoading(false);
      if (response.data.success) {
        fetchData(storedToken); // Refresh data after upload
        closeModal();
        toast.success("File Uploaded Successfully");
      } else {
        toast.error("Error uploading media.");
        closeModal();
        console.error("Error uploading media:", response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to Upload file. Try again");
      closeModal();
      console.error("Error uploading media:", error.message);
    }
  };

  const deleteMedia = (mediaUrl) => {
    setDeleteConfirmation(mediaUrl);
  };

  const confirmDelete = async () => {
    try {
      setIsLoading(true);
      const storedToken = localStorage.getItem("teachertoken");
      const response = await axios.delete(`${BASE_URL}/deletefilefromaws`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        },
        data: { filename: deleteConfirmation }
      });
      setIsLoading(false);
      if (response.data.success) {
        setDeleteConfirmation(null);
        fetchData(storedToken); // Refresh data after delete
        toast.success("Media deleted successfully.");
      } else {
        toast.error("Error deleting media.");
        console.error("Error deleting media:", response.data);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Error deleting media.");
      console.error("Error deleting media:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tabsData = [
    {
      id: "images",
      title: "Image",
      content: (
        <div style={{ flex: 1 }}>
          <div className="grid grid-cols-4 gap-3 justify-center overflow-x-auto mx-3 ">
            {images.map((media, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 media-item-container w-[300px] h-[300px] shadow-lg rounded-md"
              >
                <img
                  src={media.url}
                  alt={`Uploaded ${index}`}
                  className="w-[350px] h-[200px] object-contain rounded-md"
                  onClick={() => {
                    if (typeof onImageSelect === "function") {
                      onImageSelect(media.url);
                    }
                  }}
                />
                <span>{media.title}</span>
                {/* Delete Icon */}
                <button
                  className="delete-icon "
                  onClick={() => deleteMedia(media.key)}
                >
                  <MdDelete className="h-5 w-5" style={{ color: "red" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "video",
      title: "Videos",
      content: (
        <div style={{ flex: 1 }} className="pl-3">
          <div className="grid grid-cols-3 gap-3 mx-3 overflow-scroll">
            {videos
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((media, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 media-item-container shadow-md p-3"
                >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoO_pzRocf2o-U4hA2BD_-uP5-t9e-DUo3fg&s" alt=""
                    className="w-[50px] h-[50px]"
                  />
                  {/* <FaVideo className="text-6xl text-blue-600" /> */}
                  <span>{media.title}</span>
                  {/* Delete Icon */}
                  <button
                    className="delete-icon"
                    onClick={() => deleteMedia(media.key)}
                  >
                    <MdDelete className="h-5 w-5" style={{ color: "red" }} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )
    },
    {
      id: "pdf",
      title: "PDF",
      content: (
        <div style={{ flex: 1 }} className="pl-3">
          <div className="grid grid-cols-3 gap-3 mx-3 overflow-scroll">
            {pdfs
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((media, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 media-item-container"
                >
                  <FaFilePdf className="text-6xl text-red-600" />
                  <span>{media.title}</span>
                  {/* Delete Icon */}
                  <button
                    className="delete-icon"
                    onClick={() => deleteMedia(media.key)}
                  >
                    <MdDelete className="h-5 w-5" style={{ color: "red" }} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )
    }
  ];

  const searchImages = async () => {
    try {
      const storedToken = localStorage.getItem("teachertoken");
      const response = await axios.post(`${BASE_URL}/searchimagesbykeywords`, {
        keywords: searchTerm
      }, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      setImages(response.data.imageData);
    } catch (error) {
      console.error("Error searching images:", error);
      toast.error("Failed to search images. Please try again.");
    }
  };

  return (
    <div style={{ flex: 1 }}>
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      <div className="flex justify-between items-center my-4 p-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={openModal}
        >
          Upload Media
        </button>
        <div className="flex items-center space-x-4">
          <div className="w-72 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full shadow focus:outline-none focus:shadow-outline text-gray-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute top-0 left-0 pl-4 pt-3">
              <IoSearchOutline className="text-gray-600" />
            </div>
          </div>
          <div className="flex space-x-4">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 rounded ${activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {tabsData.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>

      {/* Modal for File Upload */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={uploadFiles}
            >
              Upload
            </button>
            {isLoading && (
              <div className="mt-2">
                <Loader />
              </div>
            )}
            <button
              className="mt-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Delete */}
      {deleteConfirmation && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete?</h2>
            <p>Are you sure you want to delete this file?</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={confirmDelete}
              >
                Delete
              </button>
              <button
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={() => setDeleteConfirmation(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster toastOptions={{
         duration: 500,
      }} />
    </div>
  );
};

export default Media;
