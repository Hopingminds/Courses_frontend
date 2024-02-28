import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import My_learning from '../Components/My_Learning'
import Footer from '../Components/Footer'
import Wishlist from '../Components/My_Learning/wishlistContent'
import Login from '../Components/Credentials/Login'
import Registration from '../Components/Credentials/Registration'
import CourseListing from '../Components/CourseList/CourseListing'



const Router = () => {
    return (
     
            <BrowserRouter >
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<Home />}></Route>
                    <Route exact path={'/learning'} element={<My_learning />}></Route>
                    <Route exact path={'/wishlist'} element={<Wishlist />}></Route>
                    <Route exact path={'/login'} element={<Login />}></Route>
                    <Route exact path={'/register'} element={<Registration/>}></Route>
                    <Route exact path={'/courses'} element={<CourseListing/>}></Route>
                   

                </Routes>
        <Footer/>
            </BrowserRouter >
      
    )
}

export default Router