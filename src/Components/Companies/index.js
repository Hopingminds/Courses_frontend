import React, {  useState } from 'react';
import './companies.css';

const Companies = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]);

    const logosSets = [
        [
            { src: '/animationLogos/logo 1.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 2.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 3.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 4.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 5.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 6.jpg', height: '50px', width: 'auto' }
        ],
        [
            { src: '/animationLogos/logo 7.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 8.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 9.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 10.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 11.jpg', height: '50px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 13.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 14.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 15.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 16.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 17.jpg', height: '50px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 19.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 20.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 21.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 22.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 23.jpg', height: '50px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 25.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 26.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 27.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 28.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 29.jpg', height: '50px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 31.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 30.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 24.jpg', height: '50px', width: 'auto' },
            { src: '/animationLogos/logo 18.jpg', height: '35px', width: 'auto' },
            { src: '/animationLogos/logo 12.jpg', height: '50px', width: 'auto' }
           
        ]
    ];

   

    return (
        <div className="text-[#696984] flex justify-center font-pop md:mt-0 xsm:mt-0">
            <div className="w-[90%] space-y-8 xsm:space-y-4 md:space-y-6">
                <div className="text-center text-[30px] font-semibold text-[#000] xsm:text-[12px] sm:text-[18px] md:text-[20px]">
                    Trusted by <span className='text-[#1dbf73]'>200+</span> Companies Worldwide
                </div>
                <div className={` flex ${window.innerWidth >= 320 && window.innerWidth <= 480 ? 'justify-between' : 'justify-center'} `}>
                    {logosSets?.slice(0, (window.innerWidth >= 320 && window.innerWidth <= 480) ? 4 : logosSets.length)?.map((logos, setIndex) => {
                       console.log(logosSets);
                       return(<>
                        <div key={setIndex} className="slider-container w-[100%] xsm:w-[15%] md:w-[15%]">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={`Company Logo ${index}`}
                                    // style={{
                                    //     height: logo.height,
                                    //     width:logo.width
                                    // }}
                                    className={index === currentLogoIndexes[setIndex] ? 'logo active ' : 'logo'}
                                />
                            ))}
                        </div>
                        </>)
})}
                </div>
            </div>
        </div>
    );
};

export default Companies;
