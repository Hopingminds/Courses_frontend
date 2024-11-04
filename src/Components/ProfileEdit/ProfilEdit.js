import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Banner from "../../Assests/Images/profileedit-banner.png";
import Cookies from "js-cookie";
import ProfileIcon from "../../Assets/Images/ProfileIcon.png";
import Avtar from "../../Assests/Icons/Avtar.jpg";
import Edit from "../../Assests/Icons/edit.svg";
import { Globalinfo } from "../../App";
import { useNavigate } from "react-router-dom";
import { AUTH_BASE_URL, BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../Spinner";
import { authenticateUser } from "../../helpers/helperapi";
import CYPMain from "../completeyourprofile/CYPMain";
import AvtarModal from "./AvtarModal";
import { IoMdArrowRoundBack } from "react-icons/io";

const ProfilEdit = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showallcolleges, setshowallcolleges] = useState([]);
  const [initialUserData, setinitialUserData] = useState(null);
  const [isProfilePage, setIsProfilePage] = useState(true);
  


  const [btnLoader, setbtnLoader] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setData] = useState([]);
  const [uploadLoader, setUploadLoader] = useState(false);
  const [completeProfile, setCompleteProfile] = useState("Profile");
  const checkUserValidation = async () => {
    const isValidUser = await authenticateUser();
    console.log(isValidUser);
    if (isValidUser !== 200) {
      localStorage.removeItem("COURSES_USER_TOKEN");
      toast.error("You have been Logged Out");
      window.open(`${AUTH_BASE_URL}/logout`, "_self");
    }
  };

  useLayoutEffect(() => {
    checkUserValidation();
  }, []);

  const [user, setUser] = useState({
    email: "",
    name: "",
    phone: "",
    profile: "",
    college: "",
    degree: "",
    stream: "",
    yearofpass: "",
    bio: "",
    address: "",
    city: "",
    state: "",
    degree: "",
    college: "",
    yearofpass: "",
    percentage: "",
    trainingInternships: [
      {
        companyName: "",
        postName: "",
        location: "",
        duration: {
          from: "",
          to: "",
        },
      },
    ],
    projects: [
      {
        projectName: "",
        projectRole: "",
        projectDescription: "",
      },
    ],
    certifications: [
      {
        certificateName: "",
        certifiedBy: "",
      },
    ],
    skills: [
      {
        skill: "",
        skill_lever: "",
      },
    ],
    profileLinks: {
      hackerRank: "",
      github: "",
      linkedIn: "",
      codeChef: "",
      leetCode: "",
      geekForGeeks: "",
    },
    isProfileComplete: false,
  });

  console.log(user);
  const { userDetail, getUserDetails, clearCart, clearWishList } =
    useContext(Globalinfo);

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const message =
        "Are you sure you want to leave? Changes you made may not be saved.";
      e.preventDefault();
      e.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  let token = jwtDecode(localStorage.getItem("COURSES_USER_TOKEN"));

  useEffect(() => {
    async function Fetchdata() {
      try {
        setshow(true);
        let url = BASE_URL + "/user/" + token.email;
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response.userDetails);
        setData(response?.userDetails);
        setUser({
          email: response?.userDetails.email,
          name: response?.userDetails.name,
          profile: response?.userDetails?.profile,
          college: response?.userDetails?.college,
          degree: response?.userDetails?.degree,
          stream: response?.userDetails?.stream,
          yearofpass: response?.userDetails?.yearofpass,
          bio: response?.userDetails?.bio,
          phone: response?.userDetails?.phone,
        });
        setinitialUserData({
          email: response?.userDetails?.email,
          name: response?.userDetails?.name,
          profile: response?.userDetails?.profile,
          college: response?.userDetails?.college,
          degree: response?.userDetails?.degree,
          stream: response?.userDetails?.stream,
          yearofpass: response?.userDetails?.yearofpass,
          bio: response?.userDetails?.bio,
          phone: response?.userDetails?.phone,
        });
        setshow(false);
      } catch (error) {
        console.log(error);
      }
    }
    Fetchdata();
  }, []);

  const handleEditClick = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    // console.log(e.target.files[0])
    const file = e.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setUploadLoader(true);
      // console.log(file);
      setSelectedImage(file);
      // console.log(file)
      // console.log(file);
      try {
        const res = await axios.post(
          `${BASE_URL}/uploaduserprofiletoaws`,
          { file },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem(
                "COURSES_USER_TOKEN"
              )}`,
            },
          }
        );
        // console.log(res);
        if (res.data.success) {
          setUploadLoader(false);
          toast.success("Profile Picture Updated");
          setUser({ ...user, profile: res.data.url });
          getUserDetails();
        }
      } catch (error) {
        console.log(error);
        setUploadLoader(false);
      }
    } else {
      toast.error(
        "Invaild format of profile picture (only jpeg,png format allowed)"
      );
    }
    // setUser({ ...user, profile: URL.createObjectURL(file) })
  };

  const handleSaveClick = async () => {
    setbtnLoader(true);
    // console.log("intial",JSON.stringify(initialUserData));
    // console.log("after",JSON.stringify(user));

    if (!user.email) {
      toast.error("Enter valid Credentials");
    }
    if (JSON.stringify(initialUserData) == JSON.stringify(user)) {
      toast.error("No changes detected");
      setbtnLoader(false);
      return;
    } else {
      try {
        const res = await axios.put(`${BASE_URL}/updateuser`, user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "COURSES_USER_TOKEN"
            )}`,
          },
        });
        toast.success("Saved Successfully");
        setinitialUserData(user);
        setbtnLoader(false);
      } catch (error) {
        // console.log(error);
        setbtnLoader(false);
      }
    }
  };
  const handleLogOut = async () => {
    localStorage.removeItem("COURSES_USER_TOKEN");
    const allCookies = Cookies.get();
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    window.open(`${AUTH_BASE_URL}/logout`, "_self");
    // navigate('/login-2')
    // getUserDetails();
    // clearCart();
    // clearWishList();
    // window.open(
    // 	`${AUTH_BASE_URL}/logout`,
    // 	"_self"
    // );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSelectedcollege = (college) => {
    setUser({ ...user, "college": college });
    setshowallcolleges([]);
  };
  const handleCollege = async (e) => {
    handleChange(e);
    let query = e.target.value;
    if (query == "") {
      setshowallcolleges([]);
    } else {
      try {
        let url1 = BASE_URL + "/getcolleges?search=" + query;
        const data = await fetch(url1);
        const response = await data.json();
        // console.log(response);
        setshowallcolleges(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditProfileClick = () => {
    setIsProfilePage(false);
    setCompleteProfile("completeprofile");
  };
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };
  const goBack = () => {
    setCompleteProfile("Profile");
    setIsProfilePage(true);
  };
  
  

  const handleShowModal = (e) => {
    const targetTagName = e.target.tagName.toLowerCase();
    if (targetTagName === "img") {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={`flex flex-col gap-0 pb-60 xsm:gap-6 xsm:pb-20 ${
          completeProfile === "completeprofile" ? "justify-between" : ""
        }`}
      >
        <div className="relative flex justify-center h-[280px] xsm:h-[100px] md:h-[220px]">
          <img
            src={Banner}
            className="w-full h-[200px] object-fit xsm:h-[80px] md:h-[150px]"
          />
          { completeProfile === "completeprofile" && (
            <div className="absolute top-4 left-4 flex items-center">
              <IoMdArrowRoundBack
                className="text-white text-lg xsm:text-sm md:text-base cursor-pointer z-10"
                onClick={goBack}
              />
            </div>
          )}
          <div className="absolute top-4 right-16 flex justify-center pt-6 xsm:pt-0 xsm:right-4 md:right-8 md:top-2">
            <button
              className="text-[#FFFFFF] text-[18px] font-nu bg-[#1DBF73] rounded-full px-10 py-1 xsm:text-[8px] xsm:px-4 md:text-[16px] md:px-6"
              onClick={handleLogOut}
            >
              Log Out{" "}
            </button>
          </div>

          <div className="absolute w-[160px] h-[160px] rounded-full top-28 xsm:h-[80px] xsm:w-[80px] xsm:top-10 bg-[#FFFFFF] md:w-[120px] md:h-[120px] md:top-24">
            {uploadLoader ? (
              <div className="grid items-center justify-center h-[100%] w-[100%]">
                <p>uploading... </p>{" "}
              </div>
            ) : (
              <img
                src={user.profile ? user.profile : ProfileIcon}
                className="w-full h-full rounded-full object-cover xsm:h-[80px] xsm:w-[80px]"
              />
            )}

            <div className="absolute w-[40px] h-[40px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-[65%] right-[0%] flex justify-center items-center cursor-pointer xsm:w-[20px] xsm:h-[20px]">
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

            <div
              className="absolute w-[40px] h-[40px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-[65%] left-[0%] flex justify-center items-center cursor-pointer xsm:w-[20px] xsm:h-[20px]"
              onClick={(e) => handleShowModal(e)}
            >
              <img
                src={Avtar}
                alt="Avatar"
                className="w-[30px] h-[30px] xsm:w-[15px] xsm:h-[15px] rounded-2xl"
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>

            {showModal && (
              <AvtarModal
                onClose={handleCloseModal}
                handleEditClick={handleEditClick}
                updateProfilePicture={(imageUrl) =>
                  setUser({ ...user, profile: imageUrl })
                }
              />
            )}

            {/* Tooltip  */}
            {showTooltip && (
              <div className="absolute bg-black text-white text-xs py-1 px-2 rounded-lg top-[70%] left-[40px]">
                Add Your Avatar
              </div>
            )}
          </div>
        </div>
        {completeProfile === "Profile" && (
          <div>
            <div className="flex justify-center mt-20 xsm:mt-6 md:mt-16">
              <div className="grid grid-cols-2 justify-between gap-x-40 gap-y-8 w-[80%] xsm:gap-x-8 xsm:gap-y-3 md:gap-x-28 md:gap-y-6">
                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    name="name"
                    placeholder="First Name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="email"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="number"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="Phone Number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    disabled
                  />
                </div>
                <div className=" relative -z-10 flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="University/College Name"
                    value={user.college}
                    name="college"
                    onChange={handleCollege}
                  />
                  <div className="absolute top-10 left-0 min-h-0 max-h-[200px] overflow-auto w-full bg-slate-100 px-2">
                    {showallcolleges.map((it) => {
                      return (
                        <>
                          <div
                            onClick={(e) => handleSelectedcollege(it.college)}
                            className="text-center text-[12px] border py-1 cursor-pointer"
                          >
                            {it.college}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="Degree"
                    value={user.degree}
                    name="degree"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="Stream"
                    name="stream"
                    value={user.stream}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder:text-[#c6c3c3]"
                    placeholder="Year Of Passing"
                    value={user?.yearofpass}
                    name="yearofpass"
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="flex flex-row justify-between bg-[#E2FFF1] shadow-lg  text-[#000000] text-[20px] font-nu px-6 h-[50px] xsm:text-[10px] xsm:h-[25px] xsm:px-2 md:text-[14px] md:h-[40px]">
                  <input
                    type="text"
                    className="outline-none w-full bg-transparent placeholder-[#555555]"
                    placeholder="Biography"
                    value={user?.bio}
                    name="bio"
                    onChange={handleChange}
                  />
                </div> */}
                <button
                  onClick={handleEditProfileClick}
                  className="text-[#FFFFFF] text-[18px] font-nu bg-[#1DBF73] rounded-full px-2 py-1 w-[100%] flex justify-center items-center text-center xsm:text-[10px] md:text-[16px]"
                >
                  <p>Complete Your Profile</p>
                </button>
              </div>
            </div>
            <div className="flex justify-center pt-10 xsm:pt-0 xsm:mt-2">
              <button
                className="text-[#FFFFFF] text-[22px] font-nu bg-[#1DBF73] rounded-full px-12 py-1 xsm:text-[10px] xsm:px-8 md:text-[16px]"
                onClick={handleSaveClick}
              >
                {btnLoader ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        )}
        {completeProfile === "completeprofile" && (
          <CYPMain
            setCompleteProfile={!setCompleteProfile}
            setUser={setUser}
            user={user}
          />
        )}
        {show ? (
          <div className="w-full h-screen fixed top-0 left-0 bg-[#b4cca1] opacity-80">
            <Spinner className="" />
          </div>
        ) : (
          ""
        )}
      </div>
      <Toaster
        toastOptions={{
          duration: 500,
        }}
        position="top-center"
      />
    </>
  );
};

export default ProfilEdit;
