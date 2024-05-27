import './App.css';
import React, { useState, useEffect, createContext, useLayoutEffect } from 'react';
import Router from './Routing/route';
import { AUTH_BASE_URL, BASE_URL } from './Api/api';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import ChatBot from './Components/chatbot/chatbot';

export const Globalinfo = createContext()
function App() {

  const [cartData, setCartData] = useState([])
  const [wishListData, setWishListData] = useState([])
  const [userDetail, setUserDetail] = useState();
  const [checkoutData, setCheckoutData] = useState();
  const [adminlogin, setadminlogin] = useState()
  const [cartSize, setCartSize] = useState(0);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${AUTH_BASE_URL}/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      localStorage.setItem('COURSES_USER_TOKEN', data.user.token);
      getUserDetails();
      GetCart()
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    getUser();
  }, []);


  useEffect(() => {
    // console.log(cartData)
    getUserDetails();
    GetCart()
    // GetWishList()
  }, [localStorage.getItem('COURSES_USER_TOKEN'), userDetail?._id])


  async function GetCart() {
    if (userDetail?._id) {
      try {
        let token = jwtDecode(localStorage.getItem("COURSES_USER_TOKEN"));
        let url = BASE_URL + "/getcart?email=" + token.email;
        const data = await fetch(url);
        const response = await data.json();
        setCartSize(response?.cart?.length);
        console.log(response?.cart?.length);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      let temp = localStorage.getItem('COURSES_LOCAL_CART');
      // console.log(temp);
      let temp2 = JSON.parse(temp)
      console.log(temp2);
    }
  }

  function Getadmindetails() {
    let token = localStorage.getItem('token')
    if (token) {
      setadminlogin(true)
    }
    else {
      setadminlogin(false)
    }
  }
  const getUserDetails = async () => {
    // console.log(localStorage.getItem('GROC_USER_TOKEN'))
    const token = localStorage.getItem('COURSES_USER_TOKEN')
    // console.log(token)
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded)
      try {
        const res = await axios.get(`${BASE_URL}/user/${decoded.email}`)
        console.log(res.data.userDetails)
        setUserDetail(res.data.userDetails)

      } catch (error) {
        console.log(error)
      }

    }
    else {
      setUserDetail({})
    }


  }

  const clearCart = () => {
    setCartData([])
  }
  const clearWishList = () => {
    setWishListData([]);
  }

  return (
    <Globalinfo.Provider value={{cartSize,setCartSize, cartData, Getadmindetails, adminlogin, GetCart, wishListData, userDetail, getUserDetails, clearCart, clearWishList, checkoutData, setCheckoutData }}>
      <div className='2xl:px-[17%]'>
      {/* <div className="fixed right-0 bottom-4 z-[987656789]">
           <ChatBot className="w-fit" />
      </div> */}
      <Router />

      </div>
    </Globalinfo.Provider>
  );
}

export default App;