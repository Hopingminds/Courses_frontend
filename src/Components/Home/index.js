import Certificate from "../Certificate/Certificate";
import Companies from "../Companies";
import Courses_Home from "../Courses_Home";
import Footer from "../Footer/Footer";
import Navbar from "../Header";
import Herosection from "../Herosection";
import OurFeatures from "../OurFeatures/OurFeatures";
import Testimonial from "../Testimonial/Testimonial";
import WhatHM from "../WhatHM/WhatHM";
import logo from '../../Assests/Images/hmlogo.png'

export default function Home() {
    return (<>
        <head>
            <title>Hoping Minds</title>
            <meta charset="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="HopingMinds" />
            <meta property="og:image" content="/src/Assests/Images/hmlogo.png" />
            <meta name="twitter:card" content="/src/Assests/Images/hmlogo.png" />
            <meta name="description" content="Holistic development programs that place students in specific high growth roles across 150+ Corporate Partners." />

        </head>
        <div className="space-y-24">
            <Herosection />
            <Companies />
            <Courses_Home />
            <WhatHM />
            <OurFeatures />
            <Certificate />
            <Testimonial />
        </div>
    </>)
}