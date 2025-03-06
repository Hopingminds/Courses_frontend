import './App.css';
import React, { useState, useEffect, createContext, useLayoutEffect } from 'react';
import Router from './Routing/route';
import { AUTH_BASE_URL, BASE_URL } from './Api/api';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import ChatBot from './Components/chatbot/chatbot'
// import io from 'socket.io-client';

export const Globalinfo = createContext()
function App() {
 
  
  const [cartData, setCartData] = useState([])
  const [wishListData, setWishListData] = useState([])
  const [userDetail, setUserDetail] = useState();
  const [checkoutData, setCheckoutData] = useState();
  const [adminlogin, setadminlogin] = useState()
  const [cartSize, setCartSize] = useState(0);
  const [liveClassKey, setLiveClassKey] = useState("test");

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
    getUserDetails();
    GetCart()
   
  }, [localStorage.getItem('COURSES_USER_TOKEN'), userDetail?._id])


  async function GetCart() {
    if (userDetail?._id) {
      try {
        let token = jwtDecode(localStorage.getItem("COURSES_USER_TOKEN"));
        let url = BASE_URL + "/getcart?email=" + token.email;
        const data = await fetch(url);
        const response = await data.json();
        setCartSize(response?.cart?.courses?.length+response?.cart?.internships?.length || 0);
        
      } catch (error) {
        console.error(error);
      }
    }
    else {
      let temp = localStorage.getItem('COURSES_LOCAL_CART');
     
      let temp2 = JSON.parse(temp)
      // console.log(temp2);
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
    
    const token = localStorage.getItem('COURSES_USER_TOKEN')
    
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
    <>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#fff" />
      </head>
    <Globalinfo.Provider value={{ cartSize, setCartSize, setLiveClassKey, liveClassKey, cartData, Getadmindetails, adminlogin, GetCart, wishListData, userDetail, getUserDetails, clearCart, clearWishList, checkoutData, setCheckoutData }}>
      <div className='2xl:px-[17%]'>
       
        <Router />
        <div className="fixed right-0 bottom-0 z-[999999999999999]">
          <ChatBot className="w-fit" />
        </div>  
      </div>
      </Globalinfo.Provider>
    </>
  );
}

export default App;