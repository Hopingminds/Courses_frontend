import React, { useEffect, useState } from 'react';
import './companies.css';

const Companies = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]);
    const [alternateCount, setAlternateCount] = useState(0);

    const logos = [
        ['/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png'],
        ['/indmoney.png', '/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png'],
        ['/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png', '/google.png'],
        ['/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png', '/google.png', '/ajio.png'],
        ['/indmoney.png', '/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png'],
        ['/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png']
    ];

    const totalLogos = logos.map(row => row.length);

    useEffect(() => {
        const intervals = totalLogos.map((total, index) => {
            return setInterval(() => {
                setCurrentLogoIndexes(prevIndexes => {
                    const newIndexes = [...prevIndexes];
                    newIndexes[index] = (newIndexes[index] + 1) % total;
                    return newIndexes;
                });
            }, index % 2 === 0 ? 3000 : 5000);
        });
    
        return () => {
            intervals.forEach(clearInterval);
        };
    }, [totalLogos]);

    useEffect(() => {
        const intervals = totalLogos.map((total, index) => {
            return setInterval(() => {
                setCurrentLogoIndexes(prevIndexes => {
                    const newIndexes = [...prevIndexes];
                    newIndexes[index] = (newIndexes[index] + 1) % total;
                    return newIndexes;
                });
            }, index % 2 === 1 ? 3000 : 5000);
        });
    
        return () => {
            intervals.forEach(clearInterval);
        };
    }, [totalLogos]);
    

    useEffect(() => {
        if (alternateCount >= 2) return;

        const timer = setTimeout(() => {
            setAlternateCount(prevCount => prevCount + 1);
        }, 3000);

        return () => clearTimeout(timer);
    }, [alternateCount]);

    return (
        <div className="text-[#696984] flex justify-center mt-12 font-pop">
            <div className="w-[90%] space-y-8">
                <div className="text-center text-[24px]">Trusted by 5,000+ Companies Worldwide</div>
                <div className="flex justify-center">
                    {logos.map((row, rowIndex) => (
                        <div key={rowIndex} className="slider-container w-[20%]">
                            {row.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Company Logo ${index}`}
                                    className={index === currentLogoIndexes[rowIndex] ? 'logo active' : 'logo'}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Companies;