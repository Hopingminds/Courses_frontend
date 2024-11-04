import { useContext, useState } from "react";
import { ReactComponent as Fb } from "../../Assets/Icons/details_fb.svg";
import { ReactComponent as Whatsapp } from "../../Assets/Icons/details_whatsapp.svg";
import { ReactComponent as Insta } from "../../Assets/Icons/details_insta.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globalinfo } from "../../App";
import { BASE_URL } from "../../Api/api";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { RWebShare } from "react-web-share";
import ReactPlayer from "react-player";
import { IoVolumeMediumOutline, IoVolumeMuteOutline } from "react-icons/io5";
import BatchModal from "../MyLearning/Batchmodal";

export default function Commoncardinternship(props) {
  let { Data, batchids } = props;
  let { alreadyInCart } = props;
  // let { CheckCourseInCart } = props;
  const [data, setdata] = useState([]);
  // console.log(Data);
  const [IsMuted, setIsMuted] = useState(true);

  const { pathname } = useLocation();
  let login = localStorage.getItem("COURSES_USER_TOKEN");
  let navigate = useNavigate();
  const [Show, setshow] = useState(false);

  const { setCartSize, cartSize, GetCart } = useContext(Globalinfo);
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  async function openModal(id) {
    setIsModalOpen(true);
    try {
      const data = await fetch(BASE_URL + "/getUpcomingBatchesForCourse/" + id);
      const response = await data.json();
      if (response.success) {
        setdata(response?.batches);
      }
    } catch (error) {}
  }

  function handleNavigation(val) {
    if (!val?.BatchId) {
      openModal(val);
    } else {
      navigate(`/internshipdetails/${val?.course?.slug}`);
    }
  }

  async function Addtocart(courseid) {
    try {
      // Check if user is logged in by retrieving the token from localStorage
      let login = localStorage.getItem("COURSES_USER_TOKEN");

      if (login) {
        // Decode token to retrieve the user's email
        let token = jwtDecode(login);
        let email = token.email;
        let url = `${BASE_URL}/addtocart`;
        setshow(true); // Show loader

        // Send POST request to add item to cart
        let data = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, internshipid: courseid }),
        });

        let response = await data.json();

        if (response.success) {
          // Show success message and refresh cart
          toast.success(response.msg);
          setshow(false); // Hide loader
          GetCart(); // Refresh cart items
        } else {
          // Display error message if unsuccessful
          toast.error(response.msg || "Failed to add item to cart");
          setshow(false);
        }
      } else {
        // Save the current path and navigate to login if not authenticated
        localStorage.setItem("ADD_TO_CART_HISTORY", window.location.pathname);
        navigate("/login-2");
      }
    } catch (error) {
      // Log and notify user of any errors during the fetch operation
      console.error("Error adding to cart:", error);
      toast.error("An error occurred while adding to cart.");
      setshow(false);
    }
  }


 async function Addtowishlist(internshipid) {
  try {
    // Check if user is logged in by retrieving the token from localStorage
    let login = localStorage.getItem("COURSES_USER_TOKEN");

    if (login) {
      // Decode token to retrieve the user's email
      let token = jwtDecode(login);
      let email = token.email;
      let url = `${BASE_URL}/addtowishlist`;
      setshow(true); // Show loader

      // Send POST request to add item to wishlist
      let data = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, internshipid }),
      });

      let response = await data.json();

      if (response.success) {
        // Show success message and refresh wishlist
        toast.success(response.msg);
        // CheckCourseInWishlist(internshipid);
        setshow(false); // Hide loader
      } else {
        // Display error message if unsuccessful
        toast.error(response.msg || "Failed to add item to wishlist");
        setshow(false);
      }
    } else {
      // Save the current path and navigate to login if not authenticated
      localStorage.setItem("ADD_TO_WISHLIST_HISTORY", window.location.pathname);
      navigate("/login-2");
    }
  } catch (error) {
    // Log and notify user of any errors during the fetch operation
    console.error("Error adding to wishlist:", error);
    toast.error("An error occurred while adding to wishlist.");
    setshow(false);
  }
}


  const { userDetail, getUserDetails } = useContext(Globalinfo);

  let purchasedCourses = [];
  if (Data) {
    userDetail?.purchased_courses?.forEach((val) => {
      purchasedCourses.push(val?.course?._id);
    });
  }

  const handleMute = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMuted((prev) => !prev);
  };
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent default context menu behavior
  };
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[dateObj.getMonth()];

    let hours = dateObj.getHours();
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const time = `${hours}.${minutes}${ampm}`;

    return `${day} ${month} ${year} ${time}`;
  }

  // console.log(Data);
  return (
    <>
      <BatchModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        openModal={openModal}
        Data={data}
        fetchUserData={getUserDetails}
      />
      <div className="bg-[#E2FFF1] w-[full] h-max my-14 p-6 rounded-t-lg flex flex-col  xsm:mt-4 xsm:p-1 xsm:rounded-lg md:p-3 xsm:mb-8">
        <div className="max-h-[14rem] h-fit rounded-t-xl overflow-hidden bg-white md:h-[35%] relative xsm:h-fit xsm:max-h-[12rem]">
          {
            <span className="bg-transparent p-4 absolute top-0 left-0 z-[99]">
              {IsMuted ? (
                <IoVolumeMuteOutline
                  size={"20"}
                  style={{
                    cursor: "pointer",
                    color: "black",

                    zIndex: "999999",
                  }}
                  onClick={handleMute}
                />
              ) : (
                <IoVolumeMediumOutline
                  size={"20"}
                  style={{
                    cursor: "pointer",
                    color: "black",

                    zIndex: "999999",
                  }}
                  onClick={handleMute}
                />
              )}
            </span>
          }
          <ReactPlayer
            onContextMenu={handleContextMenu}
            height="100%"
            width="100%"
            url={Data?.featured_video}
            playing={true}
            loop={true}
            muted={IsMuted}
            controls={false}
            className="mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col gap-4 mt-6 xsm:mt-2 xsm:gap-1 md:gap-3 md:mt-4 xsm:px-[1rem]">
          <div className="flex flex-col justify-between items-center xsm:pb-1 ">
            <h2 className="flex-col font-nu text-[30px] font-bold xsm:text-[32px] md:text-[12px] flex items-center">
              {Data?.featured_image && (
                <img
                  src={Data?.featured_image}
                  alt="Featured"
                  className="w-full h-full" 
                />
              )}
              {Data?.base_price === 0
                ? "Free"
                : "₹" +
                  parseFloat(
                    Data?.base_price -
                      Data?.base_price * (Data?.discount_percentage / 100)
                  ).toFixed(2)}
            </h2>

            <div className="gap-y-4 flex w-full px-5 flex-col items-center xsm:gap-x-2 md:gap-x-2">
              {new Date(Data?.courseStartDate) > new Date() ? (
                <p className="text-sm text-gray-400">
                  Upcoming Batch {formatDate(Data?.courseStartDate)}
                </p>
              ) : (
                ""
              )}
              {/* <p>Your batch will be start on {Data?.courseStartDate > new Date()}</p> */}
              {purchasedCourses.includes(Data?._id) ? (
                !batchids ? (
                  <button
                    className="bg-[#1DBF73] py-2 px-7 flex justify-center rounded-full text-white font-nu font-bold xsm:px-1 xsm:py-1 xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1"
                    onClick={() => openModal(Data?._id)}
                  >
                    Choose batch
                  </button>
                ) : (
                  <Link
                    to={"/course/" + Data?.slug}
                    className={`${
                      new Date(Data?.courseStartDate) > new Date()
                        ? "pointer-events-none opacity-50 cursor-not-allowed"
                        : ""
                    } bg-[#1DBF73] py-2 px-7 flex justify-center rounded-full text-white font-nu font-bold xsm:px-1 xsm:py-1 xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1`}
                  >
                    View Course
                  </Link>
                )
              ) : (
                <div className="space-x-4 w-full flex xsm:flex-col xsm:gap-[10px] items-center md:space-x-2  xsm:mr-1">
                  {!purchasedCourses.includes(Data?._id) ? (
                    alreadyInCart ? (
                      <div
                        onClick={() => navigate("/cart")}
                        className="border cursor-pointer flex justify-center w-full py-2 px-10 rounded-full bg-[#1DBF73] text-white font-nu font-bold xsm:px-[5px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                      >
                        Go to Cart
                      </div>
                    ) : (
                      <div
                        onClick={() => Addtocart(Data?._id)}
                        className="border cursor-pointer flex justify-center w-full py-2 px-10 rounded-full bg-[#1DBF73] text-white font-nu font-bold xsm:px-[5px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                      >
                        Add to cart
                      </div>
                    )
                  ) : (
                    ""
                  )}
                  <div
                    onClick={() => Addtowishlist(Data?._id)}
                    className=" hidden xsm:flex cursor-pointer justify-center w-full py-2 px-10 rounded-full border border-[#1DBF73] text-[#1DBF73] font-nu font-bold xsm:px-[5px] xsm:py-[6px] xsm:text-[12px] md:text-[14px] md:px-[8px] md:py-1 "
                  >
                    Add to Wishlist
                  </div>
                </div>
              )}
            </div>
          </div>
          <h3 className="font-pop text-[1.35rem] capitalize font-semibold xsm:text-[17px] md:text-[14px]">
            {Data?.title}
          </h3>

          {Data?.courseCategory === "liveCourse" && (
            <>
              <p className="xsm:text-[8px]">
                {"Starting On -" + formatDate(Data?.liveClasses[0]?.date)} at{" "}
                {Data.liveClasses[0]?.time}
              </p>
            </>
          )}

          <div className="flex flex-col gap-6 my-2 md:gap-4 md:my-4">
            <div className="space-y-4 md:space-y-2">
              <p className="font-pop font-semibold md:text-[14px]">
                This Course Includes
              </p>
              <div className="flex items-center space-x-4 md:space-x-2">
                <img className="w-[16px]" src="../Icons/certificate.svg" />
                <p className="font-nu text-[#555555] text-[12px] md:text-[10px]">
                  Certifications Of completion
                </p>
              </div>
              <div className="flex items-center space-x-4 md:space-x-2">
                <img className="w-[16px]" src="../Icons/graph.svg" />
                <p className="font-nu text-[#555555] text-[12px] md:text-[10px]">
                  {Data?.curriculum?.length} modules
                </p>
              </div>
              <div className="flex items-center space-x-4 md:space-x-2">
                <img className="w-[16px]" src="../Icons/camera.svg" />
                <p className="font-nu text-[#555555] text-[12px] md:text-[10px]">
                  Access on all device
                </p>
              </div>
              <hr />
            </div>

            {/* <div className="space-y-4 md:space-y-2">
            <p className="font-pop font-semibold md:text-[14px]">
              Training 5 Or More People
            </p>
            <p className="font-pop text-[#555555] text-[12px] md:text-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <hr />
          </div> */}
            <div className="space-y-4 md:space-y-2">
              <p className="font-pop font-semibold md:text-[14px]">
                Share this course
              </p>
              <div className="flex space-x-4 h-max w-full xsm:gap-4">
                <RWebShare
                  data={{
                    text: "Hoping Minds",
                    url: "https://hopingminds.com" + pathname,
                    title: "Hoping Minds",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <Fb className="h-6 w-6 cursor-pointer md:h-4 " />
                  {/* <Insta className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                  {/* <Whatsapp className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                </RWebShare>
                <RWebShare
                  data={{
                    text: "Hoping Minds",
                    url: "https://hopingminds.com" + pathname,
                    title: "Hoping Minds",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  {/* <Fb className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                  <Insta className="h-6 w-6 cursor-pointer md:h-4 " />
                  {/* <Whatsapp className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                </RWebShare>
                <RWebShare
                  data={{
                    text: "Hoping Minds",
                    url: "https://hopingminds.com" + pathname,
                    title: "Hoping Minds",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  {/* <Fb className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                  {/* <Insta className="h-6 w-6 cursor-pointer md:h-4 " /> */}
                  <Whatsapp className="h-6 w-fit cursor-pointer md:h-4 " />
                </RWebShare>
                {/* <Link to={'https://www.facebook.com/share/Z3c1iwpnxsDk3YJH/?mibextid=qi2Omg'}><img className="w-[12px]" src="../Icons/facebook.svg" /></Link> */}
                {/* <Link to={'https://www.instagram.com/hopingminds_?igsh=MWxvN2F5YmM0aW1lYQ=='}><img className="w-[20px]" src="../Icons/instagram.svg" /></Link> */}
                {/* <Link to={'https://youtube.com/@HopingMinds?si=t7nBGjhMukWF6aN9'}><img className="w-[24px]" src="../Icons/youtube12.svg" /></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
