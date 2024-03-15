import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Header'

import DetailCourses from '../Components/DetailCourses'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import Footer from '../Components/Footer/Footer'
import ProfilEdit from '../Components/ProfileEdit/ProfilEdit'
import MyLearning from '../Components/MyLearning/MyLearning'



const Router = () => {
    return (
     
            <BrowserRouter >
                <Navbar/>

                <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/detailcourse' element={<DetailCourses/>}/>
                   <Route path='/about' element={<AboutUs/>}/>
                   <Route path='/profile' element={<ProfilEdit/>}/>
                   <Route path='/learning' element={<MyLearning/>}/>
                </Routes>
                <Footer/>

            </BrowserRouter >
      
    )
}

export default Router