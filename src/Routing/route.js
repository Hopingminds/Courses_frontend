import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Header'

import DetailCourses from '../Components/DetailCourses'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import Footer from '../Components/Footer/Footer'
import ProfilEdit from '../Components/ProfileEdit/ProfilEdit'
import MyLearning from '../Components/MyLearning/MyLearning'
import Login from '../Components/Login/login'
import Register from '../Components/Register/register'
import CDDetails from '../Components/courseDetails/courseDetails.js'
import AllCourses from '../Components/AllCourses/AllCourses.js'
import ShopingCart from '../Components/Cart/ShopingCart.js'



const Router = () => {
    return (

        <BrowserRouter >
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detailcourse/:slug' element={<DetailCourses />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/profile' element={<ProfilEdit />} />
                <Route path='/learning' element={<MyLearning />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={< ShopingCart/>} />
                <Route path='/course' element={<AllCourses />} />
                <Route path='/course/:slug' element={<CDDetails />} />
            </Routes>
            <Footer />

        </BrowserRouter >

    )
}

export default Router