import React, { useEffect, useState } from 'react';
import './companies.css';

const Companies2 = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]); 

    const logosSets = [
        [
            { src: '/animationLogos/logo 1.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 2.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 3.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 4.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 5.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 6.jpg', height: '70px', width: 'auto' }
        ],
        [
            { src: '/animationLogos/logo 7.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 8.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 9.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 10.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 11.jpg', height: '70px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 13.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 14.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 15.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 16.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 17.jpg', height: '70px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 19.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 20.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 21.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 22.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 23.jpg', height: '70px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 25.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 26.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 27.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 28.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 29.jpg', height: '70px', width: 'auto' },
            
        ],
        [
            { src: '/animationLogos/logo 31.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 30.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 24.jpg', height: '70px', width: 'auto' },
            { src: '/animationLogos/logo 18.jpg', height: '35px', width: 'auto' },
            { src: '/animationLogos/logo 12.jpg', height: '70px', width: 'auto' }
           
        ]
    ];

    const totalLogosSets = logosSets.length;

    useEffect(() => {
        const intervals = logosSets.map((logos, setIndex) => {
            const totalLogos = logos.length;
            const intervalDuration = (setIndex % 2 === 0) ? 3000 : 4000;  
            return setInterval(() => {
                setCurrentLogoIndexes(prevIndexes => {
                    const updatedIndexes = [...prevIndexes];
                    updatedIndexes[setIndex] = (updatedIndexes[setIndex] + 1) % totalLogos;
                    return updatedIndexes;
                });
            }, intervalDuration);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <div className="text-[#696984] flex justify-center font-pop pb-10 sm:py-10 xsm:py-5 md:mt-0 xsm:mt-0 sm:mt-0">
            <div className="w-[90%] space-y-8 xsm:space-y-4 sm:space-y-4 md:space-y-6">
                <div className="text-center text-[40px] font-semibold text-[#000] xsm:text-[12px] sm:text-[18px] md:text-[20px]">Trusted by <span className='text-[#1dbf73]'>200+</span> Companies Worldwide</div>
                <div className="flex justify-center xsm:gap-3 xsm:justify-around ">
                    {logosSets.slice(0,window.innerWidth<=480 ? 4 : 6 ).map((logos, setIndex) => (
                        <div key={setIndex} className="slider-container w-[100%] xsm:w-[15%] md:w-[15%]">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={`Company Logo ${index}`}
                                    style={{
                                        height: window.innerWidth<=480 ? '28px' : window.innerWidth>480 && window.innerWidth<720 ? '28px'  : logo.height,
                                        width: "auto"
                                    }}
                                    className={index === currentLogoIndexes[setIndex] ? 'logo active' : 'logo'}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Companies2;
