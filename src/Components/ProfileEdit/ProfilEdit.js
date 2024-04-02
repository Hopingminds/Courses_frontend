import React, { useContext, useEffect, useRef, useState } from "react";
import Banner from "../../Assests/Images/profileedit-banner.png";
import User from "../../Assests/Images/profile-user.png";
import Edit from "../../Assests/Icons/edit.svg";
import { Globalinfo } from "../../App";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";

const ProfilEdit = () => {
  const navigate = useNavigate();
  const [btnLoader, setbtnLoader] = useState(false);
  const [show, setshow] = useState(false)
  const [data, setData] = useState([])
  const [uploadLoader, setUploadLoader] = useState(false);


  const [user, setUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    profile: "",
    college: "",
    stream: "",
    yearofpass: "",
    bio: "",
  })

  console.log(user)
  const { userDetail, getUserDetails, clearCart, clearWishList } = useContext(Globalinfo)

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);


  let token = jwtDecode(localStorage.getItem('COURSES_USER_TOKEN'))

  useEffect(() => {
    async function Fetchdata() {
      try {
        setshow(true)
        let url = BASE_URL + '/user/' + token.email;
        const data = await fetch(url)
        const response = await data.json()
        // console.log(response.userDetails);
        setData(response?.userDetails)
        setUser({
          username: response?.userDetails?.username,
          email: response?.userDetails.email,
          firstName: response?.userDetails?.firstName,
          lastName: response?.userDetails?.lastName,
          profile: response?.userDetails?.profile,
          college: response?.userDetails?.college,
          stream: response?.userDetails?.stream,
          yearofpass: response?.userDetails?.yearofpass,
          bio: response?.userDetails?.bio,
          phone: response?.userDetails?.phone
        })
        setshow(false)
      } catch (error) {
        console.log(error)
      }

    }
    Fetchdata()

  }, [])

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    setUploadLoader(true);
    // console.log(e.target.files[0])
    const file = e.target.files[0];
    console.log(file)
    setSelectedImage(file);
    // console.log(file)
    if (file) {
      console.log(file)
      try {
        const res = await axios.post(`${BASE_URL}/uploaduserprofiletoaws`, { file }, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('COURSES_USER_TOKEN')}`,
          }
        })
        console.log(res);
        if (res.data.success) {
          setUploadLoader(false);
          toast.success("Profile Picture Updated");
          setUser({ ...user, profile: res.data.url });
        }
      } catch (error) {
        console.log(error)
        setUploadLoader(false);
      }
    }

    // setUser({ ...user, profile: URL.createObjectURL(file) })
  };

  const handleSaveClick = async () => {
    setbtnLoader(true)
    if (!user.email || !user?.username) {
      toast.error("Enter valid Credentials")

    }
    else {
      try {
        const res = await axios.put(
          `${BASE_URL}/updateuser`,
          user,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('COURSES_USER_TOKEN')}`,
            }
          }
        );
        toast.success("Saved Successfully")
        setbtnLoader(false);
      } catch (error) {
        // console.log(error);
        setbtnLoader(false);
      }
    }



  };
  const handleLogOut = () => {
    localStorage.removeItem('COURSES_USER_TOKEN')
    navigate('/')

    getUserDetails();
    clearCart();
    clearWishList();
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value })

  }

  return (
    <>
      <div className="flex flex-col gap-14 pb-60 xsm:gap-6 xsm:pb-20">

        <div className="relative flex justify-center h-[36vh] xsm:h-[20vh]">
          <img src={Banner} className="w-full h-[200px] object-fit xsm:h-[80px] " />

          <div className="absolute top-4 right-16 flex justify-center pt-6 xsm:pt-0 xsm:right-4">
            <button className="text-[#FFFFFF] text-[18px] font-nu bg-[#1DBF73] rounded-full px-10 py-1 xsm:text-[8px] xsm:px-4"
              onClick={handleLogOut}>
              Log Out {" "}
            </button>
          </div>
          <div className="absolute w-[160px] h-[160px] rounded-full top-28 xsm:h-[80px] xsm:w-[80px] xsm:top-10 bg-[#FFFFFF]">
            {uploadLoader ? <div className="grid items-center justify-center h-[100%] w-[100%]"><p>uploading... </p> </div> : <img
              src={user.profile ? user.profile : 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}
              className="w-full h-full rounded-full object-fit xsm:h-[80px] xsm:w-[80px] object-contain"
            />}
            <div className="absolute w-[40px] h-[40px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-[65%] right-[0%] flex justify-center items-center cursor-pointer
            xsm:w-[20px] xsm:h-[20px]">
              <img
                src={Edit}
                className="w-[20px] h-[20px] xsm:w-[10px] xsm:h-[10px]"
                onClick={handleEditClick}
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 xsm:mt-0">
          <div className="grid grid-cols-2 justify-between gap-x-40 gap-y-8 w-[80%] xsm:gap-x-8 xsm:gap-y-3">
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                name="firstName"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="email"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Phone Number"
                name="phone"
                value={user.phone}
              />
            </div>

            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Stream"
                value={user.stream}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="University/College Name"
                value={user.college}
                name="college"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Year Of Passing"
                value={user?.yearofpass}
                name="yearofpass"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2">
              <input
                type="text"
                className="outline-none w-full bg-transparent placeholder-[#000000]"
                placeholder="Biography"
                value={user?.bio}
                name="bio"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6 xsm:pt-0">
          <button className="text-[#FFFFFF] text-[22px] font-nu bg-[#1DBF73] rounded-full px-12 py-1 xsm:text-[10px] xsm:px-8"
            onClick={handleSaveClick}>
            {btnLoader ? "Saving..." : "Save"}
          </button>
        </div>
        {show ? <div className='w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80'>
                <Spinner className='' />

            </div> : ''}
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default ProfilEdit;