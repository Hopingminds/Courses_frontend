import './App.css';
import React, { useState, useEffect, createContext, useLayoutEffect } from 'react';
import Router from './Routing/route';
import { BASE_URL } from './Api/api';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const Globalinfo = createContext()
function App() {

  const [cartData, setCartData] = useState([])
  const [wishListData, setWishListData] = useState([])
  const [userDetail, setUserDetail] = useState();
  const [checkoutData, setCheckoutData] = useState();
  const [adminlogin, setadminlogin] = useState()

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `https://courses-api.up.railway.app/auth/login/success`;
      const res = await axios.get(url, { withCredentials: true });

      console.log(res)
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

      } catch (error) {
        console.log(error)
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
    <Globalinfo.Provider value={{ cartData, Getadmindetails, adminlogin, GetCart, wishListData, userDetail, getUserDetails, clearCart, clearWishList, checkoutData, setCheckoutData }}>
      <div className='2xl:px-[17%] overflow-x-hidden'>
        <Router />
      </div>
    </Globalinfo.Provider>
  );
}

export default App;