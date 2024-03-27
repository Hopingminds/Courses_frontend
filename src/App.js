import './App.css';
import React, { useState, useEffect, createContext } from 'react';
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


  useEffect(() => {
    // console.log(cartData)
    getUserDetails();
    GetCart()
    // GetWishList()
  }, [localStorage.getItem('COURSES_USER_TOKEN'), userDetail?._id])


  async function GetCart() {

    if (userDetail?._id) {
      try {
        // let url = BASE_URL + `api/getcart?mobile=${userDetail?.mobile}`
        // const data = await fetch(url)
        // const response = await data.json()
        // console.log(response.cart[0])
        // setCartData(response?.cart || [])
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
  // async function GetWishList() {
  //   try {
  //     let url = BASE_URL + `api/getwishlist?mobile=${userDetail?.mobile}`
  //     const data = await fetch(url)
  //     const response = await data.json()
  //     // console.log(response)
  //     setWishListData(response?.wishlist || [])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
    <Globalinfo.Provider value={{ cartData, GetCart, wishListData, userDetail, getUserDetails, clearCart, clearWishList, checkoutData, setCheckoutData }}>
      <div className='2xl:px-[17%] overflow-x-hidden'>
        <Router />
      </div>
    </Globalinfo.Provider>
  );
}

export default App;