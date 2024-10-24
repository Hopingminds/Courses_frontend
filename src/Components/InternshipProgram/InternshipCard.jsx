import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globalinfo } from '../../App';
import { jwtDecode } from 'jwt-decode';
import { BASE_URL } from '../../Api/api';
import toast, { Toaster } from 'react-hot-toast';

const Internshipcard = ({course}) => {
  const navigate = useNavigate();
  const [Data, setData] = useState();
 
  const [show, setshow] = useState(false);
  const { setCartSize, cartSize, GetCart } = useContext(Globalinfo);

  async function Addtocart(courseid) {
    try {
      let login=localStorage.getItem('COURSES_USER_TOKEN')
      if (login) {
        let token = jwtDecode(login);
        let email = token.email;
        let quantity = 1;
        setshow(true)
        let url = BASE_URL + "/addtocart";
        let data = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, internshipid:courseid }),
        });
        let response = await data.json();
        // console.log(response);
        if (response.success) {
          toast.success(response.msg);
          // setCartSize(cartSize + 1);
          setshow(false)
          GetCart();
          // CheckCourseInCart(courseid)
        } else {
          // toast.error(response.msg);getcart?email
        }
      } else {
        localStorage.setItem("ADD_TO_CART_HISTORY", window.location.pathname);
        // console.log("add to cart withour log")
        navigate("/login-2");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full overflow-hidden shadow-lg bg-white rounded-[30px]">
      <Toaster/>
      {/* Image Container with Hover Effect */}
      <div className="relative group hover:cursor-pointer">
        <img
          src={course?.featured_image} // Replace with your image URL
          alt="Digital Marketing"
          className="w-full h-full object-cover"
        />

        {/* Cart Icon - Always Visible */}
        <div className="absolute top-4 right-4 hover:cursor-pointer">
         <button >
            <img src="cart.png" alt="Cart Icon" className="w-8 h-8" />
          </button>
        </div>

        {/* Price Overlay - Hidden by Default, Show on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold">{course?.base_price}</h2>
            <button onClick={()=>Addtocart(course?._id)}>
            <img src="cart.png" alt="Cart Icon" className="w-8 h-8" />
          </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 h-20 ">{course?.title}</h2>
        <p className='h-24'> {course?.overview?.length > 120 
    ? `${course.overview.slice(0, 120)}...` 
    : course?.overview}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 ">
        {/* <div className="flex items-center space-x-2 flex-col">
          <img src="advance.png" alt="Advance Icon" className="w-7" />
          <span className="text-gray-800">{course?.category}</span>
        </div> */}

        <div className="flex items-center flex-col">
          <img src="hybrid.png" alt="Hybrid Icon" className="w-9" />
          <span className="text-gray-800">{course?.level}</span>
        </div>

        <div className="flex items-center space-x-2 flex-col">
          <img src="240.png" alt="Clock Icon" className="w-7" />
          <span className="text-gray-800">{course?.duration/60} hours</span>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="p-4">
        <button className="px-10 py-4 bg-green-500 w-full rounded-xl hover:bg-green-600 transition-all duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Internshipcard;
