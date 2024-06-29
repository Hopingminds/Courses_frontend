import React from 'react';
import Img4 from "../../Assests/Images/ourfeatures.png";
import Img5 from "../../Assests/Images/ourfeatures2.png";
import Img6 from "../../Assests/Images/ourfeatures3.png";

const Benefits = () => {
    return (
        <div className="bg-gray-900 text-white p-8">
                <h2 className="text-2xl font-bold mb-2 text-center">Our <span className="text-green-400">Features</span></h2>
                <p className="text-sm mb-4">This very extraordinary feature can make learning activities more efficient</p>
            <section className="mb-12">
                <div className="relative">
                    <img src={Img4} alt="Student" className="rounded-full w-full h-auto mx-auto" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {/* Add icons here */}
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2"><span style={{ color: "#33EFA0", fontWeight: "bold" }}>Industry Oriented </span>Curriculum</h2>
                <p className="text-sm mb-4">Experience hands-on learning with our industry-oriented curriculum designed to bridge the gap between academia and real-world applications..</p> <br />
                <p>Curriculum emphasizes industry-relevant skills, project-based learning and internships, allowing students to build a strong foundation for their future careers.</p>
               
            </section>

            <section className="mb-12">
                <div className="relative">
                    <img src={Img5} alt="Student" className="rounded-full w-full h-auto mx-auto" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {/* Add icons here */}
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">A <span className="text-green-400">user interface</span> designed for the classroom</h2>
                <ul className="list-none list-inside mb-4">
                    <li>Our partnerships with leading MNC's provide students with access to world-class training programs and resources.</li>
                    <li>Connect with industry leaders, gain insider insights, and stay ahead of the competition with our MNC-led upskilling initiatives.</li>
                    <li>Experience transformative learning designed to prepare you for success in today's competitive job market.</li>
                    <li> Unparalleled opportunities for upskilling with exclusive collaborations with top-tier MNC's</li>
                </ul>
              
            </section>

            <section className="mb-12">
                <div className="relative">
                    <img src={Img6} alt="Student" className="rounded-full w-full h-auto mx-auto" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {/* Add icons here */}
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">  <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
                    Placement
                </span>{" "}
                    Assistance</h2>
                <p className="text-sm mb-4">Personalized guidance and advice to students on career paths, job market trends, resume building, and interview preparation. Offering one-on-one sessions with career counsellors to address individual needs and aspirations.</p>

            </section>
            <section className="mb-12">
                <div className="relative">
                    <img src={Img4} alt="Student" className="rounded-full w-full h-auto mx-auto" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {/* Add icons here */}
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">  <span style={{ color: "#33EFA0", fontWeight: "bold" }}>
                    MOUs
                </span>{" "}
                    with renowned universities</h2>
                <p className="text-sm mb-4">Our MOUs with renowned universities offer students unparalleled opportunities for academic enrichment, skill development, and career advancement.</p>

            </section>
        </div>
    );
};

export default Benefits;