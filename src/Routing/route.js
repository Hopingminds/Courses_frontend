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
import CDHeader from '../Components/CDHeader/CDHeader'
import Archieved from '../Components/My_Learning/Archieved'
import ShopingCart from '../Components/ShopingCart/ShopingCart'
import WishlistContent from '../Components/My_Learning/wishlistContent'
import CDDetails from '../Components/CCDetails/CCDetails'
import Main from '../Components/Main/Main'
import Contact from '../Components/Contact'
import ChatBot from '../Components/chatbot/chatbot'
import Testimonials from '../Components/Testimonials'
import Comment from '../Components/Comment/Comment'
import Faqs from '../Components/Faqs/Faqs'
import Reviews from '../Components/Reviews/Reviews'
import Certificate from '../Components/Certificate/Certificate'
import Faq_single from '../Components/Faq_Single'
import Checkout from '../Components/checkout/checkout'
import Overview_content from '../Components/Overview_content'
import Notification from '../Components/Notification'
import ScrollToTop from '../Components/ScrollToTop'



const Router = () => {
    return (
<<<<<<< HEAD

        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route exact path={'/'} element={<Home />}></Route>
                <Route exact path={'/learning'} element={<My_learning />}></Route>
                <Route exact path={'/wishlist'} element={<Wishlist />}></Route>
                <Route exact path={'/login'} element={<Login />}></Route>
                <Route exact path={'/register'} element={<Registration />}></Route>
                <Route exact path={'/courses'} element={<CourseListing />}></Route>
                <Route exact path={'/singlecourse'} element={<CDHeader />}></Route>
                <Route exact path={'/cart'} element={<ShopingCart />}></Route>
                <Route exact path={'/learning/wishlist'} element={<WishlistContent />}></Route>
                <Route exact path={'/single'} element={<CDDetails />}></Route>
                <Route exact path={'/main'} element={<Main />}></Route>
                <Route exact path={'/contact'} element={<Contact />}></Route>
                <Route exact path={'/chat'} element={<ChatBot />}></Route>
                <Route exact path={'/test'} element={<Testimonials />}></Route>
                <Route exact path={'/com'} element={<Comment />}></Route>
                <Route exact path={'/faq'} element={<Faq_single />}></Route>
                <Route exact path={'/review'} element={<Reviews />}></Route>
                <Route exact path={'/c'} element={<Certificate />}></Route>
                <Route exact path={'/checkout'} element={<Checkout />}></Route>
                <Route exact path={'/over'} element={<Overview_content />}></Route>
                <Route exact path={'/notification'} element={<Notification />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter >

=======
     
            <BrowserRouter >
            <ScrollToTop/>
                <Navbar />
                <Routes>
                    <Route exact path={'/'} element={<Home />}></Route>
                    <Route exact path={'/learning'} element={<My_learning />}></Route>
                    <Route exact path={'/wishlist'} element={<Wishlist />}></Route>
                    <Route exact path={'/login'} element={<Login />}></Route>
                    <Route exact path={'/register'} element={<Registration/>}></Route>
                    <Route exact path={'/courses'} element={<CourseListing/>}></Route>
                    <Route exact path={'/singlecourse/:slug'} element={<CDHeader/>}></Route>
                    <Route exact path={'/cart'} element={<ShopingCart/>}></Route>
                    <Route exact path={'/learning/wishlist'} element={<WishlistContent/>}></Route>
                    <Route exact path={'/single'} element={<CDDetails/>}></Route>
                    <Route exact path={'/main'} element={<Main/>}></Route>
                    <Route exact path={'/contact'} element={<Contact/>}></Route>
                    <Route exact path={'/chat'} element={<ChatBot/>}></Route>
                    <Route exact path={'/test'} element={<Testimonials/>}></Route>
                    <Route exact path={'/com'} element={<Comment/>}></Route>
                    <Route exact path={'/faq'} element={<Faq_single/>}></Route>
                    <Route exact path={'/review'} element={<Reviews/>}></Route>
                    <Route exact path={'/c'} element={<Certificate/>}></Route>
                    <Route exact path={'/checkout'} element={<Checkout/>}></Route>
                    <Route exact path={'/over'} element={<Overview_content/>}></Route>
                    <Route exact path={'/notification'} element={<Notification/>}></Route>
                </Routes>
            <Footer/>
            </BrowserRouter >
      
>>>>>>> 9026ec3363a5e795d6ec25264fe019036d980af0
    )
}

export default Router