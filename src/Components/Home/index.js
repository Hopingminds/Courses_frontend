import Certificate from "../Certificate/Certificate";
import Companies from "../Companies";
import Courses_Home from "../Courses_Home";
import Footer from "../Footer/Footer";
import Navbar from "../Header";
import Herosection from "../Herosection";
import OurFeatures from "../OurFeatures/OurFeatures";
import Testimonial from "../Testimonial/Testimonial";
import WhatHM from "../WhatHM/WhatHM";

export default function Home(){
    return(<>
    <Herosection/>
    <Companies/>
    <Courses_Home/>
    <WhatHM/>
    <OurFeatures/>
    <Certificate/>
    <Testimonial/>
    </>)
}