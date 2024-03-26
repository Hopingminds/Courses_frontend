import React, { useState } from 'react';
import './AiMinds.css';

export default function AiJourney() {
    const [activeOne, setActiveOne] = useState('Foundation Mathematics');

    const components = {
        'Foundation Mathematics': {
            text: 'Begin by understanding Mathematical concepts demanded by the industry.',
            images:['../img/dream11.png','../img/epsilon.png'],
        },
        'Excel': {
            text: 'Learn and master one of the most commonly used tools for Data Analysis in the World.',
            images:['../img/deloitte.png','../img/aiinfosys.png','../img/aiaccenture.png'],
        },
        'Python Libraries': {
            text: 'Make sense of large amounts of data and find patterns like no other language.',
            images:['../img/hike.png','../img/kpmg.png','../img/techMahindra.png'],
        },
        'SQL': {
            text: 'This tool is considered one of the essential skills for all Business Analysts in India.',
            images:['../img/ibm.png','../img/fractal.png','../img/microsoft.png'],
        },
        'Power BI': {
            text: 'This tool is where the majority of companies rely upon visualizing all their data.',
            images:['../img/jio.png','../img/paytm.png','../img/swiggy.png','../img/american_express.png'],
        },
        'ML Algorithms': {
            text: 'It’s time you start training your computer and learn your first Machine Learning tool.',
            images:['../img/ola.png','../img/amazon.png','../img/cisco.png'],
        },
        'DL Algorithms': {
            text: 'Learn to solve complex problems like Weather Prediction with Tensorflow.',
            images:['../img/intel.png','../img/google.png','../img/nvidia.png'],
        },
        'Placements': {
            text: 'It’s time you start training your computer and learn your first Machine Learning Tool.',
            images:['../img/google.png','../img/ola.png','../img/nvidia.png','../img/amazon.png','../img/cisco.png','../img/american_express.png','../img/microsoft.png'],
        },
    };

    return (
        <div id="journey" className="px-[5%] py-[4%] pl-[24%] bg-[#EBEBEB] flex flex-col gap-2">
            <div className="bg-[#F2F2F2] w-[97%] shadow-xl">
                <p className="font-mons font-extrabold text-[30px] text-[#169f63]  px-8 pt-12">How Your Journey Will Look Like</p>
                <p className="font-mons font-medium text-[17px] text-[#100101]  px-8 pt-4">We Have Designed A Unique Program Where You Can Learn Data Science & Experience Being A Data Engineer Or Software Developer</p>
                <div className="grid grid-cols-8 text-left mt-10 ainavbtn">
                    {Object.keys(components).map(component => (
                        <button
                            key={component}
                            className={`text-center text-[12px] font-mons font-semibold px-[25px] py-[20px] ${activeOne === component ? 'active' : '' }`}
                            onClick={() => setActiveOne(component)}>
                            {component}
                        </button>
                    ))}
                </div>
                {activeOne && (
                    <div className="bg-[#169F63] flex flex-col p-[20px] items-center">
                        <p className="font-mons text-white text-[14px]">{components[activeOne].text}</p>
                        <div className="bg-white w-full flex flex-col items-center mt-4">
                            <p className="text-[18px] text-[#777d78] font-mons font-bold">Opportunities it opens</p>
                            <div className='flex items-center justify-center flex-wrap px-32'>
                                {components[activeOne].images.map((image, index) => (
                                    <div key={index} className='px-2 py-2 '>
                                        <img className='h-full' src={image} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
