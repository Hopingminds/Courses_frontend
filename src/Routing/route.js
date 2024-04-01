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
import CartCheckout from '../Components/Checkout/Cart.jsx'
import ScrollToTop from '../Components/ScrollToTop.js'
import AssignmentMeet from '../Components/Meeting/AssignmentMeet.js'
import AssignmentStart from '../Components/Meeting/AssignmentStart.js'
import NavSubAdmin from '../Components/SubAdminDashboard/NavSubAdmin.js'
import DashboardSubAdmin from '../Components/SubAdminDashboard/DashboardSubAdmin.js'
import Success from '../Components/Success/success.js'
// import DashboardSubAdmin from '../Components/SubAdminDashboard/DashboardSubAdmin.js'
import SubAdmin from '../Components/SubAdminDashboard/index.js'


// subadmin
// import SubAdmin from '../Components/SubAdminDashboard/index.js'
import Pap from '../Components/PAP/Pap.js'
import Forgotpassword from '../Components/forgotPassword/forgotPassword.js'
import CareerServices from '../Components/CareerServices/CareerServices.js'
import AiMinds from '../Components/AiMinds/AiMinds.jsx'
import ReturnPolicy from '../Components/policies/ReturnPolicy.js'
import ShippingPolicy from '../Components/policies/ShippingPolicy.js'
import Test from '../Components/Test/Test.jsx'
import HireFromUs from '../Components/HireFromUs/hireFromUs.js'

const Router = () => {
    let pathname = window.location.pathname;
    console.log(pathname.includes('subadmin'));
    return (

        <BrowserRouter >
            <ScrollToTop />
            {/* <Navbar /> */}
            {pathname.includes('subadmin') ? <div>

                <NavSubAdmin />
            </div> : <div className='h-20 xsm:h-10'>

                <Navbar />
            </div>}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detailcourse/:slug' element={<DetailCourses />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/profile' element={<ProfilEdit />} />
                <Route path='/learning' element={<MyLearning />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<Forgotpassword />} />

                <Route path='/cart' element={< ShopingCart />} />
                <Route path='/course' element={<AllCourses />} />
                <Route path='/course/:slug' element={<CDDetails />} />
                <Route path='/checkout' element={<CartCheckout />} />
                <Route path='/AssignmentMeet' element={<AssignmentMeet />} />
                <Route path='/AssignmentStart' element={<AssignmentStart />} />

                <Route path='/subadmin-login' element={<SubAdmin />} />
                <Route path='/subadmin-dashboard' element={<DashboardSubAdmin />} />

                <Route path='/success' element={<Success />} />
                {/* <Route path='/subadmin-login' element={<SubAdmin />} /> */}
                {/* <Route path='/subadmin-dashboard' element={<DashboardSubAdmin />} /> */}
                <Route path='/pap' element={<Pap />} />
                <Route path='/career' element={<CareerServices />} />
                <Route path='/ai' element={<AiMinds />} />
                <Route path='/privacy' element={<ReturnPolicy />} />
                <Route path='/terms' element={<ShippingPolicy />} />
                <Route path='/test' element={<Test />} />
                <Route path='/hire-from-us' element={<HireFromUs />} />
            </Routes>
            {pathname.includes('subadmin') ? <></> : <Footer />}

        </BrowserRouter >


    )
}

export default Router