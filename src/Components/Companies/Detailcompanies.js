import React, { useEffect, useState } from 'react';
import './companies.css';

const DetailCompany = () => {
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
                <div className="flex justify-center xsm:gap-3 w-full">
                    {logosSets.slice(0,4).map((logos, setIndex) => (
                        <div key={setIndex} className="slider-container w-[100%] xsm:w-[15%] md:w-[15%]">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={`Company Logo ${index}`}
                                    style={{
                                        height: window.innerWidth<=480 ? '21px' : logo.height,
                                        width: logo.width
                                    }}
                                    className={index === currentLogoIndexes[setIndex] ? 'logo active' : 'logo'}
                                />
                            ))}
                        </div>
                    ))}
                </div>
    );
}

export default DetailCompany;
