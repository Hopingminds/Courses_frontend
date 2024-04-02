import React, { useEffect, useState } from 'react';
import './companies.css';

const Companies = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]);
    const [alternateCount, setAlternateCount] = useState(0);

    const logos = [
        ['/abbott.png', '/accentire.png', '/adept.png', '/adobe.png', '/ajio.png', '/alexa.png'],
        ['/bosch.png', '/byjus.png', '/capgemini.png', '/cleartax.png', '/cognizant.png', '/dream11.png'],
        ['/dxc.png', '/ebay.png', '/google.png', '/grammarly.png', '/hcl.png', '/ibm.png'],
        ['/indmoney.png', '/infosys.png', '/instamojo.png', '/mahindra.png', '/ola.png', '/paytm.png'],
        ['/revv.png', '/salesforce.png', '/sharechat.png', '/swiggy.png', '/tcs.png', '/techginia.png'],
        ['/techmatrix.png', '/unity.png', '/uolo.png', '/whatfix.png', '/whitehat.png', '/wipro.png']
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
        <div className="text-[#696984] flex justify-center mt-12 font-pop xsm:mt-0 md:mt-4">
            <div className="w-[90%] space-y-8 xsm:space-y-4 md:space-y-6">
                <div className="text-center text-[24px] text-[#696984] xsm:text-[14px] md:text-[16px]">Trusted by 5,000+ Companies Worldwide</div>
                <div className="flex justify-center ">
                    {logos.map((row, rowIndex) => (
                        <div key={rowIndex} className="slider-container w-[20%] md:w-[12%]">
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